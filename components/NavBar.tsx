import { getPostList } from "@/lib/Posts";
import Link from "next/link";

export default function NavBar() {
	const anyPosts = getPostList().length > 0;

	return (
		<div className="border-b-[1px] border-white flex flex-row gap-4 pl-1">
			<Link
				className="text-xl text-primary hover:text-accent transition-colors decoration-transparent hover:decoration-transparent"
				href="/"
			>
				Renato
			</Link>
			<Link className="text-xl decoration-transparent" href="/">
				Home
			</Link>
			{anyPosts && (
				<Link className="text-xl decoration-transparent" href="/blog">
					Blog
				</Link>
			)}
		</div>
	);
}
