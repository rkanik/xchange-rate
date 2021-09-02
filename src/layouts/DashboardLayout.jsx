import clsfy from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from "react-router-dom"

import Sidebar from '../components/Sidebar'

const initialRoutes = () => [
	{
		path: '/',
		name: 'Dashboard',
		icon: 'mdi-view-dashboard',
	},
	{
		path: '/account',
		name: 'Account',
		icon: 'mdi-account',
	},
	{
		name: 'Billing',
		path: '/billing',
		icon: 'mdi-wallet',
	},
	{
		name: 'Reports',
		path: '/reports',
		icon: 'mdi-chart-box',
	},
	{
		name: 'Support',
		path: '/support',
		icon: 'mdi-headset',
	},
	{
		name: 'Advertisement',
		path: '/advertisement',
		icon: 'mdi-send',
	},
	{
		name: 'Settings',
		path: '/settings',
		icon: 'mdi-cog',
	},
	{
		name: 'Setup',
		path: '/setup',
		icon: 'mdi-cogs',
	}
]

const DefaultLayout = ({ children }) => {

	const history = useHistory()
	const hoverBarRef = useRef(null)
	const activeBarRef = useRef(null)
	const [sidebarExpanded, setSidebarExpanded] = useState(false)
	const [activeRouteIndex, setActiveRouteIndex] = useState(null)
	const [routes] = useState(initialRoutes())
	const activeRoute = activeRouteIndex ? routes[activeRouteIndex] : { }

	const isActive = routeIndex => {
		return activeRouteIndex === routeIndex
	}

	const onDoneHover = () => {
		if (hoverBarRef) {
			onChangeTop(hoverBarRef, activeRouteIndex)
		}
	}

	const onChangeTop = (ref, index) => {
		ref.current.style.top = `${(index) * 44}px`;
	}

	const onRouteMouseOver = routeIndex => () => {
		if (hoverBarRef) {
			onChangeTop(hoverBarRef, routeIndex)
		}
	}

	const onRouteChange = (index, initial) => () => {
		setActiveRouteIndex(index)
		if (!initial && sidebarExpanded) {
			setSidebarExpanded(false)
		}
		if (activeBarRef) {
			onChangeTop(activeBarRef, index)
		}
	}

	const onCreated = () => {
		const { pathname } = history.location
		if (pathname !== activeRoute.path) {
			const routeIndex = routes.findIndex(r => r.path === pathname)
			onRouteChange(routeIndex, true)()
			onChangeTop(hoverBarRef, routeIndex)
		}
	}

	useEffect(() => { onCreated() })

	return (
		<div className='flex flex-col h-screen'>
			<div className='flex-1 flex bg-eee dark:bg-1e2 overflow-hidden'>
				<Sidebar logoutColor='#7D8592' expanded={sidebarExpanded} onChange={v => setSidebarExpanded(v)}>
					<div className='flex flex-col relative mt-5 md:mt-6 lg:mt-7 xl:mt-8 2xl:mt-9' onMouseOut={onDoneHover}>
						<div ref={activeBarRef} className='absolute w-1 rounded-r bg-black opacity-60 h-11 z-20 transition-all duration-500'></div>
						<div ref={hoverBarRef} className='absolute w-1 rounded-r bg-gray-400 z-10 h-11 transition-all duration-500'></div>
						{routes.map((route, routeIndex) => (
							<Link
								to={route.path}
								key={routeIndex}
								onClick={onRouteChange(routeIndex)}
								onMouseOver={onRouteMouseOver(routeIndex)}
								className={clsfy('px-4 lg:px-5 2xl:px-6 h-11 flex text-base transition-all ',
									'text-black font-semibold items-center space-x-3 lg:space-x-4 duration-500', [
									isActive(routeIndex)
										? 'bg-ff3 text-white'
										: 'hover:bg-gray-100'
								])}
							>
								<i className={clsfy("text-xl mdi", route.icon, [
									isActive(routeIndex) ? 'icbo' : 'icli'
								])}></i>
								<span>{route.name}</span>
							</Link>
						))}
					</div>
				</Sidebar>
				<div className='flex-1 flex flex-col overflow-hidden'>

					<header className='flex-none flex items-center bg-white dark:bg-151 h-24'>

						{/* Toggler */}
						<div className='flex-none md:hidden'>
							<button className='rounded w-8 h-8 grid place-items-center hover:bg-ef ' onClick={() => setSidebarExpanded(true)}>
								<i className="mdi mdi-menu text-2xl text-7d hover:text-white"></i>
							</button>
						</div>

						{/* Search bar */}
						<div className="relative flex-1 max-w-lg">
							<input
								type="text"
								placeholder="Search"
								className="bg-f5 rounded-full pr-8 z-0 h-16 focus:outline-none pl-10 w-full"
							/>
							<div className="absolute top-1/2 transform -translate-y-1/2 left-3">
								<span className="mdi mdi-magnify text-xl"></span>
							</div>
						</div>
					</header>

					<div className='flex-1 scrollbar-y-2'>
						{children}
					</div>

				</div>
			</div>
		</div>
	)
}

export default DefaultLayout