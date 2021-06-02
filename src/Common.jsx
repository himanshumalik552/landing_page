import React from "react";
import { NavLink } from "react-router-dom";
import Section2 from "./Section2";
import Play from '@material-ui/icons/PlayCircleOutlineSharp';
import CheckCircle from '@material-ui/icons/CheckCircleOutlineSharp';
import SentimentSatis from '@material-ui/icons/SentimentSatisfiedAltSharp';
const Common = () => {
  return (
    <>
      <section id="header" className="df-flex align-items-center">
        <div className="container-fluid nev-bg">
          <div className="row">
            <div className="col-10 mx-auto ">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="mt-5">
                    <strong className="brand_name">
                      Let’s Find that Best Candidate...
                    </strong>
                  </h1>
                  <h4 className="my-4">
                    Source, screen, rank candidates from multiple job boards,
                    internal and external databases.
                  </h4>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to="/Service">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-lg-5 Outer_play_div">
                  <div className="inner_play_div">
                    <div className="play_btn">
                      <Play   style={{ fontSize: 80 , color:"#6C5CE7" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h4 className="h3_text">with Expertia</h4>

      <section id="section1" className="df-flex align-items-center">
        <div className="container-fluid nev-bg">
          <div className="col-10 mx-auto ">
            <div className="row">
              
           

              <div className=" col-md-6 S1_outer">
              <div className="S1_inner">

                <h1 className="mt-5">
                <SentimentSatis style={{fontSize: 50 , margin:"0px 5px 10px ", color:"#6C5CE7"}} />
                Source Widely, 
                </h1>
                <h6 className="my-4">
                Automatiaclly source from your company database or explore the existing job platforms for the best talent out there...
                </h6>
                <NavLink className="S1_link" to="/Service">
                Know More
                </NavLink>
                </div>
              </div>

              <div className=" col-md-6  S1_outer">
              <div className="S1_inner">
    
               <h1 className="mt-5">
               <CheckCircle style={{fontSize: 50 , margin:"0px 5px 10px ", color:"#6C5CE7"}}/>
                Screen Confidently. 
                </h1>
                <h6 className="my-4">
                Screen only the best of the best with Expertia’s
                 AI algorithm with 100% accuracy with detailed explination. </h6>
                <NavLink className="S1_link" to="/Service">
                Know More
                </NavLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Section2/>
    </>
  );
};

export default Common;
