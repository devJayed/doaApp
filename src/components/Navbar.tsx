import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bell, Globe, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("Home", "হোম"), path: "/" },
    { label: t("Notices", "নোটিশ"), path: "/notices" },
    { label: t("Events", "ইভেন্ট"), path: "/events" },
    { label: t("Gallery", "গ্যালারি"), path: "/gallery" },
    { label: t("About", "সম্পর্কে"), path: "/about" },
    { label: t("Contact", "যোগাযোগ"), path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card" role="navigation" aria-label={t("Main navigation", "প্রধান নেভিগেশন")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label={t("Go to homepage", "হোমপেজে যান")}>
            <img src="/images/doa-logo.png" alt="DOA Logo" className="h-12 w-12 md:h-14 md:w-14" />
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-foreground leading-tight">
                {t("Department of ICT Officers Association", "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ)")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("(DOA)", "(ডিওএ)")}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1.5 text-xs font-semibold border-primary/30 hover:bg-primary/10"
              aria-label={t("Switch to Bengali", "Switch to English")}
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "বাংলা" : "EN"}
            </Button>

            <Button variant="ghost" size="icon" className="relative" aria-label={t("Notifications", "বিজ্ঞপ্তি")}>
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-secondary-foreground text-[10px] flex items-center justify-center font-bold" aria-label="3 notifications">3</span>
            </Button>
            <Button className="gradient-primary text-primary-foreground">
              <LogIn className="h-4 w-4 mr-2" />
              {t("Login", "লগইন")}
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1 text-xs font-semibold border-primary/30 h-8 px-2"
              aria-label={t("Switch to Bengali", "Switch to English")}
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "en" ? "বাংলা" : "EN"}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={isOpen}
              aria-label={isOpen ? t("Close menu", "মেনু বন্ধ করুন") : t("Open menu", "মেনু খুলুন")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in-up" role="menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-4">
              <Button className="w-full gradient-primary text-primary-foreground">
                <LogIn className="h-4 w-4 mr-2" />
                {t("Login", "লগইন")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
