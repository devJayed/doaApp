import { useLanguage } from "@/contexts/LanguageContext";
import { Volume2 } from "lucide-react";

const NewsTicker = () => {
  const { t } = useLanguage();

  const newsItems = [
    t("🔔 Formation of an election commission to hold the executive council elections of the DOA", "🔔 আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন এর কার্যকরী পরিষদ নির্বাচন অনুষ্ঠানের লক্ষ্যে নির্বাচন কমিশন গঠন।"),
    t("📢 Regarding the transfer of responsibilities of the DOA.", "📢 আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন এর দায়িত্বভার হস্তান্তর সংক্রান্ত।"),
  ];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden" role="marquee" aria-label={t("Latest news", "সর্বশেষ খবর")}>
      <div className="container mx-auto px-4 flex items-center h-10">
        <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-primary-foreground/20">
          <Volume2 className="h-4 w-4" aria-hidden="true" />
          <span className="text-sm font-semibold">{t("Latest", "সর্বশেষ")}</span>
        </div>
        <div className="overflow-hidden ml-4">
          <div className="animate-ticker whitespace-nowrap">
            {newsItems.map((item, i) => (
              <span key={i} className="text-sm mx-8">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
