import React, { useEffect, useState } from 'react'

// custom hook to fetch data and handle loading, response data, and errors
export default function useFetch(url, options = null) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    let isStale = false
    setLoading(true)

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (!isStale) {
          setData(data)
          setError(null)
          setLoading(false)
        }
      })
      .catch(error => {
        console.warn(error.message)
        setError('Error fetching data. : ', error)
        setLoading(false)
      })

    return () => {
      isStale = true
    }
  }, [url, options])

  return { loading, data, error }
}
