import Link from "next/link";

function parseNumber(value: string | string[] | undefined) {
  if (typeof value !== "string" || value.trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export default async function QueryParamsPage({
  searchParams,
}: {
  searchParams: Promise<{ a?: string | string[]; b?: string | string[] }>;
}) {
  const { a, b } = await searchParams;
  const first = parseNumber(a);
  const second = parseNumber(b);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold">Lab 4: Query Parameters</h1>
      {first === null || second === null ? (
        <p className="mt-2">Provide numeric a and b query parameters.</p>
      ) : (
        <p className="mt-2">{first} + {second} = {first + second}</p>
      )}
      <Link href="/labs/lab4" className="mt-3 inline-block text-blue-700 underline">Back to Lab 4</Link>
    </main>
  );
}
