import type { ReactNode } from "react";
import { requireAuth } from "@/lib/check-auth";

export const dynamic = "force-dynamic";

interface Props {
  children: ReactNode;
}

export default async function ArquivoLayout({ children }: Props) {
  await requireAuth();
  return <>{children}</>;
}
