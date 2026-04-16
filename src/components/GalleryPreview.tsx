import { useLanguage } from "@/contexts/LanguageContext";
import { Images } from "lucide-react";

const galleryImages = [
  {
    title: "Annual Conference 2025",
    titleBn: "বার্ষিক সম্মেলন ২০২৫",
    image: "/images/1.jpeg",
  },
  {
    title: "Training Workshop",
    titleBn: "প্রশিক্ষণ কর্মশালা",
    image: "/images/2.jpeg",
  },
  {
    title: "Training Workshop",
    titleBn: "প্রশিক্ষণ কর্মশালা",
    image: "/images/3.jpeg",
  },
];

const GalleryPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-muted" aria-label={t("Photo Gallery", "ফটো গ্যালারি")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center">
              <Images className="h-5 w-5 text-secondary-foreground" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground">{t("Photo Gallery", "ফটো গ্যালারি")}</h2>
              <p className="text-sm text-muted-foreground">{t("Moments from our journey", "আমাদের যাত্রার মুহূর্তগুলো")}</p>
            </div>
          </div>
          {/* <Link to="/gallery">
            <Button variant="ghost" className="text-primary">
              {t("View All", "সকল দেখুন")} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            // <div key={i} className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${img.gradient} overflow-hidden cursor-pointer group`} role="img" aria-label={t(img.title, img.titleBn)}>
            //   <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-end p-4">
            //     <p className="text-primary-foreground font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            //       {t(img.title, img.titleBn)}
            //     </p>
            //   </div>
            // </div>
            <div
  key={i}
  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
  role="img"
  aria-label={t(img.title, img.titleBn)}
>
  {/* Image */}
  <img
    src={img.image}
    alt={img.title}
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
    <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
      {t(img.title, img.titleBn)}
    </p>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
