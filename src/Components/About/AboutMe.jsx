import React, { useEffect } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "satayman41@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+212 - 707 40 74 25",
  },
  {
    id: 3,
    system: "Adresse",
    contact: "Morocco , Tangier",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      <Facebook />,
      <Linkedin />,
      <Instagram />,
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                I’m Aymane — a 20-year-old I’m passionate about web development and 
                love solving real-world
                 problems with clean, efficient code. When I’m not coding,
                 you’ll find me sharing tech tips in Darija on social media, 
                 helping others just like I did when I started from scratch with nothing
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""}>{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={"https://linktr.ee/elachiriiii"}>{info} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
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

export default AboutMe;
