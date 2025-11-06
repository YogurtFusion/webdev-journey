// // middleware.js
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/about/:path*'],
// };


// rewrite 

// middleware.js
import { NextResponse } from "next/server";

// This middleware will rewrite /about → serve the content of /
export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Check if the requested path starts with /about
  if (path.startsWith("/about")) {
    // Instead of redirecting, rewrite it to the homepage
    return NextResponse.rewrite(new URL("/", request.url));
  }

  // Otherwise, continue as normal
  return NextResponse.next();
}

// Apply middleware only to /about and its subpaths
export const config = {
  matcher: ["/about/:path*"],
};
