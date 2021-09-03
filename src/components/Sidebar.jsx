/* eslint-disable react-hooks/exhaustive-deps */
import clsfy from "classnames";
import { Link } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import { breakpointContext } from "../providers/BreakpointProvider";

import LogoSvg from "../assets/svg/logo.svg";

const Sidebar = ({ className, children, expanded, onChange, logoutColor }) => {
	const { bp } = useContext(breakpointContext);
	const [sidebarExpanded, setSidebarExpanded] = useState(false);
	useEffect(() => {
		onChange(false);
	}, [bp.smAndDown]);

	return (
		<React.Fragment>
			<div
				onClick={() => onChange(false)}
				className={clsfy(
					"md:hidden fixed inset-y-0 transition-all duration-500",
					"bg-black bg-opacity-40 w-full z-10",
					[expanded ? "left-0  ease-out" : "-left-full ease-in delay-200"]
				)}
			></div>
			<div
				className={clsfy(
					className,
					"sidebar fixed inset-y-0 transition-all duration-500",
					"md:static z-20 flex-none flex flex-col bg-white w-68 md:w-64 xl:w-68",
					[expanded ? "left-0 ease-out delay-100" : "-left-full ease-in"]
				)}
			>
				<div className="px-1.5 lg:px-3 2xl:px-3 py-3  flex items-center text-center">
					<Link to="/" className="flex">
						<img
							src={LogoSvg}
							alt="Brand logo"
							className="w-8 lg:w-16 2xl:w-20"
						/>
					</Link>
					<div className="dark:text-93 text-black flex flex-col font-bold dark:text-white">
						<span className="text-xl leading-tight">XchangeRate</span>
						<span className="text-xxs">
							Intelligance for profitable trading
						</span>
					</div>
					{/* <button
						className="rounded bg-f5  w-8 h-8 grid place-items-center hover:bg-ef mr-6 ml-4"
						onClick={() => setSidebarExpanded(true)}
					>
						<i className="mdi mdi-menu text-2xl text-black hover:text-white"></i>
					</button> */}
				</div>
				<nav className="flex-1 flex flex-col overflow-hidden">{children}</nav>
				{/* <div className='flex-none pb-6 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-11 mt-5'>
					<Link to='/login' style={{ color: logoutColor }} className='flex px-4 lg:px-5 2xl:px-6 space-x-4 text-base'>
						<i className="iconly-Logout icli text-2xl"></i>
						<span className='font-semibold'>Logout</span>
					</Link>
				</div> */}
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
