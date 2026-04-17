import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // ✅ Use section IDs instead of routes
  const navLinks = [
    { label: t("Home", "হোম"), id: "home" },
    { label: t("Notices & Events", "নোটিশ ও ইভেন্ট"), id: "notice-event" },
    { label: t("Community", "পরিসংখ্যান"), id: "stats" },
    { label: t("Gallery", "গ্যালারি"), id: "gallery" },
    { label: t("Contact", "যোগাযোগ"), id: "contact" },
  ];

  // ✅ Scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button
            onClick={() => handleScroll("home")}
            className="flex items-center gap-3"
          >
            <img src="/doa-logo.png" alt="DOA Logo" className="h-12 w-12 md:h-14 md:w-14" />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-foreground leading-tight">
                {t("Department of ICT Officers Association", "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ)")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("(DOA)", "(ডিওএ)")}
              </p>
            </div>
          </button> 

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1.5 text-xs font-semibold border-primary/30 hover:bg-primary/10"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "বাংলা" : "EN"}
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1 text-xs font-semibold border-primary/30 h-8 px-2"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "বাংলা" : "EN"}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left px-4 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;