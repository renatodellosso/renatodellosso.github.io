import { Metadata } from "next";

export enum PostTag {
  Other = "Other",
  GameDesign = "Game Design",
  Programming = "Programming",
}

export type PostMetadata = Metadata & {
  description: string;
  tags: PostTag[];
  date: `${number}-${number}-${number}`;
}