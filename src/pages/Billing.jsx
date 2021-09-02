import { useTheme } from "../hooks/useTheme";

const Billing = () => {
	const { toggleTheme } = useTheme();

	return (
		<div className="p-5">
			<div className="flex items-center justify-between">
				<h1 className="text-23 font-bold">Billing</h1>

				<div className="px-2">
					<button
						onClick={() => toggleTheme("light")}
						className="bg-white text-black"
					>
						Light
					</button>
					<button
						onClick={() => toggleTheme("dark")}
						className="bg-black text-white"
					>
						Dark
					</button>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-5">
				<div class="bg-white rounded-2xl  ">
					<nav class="flex text-base">
						<button class="text-faf py-4 px-5 block hover:bg-gray-100 hover:opacity-90 focus:outline-none  border-b-2 font-medium border-faf">
							Profit Share
						</button>
						<button class="text-black py-4 px-6 block hover:bg-gray-100 hover:opacity-90 focus:outline-none">
							Subscription
						</button>
					</nav>
					<div className="p-4">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dol ore magna aliq uyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et e a rebum. Stet clita ka sd gubergren, no sea takimata sa nctus
						est Lorem ipsum d o lor sit amet. Lorem ipsum dolor sit am et,
						consetetur sa d ip scing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam volu
						ptua..
					</div>
				</div>
				<div className="bg-white rounded-2xl p-5">
					<div>
						<span className="text-">Graph name</span>
					</div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus
					pariatur sequi! Atque aut dolore voluptatum, animi quisquam officia
					tenetur voluptate saepe, commodi ad ducimus sed laborum ut recusandae
					libero?
				</div>
			</div>
		</div>
	);
};

export default Billing;
