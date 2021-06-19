import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Smm2 from '../../pagesMaterial/ServicesPage/Services/Smm/Smm2'
import Projects from '../../pagesMaterial/ServicesPage/Services/projects/projects'
import Header from '../../pagesMaterial/ServicesPage/Header/Header'
import Contact from '../../sections/contact/ContactCreative2/ContactCreative2'
import Footer2 from '../../components/footer/Footer2/Footer2'

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
                <Smm2 />
                <Projects />
                <Contact />
                <Footer2 />
            </div>
        )
    }
}

export default Index

export const SocialMediaMarketingQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`