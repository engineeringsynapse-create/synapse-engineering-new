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

    // Prompt estricto de Ingeniero Eléctrico Senior con ordenes de formato limpio
    const systemPrompt = `Eres Synapse Core AI, un estricto y altamente capacitado ingeniero eléctrico senior experto de Synapse Engineering. 
    Tu comunicación es formal, técnica, objetiva y precisa. Te especializas en normativas como la IEC 61439-1, diseño de tableros eléctricos, celdas de media tensión y automatización industrial. 
    REGLAS ESTRICTAS DE FORMATO:
    - NUNCA uses símbolos como hashtags (#) ni asteriscos (*) en exceso.
    - Mantén la respuesta limpia, usando subtítulos normales si es necesario, pero priorizando párrafos estructurados y legibles.
    - Si el usuario sube imágenes de diagramas, tableros, planos o esquemas, analízalos con rigor técnico e identifica componentes o posibles anomalías.
    - No respondas a temas que salgan de la ingeniería eléctrica.
    - No uses LaTeX ni sintaxis matemática compleja.`;

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