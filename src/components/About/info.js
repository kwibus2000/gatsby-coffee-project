import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default () => (
  <section className="py-5">
    <div className="container">
      <Title title="ons verhaal" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Een denkbeeldige koffie-salon en verkooppunt van andere{" "}
            <em>'koloniale waren'</em>, maar zeker <em>niet</em> van verdovende
            drugs! We hebben een uitgebreide kaart met verschillende
            koffie-variëteiten, en ook andere warme en koude dranken!
          </p>
          <p className="lead text-muted mb-5">
            Bij het bouwen van deze site wordt de 'site-generator'{" "}
            <a
              href="http://gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            gebruikt, overigens wel met behoorlijk wat ingewikkelde
            constructies. Daar leer ik weer van; ik word steeds beter!
          </p>
          <Link to="/">
            <button className="btn text-uppercase btn-yellow">
              naar de thuispagina
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)
