
import { ContactSection } from "@/components/layout/sections/contact";

// import { FooterSection } from "@/components/layout/sections/footer";
import HeroSection from "@/components/layout/sections/HeroSection";

// import { TeamSection } from "@/components/layout/sections/team";

import { ResultsSection } from "@/components/layout/sections/Results/ResultSection";
import { WhyChooseSection } from "@/components/layout/sections/WhyChoose/WhyChooseSection";
// import CoursesSection from "@/components/layout/sections/CourseSection";
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
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jp",
        width: 1200,
        height: 630,
        alt: "Arpita Science Academy",
      },
    ],
  },
 
  }
;

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResultsSection />
      <WhyChooseSection />
      {/* <CoursesSection /> */}
      <AdmissionInfo/>
      <CallToAction/>
      <ContactSection/>
      <FooterSection />
   
    </>
  );
}
