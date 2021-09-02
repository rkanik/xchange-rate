import React from "react";
import { mapRoute } from './components/utils/Route'
import { Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";

// Layouts
import DashboardLayout from './layouts/DashboardLayout'

// Home pages
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Billing from './pages/Billing'
import Reports from './pages/Reports'
import Support from './pages/Support'

const routes = [
	{
		path: "",
		component: DashboardLayout,
		children: [
			{
				path: "/",
				exact: true,
				component: Dashboard,
			},
			{
				exact: true,
				path: "/account",
				component: Account,
			},
			{
				exact: true,
				path: "/billing",
				component: Billing,
			},
			{
				exact: true,
				path: "/reports",
				component: Reports,
			},
			{
				exact: true,
				path: "/supports",
				component: Support,
			},
		],
	},
];

const Router = () => {
	return (
		<React.Suspense fallback={
			<div className='grid place-items-center fixed inset-0'>
				Loading...
			</div>
		}>
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						{routes.map(
							(route) => mapRoute(route)
						)}
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</React.Suspense>
	)
}

export default Router