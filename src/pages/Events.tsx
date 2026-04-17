import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  { title: "Meeting to form an ad hoc committee of DOA.", titleBn: "ডিওএ-এর অ্যাড হক কমিটি গঠন সংক্রান্ত সভা", date: "April 4, 2026", dateBn: "৪ এপ্রিল, ২০২৬",  location: "ZOOM", locationBn: "জুম ", color: "gradient-primary", status: "Open", statusBn: "খোলা" },

  { title: "Meeting with DOA EC", titleBn: "ডিওএ নির্বাহী কমিটির সাথে সভা", date: "April 8, 2026", dateBn: "৮ এপ্রিল, ২০২৬", location: "Zilla ICT Office, Dhaka", locationBn: "জেলা আইসিটি অফিস, ঢাকা", color: "gradient-accent", status: "Open", statusBn: "খোলা" },

  { title: "EC visit DOA Office", titleBn: "ডিওএ অফিসে নির্বাহী কমিটির পরিদর্শন", date: "April 13, 2026", dateBn: "১৩ এপ্রিল, ২০২৬", location: "মোহাম্মাদপুর, ঢাকা", locationBn: "Mohammodpur, Dhaka", attendees: 200, color: "gradient-gold", status: "Coming Soon", statusBn: "শীঘ্রই আসছে" },
];

const Events = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-secondary" aria-hidden="true" />
          <h1 className="text-4xl font-heading font-bold">{t("Events & Activities", "ইভেন্ট ও কার্যক্রম")}</h1>
          <p className="mt-2 opacity-80">{t("Stay updated with our events", "আমাদের ইভেন্টগুলি সম্পর্কে আপডেট থাকুন")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all border border-border overflow-hidden group" role="article">
              <div className={`${event.color} p-6 text-primary-foreground`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-bold">{t(event.title, event.titleBn)}</h3>
                  <span className="px-3 py-1 rounded-full bg-card/20 text-xs font-semibold">{t(event.status, event.statusBn)}</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                  {t(event.date, event.dateBn)}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {t(event.location, event.locationBn)}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                  {event.attendees} {t("expected attendees", "প্রত্যাশিত অংশগ্রহণকারী")}
                </div>
                <Button className={`w-full mt-2 ${event.status === "Open" ? "gradient-primary text-primary-foreground" : ""}`} disabled={event.status !== "Open"}>
                  {event.status === "Open" ? t("Register Now", "এখনই নিবন্ধন করুন") : t("Coming Soon", "শীঘ্রই আসছে")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
