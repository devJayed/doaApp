import { useLanguage } from "@/contexts/LanguageContext";
import { Quote } from "lucide-react";

const WelcomeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background" aria-label={t("President's message", "সভাপতির বাণী")}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            {t("Message from the", "বাণী")} <span className="text-gradient">{t("President", "সভাপতির")}</span>
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mb-8" aria-hidden="true" />

          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 relative">
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" aria-hidden="true" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-28 h-28 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-heading font-bold shrink-0 animate-pulse-glow" aria-hidden="true">
                DOA
              </div>
              <div className="text-left">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t(
                    '"Welcome to the Department of ICT Officers Association (DOA). Our mission is to create a strong, vibrant community of ICT professionals committed to excellence in public service. Together, we are building a Digital Bangladesh — one innovation at a time."',
                    '"আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ) -এর অফিশিয়াল পেজে স্বাগতম। আমাদের লক্ষ্য হলো সরকারি সেবায় শ্রেষ্ঠত্বে প্রতিশ্রুতিবদ্ধ আইসিটি পেশাদারদের একটি শক্তিশালী, প্রাণবন্ত সম্প্রদায় তৈরি করা। একসাথে, আমরা একটি ডিজিটাল বাংলাদেশ গড়ে তুলছি।"'
                  )}
                </p>
                <p className="font-semibold text-foreground">— {t("President, DOA", "সভাপতি")}</p>
                <p className="text-sm text-muted-foreground">{t("Department of ICT Officers Association", "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ)")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
