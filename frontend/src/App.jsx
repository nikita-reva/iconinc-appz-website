import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'

import { ComponentTestPage } from './pages'
import { AppContext } from './contexts/ThemeContext'
import Navigation from './components/Navigation/Navigation'

function App() {
	const location = useLocation()
	const doSomething = () => {}

	return (
		<AppContext.Provider
			value={{
				lang: 'de',
				authenticated: true,
				theme: 'light',
			}}
		>
			<Navigation />
			<Route exact path="/test" component={ComponentTestPage} />
			<AnimatePresence exitBeforeEnter onExitComplete={doSomething}>
				<Switch location={location} key={location.key}>
					<Route path="/testswitch">
						<ComponentTestPage />
					</Route>
				</Switch>
			</AnimatePresence>
		</AppContext.Provider>
	)
}

export default App
