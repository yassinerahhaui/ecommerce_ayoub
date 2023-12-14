interface ArticleHeader {
  from_our_blog: string;
  latest_article: string;
  home_blog_desc: string;
}
const HomeBlogHeader = ({
  from_our_blog,
  latest_article,
  home_blog_desc,
}: ArticleHeader) => {
  return (
    <>
      <div className="w-8 border border-primary mb-2"></div>
      <h5 className="text-primary text-md font-semibold">{from_our_blog}</h5>
      <h2 className="text-6xl font-bold text-gray-800 my-4">
        {latest_article}
      </h2>
      <p className="text-sm text-gray-400 mb-6">{home_blog_desc}</p>
    </>
  );
};

export default HomeBlogHeader;
