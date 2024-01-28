import { ReactElement } from "react";

import { Layout as LayoutComponent } from "@/components";

export default function Layout({ children }: { children: ReactElement }) {
  return <LayoutComponent siderHidden>{children}</LayoutComponent>;
}
