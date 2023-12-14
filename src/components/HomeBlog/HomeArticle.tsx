"use client";
import { language } from "@/elements/GlobalFunc";
import Link from "next-intl/link";

interface Article {
  id: number;
  title_fr: string;
  title_ar: string;
  article_fr: string;
  article_ar: string;
  created_at: Date;
}

const HomeArticle = ({ el, view_more }: { el: Article; view_more: string }) => {
  const data = el;
  return (
    <article key={data.id} className="border-t-2 border-primary pt-4 mb-6">
      <h3 className="text-gray-800 text-lg font-bold line-clamp-2">
        {language(data.title_fr, data.title_ar)}
      </h3>
      <time className="text-sm text-gray-400">{`${data.created_at.toLocaleString(
        undefined,
        {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          weekday: "long",
          hour: "2-digit",
          hour12: false,
          minute: "2-digit",
          second: "2-digit",
        }
      )}`}</time>
      <p className="text-gray-800 text-md font-medium line-clamp-4">
        {language(data.article_fr, data.article_ar)}
      </p>
      <Link
        href={`/blog/${data.id}`}
        className="text-md font-semibold mt-2 block w-max rounded py-1 px-2 border border-gray-800 hover:border-gray-950 text-gray-800 hover:text-gray-950"
      >
        {view_more}
      </Link>
    </article>
  );
};

export default HomeArticle;
