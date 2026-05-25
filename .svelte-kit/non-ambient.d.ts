
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/journal" | "/playground" | "/projects";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/journal": Record<string, never>;
			"/playground": Record<string, never>;
			"/projects": Record<string, never>
		};
		Pathname(): "/" | "/journal" | "/journal/" | "/playground" | "/playground/" | "/projects" | "/projects/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/datasets/food.csv" | "/datasets/games" | "/datasets/projects.json" | "/datasets/tsconfig.json" | "/datasets/webpages.json" | "/favicon.svg" | "/images/31343C.svg" | "/images/icons/email-svgrepo-com.svg" | "/images/icons/github-svgrepo-com.svg" | "/images/icons/linkedin-svgrepo-com.svg" | "/images/projects/daedalus.png" | "/images/projects/fam-thread.png" | "/images/projects/gen-algo.png" | "/images/projects/heat-prop.png" | "/images/projects/parallel-perform.png" | "/images/projects/traffic-measure.png" | "/images/projects/yelp-recom.png" | string & {};
	}
}