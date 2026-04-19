import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("Home", "হোম"), path: "/" },
    { label: t("Notices", "নোটিশ"), path: "/notices" },
    { label: t("Events", "ইভেন্ট"), path: "/events" },
    { label: t("Gallery", "গ্যালারি"), path: "/gallery" },
    { label: t("About", "সম্পর্কে"), path: "/about" },
    { label: t("Contact", "যোগাযোগ"), path: "/contact" },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/doa-logo.png" alt="DOA" className="h-12 w-12 bg-card/20 rounded-full p-1" />
              <div>
                <h3 className="font-heading font-bold text-lg">{t("DOA", "ডিওএ")}</h3>
                <p className="text-sm opacity-80">{t("Est. 2019", "প্রতিষ্ঠিত ২০১৯")}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t(
                "Department of ICT Officers Association (DOA) is a professional body dedicated to fostering collaboration among ICT officers.",
                "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ) - আইসিটি কর্মকর্তাদের মধ্যে সহযোগিতা বৃদ্ধিতে নিবেদিত একটি পেশাদার সংস্থা।"
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t("Quick Links", "দ্রুত লিংক")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t("Contact Us", "যোগাযোগ করুন")}</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{t("ICT Division, ICT Tower, Agargaon, Dhaka-1207", "আইসিটি বিভাগ, আইসিটি টাওয়ার, আগারগাঁও, ঢাকা-১২০৭")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>+880-2-XXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>info@doictofficres.org</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          {/* <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t("Follow Us", "অনুসরণ করুন")}</h4>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                // { Icon: Twitter, label: "Twitter" },
                // { Icon: Youtube, label: "Youtube" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="h-10 w-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div> */}
          <div>
  <h4 className="font-heading font-bold text-lg mb-4">
    {t("Follow Us", "অনুসরণ করুন")}
  </h4>

  <div className="flex gap-3">
    <a
      href="https://www.facebook.com/groups/doict"
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Facebook"
    >
      <Facebook className="h-5 w-5" />
    </a>
  </div>
</div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} {t("Department of ICT Officers Association (DOA). All rights reserved.", "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ) সর্বস্বত্ব সংরক্ষিত।")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
