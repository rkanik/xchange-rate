import { useState } from "react";
import ApexChart from "../components/Chart";
import { useTheme } from "../hooks/useTheme";
import clsfy from "classnames";

const Billing = () => {
	const { toggleTheme } = useTheme();
	const [selectedTab, setSelectedTab] = useState("profit");

	return (
		<div className="p-5">
			<div className="flex items-center justify-between">
				<h1 className="text-23 xl:text-4xl font-bold dark:text-white">
					Billing
				</h1>

				<div className="rounded-full  bg-white font-bold">
					{/* <button
						onClick={() => toggleTheme("light")}
						className="bg-white text-black rounded-full "
					>
						<span className="text-xxs xl:text-lg ">Light</span>
					</button>
					<button
						onClick={() => toggleTheme("dark")}
						className="bg-black text-white rounded-full "
					>
						<span className="text-xxs xl:text-lg">Dark</span>
					</button> */}
					<div
						class="inline-flex py-1 xl:py-2 px-1 xl:px-1.5"
						role="group"
						aria-label="Button group"
					>
						<button
							onClick={() => toggleTheme("light")}
							class=" px-2 xl:px-4 py-1 xl:py-2 text-xs lg:text-lg transition-colors duration-150  rounded-full focus:shadow-outline "
						>
							<span>Light</span>
						</button>
						<button
							onClick={() => toggleTheme("dark")}
							class="px-2 xl:px-4 py-1 xl:py-2 text-xs lg:text-lg text-indigo-100 transition-colors duration-150 bg-36 rounded-full focus:shadow-outline "
						>
							<span>Dark</span>
						</button>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12    gap-4 mt-5">
				<div className="bg-white dark:bg-151 rounded-2xl col-span-12 md:col-span-8">
					<nav className="flex xl:text-3xl">
						<button
							onClick={() => setSelectedTab("profit")}
							className="{clsfy('py-4 px-5 block dark:bg-opacity-25 pointer-events-auto   hover:bg-gray-100 hover:opacity-90 focus:outline-none  border-b-2 font-medium',[selectedTab === 'profit' ? ' text-ff4  border-faf':'text-white border-transparent'])}"
						>
							Profit Share
						</button>
						<button
							onClick={() => setSelectedTab("subscription")}
							className={clsfy(
								"py-4 px-5 block dark:bg-opacity-25 pointer-events-auto   hover:bg-gray-100 hover:opacity-90 focus:outline-none  border-b-2 font-medium",
								[
									selectedTab === "profit"
										? " text-white border-transparent"
										: "text-ff4  border-faf",
								]
							)}
						>
							Subscription
						</button>
					</nav>
					{selectedTab === "profit" ? (
						<div className="p-4 text-14px xl:text-xl dark:text-9E font-tt font-normal leading-5">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
							dolor sit amet.Lorem ipsu m dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
							magn
						</div>
					) : (
						<div className="p-4 text-14px xl:text-xl dark:text-9E ">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
							dolor sit amet.Lorem ipsu m dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
							magna aliquyam erat, sed diam voluptua. At vero eos et accusam e t
							justo duo dolores et ea rebum. Stet clita kasd gubergren, no
							seadsssssssssssssss dssssssssssssssssssssssssssss Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Quos fuga repudiandae
							eius, assumenda atque, eveniet repellat aliquam architecto,
							obcaecati odio ipsam. Sequi, doloribus assumenda possimus tenetur
							qui nisi. Dolores, enim?
						</div>
					)}
				</div>
				<div className="col-span-12 md:col-span-4">
					<div className="bg-white rounded-2xl pt-7  dark:bg-151">
						<div className="px-5 ">
							<span className="text-393 text-18px xl:text-18px font-demibold dark:text-white">
								Graph name
							</span>
						</div>
						<div className="px-5 flex justify-between text-11px xl:text-base mt-6 text-9C">
							<span className="">Y-axis</span>
							<span>Nov26-Dec2</span>
						</div>
						{/* <div className=" absolute top-0 bottom-0 left-0 right-0">
						<span className="text-dark-graph-green text-11px xl:text-13px">Hour</span>
					</div> */}
						<div className="mr-1  ">
							<ApexChart />
						</div>
					</div>
				</div>
			</div>
			{selectedTab === "profit" ? (
				<div className="grid gap-4 lg:gap-11 grid-cols-12 my-6 md:my-8">
					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-6 xl:col-span-3">
						<div className="flex  items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								Deposit Held
							</span>
							<div className="cursor-pointer text-9px md:text-base 2xl:20 pr-13px pl-18px py-2 bg-2B text-white rounded-15 text-center dark:bg-dark-button-green ml-auto">
								Deposit
							</div>
						</div>
						<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
							<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
								150,000
							</span>
							<br />
							<span className="lg:text-lg 2xl:text-2xl">USD</span>
						</div>
					</div>

					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-6 xl:col-span-3">
						<div className="flex  items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								30 Day Aggregate Paid
							</span>
						</div>
						<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
							<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
								150,000
							</span>
							<br />
							<span className="lg:text-lg 2xl:text-2xl">USD</span>
						</div>
					</div>
					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-6 xl:col-span-3">
						<div className="flex  items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								Aggregate Profit
							</span>
						</div>
						<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
							<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
								150,000
							</span>
							<br />
							<span className="lg:text-lg 2xl:text-2xl">USD</span>
						</div>
					</div>
					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-6 xl:col-span-3">
						<div className="flex space-x-4 items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								XRRT Token Held
							</span>
						</div>
						<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
							<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
								150,000
							</span>
							<br />
							<span className="lg:text-lg 2xl:text-2xl">USD</span>
						</div>
					</div>
				</div>
			) : (
				<div className="grid gap-4 lg:gap-11 grid-cols-12 my-6 md:my-8">
					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-12 lg:col-span-4">
						<div className="flex  items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								Time Left
							</span>
							<div className="text-9px md:text-base 2xl:20 pr-13px pl-18px py-2 bg-2B text-white rounded-15 text-center dark:bg-dark-button-green ml-auto">
								Play
							</div>
						</div>
						<div className="flex space-x-3 lg:space-x-4">
							<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
								<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
									5
								</span>
								<br />
								<span className="lg:text-lg 2xl:text-2xl">Days</span>
							</div>
							<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
								<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
									23
								</span>
								<br />
								<span className="lg:text-lg 2xl:text-2xl">Hours</span>
							</div>
							<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
								<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
									5
								</span>
								<br />
								<span className="lg:text-lg 2xl:text-2xl">Min</span>
							</div>
						</div>
					</div>
					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-12 lg:col-span-4">
						<div className="flex  items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								Time Left
							</span>
							<div className="text-9px md:text-base 2xl:20 pr-13px pl-18px py-2 bg-2B text-white rounded-15 text-center dark:bg-dark-button-green ml-auto">
								Play
							</div>
						</div>

						<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
							<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
								5
							</span>
							<br />
							<span className="lg:text-lg 2xl:text-2xl">Days</span>
						</div>
					</div>
					<div className="rounded-20 bg-white dark:bg-151 pl-11px pl-12px pt-18px pb-13px pr-3 col-span-12 lg:col-span-4">
						<div className="flex  items-center">
							<span className="text-base md:text-lg 2xl:30 dark:text-white">
								150,000
							</span>
							<div className="text-9px md:text-base 2xl:20 pr-13px pl-18px py-2 bg-2B text-white rounded-15 text-center dark:bg-dark-button-green ml-auto">
								USSD
							</div>
						</div>
						<div className="rounded-15 w-full bg-ff3 text-ff3 text-center pt-1 pb-2 lg:pt-2 bg-opacity-10 mt-18px mb-13px ">
							<span className="text-lg font-bold text-center lg:text-2xl 2xl:text-4xl">
								0
							</span>
							<br />
							<span className="lg:text-lg 2xl:text-2xl">XRRT</span>
						</div>
					</div>
				</div>
			)}

			{/* table */}
			{/* <tr>
							<th>Account</th>
							<th>Time cycle started</th>
							<th>Time cycle ended</th>
							<th>Capital</th>
							<th>Target</th>
							<th>Current Status</th>
							<th>Amount Paid</th>
						</tr> */}
			<div className="overflow-y-auto scrollbar-x">
				<table className="tableData w-full rounded-2xl overflow-hidden">
					<thead className="py-7 px-4 text-393   dark:bg-2A2 dark:text-white shadow-lg overflow-hidden bg-white whitespace-nowrap">
						<tr className="shadow-2xl">
							<th>Account</th>
							<th>Time cycle started</th>
							<th>Time cycle ended</th>
							<th>Capital</th>
							<th>Target</th>
							<th>Current Status</th>
							<th>Amount Paid</th>
						</tr>
					</thead>
					<tbody className="tableBody whitespace-nowrap">
						<tr>
							<td>Lorem</td>
							<td>16/8/21 - 8:10:12</td>
							<td>17/10/21 - 8:10:12</td>
							<td>150%</td>
							<td>40%</td>
							<td>Target Achieved</td>
							<td>26%</td>
						</tr>
						<tr>
							<td>Lorem</td>
							<td>16/8/21 - 8:10:12</td>
							<td>17/10/21 - 8:10:12</td>
							<td>150%</td>
							<td>40%</td>
							<td>Target Achieved</td>
							<td>26%</td>
						</tr>
						<tr>
							<td>Lorem</td>
							<td>16/8/21 - 8:10:12</td>
							<td>17/10/21 - 8:10:12</td>
							<td>150%</td>
							<td>40%</td>
							<td>Target Achieved</td>
							<td>26%</td>
						</tr>
						<tr>
							<td>Lorem</td>
							<td>16/8/21 - 8:10:12</td>
							<td>17/10/21 - 8:10:12</td>
							<td>150%</td>
							<td>40%</td>
							<td>Target Achieved</td>
							<td>26%</td>
						</tr>
						<tr>
							<td>Lorem</td>
							<td>16/8/21 - 8:10:12</td>
							<td>17/10/21 - 8:10:12</td>
							<td>150%</td>
							<td>40%</td>
							<td>Target Achieved</td>
							<td>26%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Billing;
