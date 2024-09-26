import Header from "@/components/layouts/Header";
import HeroSection from "@/components/sections/HeroSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <WhyUsSection />
            <OpportunitiesSection />
        </>
    );
}
