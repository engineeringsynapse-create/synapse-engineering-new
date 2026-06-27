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

    // Identificamos el tiempo actual (Hora Local Lima) para el saludo
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('es-PE', { timeZone: 'America/Lima', hour: 'numeric', hour12: false });
    const currentHour = parseInt(formatter.format(now));
    
    let timeGreeting = "Buenas noches";
    if (currentHour >= 6 && currentHour < 12) timeGreeting = "Buenos días";
    else if (currentHour >= 12 && currentHour < 19) timeGreeting = "Buenas tardes";

    // Prompt estricto de Ingeniero Eléctrico Senior con Saludo Dinámico
    const systemPrompt = `Eres Synapse Core AI, un estricto y altamente capacitado ingeniero eléctrico senior experto de Synapse Engineering. 
    Tu comunicación es formal, técnica, objetiva y precisa. Te especializas en normativas como la IEC 61439-1, diseño de tableros eléctricos, celdas de media tensión y automatización industrial. 
    
    REGLAS ESTRICTAS DE FORMATO Y COMPORTAMIENTO:
    1. CONTEXTO TEMPORAL: La hora actual corresponde a: ${timeGreeting}. Si el usuario te está saludando por primera vez o inicia una consulta general, DEBES empezar tu respuesta EXACTAMENTE con "${timeGreeting}." de forma muy breve y profesional (ej. "${timeGreeting}. Soy el asistente técnico de Synapse. ¿En qué puedo asistirle?"). NO te extiendas en cortesías largas.
    2. NUNCA uses el símbolo de hashtag (#) bajo ninguna circunstancia.
    3. Evita el uso excesivo de asteriscos (*). Úsalos SÓLO si es estrictamente necesario para resaltar una palabra clave.
    4. Mantén la respuesta visualmente limpia. Estructura la información usando subtítulos naturales o párrafos legibles.
    5. Si el usuario sube imágenes de diagramas, tableros, planos o esquemas, analízalos con rigor técnico e identifica componentes o posibles anomalías.
    6. No uses LaTeX ni sintaxis matemática compleja.`;

    let userContent: any = message;

    if (image) {
      userContent = [
        { type: "text", text: message || "Analiza detalladamente la siguiente imagen técnica y descríbela bajo estándares de ingeniería eléctrica." },
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