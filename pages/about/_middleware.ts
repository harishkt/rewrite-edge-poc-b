import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {

  console.log(`Inside poc-b about middleware`);
  console.log(`request cookies are ${req.cookies}`);
  console.log(`req url path name is ${JSON.stringify(req.nextUrl)}`)
  return NextResponse.next();

}