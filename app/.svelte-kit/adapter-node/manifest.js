export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ChBRHeIw.js","app":"_app/immutable/entry/app.rfAxcH0D.js","imports":["_app/immutable/entry/start.ChBRHeIw.js","_app/immutable/chunks/entry.DgQJGRRk.js","_app/immutable/chunks/runtime.DUMh5qBO.js","_app/immutable/chunks/index-client.QiNybB2C.js","_app/immutable/entry/app.rfAxcH0D.js","_app/immutable/chunks/runtime.DUMh5qBO.js","_app/immutable/chunks/render.CgMBpLJs.js","_app/immutable/chunks/disclose-version.CC7x_6kz.js","_app/immutable/chunks/index-client.QiNybB2C.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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

export const prerendered = new Set([]);

export const base = "";