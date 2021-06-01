import React from "react";
import { NavLink } from "react-router-dom";
import "./section2.css";
import section from "./img/section2.jpg";

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
              <div className="vertical col-1 "></div>

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
              <div className=" col-md-6 S3_outer">
                <div className="S3_inner">
                  <img src={section} alt="no_image" />
                </div>
              </div>

              <div className=" col-md-6 S3_outer">
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
        <div className="container-fluid nev-bg">
          <div className="col-10 mx-auto ">
            <div className="row">
              <div className=" col-md-12">
                <h4>Right Professionals with Right Skills!</h4><br/>

                <h5>
                  Find the right professional in minutes* & Use our AI Score and
                  Explainability model to make your hiring decisions with
                  confidence. Our algorithm leverages a bias-free model for
                  skill assessments and measurements of the professional to
                  ensure you get the best vetted talent for your role.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section2;
