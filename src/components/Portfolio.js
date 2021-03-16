import React from 'react'
import './Portfolio.css'

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			clicktitans: false
		}
	}

	onMouseover (e) {
		this.setState({
			clicktitans: true
     	})
   	}

	onMouseout (e) {
    	this.setState({
			clicktitans: false
    	})
	}

	showContent(app){
		if(app === "ClickTitans") {
			this.setState({
				clicktitans: true
			})
		}
	}

	goTo(page) {
		if(page === "ClickTitans") {
			window.open("http://clicktitans.epizy.com/")
		}
	}

	render() {
		const cTContent = this.state.clicktitans
		let content = ""

		if(cTContent === false) {
			content = 
					<div>
						<div className = "Icon" >
							<i className = "fas fa-gamepad"></i>
						</div>
						<div className = "title" >
							<strong>Click Titans</strong>
						</div>
					</div>
		}
		else{
			content = 
					<div>
						<div className = "content" >
							<p>A simple clicking game resembles tap titans made using HTML, Native Js, JQuery and PHP</p>
						</div>
						<div className = "button" >
							<button className = "VisitApp" onClick = {() => this.goTo("ClickTitans")} >Visit</button>
						</div>
					</div>
		}

	  	return (
			<div id="Portfolio" className = "animate__animated animate__fadeIn" >
				<div id = "portfolio-content" >
					<h1>My Personal Projects</h1>
					<div onMouseEnter={this.onMouseover.bind(this)} onMouseLeave={this.onMouseout.bind(this)} className = "project" onClick = {() => this.showContent("ClickTitans")} >
          				{content}
          			</div>
				</div>
			</div>
	  	)
	}
}
 
export default Portfolio;