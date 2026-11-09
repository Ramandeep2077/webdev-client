import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PathParamsPage({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  const first = Number(a);
  const second = Number(b);
  if (!Number.isFinite(first) || !Number.isFinite(second)) notFound();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold">Lab 4: Path Parameters</h1>
      <p className="mt-2">{first} + {second} = {first + second}</p>
      <Link href="/labs/lab4" className="mt-3 inline-block text-blue-700 underline">Back to Lab 4</Link>
    </main>
  );
}
