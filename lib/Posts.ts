import { Metadata } from "next";
import * as fs from "fs";

export enum PostTag {
	Other = "Other",
	GameDesign = "Game Design",
	Programming = "Programming",
}

export type PostMetadata = Metadata & {
	description: string;
	tags: PostTag[];
	date: `${number}-${number}-${number}`;
	hidden: boolean;
};

export type PostMetadataWithSlug = PostMetadata & { slug: string };

const POST_PATH = "./app/blog/posts";

export function getPostList(): PostMetadataWithSlug[] {
	const files = fs.existsSync(POST_PATH)
		? fs.readdirSync(POST_PATH).map((f) => `${POST_PATH}/${f}`)
		: [];
	const posts: (PostMetadata & { slug: string })[] = [];

	for (const file of files) {
		if (fs.statSync(file).isDirectory()) {
			files.push(...fs.readdirSync(file).map((f) => `${file}/${f}`));
			continue;
		}

		const post = require(`./posts${file.replace(POST_PATH, "")}`)
			.metadata as PostMetadata;

		if (!post.title || !post.description || !post.tags || !post.date) {
			throw new Error(
				`Post ${file} is missing required metadata. Metadata provided: ${JSON.stringify(
					post
				)}`
			);
		}

		if (new Date(post.date).toString() === "Invalid Date") {
			throw new Error(`Post ${file} has an invalid date: ${post.date}`);
		}

		const invalidTags = post.tags.filter(
			(tag) => !Object.values(PostTag).includes(tag)
		);
		if (invalidTags.length) {
			throw new Error(
				`Post ${file} has invalid tags: ${invalidTags.join(", ")}`
			);
		}

		if (!post.hidden) {
			posts.push({
				...post,
				slug: file
					.replace(POST_PATH, "posts")
					.replace(".mdx", "")
					.slice(0, "page".length * -1),
			});
		}
	}

	posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return posts;
}
