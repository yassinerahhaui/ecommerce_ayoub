"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import chanel from "@/assets/images/chanel.jpg";
import Slider from "react-slick";
import { language } from "@/elements/GlobalFunc";

const team = [
  {
    id: 1,
    name_fr: "Yassine Rahhaoui",
    name_ar: "ياسين رحاوي",
    desc_fr:
      "Yassine Rahhaoui est un entrepreneur passionné et motivé qui a fait ses preuves dans le secteur du commerce électronique. Il est le fondateur et PDG de YRShop, une boutique en ligne en croissance rapide qui propose une grande variété de produits aux clients à travers le Maroc.",
    desc_ar:
      "ياسين الرحاوي هو رجل أعمال شغوف ومتحمس ويتمتع بسجل حافل من النجاح في صناعة التجارة الإلكترونية. وهو المؤسس والرئيس التنفيذي لـ YRShop، وهو متجر إلكتروني سريع النمو يقدم مجموعة واسعة من المنتجات للعملاء في جميع أنحاء المغرب.",
    job_fr: "PDG",
    job_ar: "المدير التنفيذي",
  },
  {
    id: 2,
    name_fr: "Ayoub Hemdane",
    name_ar: "أيوب حمدان",
    desc_fr:
      "Ayoub est un leader visionnaire possédant une profonde compréhension du paysage du commerce électronique. Il s'engage à offrir à ses clients la meilleure expérience d'achat possible et travaille constamment à améliorer les offres et services de YRShop.",
    desc_ar:
      "أيوب هو قائد ذو رؤية يتمتع بفهم عميق لمشهد التجارة الإلكترونية. وهو ملتزم بتزويد عملائه بأفضل تجربة تسوق ممكنة، ويعمل باستمرار على تحسين عروض وخدمات YRShop.",
    job_fr: "Directeur",
    job_ar: "المدير",
  },
  {
    id: 3,
    name_fr: "Youssef Salhi",
    name_ar: "يوسف صالحي",
    desc_fr:
      "Un professionnel du marketing passionné et axé sur les résultats, avec une expérience éprouvée en matière de croissance des entreprises de commerce électronique. Youssef possède une compréhension approfondie du paysage numérique et une vaste expérience dans le développement et l'exécution de campagnes marketing réussies sur différents canaux.",
    desc_ar:
      "محترف تسويق متحمس وموجه نحو النتائج ويتمتع بسجل حافل في دفع النمو لشركات التجارة الإلكترونية. يتمتع يوسف بفهم عميق للمشهد الرقمي وخبرة واسعة في تطوير وتنفيذ حملات تسويقية ناجحة عبر قنوات مختلفة.",
    job_fr: "responsable marketing",
    job_ar: "مدير التسويق",
  },
];

const HomeAbout = () => {
  const [item, setItem] = useState(1);
  const [wdt, setWdt] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWdt(window.innerWidth);
    });
    wdt < 600 ? setItem(1) : setItem(2);
  }, [wdt, item]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: item,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="relative w-full overflow-x-hidden">
      <Image
        src={chanel}
        alt="chanel image"
        className={`w-full h-[calc(100vh_-_6rem)] md:h-[calc(100vh_-_108px)]`}
      />
      <article className="absolute max-w-[90%] py-5 w-[600px] rounded shadow-lg shadow-gray-400 top-[50%] left-[50%] lg:left-[40%] transform translate-x-[-50%] translate-y-[-50%] bg-white">
=======
    <section className="relative">
=======
    <section className="relative w-full overflow-x-hidden">
>>>>>>> 1d52e05 (add HomeAbout component and install slick-react)
      <Image
        src={chanel}
        alt="chanel image"
        className={`w-full h-[calc(100vh_-_6rem)] md:h-[calc(100vh_-_108px)]`}
      />
      <article className="absolute max-w-[90%] py-5 w-[600px] rounded shadow-lg shadow-gray-400 top-[50%] start-[50%] lg:start-[40%] transform translate-x-[-50%] translate-y-[-50%] bg-white">
>>>>>>> bbd794d (add HomeAbout component and install slick-react)
        <Slider {...settings}>
          {team.map((item) => {
            return (
              <div className="px-4 cursor-grab">
                <p className="text-sm font-medium text-gray-600 line-clamp-6">
                  “{language(item.desc_fr, item.desc_ar)}”
                </p>
                <h4 className="text-lg mt-3 font-bold">
                  {language(item.name_fr, item.name_ar)}
                </h4>
                <h5 className="text-sm font-semibold text-primary">
                  {language(item.job_fr, item.job_ar)}
                </h5>
              </div>
            );
          })}
        </Slider>
      </article>
    </section>
  );
};

export default HomeAbout;
