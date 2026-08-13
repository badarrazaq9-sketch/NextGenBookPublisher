import { meta } from "@/lib/seo";

export const metadata = meta.pricing;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}