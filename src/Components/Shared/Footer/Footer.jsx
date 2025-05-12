import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { socialIcons } from "../../../Utlits/socilIcons";

const socalList = [
  {
    id: 1,
    platfrom: "Facebook",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    platfrom: "Instagram",
    icon: <ArrowRight />,
  },
  {
    id: 3,
    platfrom: "LinkedIn",
    icon: <ArrowRight />,
  },

];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I’m Aymane El achiri, Website developer & User Interface Designer
                  based in Morocco.
                </p>
                <a href="#0">satayman41@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">  
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socialIcons.map(({ id, icon, url,platform }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={url} className="social__footer">
                          {platform}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2023 {" "}
              <Link to={"/"} className="base">
                EL ACHIRI.
              </Link>{" "}
              All rights reserved.
            </p>
                  
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
