import React from 'react'
import PropTypes from 'prop-types'

const RestaurantMenu = ({ menu }) => (

  <section className="menu">
    <ul className="menu__list">
      {menu.map(item => (
        <li className={`menu__item menu__item--` + item.type}>
          {item.label}
        </li>
      ))}
    </ul>
  </section>
)

RestaurantMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string,
    })
  ),
}

export default RestaurantMenu
