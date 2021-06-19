import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../../pagesMaterial/ServicesPage/Header/Header'
import WaysToGetMoreTraffic from '../../pagesMaterial/BlogPage/CaseStudy/CaseStudyPages/WaysToGetMoreTraffic'
import ContactCreative2 from "../../sections/contact/ContactCreative2/ContactCreative2"
import Footer2 from "../../components/footer/Footer2/Footer2"

class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Header />
        <WaysToGetMoreTraffic />
        <ContactCreative2 />
        <Footer2 />
      </div>
    )
  }
}

export default Index;

export const WaysToGetMoreTrafficQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`