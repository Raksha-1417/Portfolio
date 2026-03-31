// Resource route — no default export means no root layout/loader is run.
// This intercepts /favicon.ico before the catch-all route so the
// root loader never runs for favicon requests.
export async function loader() {
  return new Response(null, {
    status: 204, // No Content — stops the browser retrying
    headers: {
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
