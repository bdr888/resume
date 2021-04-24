import { text } from './text'

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Montserrat',
    monospace: 'Menlo, monospace',
    brand: 'Norwester',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#FAFAFA',
    primary: '#07c',
    melon: '#e9afa3',
    peach: '#f9dec9',
    muted: '#f6f6f6',
    wildblue: '#99b2dd',
  },
  text,
  layout: {
    root: {
      bg: 'background',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 3,
      pt: 4,
    },
    main: {
      flex: '1 1 auto',
      width: '100%',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      maxWidth: 768,
      mx: 'auto',
      px: [1, 3],
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem',
      bg: 'wildblue',
      px: 3,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
  cards: {
    resumeSection: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // border: '1px solid lightgrey',
      // borderRadius: 8,
      // m: 2,
      // px: [2, 3],
    },
    dataCard: {
      display: 'flex',
      border: '1px solid lightgrey',
      borderRadius: 8,
      px: 4,
      py: 2,
      m: 2,
    },
  },
  links: {
    nav: {
      cursor: 'pointer',
      fontFamily: 'heading',
    },
    inlineText: {
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
}
