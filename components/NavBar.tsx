import Link from "next/link";

export default function NavBar() {
    return (
        <div className="border-b-[1px] border-white flex flex-row">
            <Link className="text-2xl text-primary hover:text-accent transition-colors" href="/">
                Renato
            </Link>
        </div>
    );
}
