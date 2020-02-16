import React from 'react'
import PropTypes from 'prop-types'

const Address = ({ address }) => (
  <section className="address">
    {address.map(item => (
      <address className="address__field">
        {item.street}<br/>
        {item.city}
      </address>
    ))}
  </section>
)

Address.propTypes = {
  address: PropTypes.arrayOf(
    PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
    })
  ),
}

export default Address
