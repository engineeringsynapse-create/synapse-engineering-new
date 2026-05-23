export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { message } = await request.json();
    const apiKey = "0L85aT8cqY4PcEofzfUzccCgBWjB2Mes";
    if (!apiKey) ;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3e4);
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: "open-mistral-7b",
        // CAMBIO CLAVE: Modelo ultra rápido
        messages: [
          {
            role: "system",
            content: "Eres Synapse Core AI, un ingeniero eléctrico experto y cercano. Saluda de forma amable y ayuda con precisión técnica. No uses LaTeX."
          },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 2500
        // SE EXTENDIÓ EL LÍMITE: Para evitar respuestas cortadas en explicaciones técnicas largas
      })
    });
    clearTimeout(timeoutId);
    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content?.trim();
    if (!aiText) {
      return new Response(JSON.stringify({ response: "He tenido un pequeño bache de conexión. ¿Me lo repites?" }), { status: 200 });
    }
    return new Response(JSON.stringify({ response: aiText }), { status: 200 });
  } catch (e) {
    if (e.name === "AbortError") {
      return new Response(JSON.stringify({ response: "La red está algo lenta. Intenta enviarlo una vez más, por favor." }), { status: 504 });
    }
    return new Response(JSON.stringify({ response: "Circuitos ocupados. ¿Podemos intentarlo de nuevo?" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
