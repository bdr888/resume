/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '@components/Layout'
import gql from 'graphql-tag'
import DataFetcher from '@components/DataFetcherComponent'
import ResumePosition from '@components/ResumePosition'

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

const Resume = () => {
  return (
    <Layout pageHeading="Experience" title="Resume">
      <DataFetcher query={GET_ALL_POSITIONS}>
        {data =>
          data.positionCollection.items.map(position => (
            <ResumePosition
              company={position.company}
              dates={position.dates}
              description={position.description}
              key={position.company}
              logoSrc={position.companyLogo.url}
              tenure={position.tenure}
              title={position.positionTitle}
            />
          ))
        }
      </DataFetcher>
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
