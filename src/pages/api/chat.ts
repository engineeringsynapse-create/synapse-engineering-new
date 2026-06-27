import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, image } = await request.json();
    const apiKey = import.meta.env.MISTRAL_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ response: "Error de configuración interna." }), { status: 500 });
    }

    if (message === '[Audio ininteligible]') {
        return new Response(JSON.stringify({ 
            response: "Entendido. El sistema no pudo procesar la grabación debido a la ausencia de voz detectable. Por favor, inténtelo de nuevo enviando otra nota de voz o, si lo prefiere, escriba su consulta en el panel de texto para que pueda asistirle de manera efectiva." 
        }), { status: 200 });
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    let isFirstMessage = message.includes('[PRIMER MENSAJE]:');
    let finalMessage = message.replace(/\[PRIMER MENSAJE\]:/g, '').trim();

    const now = new Date();
    const limaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));
    const currentHour = limaTime.getHours();
    
    let timeGreeting = "Buenas noches";
    if (currentHour >= 6 && currentHour < 12) timeGreeting = "Buenos días";
    else if (currentHour >= 12 && currentHour < 19) timeGreeting = "Buenas tardes";

    // ORDEN ABSOLUTA PARA EL SALUDO
    const systemPrompt = `Eres Synapse Core AI, un altamente capacitado ingeniero eléctrico senior experto de Synapse Engineering. 
    Tu comunicación es formal, técnica, objetiva y precisa (estilo ChatGPT o Gemini avanzado). 
    
    ESTADO DE LA CONVERSACIÓN:
    ${isFirstMessage ? `REGLA DE ORO INQUEBRANTABLE: Este es el PRIMER mensaje del usuario. Tu respuesta DEBE tener MÁXIMO 2 líneas. DEBES empezar EXACTAMENTE con "${timeGreeting}. Soy el asistente inteligente de Synapse Engineering." seguido inmediatamente por tu respuesta a lo que te preguntó el usuario. ESTÁ ESTRICTAMENTE PROHIBIDO USAR VIÑETAS, PUNTOS O LISTAS EN ESTE MENSAJE.` : `Ya están conversando. ESTÁ ESTRICTAMENTE PROHIBIDO decir "Buenos días", "Buenas tardes" o "Buenas noches". Ve directo al grano.`}
    
    REGLAS GENERALES DE FORMATO:
    1. NUNCA uses el símbolo de hashtag (#) bajo ninguna circunstancia.
    2. Evita el uso excesivo de asteriscos (*).
    3. Si el usuario dice "gracias", despídete amablemente, pero mantén tu rol técnico.
    4. NO generes espacios, guiones ni texto innecesario al final de tus respuestas.
    5. Si el usuario sube imágenes, analízalas con rigor técnico.`;

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