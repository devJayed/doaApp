import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Eye, Target, Users } from "lucide-react";

const committee = [
  { name: "Mohammad Rahman", nameBn: "মোহাম্মদ রহমান", role: "President", roleBn: "সভাপতি", dept: "ICT Division", deptBn: "আইসিটি বিভাগ" },
  { name: "Fatema Begum", nameBn: "ফাতেমা বেগম", role: "Vice President", roleBn: "সহ-সভাপতি", dept: "BCC", deptBn: "বিসিসি" },
  { name: "Kamal Hossain", nameBn: "কামাল হোসেন", role: "General Secretary", roleBn: "সাধারণ সম্পাদক", dept: "ICT Division", deptBn: "আইসিটি বিভাগ" },
  { name: "Nusrat Jahan", nameBn: "নুসরাত জাহান", role: "Treasurer", roleBn: "কোষাধ্যক্ষ", dept: "DoICT", deptBn: "ডিওআইসিটি" },
  { name: "Ashraful Islam", nameBn: "আশরাফুল ইসলাম", role: "Executive Member", roleBn: "কার্যনির্বাহী সদস্য", dept: "BCC", deptBn: "বিসিসি" },
  { name: "Tahmina Akter", nameBn: "তাহমিনা আক্তার", role: "Executive Member", roleBn: "কার্যনির্বাহী সদস্য", dept: "ICT Division", deptBn: "আইসিটি বিভাগ" },
];

const About = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Target, title: t("Mission", "লক্ষ্য"), text: t("To foster a strong professional community of ICT officers committed to excellence in public service and digital transformation.", "সরকারি সেবা এবং ডিজিটাল রূপান্তরে শ্রেষ্ঠত্বে প্রতিশ্রুতিবদ্ধ আইসিটি কর্মকর্তাদের একটি শক্তিশালী পেশাদার সম্প্রদায় গড়ে তোলা।") },
    { icon: Eye, title: t("Vision", "দর্শন"), text: t("A digitally empowered Bangladesh where ICT officers lead innovation in governance and public services.", "একটি ডিজিটালভাবে ক্ষমতায়িত বাংলাদেশ যেখানে আইসিটি কর্মকর্তারা শাসন ও সরকারি সেবায় উদ্ভাবনে নেতৃত্ব দেন।") },
    { icon: Award, title: t("Objectives", "উদ্দেশ্য"), text: t("Promote professional development, knowledge sharing, and collaboration among ICT department officers across Bangladesh.", "বাংলাদেশজুড়ে আইসিটি বিভাগের কর্মকর্তাদের মধ্যে পেশাদার উন্নয়ন, জ্ঞান বিনিময় এবং সহযোগিতা প্রচার করা।") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold">{t("About DOA", "ডিওএ সম্পর্কে")}</h1>
          <p className="mt-2 opacity-80">{t("Department of ICT Officers Association", "আইসিটি অধিদপ্তর অফিসার্স এসোসিয়েশন (ডিওএ)")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Users className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="text-3xl font-heading font-bold text-foreground">{t("Executive Committee", "কার্যনির্বাহী কমিটি")}</h2>
          </div>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committee.map((member, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card border border-border text-center hover:shadow-elevated transition-all group">
              <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-heading font-bold group-hover:scale-110 transition-transform" aria-hidden="true">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h4 className="font-semibold text-foreground">{t(member.name, member.nameBn)}</h4>
              <p className="text-sm text-primary font-medium">{t(member.role, member.roleBn)}</p>
              <p className="text-xs text-muted-foreground mt-1">{t(member.dept, member.deptBn)}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
