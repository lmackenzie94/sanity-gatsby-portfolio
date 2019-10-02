const colors = {
  black: "#000",
  white: "#fff",
  red: "#e84002",
  greenish: "#98b3a2",
  greenDark: "#404a43",
  beige: "#fffff5",
}

const theme = {
  colors: {
    ...colors,
    text: colors.greenDark,
    background: colors.beige,
    primary: colors.greenish,
  },
  text: {
    heading: {
      color: "background",
    },
    subheading: {
      color: "text",
    },
  },
}

export default theme
