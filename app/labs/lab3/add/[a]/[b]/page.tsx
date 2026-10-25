import { notFound } from "next/navigation";

export default async function AddPage({
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
      <h1 className="text-2xl font-semibold">Lab 3: Path Parameters</h1>
      <p>{first} + {second} = {first + second}</p>
    </main>
  );
}