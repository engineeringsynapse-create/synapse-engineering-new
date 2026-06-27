import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, image } = await request.json();
    const apiKey = import.meta.env.MISTRAL_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ response: "Error de configuración interna." }), { status: 500 });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    // Detección exacta y sin fallos del Frontend
    let isFirstMessage = message.includes('[PRIMER MENSAJE]:');
    let finalMessage = message.replace(/\[PRIMER MENSAJE\]:/g, '').trim();
    
    let audioIninteligible = false;
    if (finalMessage.includes('[Audio ininteligible]')) {
        audioIninteligible = true;
        finalMessage = "He enviado una nota de voz, pero no se escuchó nada. Hubo silencio total.";
    }

    // Calculo preciso de la Hora de Lima (Perú)
    const now = new Date();
    const limaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));
    const currentHour = limaTime.getHours();
    
    let timeGreeting = "Buenas noches";
    if (currentHour >= 6 && currentHour < 12) timeGreeting = "Buenos días";
    else if (currentHour >= 12 && currentHour < 19) timeGreeting = "Buenas tardes";

    // Órdenes Estrictas
    const systemPrompt = `Eres Synapse Core AI, un altamente capacitado ingeniero eléctrico senior experto de Synapse Engineering. 
    Tu comunicación es formal, técnica, objetiva, precisa y muy profesional (estilo ChatGPT o Gemini avanzado). 
    
    ESTADO DE LA CONVERSACIÓN:
    ${isFirstMessage ? `REGLA DE ORO INQUEBRANTABLE: Este es el PRIMER mensaje del usuario. DEBES empezar tu respuesta EXACTAMENTE con la frase: "${timeGreeting}. Soy el asistente inteligente de Synapse Engineering. ¿En qué le puedo ayudar hoy?". NO ESTÁ PERMITIDO agregar viñetas, NO agregues listas, NO des ejemplos largos de lo que puedes hacer. Ve directo al punto en un párrafo corto y conciso.` : `REGLA DE ORO INQUEBRANTABLE: Ya están conversando. ESTÁ ESTRICTAMENTE PROHIBIDO decir "Buenos días", "Buenas tardes" o "Buenas noches". Responde directo a la consulta.`}
    
    ${audioIninteligible ? `REGLA PARA AUDIO: El sistema intentó transcribir la voz del usuario pero solo captó silencio. Respóndele empáticamente que no pudiste escuchar su nota de voz y pídele por favor que lo intente de nuevo o que te escriba.` : ''}

    REGLAS GENERALES:
    1. NUNCA uses el símbolo de hashtag (#) bajo ninguna circunstancia.
    2. Evita el uso excesivo de asteriscos (*). Úsalos SÓLO para resaltar palabras clave.
    3. Si el usuario dice "gracias", despídete de forma amable, servicial y profesional (ej. "Ha sido un placer asistirle. Quedo a su disposición para futuros proyectos...").
    4. Si el usuario sube imágenes, analízalas con rigor técnico.`;

    let userContent: any = finalMessage;

    if (image) {
      userContent = [
        { type: "text", text: finalMessage || "Analiza detalladamente la siguiente imagen técnica." },
        { type: "image_url", image_url: { url: image } }
      ];
    }

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: image ? "pixtral-12b-2409" : "open-mistral-7b",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent }
        ],
        temperature: 0.3,
        max_tokens: 2500
      })
    });

    clearTimeout(timeoutId);

    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content?.trim();

    if (!aiText) {
      return new Response(JSON.stringify({ response: "Error en el análisis de los circuitos lógicos. ¿Puede proporcionar los datos técnicos nuevamente?" }), { status: 200 });
    }

    return new Response(JSON.stringify({ response: aiText }), { status: 200 });

  } catch (e: any) {
    if (e.name === 'AbortError') {
      return new Response(JSON.stringify({ response: "Tiempo de espera agotado en la red. Verifique su conexión y reintente el envío de los datos." }), { status: 504 });
    }
    return new Response(JSON.stringify({ response: "Fallo en los sistemas centrales. Por favor, intente la consulta de nuevo." }), { status: 500 });
  }
};