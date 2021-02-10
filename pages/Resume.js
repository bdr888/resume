/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Flex, Text, Divider } from 'theme-ui'
import Layout from "../components/Layout"
import PageLayout from "../components/PageLayout"

const Resume = () => {
  return (
    <Layout title="Resume">
      <PageLayout>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            width: '100%',
            maxWidth: 700,
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pb: 3,
            }}
          >
            <Text sx={{ fontSize: 5 }}>Brian D. Ridge</Text>
            <Text>Software Engineer</Text>
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text sx={{ pb: 2 }}>Denver, CO</Text>
            <Text>brian.d.ridge@gmail.com</Text>
            <Text>testing linter</Text>
            <Text>7205120395</Text>
            <Text>github</Text>
            <Text>linkedin</Text>
            <Text>www.briandridge.co</Text>
          </Flex>

          <Text sx={{ fontWeight: 'bold', pt: 4 }}>Experience</Text>
          <Divider sx={{ color: 'grey', width: '100%' }} />

          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          ></Flex>
          <Flex sx={{ width: '100%', justifyContent: 'space-between' }}>
            <Text>Kin + Carta</Text>
            <Text>Software Engineer</Text>
            <Text>Oct 2019 - present</Text>
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Flex>Magellan</Flex>
            <Text>
              • Lead front-end team to build multi-tenant inventory management
              system.
            </Text>
            <Text>
              • Collaborate with leadership to make architecture decisions.
            </Text>
            <Text>
              • Maintain client relationship, create requirements, determine
              scope/effort/risk.
            </Text>
            <Flex>
              <Text>Chameleon</Text>
              <Text>hello</Text>
            </Flex>
            <Flex>Commonwealth</Flex>
            <Text>hello</Text>
          </Flex>
          <Flex sx={{ width: '100%', justifyContent: 'space-between', pt: 3 }}>
            <Text>Sling TV</Text>
            <Text>Software Engineer</Text>
            <Text>April 2017 - Oct 2019</Text>
          </Flex>
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex>
                • Implement cross-functional teams and modern product management
              processes. 
            </Flex>
            <Flex>
                • Lead a cross-team effort to create a UI component library and
              design system.
            </Flex>
            <Flex>
                • Active voice in the development group's community of practice.
            </Flex>
            <Text>UI Kit</Text>
            <Text>Cart</Text>
          </Flex>

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
      </PageLayout>
    </Layout>
  )
}

export default Resume
