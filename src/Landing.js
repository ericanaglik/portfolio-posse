import React from 'react'
import './css/style.css'

const Landing = () => {
  return (
    <div>
    <header class="main_header_area">  
        <nav class="navbar navbar-expand-lg"> 
            <div class="navbar-brand">
           		<a class="logo" href="index.html"><img src={require("./images/pplogo.png")} width="160" alt=""/></a>   
            </div>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar_supported"  aria-label="Toggle navigation"> 
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>

            
            
            <div class="collapse navbar-collapse navbar_supported"> 
                <ul class="navbar-nav"> 
                
                    <li class="dropdown">
                    </li>           
                    <li><a href="#">Explore</a></li>   
					<li class="dropdown">
						<a class="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown">Example Templates</a>
						
					</li> 
          <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown">Log In</a>
                        <ul class="dropdown-menu">
                        <form>
                          <label>

                            <li><a><input type="text" name="email" placeholder="email" /></a></li>
                            <li><a><input type="password" name="password" placeholder="password" /></a></li>
                          </label>
                          <li><a><input class="login-submit" type="submit" value="Log In" /></a></li>
                        </form>   
                        </ul>
                    </li>     
             
                </ul>   
            </div> 
        </nav>   
    </header>
     
     
    
    
    
     
    <section class="banner_area">  
    	<div class="container">
    		<div class="baner_content">  
				<h2 class="wow fadeInUp animated">DREAM ★ BIG</h2> 
        <h3 class="wow fadeInUp animated">Create your own online portfolio, completely customized to show what makes you unique</h3>

				<a href="#" class="theme_btn wow fadeInUp animated" data-wow-delay="0.3s">Get Started</a> 
    		</div>
    	</div>   
    	<div class="illustration">  
			<img src={require("./images/laptop-try.png")} height="420" alt="" class="wow slideInRight img_1 animated"/>
			<img src={require("./images/phone-try3.png")} height="650" alt="" class="lfup img_2"/> 
      <img src={require("./images/icons-pls3.png")} height="320" alt="" class="wow slideInRight img_new"/>
    	</div> 
    	
    </section>
     
    
     
    <section class="experience_area">
    	<div class="container">
    		<div class="tittle">
    			<h4><i class="fa fa-clock"></i>Fast Setup</h4>
    			<h2><b>Our Process is as easy as 1, 2, 3!</b></h2>
    		</div>
    		<div class="row">
    			
    			<div class="col-lg-4 col-md-6">
    				<div class="experience">
    					<div class="icons wow zoomIn animated">
    						<span></span>
    					</div>
    					<a href="#" class="heding">Create an Account</a>
    					<p>Choose a custom domain name where people can find your portfolio. Track analytics to see how often your portfolio is visited</p>
    					
    				</div>
    			</div>
    			
    			<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
    				<div class="experience">
    					<div class="icons icons_2 wow zoomIn animated">
    						<span></span>
    					</div>
    					<a href="#" class="heding">Choose Your Template</a>
    					<p>We have a number of modern templates to choose from, so that you can ensure your personality shines through your new portfolio</p>
    					
    				</div>
    			</div>
    			
    			<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
    				<div class="experience">
    					<div class="icons icons_3 wow zoomIn animated">
    						<span></span>
    					</div>
    					<a href="#" class="heding">Show Off Your Work</a>
    					<p>Tell us about you and your work, upload your projects, and we will create your custom portfolio in seconds</p>
    					
    				</div>
    			</div>
    		</div>
    	</div>
    </section>


    <footer class="footer_area">   
       <div class="container"> 
			<div class="footer_inner row">   
				<div class="col-lg-4 col-sm-6 footer_logo wow fadeIn"> 
					<a href="index.html"><img src={require("./images/pplogo.png")} height="80" alt=""/></a> 
					<div class="language">
						<h6>Language :</h6> 
						<div class="language_select"> 
							<select class="post_select">
              <option>English (US)</option>
								<option>English (UK)</option>
							</select> 
						</div>
					</div>
					 <ul class="footer_social" style={{paddingTop: 30}}> 
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-skype"></i></a></li>
						<li><a href="#"><i class="fa fa-slack"></i></a></li> 
						<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
						<li><a href="#"><i class="fa fa-dribbble"></i></a></li> 
					</ul>
				</div>
				<div class="footer_widget col-lg-2 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
					<h4>Core Link</h4>
					<ul class="footer_nav">   
						<li><a href="#">Explore</a></li>     
						<li><a href="#">Example Templates</a></li>     
						<li><a href="blog.html">Log In</a></li>     
					</ul>
				</div>  
				<div class="footer_widget fw_2 col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.4s">
					<h4>Contact</h4>
          <p>insert something ehre</p>
				</div>    
				<div class="footer_widget fw_3 col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.6s">
					<h4>Stay In The Loop</h4>
					<p>Subscribe to receive news on new templates and updates</p>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="What’s Your email"/>
						<div class="input-group-append">
							<span class="input-group-text"><i class="fas fa-caret-right"></i></span>
						</div>
					</div>
				</div>      
			</div>  
			<div class="copy_right">
				<div class="row"> 
					<div class="col-md-6  wow slideInRight">
						<ul class="mobile_icon">
							<li><a href="#" class="theme_btn apple"><i class="fab fa-apple"></i>Apple</a></li>
							<li><a href="#" class="theme_btn"><i class="fab fa-google-play"></i>Google</a> </li> 
						</ul>
					</div>   
					<div class="col-md-6 order-md-first  wow slideInLeft">
						<p>© 2020 <a href="#">Portfolio Posse</a> All rights reserved</p>
					</div> 
				</div>
			</div> 
       </div> 
    </footer>
    </div>
    
  );
};

export default Landing