import { meta } from "@/lib/seo";

export const metadata = meta.terms;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}