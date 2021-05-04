/** @jsxRuntime classic /
/* @jsx jsx */
import { Fragment } from 'react'
import { node, string, arrayOf } from 'prop-types'
import { jsx, Card, Flex, Text, Divider, Spinner } from 'theme-ui'
import Image from 'next/image'

const ResumePosition = ({
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

ResumePosition.propTypes = {
  children: node,
  company: string,
  dates: string,
  description: arrayOf(string),
  logoSrc: string,
  tenure: string,
  title: string,
}

export default ResumePosition
