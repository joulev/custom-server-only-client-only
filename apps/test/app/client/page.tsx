"use client";
import getData from "~/app/client-only";

export default function Page() {
  return <button onClick={() => alert(getData().name)}>Click me</button>;
}
