"use client";
import { language } from "@/elements/GlobalFunc";
import { ArticleInterface } from "@/interfaces/blogArticle";
import { Link } from "@/navigation";
import Image from "next/image";

const BlogArticleCard = ({
  article,
  view_more,
}: {
  article: ArticleInterface;
  view_more: string;
}) => {
  return (
    <article className="w-full rounded">
      <Image
        src={article.image}
        alt="article image"
        className="w-full rounded"
      />
      <h4 className="text-gray-800 text-2xl font-semibold line-clamp-2">
        {language(article.name_fr, article.name_ar)}
      </h4>
      <span className="text-sm block text-gray-500 my-2">{article.date}</span>
      <p className="text-gray-800 text-md line-clamp-3">
        {language(article.desc_fr, article.desc_ar)}
      </p>
      <Link
        href={`/blog/${article.id}`}
        className="text-lg text-primary border border-primary rounded hover:text-primary-dark hover:border-primary-dark py-1 px-3 cursor-pointer block w-max h-max mt-2"
      >
        {view_more}
      </Link>
    </article>
  );
};

export default BlogArticleCard;
