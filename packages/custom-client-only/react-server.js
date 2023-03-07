export default function ensureClient(message) {
  if (typeof message !== "string") {
    throw new Error(
      "This module cannot be imported from a Server Component module. " +
        "It should only be used from a Client Component."
    );
  }
  throw new Error(message);
}
