# `custom-client-only`

This package is a `client-only` alternative that library authors can use to customise the error message.

## Why?

`server-only` and `client-only` are great if you use it in your own apps. If it's imported in a third party library however, the error message is not so clear to debug anymore.

For example, say I make a library where a particular module must be client-only. If you use the module in a server environment, you get

> This module cannot be imported from a Server Component module. It should only be used from a Client Component.

Since you didn't use `client-only` explicitly, you are left wondering what does "this module" refer to here.

With `custom-server-only` and `custom-client-only` here however, I can customise it to something like

> `"my-package/use-window-size"` cannot be used in a server component. Please use a client component instead. Refer to https://my-package.js.org/use-window-size for more info.

which makes it easier for library users to debug.

## Usage

Before:

```ts
import "client-only";
```

After:

```ts
import ensureClient from "custom-client-only";
ensureClient("Error message here");
```

If you want to use the default error message instead, use `ensureClient()`. (But why don't you use `client-only` directly in that case?)

See also [`custom-server-only`](https://www.npmjs.com/custom-server-only).
