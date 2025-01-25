import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const unprotectedRoutes = ['/login', '/sign-up', '/api/login','/profile'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  if (!token && unprotectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }


  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  //   jwt verification logic TBD
  console.log('pathName:', req.nextUrl.pathname);

  if(req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/sign-up') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }



  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']
};