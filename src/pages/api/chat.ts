import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();
    const apiKey = import.meta.env.MISTRAL_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ response: "Error de configuración interna." }), { status: 500 });
    }

    // Mantenemos 30s para dar margen en móviles, pero el modelo nuevo debería responder en < 2s
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: "open-mistral-7b", // CAMBIO CLAVE: Modelo ultra rápido
        messages: [
          { 
            role: "system", 
            content: "Eres Synapse Core AI, un ingeniero eléctrico experto y cercano. Saluda de forma amable y ayuda con precisión técnica. No uses LaTeX." 
          },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 2500 // SE EXTENDIÓ EL LÍMITE: Para evitar respuestas cortadas en explicaciones técnicas largas
      })
    });

    clearTimeout(timeoutId);

    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content?.trim();

    if (!aiText) {
      return new Response(JSON.stringify({ response: "He tenido un pequeño bache de conexión. ¿Me lo repites?" }), { status: 200 });
    }

    return new Response(JSON.stringify({ response: aiText }), { status: 200 });

  } catch (e: any) {
    if (e.name === 'AbortError') {
      return new Response(JSON.stringify({ response: "La red está algo lenta. Intenta enviarlo una vez más, por favor." }), { status: 504 });
    }
    return new Response(JSON.stringify({ response: "Circuitos ocupados. ¿Podemos intentarlo de nuevo?" }), { status: 500 });
  }
};