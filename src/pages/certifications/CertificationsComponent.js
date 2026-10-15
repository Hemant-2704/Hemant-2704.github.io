import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import CertificationsImg from "./CertificationsImg";
import { competitiveSites, certifications } from "../../portfolio";
import "./CertificationsComponent.css";
import { Fade } from "react-reveal";

class CertificationsComponent extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="certifications-main">
        <Header theme={this.props.theme} />
        <div className="basic-certifications">
          <Fade bottom duration={2000} distance="40px">
            <div className="cert-heading-div">
              <div className="cert-heading-img-div">
                <CertificationsImg theme={theme} />
              </div>
              <div className="cert-heading-text-div">
                <h1 className="cert-heading-text" style={{ color: theme.text }}>
                  Certifications
                </h1>
                <h3
                  className="cert-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Badges, Professional Certifications and Verified Achievements
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default CertificationsComponent;
