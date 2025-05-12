import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import JavaScript from "../../assets/img/about/JavaScript.png";
import word from "../../assets/img/about/word.png";
import ReactJs from "../../assets/img/about/ReactJs.png";
import php from "../../assets/img/about/Php.png";

const skillsList = [
  {
    id: 1,
    skill: "JavaScript",
    percentage: "98%",
    image: JavaScript,
  },
  {
    id: 2,
    skill: "Wordpress",
    percentage: "95%",
    image: word,
  },
  {
    id: 3,
    skill: "PHP",
    percentage: "85%",
    image:php,
  },
  {
    id: 4,
    skill: "ReactJs",
    percentage: "88%",
    image: ReactJs,
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
              Aymane is a creative web developer with strong skills in HTML, CSS, JavaScript,SQL,ReactJs, and PHP. 
              He builds user-friendly platforms, blends design with functionality, 
              and shares tech content online to inspire and educate others.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
