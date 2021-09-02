/* eslint-disable react-hooks/exhaustive-deps */
import  clsfy  from 'classnames'
import { Link } from "react-router-dom";
import React, { useEffect, useContext } from 'react'
import { breakpointContext } from '../providers/BreakpointProvider'

import LogoSvg from '../assets/svg/logo.svg'

const Sidebar = ({ className, children, expanded, onChange, logoutColor }) => {

	const { bp } = useContext(breakpointContext)
	useEffect(() => { onChange(false) }, [bp.smAndDown])

	return (
		<React.Fragment>
			<div
				onClick={() => onChange(false)}
				className={clsfy('md:hidden fixed inset-y-0 transition-all duration-500',
					'bg-black bg-opacity-40 w-full z-10', [
					expanded ? 'left-0  ease-out' : '-left-full ease-in delay-200'
				])}
			></div>
			<div className={clsfy(className, 'sidebar fixed inset-y-0 transition-all duration-500',
				'md:static z-20 flex-none flex flex-col bg-white w-68 md:w-64 xl:w-68', [
				expanded ? 'left-0 ease-out delay-100' : '-left-full ease-in'
			]
			)}>
				<div className='px-4 lg:px-5 2xl:px-6 py-5 md:py-8 2xl:py-10'>
					<Link to='/' className='flex-none'>
						<img src={LogoSvg} alt="Brand logo" className='w-44 lg:w-48 2xl:w-52' />
					</Link>
				</div>
				<nav className='flex-1 flex flex-col overflow-hidden'>
					{children}
				</nav>
				{/* <div className='flex-none pb-6 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-11 mt-5'>
					<Link to='/login' style={{ color: logoutColor }} className='flex px-4 lg:px-5 2xl:px-6 space-x-4 text-base'>
						<i className="iconly-Logout icli text-2xl"></i>
						<span className='font-semibold'>Logout</span>
					</Link>
				</div> */}
			</div>
		</React.Fragment>
	)
}

export default Sidebar