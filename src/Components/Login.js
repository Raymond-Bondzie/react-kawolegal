import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
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
					   <Link className="link" to="/Startups">Startups</Link>
					   <Link className="link" to="/Register" >Register</Link>
					   <Link className="link" to="/Login">Login</Link>
					 </ul>
				 </div>
			   </nav>
			   </div>
			   <div className="section">
                   <hr/>
                   <hr/>
                   <hr/>
                   <hr/>
                   <hr/>
                   
                   
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <p className="boldText">Already a Member? Login to add your Startups</p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                <br/>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form>
                                <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                </div>
                                
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>

                    <br/>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form>
                                <div className="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign up</button>

                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>

					
			   	</div>
		</div>
	</div>

	<footer className="container-fluid footer">
		<div className="row">
		  <div className="col-md-6">
			<p className="text-color text-center">
            ©2017 kawolegal. All Rights Reserve</p>
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

export default Login;