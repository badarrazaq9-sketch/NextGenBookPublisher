import { meta } from "@/lib/seo";

export const metadata = meta.editing;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}