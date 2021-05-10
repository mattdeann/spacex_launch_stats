import React from 'react'

export default function LaunchItem({launch: { flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <article className="card">
      <h1>{mission_name}</h1>
      <p>Flight Number: {flight_number}</p>
      <p>Launch Date: {launch_date_local}</p>
      <p>Success: {launch_success}</p>

    </article>
  )
}
