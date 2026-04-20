import { useLanguage } from "@/contexts/LanguageContext";
import { Building, Calendar, FileText, Users } from "lucide-react";

const StatsSection = () => {
  const { t } = useLanguage();

  // const stats = [
  //   { icon: Users, value: "480+", label: t("Active Members", "সক্রিয় সদস্য"), color: "gradient-primary" },
  //   { icon: Calendar, value: "2+", label: t("Events Organized", "আয়োজিত ইভেন্ট"), color: "gradient-accent" },
  //   { icon: FileText, value: "4+", label: t("Notices Published", "প্রকাশিত নোটিশ"), color: "gradient-gold" },
  //   { icon: Building, value: "550+", label: t("Departments", "বিভাগ"), color: "gradient-primary" },
  // ];

  const stats = [
  { 
    icon: Users, 
    value: t("480+", "৪৮০+"), 
    label: t("Active Members", "সক্রিয় সদস্য"), 
    color: "gradient-primary" 
  },

  { 
    icon: Calendar, 
    value: t("2+", "২+"), 
    label: t("Events Organized", "আয়োজিত ইভেন্ট"), 
    color: "gradient-accent" 
  },

  { 
    icon: FileText, 
    value: t("4+", "৪+"), 
    label: t("Notices Published", "প্রকাশিত নোটিশ"), 
    color: "gradient-gold" 
  },

  { 
    icon: Building, 
    value: t("550+", "৫৫০+"), 
    label: t("Offices", "কার্যালয়"), 
    color: "gradient-primary" 
  },
];
  return (
    <section className="py-16 gradient-hero" aria-label={t("Statistics", "পরিসংখ্যান")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            {t("Our Growing Community", "আমাদের ক্রমবর্ধমান কমিউনিটি")}
          </h2>
          <p className="text-primary-foreground/70 mt-2">{t("Numbers that speak for our impact", "সংখ্যাগুলোই আমাদের অবদানের কথা বলে")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card/10 backdrop-blur-md border border-primary-foreground/15 rounded-2xl p-6 text-center text-primary-foreground hover:bg-card/20 transition-all duration-300 group">
              <div className={`${stat.color} h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-3xl md:text-4xl font-bold animate-count-up">{stat.value}</p>
              <p className="text-sm opacity-70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
