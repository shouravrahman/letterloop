import { CallToAction } from "@/components/landingpage/CallToAction.tsx";
// import { Testimonials } from "@/components/landingpage/Testimonials.tsx";
import { Pricing } from "@/components/landingpage/Pricing.tsx";
// import { Faqs } from "@/components/landingpage/Faqs.tsx";
import { Footer } from "@/components/landingpage/Footer.tsx";
import { Hero } from "@/components/landingpage/Hero.tsx";
import Header from "@/components/landingpage/Header.tsx";
import FAQ from "@/components/FAQ.tsx";
import Testimonials11 from "@/components/Testimonials11.tsx";
import FeaturesGrid from "@/components/FeaturesGrid.tsx";


export default async function Page() {

   return (
      <>
         {/* <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Login" />
      </header> */}

         <Header />
         <main>
            <Hero />
            {/* <PrimaryFeatures /> */}
            <FeaturesGrid />
            {/* <FeaturesListicle /> */}
            {/* <SecondaryFeatures /> */}
            <CallToAction />
            <Testimonials11 />
            <Pricing />
            <FAQ />
         </main>
         <Footer />
      </>
   );
}
