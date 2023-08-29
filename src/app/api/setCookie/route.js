import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(
    {},
    {
      status: 201,
      headers: {
        "Set-Cookie": "theme=dark;path=/;",
      },
    }
  );
}
