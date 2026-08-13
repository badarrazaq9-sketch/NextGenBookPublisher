import { meta } from "@/lib/seo";

export const metadata = meta.services;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}