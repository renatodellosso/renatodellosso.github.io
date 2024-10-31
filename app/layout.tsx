import NavBar from "@/components/NavBar";

import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Renato",
		default: "Renato",
	}
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
