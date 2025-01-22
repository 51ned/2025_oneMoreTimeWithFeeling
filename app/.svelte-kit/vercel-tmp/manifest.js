export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/montserrat.woff2"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.BlXTsIfU.js","app":"_app/immutable/entry/app.CkwFoLRa.js","imports":["_app/immutable/entry/start.BlXTsIfU.js","_app/immutable/chunks/entry.DmxwXJGC.js","_app/immutable/chunks/runtime.AGhWaBNP.js","_app/immutable/chunks/index-client.CwI7WxQD.js","_app/immutable/entry/app.CkwFoLRa.js","_app/immutable/chunks/runtime.AGhWaBNP.js","_app/immutable/chunks/render.DAgPAAPV.js","_app/immutable/chunks/events.Rurg-Tny.js","_app/immutable/chunks/disclose-version.Dfdnp4pt.js","_app/immutable/chunks/if.CB8a6Gi7.js","_app/immutable/chunks/index-client.CwI7WxQD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
