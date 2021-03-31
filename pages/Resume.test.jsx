import React from 'react'
import { render, screen } from '../test/test-utils'
import Resume, { GET_ALL_POSITIONS } from '@pages/Resume'
import { MockedProvider } from '@apollo/client/testing'

const mocks = [
  {
    request: {
      query: GET_ALL_POSITIONS,
    },
    result: {
      data: {
        positionCollection: {
          items: [
            {
              company: 'Kin + Carta',
              companyLogo: {
                url:
                  'https://images.ctfassets.net/o59vwvr6a3vj/53uYbHR0pm4KUPzm8pm7y5/5ae8304cf8ea8596c8bb867786b1eb95/KinAndCarta.jpeg',
                __typename: 'Asset',
              },
              positionTitle: 'Software Engineer',
              description: [
                'Work with clients to determine project needs, scope, and risks.',
                'Design front-end architecture and CI/CD process for projects (Gitlab CI, AWS, Azure, Azure DevOps).',
                'Collaborate with PM and UX to create and define user stories and acceptance criteria.',
                'Manage workflow using both kanban and scrum methodologies, tracking work with Jira.',
                'Support team members in execution - help find solutions, provide thoughtful code reviews.',
                'Recently used FE technologies:  React, GraphQl, apollo-client, Gatsby, Next, react-router, redux-toolkit,  Formik, yup, styled-components, emotion, theme-ui, reach-ui, material-ui, ESLint, prettier, husky, prop-types, react-testing-library',
              ],
              dates: 'Oct 2019 - present',
              tenure: '1 yr 5 mos',
              __typename: 'Position',
            },
            {
              company: 'Sling TV',
              companyLogo: {
                url:
                  'https://images.ctfassets.net/o59vwvr6a3vj/1REmusqDXEqND4eYEefJhR/d2337f137425dfda5b0dd68d348fa5e7/sling.jpeg',
                __typename: 'Asset',
              },
              positionTitle: 'Software Engineer',
              description: [
                'Participated in pilot to implement cross-functional teams and modern product management processes  based on Inspired, Sprint, and The Phoenix Project.',
                "Organized and managed the engineering org's community of practice.",
                'Lead a cross-team effort to create a UI component library and design system, and facilitated an internal  open source model of contribution and maintenance (React, styled-components, styleguidist).',
                'Contributed to an automated testing framework to run integration tests for new features  using Selenium, Docker, Gherkin, cucumber.',
                'Contributed to automatic semantic versioning framework for the component library, including tracking visual changes to components.',
              ],
              dates: 'April 2017 - Oct 2019',
              tenure: '2yrs 7mos',
              __typename: 'Position',
            },
            {
              company: 'General Assembly',
              companyLogo: {
                url:
                  'https://images.ctfassets.net/o59vwvr6a3vj/30JDz91xhBkoqVwMXb0i6T/d46b754233ba13e29cdcd4f81f2c7066/ga.jpeg',
                __typename: 'Asset',
              },
              positionTitle: 'Full Stack Software Engineering Student',
              description: [
                'Learned modern software development process and web technologies, from version control to deployment.',
                'Project based, collaborative learning modeled after real-life development work flow.',
              ],
              dates: 'Oct 2016 - Mar 2017',
              tenure: '6mos',
              __typename: 'Position',
            },
            {
              company: 'Trek Bicycle China',
              companyLogo: {
                url:
                  'https://images.ctfassets.net/o59vwvr6a3vj/8LSU7kJb3mHDiobREVL9x/be39d77c0a0f92b3218140e33ced52c7/trek.jpeg',
                __typename: 'Asset',
              },
              positionTitle: 'Marketing and Sales Manager',
              description: [
                'Developed brand strategy for local market, and managed campaign execution.',
                'Determined sales programs and promotions based on analysis of sales data.',
                'Communicate and bridge across cultures and departments to drive success.',
              ],
              dates: 'Jan 2015 - July 2016',
              tenure: '1yr 7mos',
              __typename: 'Position',
            },
            {
              company: 'Trek Bicycle',
              companyLogo: {
                url:
                  'https://images.ctfassets.net/o59vwvr6a3vj/8LSU7kJb3mHDiobREVL9x/be39d77c0a0f92b3218140e33ced52c7/trek.jpeg',
                __typename: 'Asset',
              },
              positionTitle: 'B2B Website Manager',
              description: [
                'Managed B2B website user support and customer service, liaison to development team.',
                'Maintain and troubleshoot systems/data integration between website and ERP.',
                'Managed B2B marketing, communications, and global product launches.',
              ],
              dates: 'May 2013 - Jan 2015',
              tenure: '1yr 9mos',
              __typename: 'Position',
            },
          ],
          __typename: 'PositionCollection',
        },
      },
    },
  },
]

describe('Resume', () => {
  it('should render the Resume heading', async () => {
    render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Resume />
      </MockedProvider>
    )

    // pause to move on next in event queue, from loading to response
    // await new Promise(resolve => setTimeout(resolve, 0))

    const heading = await screen.findByRole('heading', /Resume/i)
    expect(heading).toBeInTheDocument()
  })
})
