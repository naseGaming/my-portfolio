import React from 'react';
import { Link } from "react-router-dom";
import myPicture from '../images/grad.png'
 
class Home extends React.Component {
	goTwitter() {
		window.open("https://twitter.com/TooOneFor")
	}

	goFacebook() {
		window.open("https://www.facebook.com/rolandchristiantoo.regacho/")
	}

	render() {
	  return (
		<div id="Home">
			<div id = "home-content">
				<strong><p>Hi!</p><h1 id = "name">I am Roland</h1><p id = "position">Aspiring Web Developer</p></strong>
				<p>
					<button className = "ContactButtons" onClick = {() => this.goTwitter()}><i className ="fab fa-twitter"></i></button>
					<button className = "ContactButtons" onClick = {() => this.goFacebook()}><i className ="fab fa-facebook"></i></button>
					<Link to = "/Contact" className = "ContactLink" ><i className ="fas fa-envelope"></i></Link>
					<Link to = "/Contact" className = "ContactLink" ><i className ="fab fa-skype"></i></Link>
					<Link to = "/Contact" className = "ContactLink" ><i className ="fas fa-phone-alt"></i></Link>
				</p>
			</div>
			<div id = "myPicture">
			</div>
		</div>
	  )
	}
}
 
export default Home;