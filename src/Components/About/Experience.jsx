import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
               a self-taught full-stack developer with experience in b
              uilding web applications like staff mobility platforms, e-commerce sites, and task managers.
               Proficient in HTML, CSS, JavaScript, React.js, WordPress, and PHP
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2024</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">freelancer</h4>
                    <p className="fz-18 pra d-block">+25 clients in fiverr</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2024 </span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Quartinno</h4>
                    <p className="fz-18 pra d-block">Web developer</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Inovafy</h4>
                    <p className="fz-18 pra d-block">Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
