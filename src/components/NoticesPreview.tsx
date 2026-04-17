import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, FileText, Tag } from "lucide-react";

const notices = [
  {
    title: "Regarding the transfer of responsibilities of the DOA.",
    titleBn: "ডিওএ-এর দায়িত্ব হস্তান্তর সংক্রান্ত",
    date: "April 12, 2026",
    dateBn: "১২ এপ্রিল ২০২৬",
    category: "Circular",
    categoryBn: "সার্কুলার",
    urgent: true,
    pdf: "/files/1.pdf",
  },
  {
    title: "Formation of an election commission to hold elections to the executive council of the DOA.",
    titleBn: "ডিওএ নির্বাহী পরিষদের নির্বাচন পরিচালনার জন্য নির্বাচন কমিশন গঠন",
    date: "March 13, 2025",
    dateBn: "১৩ মার্চ ২০২৫",
    category: "Circular",
    categoryBn: "সার্কুলার",
    urgent: false,
    pdf: "/files/3.pdf",
  },
  {
    title: "Constitution of the DOA.",
    titleBn: "ডিওএ-এর গঠনতন্ত্র",
    date: "July 13, 2023",
    dateBn: "১৩ জুলাই ২০২৩",
    category: "File",
    categoryBn: "ফাইল",
    urgent: false,
    pdf: "/files/4.pdf",
  },
  {
    title: "Minutes of the meeting of DOA",
    titleBn: "ডিওএ-এর সভার কার্যবিবরণী",
    date: "February 6, 2022",
    dateBn: "৬ ফেব্রুয়ারী ২০২২",
    category: "Meeting",
    categoryBn: "সভা",
    urgent: false,
    pdf: "/files/5.pdf",
  },
  {
    title: "Additional Notice 1",
    titleBn: "অতিরিক্ত নোটিশ ১",
    date: "January 1, 2022",
    dateBn: "১ জানুয়ারি ২০২২",
    category: "Circular",
    categoryBn: "সার্কুলার",
    urgent: false,
    pdf: "/files/6.pdf",
  },
  {
    title: "Additional Notice 2",
    titleBn: "অতিরিক্ত নোটিশ ২",
    date: "January 5, 2022",
    dateBn: "৫ জানুয়ারি ২০২২",
    category: "Circular",
    categoryBn: "সার্কুলার",
    urgent: false,
    pdf: "/files/7.pdf",
  },
];

const NoticesPreview = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
          <FileText className="h-5 w-5 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground">
          {t("Latest Notices", "সর্বশেষ নোটিশ")}
        </h3>
      </div>

      <div className="space-y-3">
        {notices.map((notice, i) => (
          <a
            key={i}
            href={notice.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-all duration-300 group border border-border hover:border-primary/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {notice.urgent && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground uppercase">
                      {t("Urgent", "জরুরি")}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Tag className="h-3 w-3" />
                    {t(notice.category, notice.categoryBn)}
                  </span>
                </div>

                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {t(notice.title, notice.titleBn)}
                </h4>
              </div>

              <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                <Clock className="h-3 w-3" />
                {t(notice.date, notice.dateBn)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NoticesPreview;