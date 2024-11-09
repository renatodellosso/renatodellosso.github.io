export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex justify-center mt-4 mb-16">
			<div className="flex flex-col justify-center w-1/2 gap-4">{children}</div>
		</main>
	);
}
