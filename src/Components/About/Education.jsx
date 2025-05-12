import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
              I’m currently in my second year of Technician Specialized in Software Development at Groupe Iki and also studying Full Stack Development at Solicode. I earned my High School Diploma in Physical & Chemical Sciences in 2023.


              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2022-2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">High School Diploma</h4>
                    <p className="fz-18 pra d-block">AL KHAOUARIZMI HIGH SCHOOL</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2023-2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Technician Specialized <br /> in Software Development</h4>
                    <p className="fz-18 pra d-block">Groupe Iki</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2024-2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Full Stack Development</h4>
                    <p className="fz-18 pra d-block">Solicode</p>
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

export default Education;
