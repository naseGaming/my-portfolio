import React from 'react'
import './About.css'
 
function About() {
  	return (
		<div id="About" className = "animate__animated animate__fadeIn" >
			<div id = "about-content" >
				<div id = "about-content-left" >
					<p>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An IT Graduate with exceptional strengths in handling stressful situations and has great critical problem solving ability. I also love developing small web applications to test my current skills in web development. I've already done a simple game that you see in my portfolio.
					</p>
				</div>
				<div id = "about-content-right" >
					<h2>Skills</h2>
					<table>
						<tbody>
							<tr>
								<td>
									<i className="fab fa-html5"></i>
								</td>
								<td>
									HTML
								</td>
								<td>
									<i className="fab fa-css3-alt"></i>
								</td>
								<td>
									CSS
								</td>
							</tr>
							<tr>
								<td>
									<i className="fab fa-js-square"></i>
								</td>
								<td>
									Javascript
								</td>
								<td>
									<i className="fab fa-php"></i>
								</td>
								<td>
									PHP
								</td>
							</tr>
							<tr>
								<td>
									<i className="fab fa-java"></i>
								</td>
								<td>
									Java
								</td>
								<td>
									<i className="fab fa-python"></i>
								</td>
								<td>
									Python
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
  	)
}
 
export default About;