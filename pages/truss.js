/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Spinner } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import Layout from '@components/Layout'

// take an integer and format with a space at every group of 3 (thousand)
// https://stackoverflow.com/questions/16637051/adding-space-between-numbers
const formatNumber = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const getSurfaceAreaCoveredByWater = (
  planetDiameter,
  percentageCoveredByWater
) => {
  const planetRadius = planetDiameter / 2
  const totalSurfaceArea = 4 * Math.PI * Math.pow(planetRadius, 2)
  const areaCoveredByWater = totalSurfaceArea * (percentageCoveredByWater / 100)
  return areaCoveredByWater ? formatNumber(Math.round(areaCoveredByWater)) : '?'
}

// custom hook to fetch data and handle loading, data, and error
export function useFetch(url) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let isStale = false
    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!isStale) {
          setData(data)
          setError(null)
          setLoading(false)
        }
      })
      .catch(e => {
        console.warn(e.message)
        setError('Error fetching data.')
        setLoading(false)
      })

    return () => {
      isStale = true
    }
  }, [url])

  return { loading, data, error }
}

const Planets = () => {
  const { loading, data, error } = useFetch('https://swapi.dev/api/planets/')
  if (loading) {
    return <Spinner sx={{ width: '100%' }} />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <table
        sx={{
          borderCollapse: 'collapse',
          border: '1px solid gray',
          td: { border: '1px solid gray', p: 1 },
          th: { border: '1px solid gray' },
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
          {data.results?.map(planet => (
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
              <td>{planet.climate}</td>
              <td>{planet.residents.length}</td>
              <td>{planet.terrain}</td>
              <td>
                {planet.population === 'unknown'
                  ? '?'
                  : formatNumber(planet.population)}
              </td>
              <td>
                {getSurfaceAreaCoveredByWater(
                  planet.diameter,
                  planet.surface_water
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

const TrussWorkSamplePage = () => (
  <Layout pageHeading="Truss work sample" title="Truss">
    <Planets />
  </Layout>
)

export default TrussWorkSamplePage
