import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const localizedPathname = pathname.replace(/^\/pt-br(?=\/|$)/, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = localizedPathname;

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ['/pt-br', '/pt-br/:path*'],
};
