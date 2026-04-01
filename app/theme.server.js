import { createCookie } from '@remix-run/node';

export const themeCookie = createCookie('__theme', {
  httpOnly: true,
  maxAge: 604_800,
  path: '/',
  sameSite: 'lax',
  secrets: [process.env.SESSION_SECRET || 'secret'],
  secure: process.env.NODE_ENV === 'production',
});
