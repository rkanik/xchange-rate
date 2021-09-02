import { Route } from 'react-router-dom'

const ReactRoute = ({
	path, exact,
	layout: Layout,
	component: Component,
}) => {
	return (
		<Route
			path={path}
			exact={exact}
			render={props => {
				if (Layout) return (
					<Layout>
						{Component && <Component {...props} />}
					</Layout>
				)
				return <Component {...props} />
			}}
		/>
	)
}

export const mapRoute = (route, parent) => {
	if (route.children) {
		const childRoutes = route.children.map(child => {
			return mapRoute(child, route)
		})
		if (route.path) childRoutes.unshift(
			<ReactRoute
				path={route.path}
				exact={route.exact}
				layout={route.component}
			/>
		)
		return childRoutes
	}
	return <ReactRoute
		exact={route.exact}
		component={route.component}
		path={parent ? parent.path + route.path : route.path}
		layout={parent && parent.component}
	/>
}

export default ReactRoute