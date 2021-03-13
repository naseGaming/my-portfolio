import React from 'react';
import { Link } from "react-router-dom"
 
class Contact extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			twitter: "@TooOneFor",
			facebook: "Roland Christian Too Regacho",
			email: "regacho800@gmail.com",
			skype: "live:.cid.8691244394ae269b",
			number: "+639215382233"
		}
	}

	copyThis(data) {
		const dataToCopy = document.getElementById(data)
		dataToCopy.select()
		dataToCopy.setSelectionRange(0, 99999)

	    document.execCommand("copy")
	}

	render() {

		return (
			<div id = "Contact">
				<h1>Contact me @</h1>
				<div id = "contact-content">
					<table id = "contact-table">
						<tbody>
							<td>
								<i className ="fab fa-twitter"></i>
							</td>
							<td>
								<input className = "No-Design" type="text" value={this.state.twitter} id="myTwitter" />
							</td>
							<td>
								Visit
							</td>
						</tbody>
						<tbody>
							<td>
								<i className ="fab fa-facebook"></i>
							</td>
							<td>
								<input className = "No-Design" type="text" value={this.state.facebook} id="myFacebook" />
							</td>
							<td>
								Visit
							</td>
						</tbody>
						<tbody>
							<td>
								<i className ="fas fa-envelope"></i>
							</td>
							<td>
								<input className = "No-Design" type="text" value={this.state.email} id="myEmail" />
							</td>
							<td>
								<button onClick = {() => this.copyThis("myEmail")} className = "TableButton">Copy</button>
							</td>
						</tbody>
						<tbody>
							<td>
								<i className ="fab fa-skype"></i>
							</td>
							<td>
								<input className = "No-Design" disabled type="text" value={this.state.skype} id="mySkype" />
							</td>
							<td>
								<button onClick = {() => this.copyThis("mySkype")} className = "TableButton">Copy</button>
							</td>
						</tbody>
						<tbody>
							<td>
								<i className ="fas fa-phone-alt"></i>
							</td>
							<td>
								<input className = "No-Design" disabled type="text" value={this.state.number} id="myNumber" />
							</td>
							<td>
								<button onClick = {() => this.copyThis("myNumber")} className = "TableButton">Copy</button>
							</td>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
 
export default Contact;