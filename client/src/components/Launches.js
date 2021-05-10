import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export default function Launches() {
  return (
    <div>
      <h1 className="display-4">Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {
          ({ loading, error, data }) => {
            
          }
        }
      </Query>
    </div>
  )
}
