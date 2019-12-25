export const normal_ = {
  html: {
    color: `#fff`,
    background: `#3C3F45`
  },

  background: `#3C3F45`,

  header: {
    color: `#fff`,
    background: `#3C3F45`
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
    color: `#fff`
  },

  copyright: {
    color: `#fff`
  }
}

export const normal = {
  html: {
    color: `#3C3F45`,
    background: `#fff`
  },

  background: `#fff`,

  header: {
    color: `#3C3F45`,
    background: `#fff`
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
    color: `#3C3F45`
  },

  copyright: {
    color: `#3C3F45`
  }
}

try {
  ;(document.querySelector('html') as any).style.color = normal.html.color
  ;(document.querySelector('html') as any).style.background =
    normal.html.background
} catch (e) {}
