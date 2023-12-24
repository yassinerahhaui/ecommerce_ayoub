import BlogArticles from "@/components/BlogArticles/BlogArticles";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import HomeBlog from "@/components/HomeBlog/HomeBlog";
import Newsletter from "@/components/Newsletter/Newsletter";

const Blog = () => {
  return (
    <main className="">
      <BlogHeader />
      <HomeBlog />
      <BlogArticles />
      <Newsletter />
    </main>
  );
};

export default Blog;
