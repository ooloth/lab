const EventsByUpcomingAndPast = ({
  events,
  reverseUpcoming = true,
  reversePast = false,
  children
}) => {
  // Get today's date (midnight, local time)
  const today = new Date().setHours(0, 0, 0, 0)

  // Determine if date string (e.g. 'Mar 15, 2018') is in the past
  const isPast = dateString => new Date(dateString) < today

  // Split events array into upcomingEvents and pastEvents
  const splitEventsByTime = allEvents =>
    allEvents.reduce(
      ([pastEvents, upcomingEvents], event) =>
        isPast(event.node.lastDate)
          ? [[...pastEvents, event], upcomingEvents] // add event to pastEvents
          : [pastEvents, [...upcomingEvents, event]], // add event to upcompingEvents
      [[], []]
    )

  const [pastEvents, upcomingEvents] = splitEventsByTime(events)

  if (reverseUpcoming) upcomingEvents.reverse()
  if (reversePast) pastEvents.reverse()

  // TODO: make the reversability of each array configurable via props?
  return children(upcomingEvents, pastEvents)
}

EventsByUpcomingAndPast.propTypes = {
  events: PropTypes.array.isRequired,
  reverseUpcoming: PropTypes.bool,
  reversePast: PropTypes.bool,
  children: PropTypes.func.isRequired
}

/*
 *
 * Imports & Exports
 * 
 */

import PropTypes from 'prop-types'

export default EventsByUpcomingAndPast

/*

INSTRUCTIONS:

<EventsByUpcomingAndPast events={events}>
  {(upcomingEvents, pastEvents) => (
    <>
      <UpcomingEvents events={upcomingEvents} />
      <PastEvents events={pastEvents} />
    </>
  )}
</EventsByUpcomingAndPast>

*/
