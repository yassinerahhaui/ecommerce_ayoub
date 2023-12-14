import Image from "next/image";
import imgBg from "@/assets/images/cosmetics/cream.png";
import HomeArticle from "./HomeArticle";
import HomeBlogHeader from "./HomeBlogHeader";
import { useTranslations } from "next-intl";

const articles = [
  {
    id: 1,
    title_fr:
      "Winter Glow Up : conseils de soins essentiels pour la saison froide",
    title_ar: "توهج الشتاء: نصائح أساسية للعناية بالبشرة لموسم البرد",
    article_fr:
      "À mesure que la température baisse et que le vent se lève, notre peau en prend un coup. Le temps hivernal peut être rigoureux, privant notre peau de ses huiles naturelles et la laissant sèche, squameuse et irritée. Mais ne désespérez pas ! Avec quelques ajustements simples à votre routine de soins de la peau, vous pouvez obtenir l’éclat hivernal sain dont vous rêvez.",
    article_ar:
      "مع انخفاض درجة الحرارة واشتداد الرياح، تتعرض بشرتنا لضربة قوية. يمكن أن يكون الطقس الشتوي قاسيًا، حيث يجرد بشرتنا من زيوتها الطبيعية ويتركها جافة ومتقشرة ومتهيجة. لكن لا تيأس! من خلال بعض التعديلات البسيطة على روتين العناية ببشرتك، يمكنك تحقيق التوهج الشتوي الصحي الذي تتوق إليه.",
    created_at: new Date(),
  },
  {
    id: 2,
    title_fr:
      "Le pouvoir des roses : comment adopter la couleur Pantone de l'année",
    title_ar: "قوة اللون الوردي: كيف تهز لون بانتون لهذا العام",
    article_fr:
      "Le rose est de retour en force, et ce n'est pas étonnant pourquoi. Cette couleur polyvalente peut être ludique et séduisante, ou sophistiquée et chic. Et la bonne nouvelle, c'est qu'il existe une nuance de rose pour tout le monde.",
    article_ar:
      "لقد عاد اللون الوردي بقوة، ولا عجب في السبب. يمكن أن يكون هذا اللون متعدد الاستخدامات مرحًا وجذابًا، أو متطورًا وأنيقًا. والخبر السار هو أن هناك درجة من اللون الوردي للجميع.",
    created_at: new Date(),
  },
  {
    id: 3,
    title_fr: "Clean Beauty 101 : Passer aux produits non toxiques",
    title_ar: "الجمال النظيف 101: التحول إلى المنتجات غير السامة",
    article_fr:
      "De plus en plus de personnes se tournent vers des produits de beauté propres, et pour cause. Ces produits sont exempts de produits chimiques nocifs, comme les parabènes, les sulfates et les phtalates, qui peuvent irriter la peau et même avoir des effets à long terme sur la santé.",
    article_ar:
      "يتحول المزيد والمزيد من الناس إلى منتجات التجميل النظيفة، وذلك لسبب وجيه. هذه المنتجات خالية من المواد الكيميائية الضارة، مثل البارابين والكبريتات والفثالات، والتي يمكن أن تكون مهيجة للجلد ولها آثار صحية طويلة المدى.",
    created_at: new Date(),
  },
  {
    id: 4,
    title_fr:
      "Astuces beauté DIY : des solutions simples pour une peau magnifique",
    title_ar: "حيل تجميلية يمكنك صنعها بنفسك: حلول بسيطة لبشرة رائعة",
    article_fr:
      "Vous n’avez pas besoin de dépenser une fortune en soins spa coûteux pour avoir une belle peau. Il existe de nombreuses astuces beauté simples que vous pouvez réaliser à la maison en utilisant des ingrédients que vous avez probablement déjà dans votre cuisine.",
    article_ar:
      "لا تحتاج إلى إنفاق ثروة على علاجات السبا باهظة الثمن للحصول على بشرة جميلة. هناك الكثير من الحيل التجميلية البسيطة التي يمكنك القيام بها في المنزل باستخدام مكونات ربما تكون موجودة بالفعل في مطبخك.",
    created_at: new Date(),
  },
];

const HomeBlog = () => {
  const t = useTranslations("Index");
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 px-6 md:px-20 my-20">
      <div className="flex w-full md:h-full items-center">
        <Image
          src={imgBg}
          className="w-full opacity-90"
          alt="cosmetics image icon"
        />
      </div>
      <div className="lg:col-span-2">
        <HomeBlogHeader
          from_our_blog={t("from_our_blog")}
          latest_article={t("latest_article")}
          home_blog_desc={t("home_blog_desc")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((el) => (
            <HomeArticle key={el.id} el={el} view_more={t("view_more")} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
