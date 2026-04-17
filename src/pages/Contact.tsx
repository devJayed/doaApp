import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 text-secondary" aria-hidden="true" />
          <h1 className="text-4xl font-heading font-bold">{t("Contact Us", "যোগাযোগ করুন")}</h1>
          <p className="mt-2 opacity-80">{t("Get in touch with DOA", "ডিওএ-র সাথে যোগাযোগ করুন")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">{t("Send a Message", "বার্তা পাঠান")}</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder={t("Your Name", "আপনার নাম")} aria-label={t("Your Name", "আপনার নাম")} />
                <Input placeholder={t("Email Address", "ইমেইল ঠিকানা")} type="email" aria-label={t("Email Address", "ইমেইল ঠিকানা")} />
              </div>
              <Input placeholder={t("Subject", "বিষয়")} aria-label={t("Subject", "বিষয়")} />
              <Textarea placeholder={t("Your message...", "আপনার বার্তা...")} rows={5} aria-label={t("Message", "বার্তা")} />
              <Button className="w-full gradient-primary text-primary-foreground" size="lg" type="submit">
                <Send className="h-4 w-4 mr-2" />
                {t("Send Message", "বার্তা পাঠান")}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">{t("Contact Information", "যোগাযোগের তথ্য")}</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: t("Address", "ঠিকানা"), value: t("BCC Bhaban, E-14/X, ICT Tower,\nAgargaon, Sher-e-Bangla Nagar,\nDhaka-1207, Bangladesh", "বিসিসি ভবন, ই-১৪/এক্স, আইসিটি টাওয়ার,\nআগারগাঁও, শের-ই-বাংলা নগর,\nঢাকা-১২০৭, বাংলাদেশ") },
                  { icon: Phone, label: t("Phone", "ফোন"), value: "+880-2-XXXXXXXX" },
                  { icon: Mail, label: t("Email", "ইমেইল"), value: "info@doabd.org" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden h-64 gradient-primary flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" aria-hidden="true" />
                <p className="text-sm opacity-70">{t("Map Integration", "মানচিত্র")}</p>
                <p className="text-xs opacity-50">{t("Agargaon, Dhaka", "আগারগাঁও, ঢাকা")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
