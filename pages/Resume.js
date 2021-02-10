/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Flex, Text, Divider } from 'theme-ui'
import Layout from '../components/Layout'

const kc = [
  'Lead front-end team to build multi-tenant inventory management system.',
  'Collaborate with leadership to make architecture decisions.',
  'Maintain client relationship, create requirements, determine scope/effort/risk.',
  'Chameleon',
  'Commonwealth',
]

const sling = [
  'Implement cross-functional teams and modern product management processes. ',
  'Lead a cross-team effort to create a UI component library and design system.',
  'Active voice in the development groups community of practice.',
  'UI Kit',
  'Cart',
]
const trekchina = [
  ' Developed brand strategy and managed campaign execution. ',
  ' Determined sales programs and promotions based on analysis of sales data. ',
  ' Communicate and bridge across cultures and departments to drive success. ',
]
const trek = [
  'Managed B2B website user support and customer service. ',
  'Maintain and troubleshoot systems/data integration between website and ERP. ',
  'Managed B2B marketing, communications, and global product launches. ',
]

const Position = ({ company, title, tenure, description, children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        pb: 4,
      }}
    >
      <Flex>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            width: '100%',
            pb: 2,
          }}
        >
          <Text sx={{ fontSize: 2, fontWeight: 'bold' }}>{company}</Text>
          <Text>{title}</Text>
        </Flex>
        <Text>{tenure}</Text>
      </Flex>
      {description?.map(item => (
        <Text key={item}>• {item}</Text>
      ))}
      {children}
    </Flex>
  )
}

const Resume = () => {
  return (
    <Layout title="Resume">
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text sx={{ fontSize: 3, fontWeight: 'bold', pt: 4 }}>Experience</Text>
        <Divider sx={{ color: 'grey', width: '100%' }} />
        <Position
          company="Kin + Carta"
          title="Software Engineer"
          tenure="Oct 2019 - present"
          description={kc}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          ></Flex>
        </Position>
        <Position
          company="Sling TV"
          title="Software Engineer"
          tenure="April 2017 - Oct 2019"
          description={sling}
        >
          <Flex sx={{ flexDirection: 'column' }}></Flex>
        </Position>
        <Position
          company="Trek Bicycle China"
          title="Marketing and Sales Manager"
          tenure="Jan 2015 - July 2016"
          description={trekchina}
        ></Position>

        <Position
          company="Trek Bicycle"
          title="B2B Website Manager"
          tenure="May 2013 - Jan 2015"
          description={trek}
        ></Position>

        <Text sx={{ fontWeight: 'bold', pt: 4 }}>
          Principles and Technology
        </Text>
        <Divider sx={{ color: 'grey', width: '100%' }} />

        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <Text>web</Text>
            <Text> JavaScript </Text>
            <Text>React</Text>
            <Text>CSS / CSS in JS</Text>
            <Text>Webpack / Babel</Text>
            <Text>Docker</Text>
            <Text>Jest / Enzyme / Selenium</Text>
            <Text>Cucumber / Gherkin</Text>

            <Text>Functional / declarative programming</Text>
            <Text>Micro front-ends / Component libraries</Text>
            <Text>Test driven Development</Text>
            <Text>Domain driven development</Text>
            <Text>CI/CD with Gitlab</Text>
            <Text>Design sprints / Cross functional teams</Text>
            <Text>Agile / Scrum</Text>

            <Flex>Learning and excited about</Flex>
          </Flex>
        </Flex>

        <Text sx={{ fontWeight: 'bold', pt: 4 }}>Education</Text>
        <Divider sx={{ color: 'grey', width: '100%' }} />

        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex sx={{ justifyContent: 'space-between', pb: 4 }}>
              <Flex sx={{ flexDirection: 'column' }}>
                <Text sx={{ fontWeight: 'bold' }}>
                  General Assembly - Denver, CO
                </Text>
                <Text>Software Engineering Immersive Program</Text>
              </Flex>
              <Text sx={{ fontWeight: 'bold' }}>Feb 2017</Text>
            </Flex>
          </Flex>
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex sx={{ justifyContent: 'space-between', pb: 4 }}>
              <Flex sx={{ flexDirection: 'column' }}>
                <Text sx={{ fontWeight: 'bold' }}>
                  University of Colorado - Boulder, CO
                </Text>
                <Text>B.A. English Literature</Text>
                <Text>B.A. Chinese Languages and Civilizations</Text>
              </Flex>
              <Text sx={{ fontWeight: 'bold' }}>Feb 2017</Text>
            </Flex>
          </Flex>
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex sx={{ justifyContent: 'space-between', pb: 4 }}>
              <Flex sx={{ flexDirection: 'column' }}>
                <Text sx={{ fontWeight: 'bold' }}>
                  National Zhengzhi University (国立政治大学) - Taipei, Taiwan
                </Text>
                <Text>Intensive Mandarin Chinese Language Program</Text>
              </Flex>
              <Text sx={{ fontWeight: 'bold' }}>Feb 2017</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Resume
