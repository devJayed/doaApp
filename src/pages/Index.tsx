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
      <section id="home">      
        <NewsTicker />
      </section> 

      <HeroSection />
      {/* <WelcomeSection /> */}

      {/* Notices & Events */}
      <section id="notice-event" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NoticesPreview />
            <EventsPreview />
          </div>
        </div>
      </section>
      <section id="stats">
         <StatsSection />
      </section>
      <section id='gallery'>
         <GalleryPreview />
      </section>
     
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
};

export default Index;
