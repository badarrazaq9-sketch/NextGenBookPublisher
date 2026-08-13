import { meta } from "@/lib/seo";

export const metadata = meta.publishing;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}