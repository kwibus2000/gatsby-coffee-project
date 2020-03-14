import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="container text-center">
      <h1>kwikoffie</h1>
      <p className="lead text-muted">
        Een denkbeeldige koffie-salon en ook verkooppunt, waar je dus zeker{" "}
        <em>geen</em> verdovende drugs kunt kopen! Alleen maar koffie en wat
        andere drankjes!
      </p>
      <p className="lead text-muted">
        Bij het bouwen van deze site wordt de 'site-generator'{" "}
        <a href="http://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>{" "}
        gebruikt, overigens wel met behoorlijk wat ingewikkelde constructies.
        Daar leer ik weer van; ik word steeds beter!
      </p>
    </div>
  </Layout>
)
