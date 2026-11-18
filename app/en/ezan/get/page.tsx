import { EzanGetPage, ezanGetMetadata } from "@/components/ezan-get";

export const metadata = ezanGetMetadata("en");

export default function Page() {
  return <EzanGetPage locale="en" />;
}
