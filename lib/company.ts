// Şirket bilgileri tek yerde tutulur. Boş bırakılan alanlar sitede gösterilmez.
// TODO: Gerçek şirket bilgileriyle doldurulmalı.
export const company = {
  brand: "someplus.work",
  legalName: "",
  email: "info@someplus.work",
  phone: "",
  whatsapp: "",
  address: "",
  city: "",
  taxOffice: "",
  taxNumber: "",
};

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
