

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cw8oxYRY.js","_app/immutable/chunks/disclose-version.CC7x_6kz.js","_app/immutable/chunks/runtime.DUMh5qBO.js","_app/immutable/chunks/legacy.BkEPvv3i.js"];
export const stylesheets = [];
export const fonts = [];
