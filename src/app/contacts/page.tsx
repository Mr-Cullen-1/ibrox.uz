import type { Metadata } from "next";
import { ContactsPageContent } from "@/components/contact/ContactsPageContent";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с iBrox.uz — Apple Namangan.",
};

export default function ContactsPage() {
  return <ContactsPageContent />;
}
