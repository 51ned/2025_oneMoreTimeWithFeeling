function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const MAX_AGE = 31536e3;
const manageFonts = async ({ event, resolve }) => {
  const isFontCached = event.cookies.get("fontcached");
  if (!isFontCached) {
    event.cookies.set("fontcached", "true", { path: "/", maxAge: MAX_AGE });
    const response = await resolve(event, {
      transformPageChunk: ({ html }) => html.replace(
        "<head>",
        `<head>
          <link
            as='font'
            crossOrigin='anonymous'
            href='/fonts/montserrat.woff2'
            rel='preload'
            type='font/woff2'
          />`
      )
    });
    return response;
  }
  return await resolve(event);
};
const handle = sequence(
  // setHeaders,
  manageFonts
);
export {
  handle
};
