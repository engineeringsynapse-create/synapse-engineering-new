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

    // Detección lógica del Frontend
    let isFirstMessage = !message.includes('[Usuario frecuente]:');
    let finalMessage = message.replace(/\[Usuario frecuente\]:/g, '').trim();
    
    let audioIninteligible = false;
    if (finalMessage.includes('[Audio ininteligible]')) {
        audioIninteligible = true;
        // Traducimos el código al lenguaje natural para Mistral
        finalMessage = "He enviado una nota de voz, pero hubo un fallo con mi micrófono y solo se grabó silencio.";
    }

    // Identificamos el tiempo actual (Hora Local Lima)
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('es-PE', { timeZone: 'America/Lima', hour: 'numeric', hour12: false });
    const currentHour = parseInt(formatter.format(now));
    
    let timeGreeting = "Buenas noches";
    if (currentHour >= 6 && currentHour < 12) timeGreeting = "Buenos días";
    else if (currentHour >= 12 && currentHour < 19) timeGreeting = "Buenas tardes";

    // Prompt estricto de Ingeniero Eléctrico Senior con Saludo Dinámico
    const systemPrompt = `Eres Synapse Core AI, un altamente capacitado ingeniero eléctrico senior experto de Synapse Engineering. 
    Tu comunicación es formal, técnica, objetiva, precisa y muy profesional (estilo ChatGPT o Gemini avanzado). 
    
    ESTADO DE LA CONVERSACIÓN:
    ${isFirstMessage ? `- Es el PRIMER mensaje del usuario. La hora local es ${timeGreeting}. DEBES iniciar tu respuesta saludando obligatoriamente con "${timeGreeting}." y ofreciendo tu asistencia de forma breve (máximo 1 línea de saludo).` : `- Ya estás en medio de una conversación. ESTÁ ESTRICTAMENTE PROHIBIDO volver a decir "Buenos días", "Buenas tardes" o "Buenas noches". Ve directo al grano.`}
    ${audioIninteligible ? `- El usuario intentó enviar una nota de voz, pero tu sistema solo captó silencio. Infórmale empáticamente que no pudiste escucharlo y pídele que repita el mensaje o lo escriba.` : ''}

    REGLAS ESTRICTAS DE FORMATO Y COMPORTAMIENTO:
    1. NUNCA uses el símbolo de hashtag (#) bajo ninguna circunstancia.
    2. Evita el uso excesivo de asteriscos (*). Úsalos SÓLO para resaltar una palabra clave real.
    3. Si el usuario dice "gracias" o se despide, responde con cortesía, amabilidad y profesionalismo humano, demostrando empatía pero manteniendo tu rol de experto.
    4. Mantén la respuesta visualmente limpia. Estructura la información usando párrafos legibles sin dejar espacios en blanco excesivos.
    5. Si el usuario sube imágenes, analízalas con rigor técnico e identifica componentes.
    6. No uses LaTeX ni sintaxis matemática compleja.`;

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