import React from 'react'
import myLogo from '../images/black-in-white-512.png'
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			home: "navBarButtonsActive",
			about: "navBarButtonsInactive",
			portfolio: "navBarButtonsInactive",
			contact: "navBarButtonsInactive"
		}
	}

	changeClass(page) {
		if(page === "home") {
			this.setState({
				home: "navBarButtonsActive",
				about: "navBarButtonsInactive",
				portfolio: "navBarButtonsInactive",
				contact: "navBarButtonsInactive"
			})
		}
		else if(page === "about"){
			this.setState({
				home: "navBarButtonsInactive",
				about: "navBarButtonsActive",
				portfolio: "navBarButtonsInactive",
				contact: "navBarButtonsInactive"

			})
		}
		else if(page === "portfolio"){
			this.setState({
				home: "navBarButtonsInactive",
				about: "navBarButtonsInactive",
				portfolio: "navBarButtonsActive",
				contact: "navBarButtonsInactive"
			})
		}
		else{
			this.setState({
				home: "navBarButtonsInactive",
				about: "navBarButtonsInactive",
				portfolio: "navBarButtonsInactive",
				contact: "navBarButtonsActive"
			})
		}
	}

	render() {
		return (
			<div id = "navBar" >
				<div className = "myLogo">
					<img className = "" src = {myLogo} alt = "My Icon" />
					&nbsp;
					&nbsp;
					&nbsp;
					<mark>Too</mark>
				</div>
				<div id = "navBar-content" >
					<Link to = "/my-portfolio/" onClick = {() => this.changeClass("home")} className = {this.state.home} >
							<i className = "fa fa-home"></i> Home
					</Link>
					<Link to = "/my-portfolio/About" onClick = {() => this.changeClass("about")} className = {this.state.about} >
							<i className="fas fa-info"></i> About
					</Link>
					<Link to = "/my-portfolio/Portfolio" onClick = {() => this.changeClass("portfolio")} className = {this.state.portfolio} >
							<i className="fas fa-folder-open"></i> Portfolio
					</Link>
					<Link to = "/my-portfolio/Contact" onClick = {() => this.changeClass("contact")} className = {this.state.contact} >
							<i className="fas fa-id-card"></i> Contact
					</Link>
				</div>
			</div>
		)
	}
}

export default NavBar