import { NextResponse } from "next/server";

export function middleware(req, res) {
  // console.log("I am middleware");
  if (req.nextUrl.pathname.startsWith("/api/header-modification")) {
    // console.log("This is API Route Inside Product Dir");

    const reqHeader = new Headers(req.headers);
    // const token = reqHeader.get("token");

    reqHeader.set("Authorization", "XYZ-ABC");

    return NextResponse.next({ request: { headers: reqHeader } });

    // response.headers.set("AuthorizationWithBearer", `Authorization`);
    // return response;
  }
}
