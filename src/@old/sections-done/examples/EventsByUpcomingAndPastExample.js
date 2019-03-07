const EventsByUpcomingAndPastExample = ({ events }) => (
  <section className="mv6 bg-lightest-blue pa5 shadow-lg">
    <h2 className="mb4">Events by Upcoming and Past Example</h2>

    <EventsByUpcomingAndPast events={events}>
      {(upcomingEvents, pastEvents) => (
        <>
          <UpcomingEvents events={upcomingEvents} />
          <PastEvents events={pastEvents} />
        </>
      )}
    </EventsByUpcomingAndPast>
  </section>
)

/*
 *
 * Upcoming Events
 *
 */

const UpcomingEvents = ({ events }) => (
  <>
    <h3 className="mt5 f2">Upcoming events:</h3>
    <ul className="">
      {events.map(event => (
        <Event key={event.node.lastDate} event={event.node} />
      ))}
    </ul>
  </>
)

/*
 *
 * Past Events
 *
 */

const PastEvents = ({ events }) => (
  <>
    <h3 className="mt5 f2">Past events:</h3>
    <ul className="calendar-grid">
      {events.map(event => (
        <Event key={event.node.lastDate} event={event.node} />
      ))}
    </ul>
  </>
)

/*
 *
 * Event
 *
 */

const Event = ({ event }) => (
  <li className="mt4 lh-copy">
    <h4 lang={event.title.lang}>{event.title.text}</h4>
    <p>{event.lastDate}</p>
  </li>
)

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import EventsByUpcomingAndPast from '../../components/examples/EventsByUpcomingAndPast'

export default EventsByUpcomingAndPastExample
