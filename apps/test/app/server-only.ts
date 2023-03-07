import ensureServer from "custom-server-only";
ensureServer("server-only.ts cannot be imported to client components");

export default function getData() {
  return { name: "John Doe" };
}
