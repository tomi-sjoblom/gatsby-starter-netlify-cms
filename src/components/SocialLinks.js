import React from 'react'
import PropTypes from 'prop-types'

const SocialLinks = ({ socialLinks }) => (

  <div class="social-media">
    {socialLinks.map(item => (
      <a className="social-media__link" href={item.link} target="_blank" rel="noopener noreferrer">
          {item.label}
      </a>
    ))}
  </div>
)

SocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

export default SocialLinks
