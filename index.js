addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const urlParams = new URLSearchParams(url.search)
  const ip = request.headers.get('CF-Connecting-IP')

  if (urlParams.get('json') !== null) {
    return new Response(JSON.stringify({
      ip: ip,
    }), {
      headers: { 'content-type': 'application/json' },
    })
  } 

  return new Response(ip, {
    headers: { 'content-type': 'text/html' },
  })
}
