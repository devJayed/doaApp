import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Clock, FileText, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const notices = [
  { title: "Regarding the transfer of responsibilities of the DOA.", titleBn: "ডিওএ-এর দায়িত্ব হস্তান্তর সংক্রান্ত", date: "April 12, 2026", dateBn: "১২ এপ্রিল ২০২৬", category: "Circular", categoryBn: "সার্কুলার", urgent: true, hasPdf: true },

  { title: "Formation of an election commission to hold elections to the executive council of the DOA.", titleBn: "ডিওএ নির্বাহী পরিষদের নির্বাচন পরিচালনার জন্য নির্বাচন কমিশন গঠন", date: "March 13, 2025", dateBn: "১৩ মার্চ ২০২৫", category: "Circular", categoryBn: "সার্কুলার", urgent: false, hasPdf: true },

  { title: "Constitution of the DOA.", titleBn: "ডিওএ-এর গঠনতন্ত্র", date: "July 13, 2023", dateBn: "১৩ জুলাই ২০২৩", category: "Circular", categoryBn: "সার্কুলার", urgent: false, hasPdf: true },

  { title: "Minutes of the meeting of DOA", titleBn: "ডিওএ-এর সভার কার্যবিবরণী", date: "February 6, 2022", dateBn: "৬ ফেব্রুয়ারী ২০২২", category: "Meeting", categoryBn: "সভা", urgent: false, hasPdf: false },
];

const NoticesPreview = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">{t("Latest Notices", "সর্বশেষ নোটিশ")}</h3>
        </div>
        <Link to="/notices">
          <Button variant="ghost" size="sm" className="text-primary">
            {t("View All", "সকল দেখুন")} <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>

      <div className="space-y-3">
        {notices.map((notice, i) => (
          <div key={i} className="bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group border border-border hover:border-primary/30" role="article">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {notice.urgent && <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground uppercase">{t("Urgent", "জরুরি")}</span>}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Tag className="h-3 w-3" aria-hidden="true" />{t(notice.category, notice.categoryBn)}</span>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{t(notice.title, notice.titleBn)}</h4>
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap"><Clock className="h-3 w-3" aria-hidden="true" />{t(notice.date, notice.dateBn)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesPreview;
