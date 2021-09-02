import { useState, useEffect } from "react"

export const useTheme = () => {
	const [darkTheme, setDarkTheme] = useState(false)

	const toggleTheme = (theme) => {
		let newDarkTheme = theme ? theme === 'dark' : !darkTheme
		const classes = document.documentElement.classList

		if (newDarkTheme) classes.add('dark')
		else classes.remove('dark')

		localStorage.setItem('__xchange-rate-theme__', newDarkTheme ? 'dark' : 'light')
		setDarkTheme(newDarkTheme)
	}

	useEffect(() => {
		let localTheme = localStorage.getItem('__xchange-rate-theme__')
		if (localTheme) toggleTheme(localTheme)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { toggleTheme }

}