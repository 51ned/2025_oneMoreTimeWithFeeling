export {}


declare global {
	interface Window {
		dataLayer: Record<string, any>[]
	}
	namespace App {
		// interface Error {}
		interface Locals {
			gtmId: string | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
