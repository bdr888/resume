/** @jsxRuntime classic /
/* @jsx jsx */
import { Fragment } from "react"
import { jsx, Card, Flex, Text, Divider } from 'theme-ui'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const GET_ALL_POSITIONS = gql`
  query Position {
    positionCollection {
      items {
        company
        companyLogo {
          url
        }
        positionTitle
        description
        dates
        tenure
      }
    }
  }
`

const Position = ({
  children,
  company,
  dates,
  description,
  logoSrc,
  tenure,
  title,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        '&:last-child': { '&> hr': { display: 'none' } },
      }}
    >
      <Flex>
        <Flex
          sx={{
            width: 60,
            height: 60,
            flexShrink: 0,
            display: ['none', 'none', 'flex'],
          }}
        >
          <Image width={60} height={60} src={logoSrc} />
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            pb: 4,
            pl: 3,
            bg: 'white',
          }}
        >
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              justifyContent: 'space-between',
            }}
          >
            <Flex
              sx={{
                flexDirection: ['column'],
                justifyContent: 'flex-start',
                pb: 2,
              }}
            >
              <Text sx={{ fontSize: [2, 3], fontWeight: 'bold' }}>
                {company}
              </Text>
              <Text sx={{ fontSize: [2, 3] }}>{title}</Text>
            </Flex>
            <Flex
              sx={{
                flexDirection: ['row', 'column'],
                alignItems: ['flex-start', 'center'],
              }}
            >
              <Text sx={{ color: 'grey' }}>{dates}</Text>
              {tenure ? (
                <Fragment>
                  <Text
                    sx={{ display: ['flex', 'none'], color: 'grey', pl: 1 }}
                  >
                    /
                  </Text>
                  <Text sx={{ color: 'grey', pl: 1 }}>{tenure}</Text>
                </Fragment>
              ) : null}
            </Flex>
          </Flex>
          {description?.map(item => (
            <Text sx={{ py: 2 }} key={item}>
              • {item}
            </Text>
          ))}
          {children}
        </Flex>
      </Flex>
      <Divider
        sx={{
          color: 'lightgrey',
          width: '100%',
        }}
      />
    </Flex>
  )
}

const Resume = () => {
  const { loading, data, error } = useQuery(GET_ALL_POSITIONS)

  if (loading) return <div>loading...</div>

  if (error) return <div>error...</div>

  return (
    <Layout title="Resume">
      <Card variant="resumeSection">
        <Text sx={{ fontSize: 3, fontWeight: 'bold', py: 3 }}>Experience</Text>
        {data?.positionCollection.items.map(position => {
          return (
            <Position
              key={position.company}
              company={position.company}
              title={position.positionTitle}
              tenure={position.tenure}
              dates={position.dates}
              description={position.description}
              logoSrc={position.companyLogo.url}
            ></Position>
          )
        })}
      </Card>
      <Card variant="resumeSection">
        <Text sx={{ fontWeight: 'bold', pt: 4 }}>Education</Text>
        <Divider sx={{ color: 'grey', width: '100%' }} />

        <Position
          company="General Assembly"
          title="Software Engineering Immersive Program"
          dates="Feb 2017"
          logoSrc="/ga.jpeg"
        />
        <Position
          company="University of Colorado - Boulder, CO"
          title="B.A. English Literature; B.A. Chinese Languages and Civilizations"
          dates="Feb 2017"
          logoSrc="/cu.png"
        />
        <Position
          company="National Zhengzhi University (国立政治大学) - Taipei, Taiwan"
          title="Intensive Mandarin Chinese Language Program"
          dates="Feb 2017"
          logoSrc="/zhengzhi.png"
        />
      </Card>
    </Layout>
  )
}

export default Resume
