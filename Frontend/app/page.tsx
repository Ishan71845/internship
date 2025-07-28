import { ContactSection } from "@/components/layout/sections/contact";
import HeroSection from "@/components/layout/sections/HeroSection";
import { ResultsSection } from "@/components/layout/sections/Results/ResultSection";
import { WhyChooseSection } from "@/components/layout/sections/WhyChoose/WhyChooseSection";
import AdmissionInfo from "@/components/layout/sections/AdmissionSection";
import CallToAction from "@/components/layout/sections/Call";
import { FooterSection } from "@/components/layout/sections/FooterSection";

export const metadata = {
  title: "Arpita Science Academy",
  description: "IIT | NEET | FOUNDATION",
  openGraph: {
    type: "website",
    url: "",
    title: "Arpita Science Academy",
    description: "IIT | NEET | FOUNDATION",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Arpita Science Academy",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResultsSection />
      <WhyChooseSection />
      {/* <CoursesSection /> */}
      <AdmissionInfo />
      <CallToAction />
      <ContactSection />
      <FooterSection />
    </>
  );
}
