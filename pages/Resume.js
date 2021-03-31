/** @jsxRuntime classic /
/* @jsx jsx */
import { Fragment } from 'react'
import { node, string, arrayOf } from 'prop-types'
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
          <Image height={60} src={logoSrc} width={60} />
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            pb: 4,
            pl: 3,
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
              <Text
                sx={{
                  fontSize: [2, 3],
                  fontFamily: 'heading',
                }}
              >
                {company}
              </Text>
              <Text
                sx={{
                  fontSize: [2, 3],
                  fontFamily: 'heading',
                  fontWeight: '600',
                }}
              >
                {title}
              </Text>
            </Flex>
            <Flex
              sx={{
                flexDirection: ['row', 'column'],
                alignItems: ['flex-start', 'center'],
              }}
            >
              <Text sx={{ color: 'grey', fontFamily: 'heading' }}>{dates}</Text>
              {tenure ? (
                <Fragment>
                  <Text
                    sx={{ display: ['flex', 'none'], color: 'grey', pl: 1 }}
                  >
                    /
                  </Text>
                  <Text sx={{ color: 'grey', pl: 1, fontFamily: 'heading' }}>
                    {tenure}
                  </Text>
                </Fragment>
              ) : null}
            </Flex>
          </Flex>
          {description?.map(item => (
            <Text key={item} sx={{ py: 2 }}>
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

Position.propTypes = {
  children: node,
  company: string,
  dates: string,
  description: arrayOf(string),
  logoSrc: string,
  tenure: string,
  title: string,
}

const Resume = () => {
  const { loading, data, error } = useQuery(GET_ALL_POSITIONS)

  if (loading) return <div>loading...</div>

  if (error) return <div>error...</div>

  return (
    <Layout title="Resume">
      <Card variant="resumeSection">
        <Text
          sx={{
            fontFamily: 'Montserrat',
            fontSize: 4,
            pt: 3,
          }}
        >
          Experience
        </Text>
        <Divider sx={{ mb: 4 }} />
        {data?.positionCollection.items.map(position => {
          return (
            <Position
              company={position.company}
              dates={position.dates}
              description={position.description}
              key={position.company}
              logoSrc={position.companyLogo.url}
              tenure={position.tenure}
              title={position.positionTitle}
            ></Position>
          )
        })}
      </Card>
      {/* <Card variant="resumeSection">
        <Text
          sx={{
            fontFamily: 'Montserrat',
            fontSize: 4,
            pt: 3,
          }}
        >
          Education
        </Text>
        <Divider sx={{ mb: 4, color: 'grey', width: '100%' }} />

        <Position
          company="General Assembly"
          dates="Feb 2017"
          logoSrc="/ga.jpeg"
          title="Software Engineering Immersive Program"
        />
        <Position
          company="University of Colorado - Boulder, CO"
          dates="Feb 2017"
          logoSrc="/cu.png"
          title={
            <span>
              <div>B.A. English Literature;</div>
              <div>B.A. Chinese Languages and Civilizations</div>
            </span>
          }
        />
        <Position
          company="National Zhengzhi University (国立政治大学) - Taipei, Taiwan"
          dates="Feb 2017"
          logoSrc="/zhengzhi.png"
          title="Intensive Mandarin Chinese Language Program"
        />
      </Card> */}
    </Layout>
  )
}

export default Resume
