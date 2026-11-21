import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const a = Number(request.nextUrl.searchParams.get("a") ?? 0);
  const b = Number(request.nextUrl.searchParams.get("b") ?? 0);
  const operation = request.nextUrl.searchParams.get("operation") ?? "add";

  let result = a + b;
  if (operation === "subtract") result = a - b;
  if (operation === "multiply") result = a * b;
  if (operation === "divide") result = b === 0 ? 0 : a / b;

  return NextResponse.json({ result });
}
