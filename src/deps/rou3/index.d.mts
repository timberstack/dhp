//#region src/types.d.ts
interface RouterContext<T = unknown> {
	root: Node<T>;
	static: Record<string, Node<T> | undefined>;
}
type ParamsIndexMap = Array<[Index: number, name: string | RegExp, optional: boolean]>;
type MethodData<T = unknown> = {
	data: T
	paramsMap?: ParamsIndexMap
};
interface Node<T = unknown> {
	key: string;
	static?: Record<string, Node<T>>;
	param?: Node<T>;
	wildcard?: Node<T>;
	methods?: Record<string, MethodData<T>[] | undefined>;
}
type MatchedRoute<T = unknown> = {
	data: T
	params?: Record<string, string>
};

//#endregion
//#region src/context.d.ts
/**
* Create a new router context.
*/
declare function createRouter<T = unknown>(): RouterContext<T>;

//#endregion
//#region src/operations/add.d.ts
/**
* Add a route to the router context.
*/
declare function addRoute<T>(ctx: RouterContext<T>, method: string | undefined, path: string, data?: T): void;

//#endregion
//#region src/operations/find.d.ts
/**
* Find a route by path.
*/
declare function findRoute<T = unknown>(ctx: RouterContext<T>, method: string | undefined, path: string, opts?: {
	params?: boolean
}): MatchedRoute<T> | undefined;

//#endregion
//#region src/operations/remove.d.ts
/**
* Remove a route from the router context.
*/
declare function removeRoute<T>(ctx: RouterContext<T>, method: string, path: string): void;

//#endregion
//#region src/operations/find-all.d.ts
/**
* Find all route patterns that match the given path.
*/
declare function findAllRoutes<T>(ctx: RouterContext<T>, method: string | undefined, path: string, opts?: {
	params?: boolean
}): MatchedRoute<T>[];

//#endregion
export { RouterContext, addRoute, createRouter, findAllRoutes, findRoute, removeRoute };