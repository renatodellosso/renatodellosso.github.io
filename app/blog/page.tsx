import { PostMetadata } from "@/lib/PostTypes";
import * as fs from "fs";
import Link from "next/link";
export const metadata = {
  title: "Blog"
}

const POST_PATH = "./app/blog/posts";

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
  const files = fs.readdirSync(POST_PATH).map(f => `${POST_PATH}/${f}`);
  const posts: (PostMetadata & { slug: string })[] = [];

  // 0 evaluates to false
  for (const file of files) {
    if (fs.statSync(file).isDirectory()) {
      files.push(...fs.readdirSync(file).map(f => `${file}/${f}`));
      continue;
    }

    const post = require(`./posts${file.replace(POST_PATH, "")}`).metadata as PostMetadata;

    if (!post.description || !post.tags || !post.date) {
      throw new Error(`Post ${file} is missing required metadata. Metadata provided: ${JSON.stringify(post)}`);
    }

    posts.push({
      ...post,
      slug: file.replace(POST_PATH, "posts").replace(".mdx", "").slice(0, "page".length * -1)
    });
  }

  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const postsByCategory: { [key: string]: (PostMetadata & { slug: string })[] } = {
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