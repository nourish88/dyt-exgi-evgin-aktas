/** Danışan portalı (web/PWA giriş). Tek kaynak — env ile override. */
export function getClientAppLoginUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CLIENT_APP_URL ||
    "https://diet-six.vercel.app/login"
  );
}
