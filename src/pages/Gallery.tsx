import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const albums = [
  { name: "All", nameBn: "সকল", count: 18 },
  { name: "Events", nameBn: "ইভেন্ট", count: 6 },
  { name: "Workshops", nameBn: "কর্মশালা", count: 4 },
  { name: "Meetings", nameBn: "সভা", count: 4 },
  { name: "Celebrations", nameBn: "উদযাপন", count: 4 },
];

const photos = [
  { title: "AGM 2025", titleBn: "বার্ষিক সভা ২০২৫", album: "Meetings", gradient: "from-primary to-teal" },
  { title: "Cybersecurity Workshop", titleBn: "সাইবার নিরাপত্তা কর্মশালা", album: "Workshops", gradient: "from-accent to-sky" },
  { title: "Award Ceremony 2025", titleBn: "পুরস্কার বিতরণ ২০২৫", album: "Events", gradient: "from-secondary to-gold" },
  { title: "Team Building", titleBn: "টিম বিল্ডিং", album: "Events", gradient: "from-primary to-accent" },
  { title: "ICT Day Celebration", titleBn: "আইসিটি দিবস উদযাপন", album: "Celebrations", gradient: "from-teal to-primary" },
  { title: "Digital Innovation Talk", titleBn: "ডিজিটাল উদ্ভাবন আলোচনা", album: "Workshops", gradient: "from-accent to-primary" },
  { title: "Annual Dinner", titleBn: "বার্ষিক ডিনার", album: "Events", gradient: "from-secondary to-primary" },
  { title: "Sports Day", titleBn: "ক্রীড়া দিবস", album: "Celebrations", gradient: "from-primary to-secondary" },
  { title: "Budget Meeting", titleBn: "বাজেট সভা", album: "Meetings", gradient: "from-teal to-accent" },
  { title: "AI Workshop", titleBn: "এআই কর্মশালা", album: "Workshops", gradient: "from-accent to-teal" },
  { title: "Independence Day", titleBn: "স্বাধীনতা দিবস", album: "Celebrations", gradient: "from-primary to-emerald" },
  { title: "Planning Session", titleBn: "পরিকল্পনা সভা", album: "Meetings", gradient: "from-sky to-primary" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? photos : photos.filter(p => p.album === active);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Images className="h-12 w-12 mx-auto mb-4 text-secondary" aria-hidden="true" />
          <h1 className="text-4xl font-heading font-bold">{t("Photo Gallery", "ফটো গ্যালারি")}</h1>
          <p className="mt-2 opacity-80">{t("Capturing moments from our journey", "আমাদের যাত্রার মুহূর্তগুলো")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex gap-2 flex-wrap mb-8" role="group" aria-label={t("Filter by album", "অ্যালবাম অনুযায়ী ফিল্টার")}>
          {albums.map((album) => (
            <Button key={album.name} variant={active === album.name ? "default" : "outline"} size="sm" onClick={() => setActive(album.name)}
              className={active === album.name ? "gradient-primary text-primary-foreground" : ""}>
              {t(album.name, album.nameBn)} ({album.count})
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo, i) => (
            <div key={i} className={`relative aspect-square rounded-2xl bg-gradient-to-br ${photo.gradient} overflow-hidden cursor-pointer group`} role="img" aria-label={t(photo.title, photo.titleBn)}>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-end p-4">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-primary-foreground font-semibold text-sm">{t(photo.title, photo.titleBn)}</p>
                  <p className="text-primary-foreground/70 text-xs">{t(photo.album, albums.find(a => a.name === photo.album)?.nameBn || photo.album)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
