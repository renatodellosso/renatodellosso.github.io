import { Metadata } from "next";

export enum PostCategory {
  Other = "Other",
  GameDesign = "Game Design",
  Programming = "Programming",
}

export type PostMetadata = Metadata & {
  other: {
    category: PostCategory;
    date: string;
  }
}