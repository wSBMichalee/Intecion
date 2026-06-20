"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { ConsultationForm } from "../sections/ConsultationForm";

export function GlobalFooter() {
  const pathname = usePathname();
  const isContactPage = pathname === "/kontakt";

  return (
    <>
      {!isContactPage && (
        <>
          <ConsultationForm />
          <div className="bg-white w-full h-20 md:h-24"></div>
        </>
      )}
      <Footer />
    </>
  );
}
