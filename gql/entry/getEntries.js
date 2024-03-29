export function request(ctx) {
    const { source, args, env } = ctx;
    return {
        operation: "Invoke",
        payload: { env: env, arguments: args, source },
    };
}

export function response(ctx) {
    return ctx.result;
}
