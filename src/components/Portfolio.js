import React from 'react'
import './Portfolio.css'

class Portfolio extends React.Component {
	goTo(page) {
		if(page === "ClickTitans") {
			window.open("http://clicktitans.epizy.com/")
		}
	}

	render() {
	  	return (
			<div id="Portfolio" className = "animate__animated animate__fadeIn" >
				<div id = "portfolio-content" >
					<h1>My Personal Projects</h1>
					<div id = "click-titans" className = "project">
						<div id = "click-titans-left" className = "leftHalf">
						</div>
						<div className = "rightHalf">
							<p className = "projectTitle" onClick = {() => this.goTo("ClickTitans")} >Click Titans</p>
							<p className = "projectDescription">A simple game made using HTML, CSS, Native Js, JQuery and PHP</p>
						</div>
					</div>
				</div>
			</div>
	  	)
	}
}
 
export default Portfolio;