import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Web UI/UX Design",
    subHeading: "Designer",
    para: "Creating intuitive, visually appealing interfaces that enhance user experience and engagement. From wireframes to high-fidelity prototypes, I deliver designs that balance aesthetics with functionality.",
  },
  {
    id: "02",
    heading: "Front End Development",
    subHeading: "Development",
    para: "Building responsive, interactive websites using modern frameworks like React. I transform designs into clean, efficient code that performs well across all devices and browsers.",
  },
  {
  id: "03",
  heading: "Business Branding",
  subHeading: "Branding",
  para: "Developing cohesive brand identities that communicate your company's values and vision. From logos to style guides, I create branding elements that help your business stand out.",
  }
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
