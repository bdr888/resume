import { useEffect, useState } from 'react'

// recursive function to get all paginated swapi planet data
async function getAllPlanetData() {
  // Get the a page of results
  const getPlanetPage = url => fetch(url).then(res => res.json())

  // Recursively get planet pages until data.next is null and all the pages are fetched, collect pages into a single array
  const getAllPlanetPages = async (url, planetCollection = []) => {
    const { results, next } = await getPlanetPage(url)
    planetCollection = [...planetCollection, ...results]
    if (next !== null) {
      return getAllPlanetPages(next, planetCollection)
    }
    return planetCollection
  }

  // all planet data
  const rawPlanets = await getAllPlanetPages('https://swapi.dev/api/planets/')

  // alphabetically sort the collection of all planet data
  const sortedPlanets = rawPlanets.sort((first, second) => {
    const firstPlanet = first.name.toUpperCase()
    const secondPlanet = second.name.toUpperCase()
    return firstPlanet < secondPlanet ? -1 : firstPlanet > secondPlanet ? 1 : 0
  })
  return sortedPlanets
}

// custom hook to fetch data and provide loading, data, and error
export const useFetch = url => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let isStale = false
    setLoading(true)

    getAllPlanetData()
      .then(data => {
        if (!isStale) {
          setData(data)
          setError(null)
          setLoading(false)
        }
      })
      .catch(error => {
        console.warn(error.message)
        setError(error)
        setLoading(false)
      })

    return () => {
      isStale = true
    }
  }, [url])

  return { loading, data, error }
}
