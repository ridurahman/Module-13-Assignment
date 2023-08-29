import { NextResponse } from "next/server";

export async function GET(req, res) {
  let name = req.cookies.get("theme")["name"];
  let value = req.cookies.get("theme")["value"];
  return NextResponse.json({ name: name, value: value });
}
