import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Calendar, FileText, Users } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden" aria-label={t("Hero section", "হিরো সেকশন")}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="" className="w-full h-full object-cover" width={1920} height={800} role="presentation" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-primary-foreground">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
            {t("Welcome to DOA", "ডিওএ-তে স্বাগতম")}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            {t("Department of ICT", "আইসিটি অধিদপ্তর")}<br />
            <span className="text-secondary">{t("Officers Association", "অফিসার্স এসোসিয়েশন (ডিওএ)")}</span>
          </h1>

          {/* <p className="font-bengali text-lg md:text-xl opacity-90 mb-2">
            {t("Department of ICT Officers Association (DOA)", "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ)")}
          </p> */}

          <p className="text-lg opacity-80 mb-8 max-w-xl">
            <p className="text-lg opacity-80 mb-8 max-w-xl text-justify">
  {t(
    "Empowering ICT professionals through collaboration, continuous learning, knowledge sharing, and collective growth since 2019, fostering innovation and strengthening the digital ecosystem.",
    "২০১৯ সাল থেকে সহযোগিতা, ধারাবাহিক শিক্ষা, জ্ঞান বিনিময় এবং সম্মিলিত অগ্রগতির মাধ্যমে আইসিটি পেশাদারদের ক্ষমতায়ন করে উদ্ভাবনকে উৎসাহিত করা এবং ডিজিটাল ইকোসিস্টেমকে আরও শক্তিশালী করা।"
  )}
</p>
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-gold text-secondary-foreground font-semibold shadow-elevated hover:opacity-90 transition-opacity">
              {t("Become a Member", "সদস্য হন")}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            {/* <Button
  size="lg"
  variant="outline"
  className="border-white/40 text-gold hover:bg-white/10"
>
  {t("Learn More", "আরও জানুন")}
</Button> */}
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { icon: Users, label: "480+", sub: t("Members", "সদস্য") },
            { icon: Calendar, label: "2+", sub: t("Events", "ইভেন্ট") },
            { icon: FileText, label: "4+", sub: t("Notices", "নোটিশ") },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card/10 backdrop-blur-md border border-primary-foreground/20 rounded-xl px-5 py-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <item.icon className="h-6 w-6 text-secondary mb-1" aria-hidden="true" />
              <p className="text-2xl font-bold">{item.label}</p>
              <p className="text-xs opacity-70">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
