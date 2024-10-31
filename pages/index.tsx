import { Inter } from "next/font/google";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <div>
                Hi, I'm <span className="text-accent">Renato</span>.
            </div>
            <div>
                I'm a{" "}
                <Link
                    href="https://github.com/renatodellosso"
                    className="underline hover:decoration-secondary transition-colors"
                >
                    software engineer
                </Link>
                .
            </div>
        </main>
    );
}
