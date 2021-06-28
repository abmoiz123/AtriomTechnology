import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout/index2'
import ServicesMainPage from '../../pagesMaterial/ServicesPage/ServicesMainPage'
import Contact from '../../../src/sections/contact/ContactCreative2/ContactCreative2'
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
          <ServicesMainPage />
          <Contact />
        </Layout>
      </div>
    )
  }
}

export default Index

export const ServiceQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`