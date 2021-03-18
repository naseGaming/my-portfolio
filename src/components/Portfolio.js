import React from 'react'
import './Portfolio.css'

const ClickTitans = {
	title: "Click Titans",
	description: "A simple clicking game resembles tap titans made using HTML, Native Js, JQuery and PHP",
	page: "ClickTitans"
}

const Portal = {
	title: "Online Grading Portal",
	description: "A Grading Portal App for Elementary and High School in St. Mark’s College",
	page: "Portal"
}

const POS = {
	title: "POS App",
	description: "A simle pos app",
	page: "Pos"
}

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			clicktitans: false,
			portal: false,
			pos: false
		}
	}

	onMouseover (app) {
		if(app === "ClickTitans") {
			this.setState({
				clicktitans: true
	     	})
		}
		else if(app === "Portal"){
			this.setState({
				portal: true
			})
		}
		else{
			this.setState({
				pos: true
			})
		}
   	}

	onMouseout (app) {
		if(app === "ClickTitans") {
			this.setState({
				clicktitans: false
	     	})
		}
		else if(app === "Portal"){
			this.setState({
				portal: false
			})
		}
		else{
			this.setState({
				pos: false
			})
		}
	}

	showContent(app){
		if(app === "ClickTitans") {
			this.setState({
				clicktitans: true
			})
		}
		else if(app === "Portal") {
			this.setState({
				portal: true
			})
		}
		else{
			this.setState({
				pos: true
			})
		}
	}

	goTo(page) {
		if(page === "ClickTitans") {
			window.open("http://clicktitans.epizy.com/")
		}
		else if(page === "Porta") {

		}
		else{

		}
	}

	render() {
		const cTContent = this.state.clicktitans
		let cContent = ""
		const PContent = this.state.portal
		let pContent = ""
		const PosContent = this.state.pos
		let posContent = ""

		if(cTContent === false) {
			cContent = 
					<div>
						<div className = "Icon" >
							<i className = 'fas fa-gamepad'></i>
						</div>
						<div className = "title" >
							<strong> {ClickTitans.title} </strong>
						</div>
					</div>
		}
		else{
			cContent = 
					<div>
						<div className = "content" >
							<p> {ClickTitans.description} </p>
						</div>
						<div className = "button" >
							<button className = "VisitApp" onClick = {() => this.goTo(ClickTitans.page)} >Visit</button>
						</div>
					</div>
		}

		if(PContent === false) {
			pContent = 
					<div>
						<div className = "Icon" >
							<i className = 'fas fa-id-card'></i>
						</div>
						<div className = "title" >
							<strong> {Portal.title} </strong>
						</div>
					</div>
		}
		else{
			pContent = 
					<div>
						<div className = "content" >
							<p> {Portal.description} </p>
						</div>
						<div className = "button" >
							<button className = "VisitApp" onClick = {() => this.goTo(Portal.page)} >Visit</button>
						</div>
					</div>
		}

		if(PosContent === false) {
			posContent = 
					<div>
						<div className = "Icon" >
							<i className = 'fas fa-receipt'></i>
						</div>
						<div className = "title" >
							<strong> {POS.title} </strong>
						</div>
					</div>
		}
		else{
			posContent = 
					<div>
						<div className = "content" >
							<p> {POS.description} </p>
						</div>
						<div className = "button" >
							<button className = "VisitApp" onClick = {() => this.goTo(POS.page)} >Visit</button>
						</div>
					</div>
		}

	  	return (
			<div id="Portfolio" className = "animate__animated animate__fadeIn" >
				<div id = "portfolio-content" >
					<h1>My Personal Projects</h1>
					<div onMouseEnter={() => this.onMouseover(ClickTitans.page)} onMouseLeave={() => this.onMouseout(ClickTitans.page)} id = "ClickTitans" className = "project" onClick = {() => this.showContent("ClickTitans")} >
          				{cContent}
          			</div>
					<div onMouseEnter={() => this.onMouseover(Portal.page)} onMouseLeave={() => this.onMouseout(Portal.page)} id = "Portal" className = "project-right" onClick = {() => this.showContent("Portal")} >
          				{pContent}
          			</div>
					<div onMouseEnter={() => this.onMouseover(POS.page)} onMouseLeave={() => this.onMouseout(POS.page)} id = "Portal" className = "project" onClick = {() => this.showContent("Portal")} >
          				{posContent}
          			</div>
				</div>
			</div>
	  	)
	}
}
 
export default Portfolio;