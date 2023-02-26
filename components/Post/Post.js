import Link from "next/link";
import { useState, useEffect } from "react";
import sanityClient from "../../client";

const Post = () => {
  const [postData, setPost] = useState(null, postData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                mainImage,
                description,
                slug,
                author->
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1></h1>
        <h2></h2>
        <div>
          <article>
            <Link>
              <span></span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Post;
