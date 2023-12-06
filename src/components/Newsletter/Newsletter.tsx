import NewsletterArticle from "./NewsletterArticle";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
      <NewsletterArticle />
      <NewsletterForm />
    </section>
  );
};

export default Newsletter;
