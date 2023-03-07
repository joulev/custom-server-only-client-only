export default function ensureServer(message) {
  if (typeof message !== "string") {
    throw new Error(
      "This module cannot be imported from a Client Component module. " +
        "It should only be used from a Server Component."
    );
  }
  throw new Error(message);
}
