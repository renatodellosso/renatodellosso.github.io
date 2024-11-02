"use server"

import Link from "next/link";

export default async function NavBar() {
    return (
        <div className="border-b-[1px] border-white flex flex-row gap-4">
            <Link className="text-xl text-primary hover:text-accent transition-colors decoration-transparent hover:decoration-transparent" href="/">
                Renato
            </Link>
            <Link className="text-xl decoration-transparent" href="/">
                Home
            </Link>
            <Link className="text-xl decoration-transparent" href="/blog">
                Blog
            </Link>
        </div>
    );
}
