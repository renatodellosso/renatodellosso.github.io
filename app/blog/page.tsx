import { getPostList, PostMetadata, PostMetadataWithSlug, PostTag } from "@/lib/Posts";
import Link from "next/link";
export const metadata = {
  title: "Blog"
}

function Post({ post }: { post: PostMetadata & { slug: string } }) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`}>
        {post.date}: {post.title?.toString()} - {post.description}
      </Link>
    </li>
  )
}


export default function Blog() {
  const posts = getPostList();

  const postsByCategory: { [key: string]: PostMetadataWithSlug[] } = {
    "All Posts": posts
  };

  for (const post of posts) {
    for (const tag of post.tags) {
      if (!postsByCategory[tag]) {
        postsByCategory[tag] = [];
      }

      postsByCategory[tag].push(post);
    }
  }

	return (
		<div className="ml-4 mt-4">
			<h2>Latest Posts</h2>
      <ul>
        {posts.slice(0, 5).map((post, index) => <Post key={index} post={post} />)}
      </ul>
      <h2>Posts by Category</h2>
      {
        Object.entries(postsByCategory).map(([category, posts], index) => (
          <details key={index}>
            <summary className="text-lg">{category}</summary>
            <ul>
              {posts.map((post, index) => <Post key={index} post={post} />)}
            </ul>
          </details>
        ))
      }
		</div>
	);
}