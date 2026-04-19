import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Meeting to form an ad hoc committee of DOA.", titleBn: "ডিওএ-এর অ্যাড হক কমিটি গঠন সংক্রান্ত সভা", month: "APRIL", monthBn: "এপ্রিল", day: "4", dayBn: "৪",  location: "ZOOM", locationBn: "জুম ", color: "gradient-primary", status: "Open", statusBn: "খোলা" },

  { title: "Meeting with DOA EC", titleBn: "ডিওএ নির্বাহী কমিটির সাথে সভা", month: "APRIL", monthBn: "এপ্রিল", day: "8", dayBn: "৮", location: "Zilla ICT Office, Dhaka", locationBn: "জেলা আইসিটি অফিস, ঢাকা", color: "gradient-accent", status: "Open", statusBn: "খোলা" },

  { title: "EC visit DOA Office", titleBn: "ডিওএ অফিসে নির্বাহী কমিটির পরিদর্শন", month: "APRIL", monthBn: "এপ্রিল", day: "13", dayBn: "১৩", location: "Mohammodpur, Dhaka", locationBn: "মোহাম্মাদপুর, ঢাকা", attendees: 200, color: "gradient-gold", status: "Coming Soon", statusBn: "শীঘ্রই আসছে" },
];

const EventsPreview = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl gradient-accent flex items-center justify-center">
            <Calendar className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">{t("Events", "ইভেন্ট")}</h3>
        </div>
        {/* <Link to="/events">
          <Button variant="ghost" size="sm" className="text-accent">
            {t("View All", "সকল দেখুন")} <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link> */}
      </div>

      <div className="space-y-3">
        {events.map((event, i) => (
          <div key={i} className="bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group border border-border hover:border-accent/30" role="article">
            <div className="flex items-center gap-4">
              <div className={`${event.color} rounded-xl h-16 w-16 flex flex-col items-center justify-center text-primary-foreground shrink-0`}>
                <span className="text-[10px] font-bold uppercase">{t(event.month, event.monthBn)}</span>
                <span className="text-xl font-bold leading-none">{t(event.day, event.dayBn)}</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">{t(event.title, event.titleBn)}</h4>
                <p className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {t(event.location, event.locationBn)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPreview;
