import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  if (password === process.env.SITE_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("site-password", "unlocked", {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  }
  return NextResponse.json({ ok: false }, { status: 401 });
}
