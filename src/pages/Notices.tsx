import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Download, FileText, Search, Tag } from "lucide-react";

const notices = [
  { title: "Regarding the transfer of responsibilities of the DOA.", titleBn: "ডিওএ-এর দায়িত্ব হস্তান্তর সংক্রান্ত", date: "April 12, 2026", dateBn: "১২ এপ্রিল ২০২৬", category: "Circular", categoryBn: "সার্কুলার", urgent: true, hasPdf: true },

  { title: "Formation of an election commission to hold elections to the executive council of the DOA.", titleBn: "ডিওএ নির্বাহী পরিষদের নির্বাচন পরিচালনার জন্য নির্বাচন কমিশন গঠন", date: "March 13, 2025", dateBn: "১৩ মার্চ ২০২৫", category: "Circular", categoryBn: "সার্কুলার", urgent: false, hasPdf: true },

  { title: "Constitution of the DOA.", titleBn: "ডিওএ-এর গঠনতন্ত্র", date: "July 13, 2023", dateBn: "১৩ জুলাই ২০২৩", category: "Circular", categoryBn: "সার্কুলার", urgent: false, hasPdf: true },

  { title: "Minutes of the meeting of DOA", titleBn: "ডিওএ-এর সভার কার্যবিবরণী", date: "February 6, 2022", dateBn: "৬ ফেব্রুয়ারী ২০২২", category: "Meeting", categoryBn: "সভা", urgent: false, hasPdf: false },
];

const Notices = () => {
  const { t } = useLanguage();

  const categories = [
    { en: "All", bn: "সকল" }, { en: "Meeting", bn: "সভা" },
    { en: "File", bn: "ফাইল" }, { en: "Circular", bn: "সার্কুলার" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-12 w-12 mx-auto mb-4 text-secondary" aria-hidden="true" />
          <h1 className="text-4xl font-heading font-bold">{t("Notice Board", "নোটিশ বোর্ড")}</h1>
          <p className="mt-2 opacity-80">{t("Official notices, circulars, and announcements", "অফিসিয়াল নোটিশ, সার্কুলার এবং ঘোষণা")}</p> 
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input placeholder={t("Search notices...", "নোটিশ খুঁজুন...")} className="pl-10" aria-label={t("Search notices", "নোটিশ খুঁজুন")} />
          </div>
          <div className="flex gap-2 flex-wrap" role="group" aria-label={t("Filter by category", "বিভাগ অনুযায়ী ফিল্টার")}>
            {categories.map((cat) => (
              <Button key={cat.en} variant={cat.en === "All" ? "default" : "outline"} size="sm" className={cat.en === "All" ? "gradient-primary text-primary-foreground" : ""}>
                {t(cat.en, cat.bn)}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {notices.map((notice, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all border border-border hover:border-primary/30 cursor-pointer group" role="article">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {notice.urgent && <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground uppercase">{t("Urgent", "জরুরি")}</span>}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Tag className="h-3 w-3" aria-hidden="true" />{t(notice.category, notice.categoryBn)}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{t(notice.title, notice.titleBn)}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" aria-hidden="true" />{t(notice.date, notice.dateBn)}</span>
                  {notice.hasPdf && (
                    <Button size="sm" variant="outline" className="text-primary border-primary/30">
                      <Download className="h-3 w-3 mr-1" /> PDF
                    </Button>
                  )}
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

export default Notices;
