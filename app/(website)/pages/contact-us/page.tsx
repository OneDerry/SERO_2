import { ContactCard } from "./components/contact_card";
import TalkReal from "./components/talk_real";
import FlavourAttention from "./components/flavour_attention";
import FastReplies from "./components/fast_replies";

export default function ContactUsPage() {
  return (
    <main className="space-y-16">
      <TalkReal />
      <ContactCard />
      <FastReplies />
      <FlavourAttention />
    </main>
  );
}
