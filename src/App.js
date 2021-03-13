import React from 'react'
import Router from './Router'
import NavBar from './components/NavBar'

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div id = "contents">
					<Router/>
				</div>
			</div>
		)
	}
}

export default App