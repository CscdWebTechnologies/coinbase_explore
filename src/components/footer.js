import React from "react";
import footer from "./footer.css";
import logo from "../Assets/logo.svg"

import {
  languages,
  company,
  learn,
  support,
  individuals,
  businesses,
  developers
} from "./footerItems";

const newDate = new Date();
const year = newDate.getFullYear();

function Footer() {
  return (
    <section className="footer__section">
    <div className="footer">
      <div className="footer1">
        <img src={logo} className="w-28" />
        <form>
          <select>
              {languages.map((language) => (
                <option>{language}</option>
            ))}

          </select>
        </form>
        <p>©{year} Coinbase</p>
        <span>
          <a href="#">Blog </a>
          <a href="#">•Twitter </a>
          <a href="#">•Facebook</a>
        </span>
      </div>

      <div className="footer2">
        <h5>Company</h5>
        {company.map((_item) => (
          <p>{_item}</p>
        ))}

        <h5 className="learn">Learn</h5>
        {learn.map((_item) => (
          <p>{_item}</p>
        ))}
      </div>

      <div className="footer3">
        <h5>Individuals</h5>
        {individuals.map((_item) => (
          <p>{_item}</p>
        ))}

        <h5 className="business">Business</h5>
        {businesses.map((_item) => (
          <p>{_item}</p>
        ))}

        <h5 className="developers">Developers</h5>
        {developers.map((_item) => (
          <p>{_item}</p>
        ))}
      </div>

      <div className="footer4">
        <h5>Support</h5>
        {support.map((_item) => (
          <p>{_item}</p>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Footer;
