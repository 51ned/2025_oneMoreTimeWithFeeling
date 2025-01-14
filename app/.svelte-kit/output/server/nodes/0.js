

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B4YEhb-D.js","_app/immutable/chunks/disclose-version.CC7x_6kz.js","_app/immutable/chunks/runtime.DUMh5qBO.js"];
export const stylesheets = [];
export const fonts = [];
