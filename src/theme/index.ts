export const dark = {
  html: {
    color: `#fff`,
    background: `#3C3F45`
  },

  layout: {
    background: `#3C3F45`,
  },

  header: {
    color: `#fff`,
    background: `#3C3F45`,
  },

  icon: {
    color: `#fff`
  },

  punctuation: {
    color: `#fff`
  },

  lineNumber: {
    color: `#fff`
  },

  coverMeta: {
    color: `#fff`
  },

  quote: {
    background: `#000`,
    color: `#fff`
  },

  outerLink: {
    color: `#0087ff`
  },

  copyright: {
    color: `#fff`
  }
}

export const white = {
  html: {
    color: `#3C3F45`,
    background: `#fff`
  },

  layout: {
    background: `#fff`,
  },

  header: {
    color: `#3C3F45`,
    background: `#fff`,
  },

  icon: {
    color: `rgb(60, 63, 69)`
  },

  punctuation: {
    color: `#24292e`
  },

  lineNumber: {
    color: `rgba(27,31,35,.3)`
  },

  coverMeta: {
    color: `rgba(0, 0, 0, 0.65)`
  },

  quote: {
    background: `rgb(239, 243, 245)`,
    color: `#fff`
  },

  outerLink: {
    color: `#0087ff`
  },

  copyright: {
    color: `#3C3F45`
  }
}

const htmlSettings = (theme = white) => {
  ;(document.querySelector('html') as any).style.color = theme.html.color
  ;(document.querySelector('html') as any).style.background =
    theme.html.background
}

const defaultMode = () => {
  try {
    htmlSettings(white)
  } catch (e) {
    console.log(e)
  }

  return white
}

export const theme = () => {
  let theme = white

  try {
    const darkMode = window.localStorage.getItem('dark-mode') === '1'
    theme = darkMode ? dark : white

    htmlSettings(theme)
  } catch (e) {
    theme = defaultMode()
    console.log(e)
  }

  return theme
}

export const changeThemeMode = () => () => {
  try {
    const darkMode = window.localStorage.getItem('dark-mode')

    window.localStorage.setItem('dark-mode', `${darkMode === '1' ? 0 : 1}`)

    window.location.reload()
  } catch (e) {
    console.log(e)
  }
}
