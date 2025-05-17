import type { ReactNode } from "react";
import { requireNoAuth } from "@/lib/check-auth";

export const dynamic = "force-dynamic";

interface Props {
  children: ReactNode;
}

export default async function AcessoLayout({ children }: Props) {
  await requireNoAuth();
  return <>{children}</>;
}
