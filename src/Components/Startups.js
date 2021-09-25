import React from 'react'
import { Link } from "react-router-dom";



function Startups() {
    return(
        <>
        <div className="bodybg">
		<div className="container-fluid">
			<div className="row">
			   <nav className="navbar navbar-">
				 <div className="container-fluid">
				   <div className="navbar-header">
					 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					   <span className="sr-only">Toggle navigation</span>
					   <span className="icon-bar"></span>
					   <span className="icon-bar"></span>
					   <span className="icon-bar"></span>
					 </button>
					 <a className="navbar-brand" href="#">Brand</a>
				   </div>
   
				   
                   <ul className="nav navbar-nav navbar-right links">
					   <Link className="link" to="/"  id="home">Home</Link>
					   <Link className="link" to="/Startups" >Startups</Link>
					   <Link className="link" to="/Register" >Register</Link>
					   <Link className="link" to="/Login">Login</Link>
					 </ul>
				 </div>
			   </nav>
			   </div>
			   <div className="section">
			   <div className="row search-button search-edit">
				   <center>
				   <input type="search" name="search bar" className="search-bar" placeholder="search startups by name or industry"/>
				   <button className="btn btn-primary button" type="submit">🔍search</button>
				   </center>
   
			   </div>
					<br/>
			   <div className="row ">
				   <div className="col-md-2"></div>
				   <div className="col-md-2">
					   <img src="images/ray.jpg" className="img-responsive image"/>
				   </div>
				   <div className="col-md-8">
					   <p className="blue">Think and Zoom</p>
   
					   <p>Providing solutions for the visual impired, such as mind control zooming and wearable control zooming.</p>
					   <button type="button" className="btn btn-default">See full details</button>
					   
				   </div>
            
			   </div>
			   <hr/>
			   <div className="row">
				   <div className="col-md-2"></div>
				   <div className="col-md-2">
					   <img src="images/ray1.jpg" className="img-responsive image"/>
				   </div>
				   <div className="col-md-8">
					   <p className="blue">SlateCube</p>
   
					   <p>Slatecube helps job seekers develop job-relivant skills, gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships</p>
					   <button type="button" className="btn btn-default">See full details</button>
				   </div>
			   </div>
			   <hr/>
			   <div className="row">
				   <div className="col-md-2"></div>
				   <div className="col-md-2">
					   <img src="images/ray2.jpg" className="img-responsive image"/>
				   </div>
				   <div className="col-md-8">
					   <p className="blue">SleekJob</p>
   
					   <p>Trains world className software developers in Ghana and matches them to employment opportunities </p>
					   <button type="button" className="btn btn-default">See full details</button>
					   <hr/>
				   </div>
			   </div>
			   </div>
		</div>
	</div>

	<footer className="container-fluid footer">
		<div className="row">
		  <div className="col-md-6">
			<p className="text-color text-center">&copy 2017 kawolegal. All Rights Reserve</p>
		  </div>
		  <div className="col-md-6 text-center">
			<a href="#" className="fa fa-facebook icon"></a>
			<a href="#" className="fa fa-twitter icon"></a>
			<a href="#" className="fa fa-linkedin icon"></a>
			<a href="#" className="fa fa-instagram icon"></a>
	
		  </div>
		</div>
	  </footer>
      </>
    )
}



export default Startups;