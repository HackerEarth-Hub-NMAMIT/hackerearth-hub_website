import React from "react";
import "./Nmamit.css";
const Nmamit = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*Left Side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">NMAMIT</span>
          <span className="primaryText">
            Nitte Mahalinga Adyanthaya Memorial Institute of Technology
          </span>
          <span className="secondaryText">
            NMAMIT was established in the year 1986 under Nitte Education Trust,
            Mangalore. The institute is AICTE approved, NBA & NAAC Accredited,
            ISO 9001:2008 Certified, Autonomous and affiliated to Visveswaraya
            Technological University, Belgavi. At present, the institute offers
            7 UG, 10 PG and PhD programmes. The institute has been recognized as
            a Lead Institute under World Bank Funding (TEQIP). The institute is
            also a Nodal Centre of National Board of Accreditation (NBA) to
            impart training programmes in Outcome Based Education and
            Accreditation.
          </span>
        </div>
        {/* Right Side */}
        <div className="c-right">
          <div className="img-container">
            <img src="./nitte.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nmamit;
