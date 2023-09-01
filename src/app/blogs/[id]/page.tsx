
interface SingleBlogProps {
  params: Record<string, string | string[] | undefined>;
}

const SingleBlog: React.FC<SingleBlogProps> = ({ params }) => {
  console.log(params.id);

  return (
    <div>
      <h1>SingleBlog {params.id}</h1>
    </div>
  );
};

export default SingleBlog;
