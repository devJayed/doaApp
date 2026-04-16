import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
// import WelcomeSection from "@/components/WelcomeSection";
import EventsPreview from "@/components/EventsPreview";
import Footer from "@/components/Footer";
import GalleryPreview from "@/components/GalleryPreview";
import NoticesPreview from "@/components/NoticesPreview";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NewsTicker />
      <HeroSection />
      {/* <WelcomeSection /> */}

      {/* Notices & Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NoticesPreview />
            <EventsPreview />
          </div>
        </div>
      </section>

      <StatsSection />
      <GalleryPreview />
      <Footer />
    </div>
  );
};

export default Index;
