import React from 'react'
import { render, screen } from '../../test/test-utils'
import Home, { GET_INTODUCTION } from '@pages/index'
import { MockedProvider } from '@apollo/client/testing'

const mocks = [
  {
    request: {
      query: GET_INTODUCTION,
    },
    result: {
      data: {
        introduction: {
          introduction: {
            json: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        "Hi! I'm Brian. I'm a software engineer experienced in building accessible and performant web applications, mostly using React and GraphQL.",
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        "I'm passionate about DX and team process, and love to use modern DevOps practices and create automated CI/CD pipelines for my projects.",
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        "Lately I've been interested in Infrastructure as Code technologies, and currently learning to use Terraform with AWS and Azure.",
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'This is a work in progress (obviously). More to come soon!',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            __typename: 'IntroductionIntroduction',
          },
          __typename: 'Introduction',
        },
      },
    },
  },
]

describe('HomePage', () => {
  it('should render the About heading', async () => {
    render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Home />
      </MockedProvider>
    )

    const heading = await screen.findByRole('heading', /About/i)
    expect(heading).toBeInTheDocument()
  })
})
