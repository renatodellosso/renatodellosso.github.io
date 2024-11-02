export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex justify-center">
			<div className="flex flex-col justify-center w-1/2">{children}</div>
		</main>
	);
}
