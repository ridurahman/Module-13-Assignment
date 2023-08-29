import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  let headerList = headers();
  let token = headerList.get("Authorization");
  return NextResponse.json({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
