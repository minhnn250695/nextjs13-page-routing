import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/about', '/contact', '/category', '/blog'];

  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );


  if (isProtectedRoute) {
    const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';

    if (!isLoggedIn) {
      // Redirect to login page if not authenticated
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Run on these specific routes
    '/about/:path*',
    '/contact/:path*', 
    '/category/:path*',
    '/blog/:path*'
  ]
};
