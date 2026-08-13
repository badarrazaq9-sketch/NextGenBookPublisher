import { meta } from "@/lib/seo";

export const metadata = meta.cookies;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}