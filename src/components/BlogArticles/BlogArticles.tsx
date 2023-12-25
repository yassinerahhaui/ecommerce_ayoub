import BlogArticleCard from "../BlogArticleCard/BlogArticleCard";
import { articles } from "@/data/blogarticles";
import { useTranslations } from "next-intl";

const BlogArticles = () => {
  const t = useTranslations("Index");
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 mb-20">
      {articles.map((article) => (
        <BlogArticleCard
          key={article.id}
          article={article}
          view_more={t("view_more")}
        />
      ))}
    </section>
  );
};

export default BlogArticles;
