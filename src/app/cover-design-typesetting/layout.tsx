import { meta } from "@/lib/seo";

export const metadata = meta.design;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}