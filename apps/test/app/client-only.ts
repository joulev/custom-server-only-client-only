import ensureClient from "custom-client-only";
ensureClient("client-only.ts cannot be imported to server components");

export default function getData() {
  return { name: "John Doe" };
}
