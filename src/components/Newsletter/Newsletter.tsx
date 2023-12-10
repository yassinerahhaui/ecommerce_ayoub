import NewsletterArticle from "./NewsletterArticle";
import NewsletterForm from "./NewsletterForm";
import { useTranslations } from "next-intl";

const Newsletter = () => {
  const t = useTranslations("Index");
  return (
    <section className="grid grid-cols-1 w-full overflow-x-hidden md:grid-cols-2 mb-32 gap-10 px-6 md:px-20">
      <NewsletterArticle
        get_update={t("get_update")}
        newsletter={t("newsletter")}
        newsletter_desc={t("newsletter_desc")}
      />
      <NewsletterForm name={t("name")} email={t("email")} send={t("send")} />
    </section>
  );
};

export default Newsletter;
