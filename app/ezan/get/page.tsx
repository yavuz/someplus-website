import { EzanGetPage, ezanGetMetadata } from "@/components/ezan-get";

export const metadata = ezanGetMetadata("tr");

export default function Page() {
  return <EzanGetPage locale="tr" />;
}
