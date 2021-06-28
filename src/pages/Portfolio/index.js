import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout/index2'
// import Header from '../../pagesMaterial/ServicesPage/Header/Header'
import PortfolioPage from '../../pagesMaterial/PortfolioPage/PortfolioPage'
import Contact from '../../../src/sections/contact/ContactCreative2/ContactCreative2'
// import Footer2 from '../../components/footer/Footer2/Footer2'

class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout>
          <PortfolioPage />
          <Contact />
        </Layout>
        {/* <Header />
        <PortfolioPage />
        <Contact />
        <Footer2 /> */}
      </div>
    )
  }
}

export default Index

export const PortfolioQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`