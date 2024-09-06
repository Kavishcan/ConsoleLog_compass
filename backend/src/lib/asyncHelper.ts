export function awaitable<T>(promise: Promise<T>) {
    return promise
        .then((data : T) => [data, null])
        .catch((error : any) => [null, error]);
}