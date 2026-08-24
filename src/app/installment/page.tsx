import type { Metadata } from "next";
import { InstallmentPageContent } from "@/components/installment/InstallmentPageContent";

export const metadata: Metadata = {
  title: "Рассрочка",
  description:
    "Рассрочка на iPhone, Samsung и аксессуары в iBrox.uz: 40% или 30% первоначальный взнос, оформление по паспорту, без банка.",
};

export default function InstallmentPage() {
  return <InstallmentPageContent />;
}
