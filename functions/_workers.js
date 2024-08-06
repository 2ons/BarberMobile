// functions/_worker.js
import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    const page = await getAssetFromKV(event, {
      mapRequestToAsset: req => {
        // serve a different file if `index.html` is requested
        req.url = new URL(req.url)
        req.url.pathname = req.url.pathname === '/' ? '/index.html' : req.url.pathname
        return mapRequestToAsset(req)
      }
    });
    return new Response(page.body, page);
  } catch (e) {
    if (e.status === 404) {
      return new Response('Not Found', { status: 404 });
    }
    return new Response('Internal Server Error', { status: 500 });
  }
}
