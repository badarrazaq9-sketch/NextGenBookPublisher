import { meta } from "@/lib/seo";

export const metadata = meta.privacy;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}