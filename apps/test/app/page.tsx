import getData from "~/app/server-only";

export default function Page() {
  return <div>{getData().name}</div>;
}
