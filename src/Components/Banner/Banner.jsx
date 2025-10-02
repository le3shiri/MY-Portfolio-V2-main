import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AudioPlayer from "../Shared/AudioPlayer/AudioPlayer";
import {
  Linkedin,
  Instagram,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";

import { socialIcons } from "../../Utlits/socilIcons";

const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if(!position){
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Currently available for freelance
                </span>
                <span className="d-flex gap-4 align-items-center">
                  worldwide
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone"> Creative Web</span>
                <span className="d-block designers" data-text="Devloper">
                  Devloper
                </span>
              </h1>
             
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position  ? "right_up_animat" : "right_up"
              } h-400`}
             
            >
              <img  src={bannerMan} className="h-300" alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={""}>(+212) 707 - 407425</Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socialIcons.map(({ icon, id ,url}) => {
              return (
                <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                <i>{icon}</i>
                </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <AudioPlayer />
    </section>
  );
};

export default Banner;
