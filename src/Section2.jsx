import React from "react";
import { NavLink } from "react-router-dom";
import "./section2.css";
import section from "./img/section2.jpg";
import PieChart from '@material-ui/icons/PieChartSharp';
import GroupWork from '@material-ui/icons/GroupWorkSharp';
import AcUnit from '@material-ui/icons/AcUnitSharp';
import Footer from "./Footer";


const Section2 = () => {
  return (
    <>
      <section id="section2" className="df-flex align-items-center">
        <div className="container-fluid nev-bg">
          <div className="col-10 mx-auto ">
            <div className="row">
              <div className=" col-md-6 S2_outer">
                <div className="S2_inner">
                  <img src={section} alt="no_image" />
                </div>
              </div>
        
              <div className=" col-md-5  S2_outer">
                <div className="S2_inner">
                  <div className="mt-1">
                    <h4>At First</h4>
                    <p className="mt-4">
                      Expertia AI uses algorithms (validated at AAAI conference)
                      which, given a Job Description, identifies Top 10
                      candidates from a given pool of applications with 100%
                      accuracy.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4>Then,</h4>
                    <p className="mt-4">
                      It assigns a scope to each profile, scores skills to
                      explain why one candidate is better than the other purely
                      in terms of desired skills.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4>Not Just that..</h4>
                    <p className="mt-4">
                      The algorithm doesn't just rely on the information in the
                      CV; But goes beyond to build a skill graph, collect
                      information regarding the candidate to enhance the
                      screening abilities of the algorithm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section-3 */}
      <section id="section3" className="df-flex align-items-center">
        <div className="container-fluid nev-bg">
          <div className="col-10 mx-auto ">
            <div className="row">
              <div className=" col-md-4 S3_outer">
                <div className="S3_inner">
                  <img src={section} alt="no_image" />
                </div>
              </div>

              <div className=" col-md-8 S3_outer">
                <div className="S3_inner">
                  <h4>Focus your job search...</h4>
                  <p>
                    Enough of thoes irrelevant job suggestions.
                    <br />
                    <br />
                    With top-notch suggestions for you to apply and personalised{" "}
                    <br />
                    career path planning for job seeking individuals...
                  </p>
                  <NavLink className="btn-get-started" to="/Service">
                      Get Started
                    </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*section-4*/}
      <section id="section4" className="df-flex align-items-center">
        <div className="container-fluid section4 mt-5 pb-2">
          <div className="col-10 mx-auto ">
            <div className="row">
              <div className=" col-md-12">
                <h4>Right Professionals with Right Skills!</h4><br/>

                <p>
                  Find the right professional in minutes* & Use our AI Score and
                  Explainability model to make your hiring decisions with
                  confidence. 
                  </p>
                  <p className="mt-3">Our algorithm leverages a bias-free model for
                  skill assessments and measurements of the professional to
                  ensure you get the best vetted talent for your role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/*Section-5 */}
      <section id="section5" className="df-flex align-items-center">
        <div className="container-fluid ">
          <div className="col-10 mx-auto mt-5 ">
            <div className="row">
              
              <div className=" col-md-4 S5_outer">
                <div className="S5_inner ">
                <PieChart  style={{ fontSize: 80 , color:"#3C79E6" }} />
                  <h4>Save Time & Money</h4>
                 <p>On average, we help reduce our clients hiring cost by 80% in time and money spent. 
                </p>
                  <p>In our pilot study, 1 professional from the top 5 recommended is hired with a 100% success rate</p>

                  </div>
                  </div>
                  <div className=" col-md-4 S5_outer">
                <div className="S5_inner">
                <AcUnit style={{ fontSize: 80 , color:"#6C5CE7" }}/>
                  <h4>Widest Sourcing</h4>
                  <p>A single click on Expertia would source candidates from India's top job portals!
                  </p>
                  <p>Our platform integrated with top leading job portals to broaden your reach and sourcing of professionals. </p>
                  </div>
                  </div>
                  <div className=" col-md-4 S5_outer">
                <div className="S5_inner">
                <GroupWork style={{ fontSize: 80 , color:"#00B894" }}/>
                  <h4>Integrated with your services!</h4>
                  <p>Our APIs are exposed to integrate with the services and platforms you use. Be it WhatsApp, HRMS/SAP tools. 
                  </p>
                  <p>You can chose to get real time updates and integrations based on your convenience!</p>
          
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section6 */}
      <section id="section6" className="df-flex align-items-center">
        <div className="container-fluid section6 mt-5 pb-2">
          <div className="col-12 mx-auto ">
            <div className="row">
          
              <div className=" col-md-4 S6_outer">
                <div className="S6_inner">
                  <h1>Hire like an Expert</h1>
                  <p>Get started for free and find out how you can resolve your hiring challenges at yhour fingertips.</p>
                  <NavLink className="btn-get-started S6_btn" to="/Service">
                      Get Started Today
                    </NavLink>
                <p>For Free</p>
                </div>
                  
          
              </div>
            </div>
          </div>
        </div>
      </section>
     <Footer/>
    </>
  );
};
export default Section2;
