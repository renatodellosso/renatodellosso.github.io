import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center">
			<div className="flex flex-col justify-center w-1/2">
				<h1 className="text-2xl">
					Hi, I'm <span className="text-accent">Renato</span>.
				</h1>
				<div>
					I'm a{" "}
					<Link href="https://github.com/renatodellosso">
						software engineer
					</Link>
					, with a soft spot for concurrent programming and
					distributed systems. A few of my best projects are:
					<ul>
						<li>
							<Link href="4026.org">Gearbox</Link>: A website for
							FIRST Robotics teams.
						</li>
						<li>
							<Link href="marketpulse.vercel.app">
								Market Pulse
							</Link>
							: A web app that sends notifications about the stock
							market.
						</li>
						<li>
							<Link href="https://www.nuget.org/packages/BetterTasks">
								BetterTasks
							</Link>
							: A rewrite of the C# task system to be simpler and
							faster.
						</li>
					</ul>
				</div>
				<div>
					When I'm not coding, you may find me playing Dungeons &
					Dragons, video games, Magic: The Gathering; reading a book;
					or pondering what code I should write next.
				</div>
				<div className="w-[150%]">
					<h1 className="text-2xl">What I'm working on</h1>
					<ul>
						<li>This website</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
