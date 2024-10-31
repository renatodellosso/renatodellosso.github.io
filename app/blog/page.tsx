import { PostCategory, PostMetadata } from "@/lib/PostTypes";
import { readdirSync } from "fs";

export const metadata = {
  title: "Blog"
}

export default function Blog() {
  const posts = readdirSync("./app/blog/posts").map((slug) => {
    const post = require(`/app/blog/posts/${slug}`).metadata as PostMetadata;
    
    console.log(post);
  });
  
  const postsByCategory: { [category: string]: PostMetadata[] } = {};

	return (
		<div className="ml-4 mt-4">
			<div className="text-2xl">All Latest Posts</div>
			<div className="text-2xl">Posts by Category</div>
		</div>
	);
}