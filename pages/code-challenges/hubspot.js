/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Button, Text, Flex, Divider, Spinner } from 'theme-ui'
import Layout from '@components/Layout'
import useFetch from '../../hooks/useFetch'

const API_TOKEN = 'cea989680cf62281d5b4d6329b8b'

// api to get partner data
const apiUrl = `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${API_TOKEN}`

// options object for get fetch
const getOptions = {
  method: 'GET',
}

// api to post answer data
const postUrl = `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${API_TOKEN}`

// post final data to answer api, called in button onclick
const postData = dataToPost =>
  fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(dataToPost),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })

// react component to display data and provide button that sends post
const Hubspot = () => {
  // fetch partner data with custom hook
  const { loading, data, error } = useFetch(apiUrl, getOptions)

  // get unique countries
  const countries = data?.partners?.map(partner => partner.country)
  const uniqueCountries = countries?.filter(
    (country, index) => countries.indexOf(country) === index
  )

  // 1/5: get partners by country
  const getPartnersByCountry = country =>
    data?.partners?.filter(partner => partner.country === country)

  // 2/5: combine all attendee dates for a single country into one array, so they can be sorted and counted for frequency
  const getAllCountryDates = country =>
    country?.map(partner => partner.availableDates).flat()

  // 3/5: reduce all dates for a country into object that counts their frequency
  const getCountryDateCount = dates =>
    dates?.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {})

  // 4/5: determine first occurance of consecutive dates with most attendees
  const getFirstMostCommonDate = object => {
    return (
      object &&
      Object.keys(object).filter(dateItem => {
        return object[dateItem] == Math.max.apply(null, Object.values(object))
      })[0]
    )
  }

  // 5/5: get a country's first most common date by combining all the above, sorry :/
  const getCountryDate = country =>
    getFirstMostCommonDate(
      getCountryDateCount(getAllCountryDates(getPartnersByCountry(country)))
    )

  // get a country's attendees who can attend the chosen date
  const getCountryAttendees = (country, date) =>
    country?.filter(partner => partner.availableDates.includes(date))

  // creates object for each country with the partners who can attend the most chosed dates
  const makeIndividualCountryObject = country => {
    const getDate = getCountryDate(country)
    const getAttendees = getCountryAttendees(
      getPartnersByCountry(country),
      getDate
    )
    return {
      attendeeCount: getAttendees?.length,
      attendees: getAttendees?.map(partner => partner.email),
      name: country,
      startDate: getDate,
    }
  }

  // make final object mapping together all countries data and adding 'country' key
  const makeFinalPost = () => {
    return {
      countries: uniqueCountries?.map(country =>
        makeIndividualCountryObject(country)
      ),
    }
  }

  const finalPostData = makeFinalPost()

  if (loading)
    return (
      <Flex
        sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Spinner />
      </Flex>
    )

  if (error)
    return (
      <Flex
        sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        {error.message}
      </Flex>
    )

  return (
    <Layout pageHeading="Hubspot code challenge" title={'Hubspot'}>
      <Button onClick={() => postData(finalPostData)} sx={{ width: 250 }}>
        Post Data
      </Button>
      <Text>Data to post:</Text>
      <pre>{JSON.stringify(finalPostData, null, 2)}</pre>
    </Layout>
  )
}

export default Hubspot
