/** @jsxRuntime classic /
/* @jsx jsx */
import React from 'react'
import { jsx, Spinner } from 'theme-ui'
import Layout from '@components/Layout'
import { useFetch } from '../hooks/useFetch'

// take an integer and format with a space at every group of 3 (thousand)
const formatNumber = number =>
  number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') // https://stackoverflow.com/questions/16637051/adding-space-between-numbers

// display a "?" in table if values are unknown
const formatUnknown = value => (value === 'unknown' ? '?' : value)

// calculate the surface area of a planet that is covered by water
const calculateSurfaceAreaCoveredByWater = (
  planetDiameter,
  percentageCoveredByWater
) => {
  const planetRadius = planetDiameter / 2
  const totalSurfaceArea = 4 * Math.PI * Math.pow(planetRadius, 2) //  use this calc to confirm: https://www.calculatorsoup.com/calculators/geometry-solids/sphere.php
  const areaCoveredByWater = totalSurfaceArea * (percentageCoveredByWater / 100)
  return areaCoveredByWater ? formatNumber(Math.round(areaCoveredByWater)) : '?'
}

// display planet data in a table (with loading and error states)
// scroll to load next page of results from swapi
const Planets = () => {
  const { loading, data, error } = useFetch('https://swapi.dev/api/planets/')

  // if data is loading show a spinner
  if (loading) {
    return <Spinner sx={{ width: '100%' }} />
  }

  // if error, show the error message
  if (error) {
    return (
      <div sx={{ m: '24px auto' }}>
        <div>There was a problem getting the data.</div>
        <div>
          Error: {error.name} - {error.message}
        </div>
      </div>
    )
  }

  // otherwise return the table with the data
  return (
    <table
      sx={{
        borderCollapse: 'collapse',
        border: '1px solid gray',
        mb: 4,
        td: { border: '1px solid gray', p: 1 },
        th: { border: '1px solid gray', p: 1 },
      }}
    >
      <thead>
        <tr>
          <th>Planet</th>
          <th>Climate</th>
          <th>Residents</th>
          <th>Terrain</th>
          <th>Population</th>
          <th>Surface area water</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(planet => (
          <tr key={planet.name}>
            <td>
              <a
                href={planet.url}
                rel="noreferrer"
                sx={{
                  px: 3,
                  cursor: 'pointer',
                  ':hover': {
                    color: 'rebeccapurple',
                  },
                }}
                target="_blank"
              >
                {planet.name}
              </a>
            </td>
            <td>{formatUnknown(planet.climate)}</td>
            <td>{planet.residents?.length}</td>
            <td>{formatUnknown(planet.terrain)}</td>
            <td>{formatUnknown(formatNumber(planet.population))}</td>
            <td>
              {calculateSurfaceAreaCoveredByWater(
                planet.diameter,
                planet.surface_water
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// page component that provides header, nav, layout, and react-query client
const TrussWorkSample = () => (
  <Layout pageHeading="Truss work sample" title="Truss">
    <Planets />
  </Layout>
)

export default TrussWorkSample
