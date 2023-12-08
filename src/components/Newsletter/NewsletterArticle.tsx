interface NewsletterArticleI {
  get_update: string;
  newsletter: string;
  newsletter_desc: string;
}
const NewsletterArticle = ({
  get_update,
  newsletter,
  newsletter_desc,
}: NewsletterArticleI) => {
  return (
    <article className="flex flex-col w-full justify-center items-start">
      <div className="">
        <div className="w-8 border border-primary"></div>
        <h4 className="text-sm text-primary font-semibold my-2">
          {get_update}
        </h4>
        <h3 className="text-4xl md:text-5xl my-6 text-gray-800 font-bold">
          {newsletter}
        </h3>
      </div>
      <p className="text-sm text-gray-400 mt-4">{newsletter_desc}</p>
    </article>
  );
};

export default NewsletterArticle;
