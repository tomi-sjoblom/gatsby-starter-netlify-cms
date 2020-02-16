import React from 'react'
import PropTypes from 'prop-types'

const OpeningHours = ({ openingHours }) => (
  <section className="timetable">
    <dl className="opening-hours">
      {openingHours.map(item => (
        <>
          <dt>{item.day}</dt>
          <dd>{item.time}</dd>
        </>
      ))}
    </dl>
  </section>
)

OpeningHours.propTypes = {
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      time: PropTypes.string,
    })
  ),
}

export default OpeningHours
