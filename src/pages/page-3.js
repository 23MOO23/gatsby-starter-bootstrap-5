import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Helmet from "react-helmet"
import Container from "../components/container"

const Page3 = () => (
  <Layout>
    <Helmet>
      <title>gatsby Boostrap Starter page 3</title>
    </Helmet>
    <section className="py-5 text-center">
      <Container>
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Hello world ! page 3 </h1>
            <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
            <StaticImage
              src="../images/gatsby-astronaut.png"
              layout="FULL_WIDTH"
              formats={["AUTO", "WEBP"]}
              alt="A Gatsby astronaut"
              className="img-fluid"
            />

          </div>
      </Container>
      <Container>
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </Container>
    </section>
  </Layout>
)

export default Page3
