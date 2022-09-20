import * as React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import Helmet from "react-helmet"
import Container from "../components/container"

const IndexPage = () => {
  
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        gatsby: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const image = getImage(data.placeholderImage)

  const gatsbyImage = getImage(data.gatsby)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <Helmet>
        <title>gatsby Boostrap Starter</title>
      </Helmet>
     
     <section className="py-5 text-center">
     
        <Container>
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Hello world ! </h1>
            <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
            <GatsbyImage image={gatsbyImage} alt={"testimage"}/>

          </div>
        </Container>
      
        <BackgroundImage
        Tag="div"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <Container>
          <Link to="/about/" className="btn btn-primary my-2">About</Link>
          <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
          <button>test</button>
        </Container>
        </BackgroundImage>
      </section>
    

    <section className="py-5 text-center">
        <Container>
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Hello world ! </h1>
            <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
            <GatsbyImage image={gatsbyImage} className="" alt={"testimage"} />

          </div>
        </Container>
        <Container>
          <Link to="/about/" className="btn btn-primary my-2">About</Link>
          <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
        </Container>
      </section>
      
    </Layout>

  )
}

export default IndexPage
