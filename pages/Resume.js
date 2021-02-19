/** @jsxRuntime classic /
/* @jsx jsx */
import React from 'react'
import { jsx, Card, Flex, Text, Divider } from 'theme-ui'
import Image from 'next/image'
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

const Position = ({
  dates,
  company,
  title,
  tenure,
  description,
  children,
  logoSrc,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        '&:last-child': { '&> hr': { display: 'none' } },
      }}
    >
      <Flex>
        <Flex sx={{ width: 60, height: 60, flexShrink: 0 }}>
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
              <Text sx={{ fontSize: 2, fontWeight: 'bold' }}>{company}</Text>
              <Text>{title}</Text>
            </Flex>
            <Flex sx={{ flexDirection: 'column' }}>
              <Text sx={{ color: 'grey' }}>{dates}</Text>
              <Text sx={{ color: 'grey', pl: 1 }}>• {tenure}</Text>
            </Flex>
          </Flex>
          {description?.map(item => (
            <Text key={item}>• {item}</Text>
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
  return (
    <Layout title="Resume">
      <Card variant="resumeSection">
        <Text sx={{ fontSize: 3, fontWeight: 'bold', py: 3 }}>Experience</Text>
        <Position
          company="Kin + Carta"
          title="Software Engineer"
          tenure="1 yr 5 mos"
          dates="Oct 2019 - present"
          description={kc}
          logoSrc="/KinAndCarta.jpeg"
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
          tenure="2 yrs 7 mos"
          dates="April 2017 - Oct 2019"
          description={sling}
          logoSrc="/sling.jpeg"
        >
          <Flex sx={{ flexDirection: 'column' }}></Flex>
        </Position>
        <Position
          company="Trek Bicycle China"
          title="Marketing and Sales Manager"
          dates="Jan 2015 - July 2016"
          tenure="3 yrs 3 mos"
          description={trekchina}
          logoSrc="/ga.jpeg"
        ></Position>

        <Position
          company="Trek Bicycle"
          title="B2B Website Manager"
          tenure="3yrs 3mos"
          dates="May 2013 - Jan 2015"
          description={trek}
          logoSrc="/trek.jpeg"
        ></Position>
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
