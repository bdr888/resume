/** @jsxRuntime classic /
/* @jsx jsx */
import React, { useMemo } from 'react'
import { jsx, Button, Spinner } from 'theme-ui'
import Layout from '@components/Layout'
import { QueryClient, QueryClientProvider, useInfiniteQuery } from 'react-query'
import Table from '@components/table'
import { getData } from 'hooks/useFetch'
getData()

// react-query requires a client wrapper
const queryClient = new QueryClient()

// take an integer and format with a space at every group of 3 (thousand)
// https://stackoverflow.com/questions/16637051/adding-space-between-numbers
const formatNumber = number =>
  number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

// calculate the surface area of a planet that is covered by water
//  use this calc to confirm: https://www.calculatorsoup.com/calculators/geometry-solids/sphere.php
const getSurfaceAreaCoveredByWater = (
  planetDiameter,
  percentageCoveredByWater
) => {
  const planetRadius = planetDiameter / 2
  const totalSurfaceArea = 4 * Math.PI * Math.pow(planetRadius, 2)
  const areaCoveredByWater = totalSurfaceArea * (percentageCoveredByWater / 100)
  return areaCoveredByWater ? formatNumber(Math.round(areaCoveredByWater)) : '?'
}

// fetch paginated planet data from swapi
async function fetchPlanetData({ pageParam = 1 }) {
  // fetch data from swapi
  const response = await fetch(
    `https://swapi.dev/api/planets/?page=${pageParam}`
  )

  // throw error if response not ok
  if (!response.ok) {
    throw new Error('Problem fetching data')
  }

  // format response
  const responseData = await response.json()

  // reshape response so we can use the results array and the next value easily
  const data = {
    results: responseData.results,
    next: responseData.next === null ? undefined : pageParam + 1,
  }
  return data
}

// display planet data in a table (with loading and error states)
// scroll to load next page of results from swapi
const Planets = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('planets', fetchPlanetData, {
    getNextPageParam: lastPage => lastPage.next,
  })

  // if data is loading show a spinner
  if (status === 'loading') {
    return <Spinner sx={{ width: '100%' }} />
  }

  // if error, show the error message
  if (status === 'error') {
    return (
      <div sx={{ m: '24px auto' }}>
        <div>There was a problem getting the data.</div>
        <div>
          Error: {error.name} - {error.message}
        </div>
      </div>
    )
  }

  // const memoData = useMemo(() => data, [])

  const columns =
    // useMemo( () =>
    [
      {
        Header: 'Planet',
        accessor: 'name',
      },
      {
        Header: 'Climate',
        accessor: 'climate',
      },
      {
        Header: 'Residents',
        accessor: 'residents',
      },
      {
        Header: 'Terrain',
        accessor: 'terrain',
      },
      {
        Header: 'Population',
        accessor: 'population',
      },
      {
        Header: 'Surface Area Water',
        accessor: 'Surface Area Water',
      },
    ]
  // []
  // )
  // otherwise return the ui with the data
  return (
    <>
      <Table columns={columns} data={data.pages} />
      <table
        sx={{
          borderCollapse: 'collapse',
          border: '1px solid gray',
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
          {data.pages?.map((pageGroup, index) => (
            <React.Fragment key={index}>
              {pageGroup.results.map(planet => (
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
                  <td>{planet.residents?.length}</td>
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
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <Button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
        sx={{
          backgroundColor: !hasNextPage || isFetchingNextPage ? 'gray' : 'blue',
          m: '24px auto',
          p: 2,
          width: 250,
        }}
      >
        {isFetchingNextPage
          ? 'Loading...'
          : hasNextPage
          ? 'Get More Planets'
          : 'No more results'}
      </Button>
    </>
  )
}

// page component that provides header, layout, and react-query client
const TrussWorkSample = () => (
  <Layout pageHeading="Truss work sample" title="Truss">
    <QueryClientProvider client={queryClient}>
      <Planets />
    </QueryClientProvider>
  </Layout>
)

export default TrussWorkSample
