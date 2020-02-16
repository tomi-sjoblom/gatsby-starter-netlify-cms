import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Logo from '../img/inari-logo.svg';

import Layout from '../components/Layout'
import OpeningHours from '../components/OpeningHours'
import Address from '../components/Address'
import RestaurantMenu from '../components/RestaurantMenu'
import SocialLinks from '../components/SocialLinks'

export const IndexPageTemplate = ({
  title,
  image,
  openingHours,
  address,
  telephone,
  menu,
  booking,
  socialLinks,
}) => (
  <div>
    <header className="header">
      <div id="pt"></div>
    </header>
    <section className="logo">
      <div className="header__logo-container">
        <img src={Logo} alt={title} className="header__logo" />
      </div>
    </section>
    <main class="inari-frontpage">
      <section class="fox">
        <img class="fox__img" src={
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        } alt="" />
      </section>
      <OpeningHours openingHours={openingHours} />
      <Address address={address} />
      <section className="telephone"><a href={`tel:` + telephone} className="telephone__link">{telephone}</a></section>
      <RestaurantMenu menu={menu} />
      <section class="booking">
        <a class="booking__button" href={booking.link}>
          {booking.label}
        </a>
      </section>
    </main>
    <footer class="footer">
      <SocialLinks socialLinks={socialLinks} />
    </footer>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  openingHours: PropTypes.array,
  address: PropTypes.array,
  telephone: PropTypes.string,
  menu: PropTypes.array,
  booking: PropTypes.array,
  socialLinks: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        openingHours={frontmatter.openingHours}
        address={frontmatter.address}
        telephone={frontmatter.telephone}
        menu={frontmatter.menu}
        booking={frontmatter.booking}
        socialLinks={frontmatter.socialLinks}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        openingHours {
          day
          time
        }
        address {
          street
          city
        }
        telephone
        menu {
          type
          label
        }
        booking {
          link
          label
        }
        socialLinks {
          link
          label
        }
      }
    }
  }
`
