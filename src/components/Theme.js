
const userMode = {
  lightTheme: {
    mainBg: 'hsl(0, 0%, 97%)',
    elementBg: 'hsl(0, 0%, 99%)',
    input: 'hsl(0, 0%, 52%)',
    boxShadow: '0px 0px 10px 0px hsl(0, 0%, 82%)',
    text: 'hsl(200, 15%, 8%)',
  },
  darkTheme: {
    mainBg: 'hsl(207, 26%, 17%)',
    elementBg: 'hsl(209, 23%, 22%)',
    input: 'hsl(0, 0%, 98%)',
    boxShadow: '0px 0px 10px 0px  hsl(200, 15%, 15%)',
    text: 'hsl(0, 0%, 100%)',
  }
}

const designTheme = {
  colors: {
    standOut: '#ffc600',
  },
  fontWeight: {
    smallWeight: 200,
    standardWeight: 400,
    largeWeight: 600,
    xlWeight: 800,
  },
  padding: {
    smallPadding: '.5rem',
    standardPadding: '1rem',
    largePadding: '1.5rem',
    xlPadding: '2rem',
    xxlPadding: '2.5rem',
  },
  typogrophy: {
    smallTypo: '1rem',
    standardTypo: '1.4rem',
    largeTypo: '1.6rem',
    xlTypo: '2rem',
    xxlTypo: '2.8rem',
  },
}

export { userMode, designTheme }