import { meta } from "@/lib/seo";

export const metadata = meta.home;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}