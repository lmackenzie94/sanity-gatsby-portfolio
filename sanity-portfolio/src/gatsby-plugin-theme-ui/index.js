import { darken, lighten } from "polished"

const colors = {
  black: `#000`,
  white: `#fff`,
  red: `#e84002`,
  greenish: `#98b3a2`,
  greenDark: `#404a43`,
  beige: `#fffff5`,
}

const baseButton = {
  px: 25,
  py: 10,
  border: `none`,
  minWidth: 100,
  cursor: `pointer`,
  willChange: `color background-color`,
  transitionProperty: `color, background-color`,
  transition: `0.2s ease-in`,
  ":hover, :focus": {
    bg: darken(0.2, colors.greenish),
    transition: `0.2s ease-out`,
  },
}

const theme = {
  colors: {
    ...colors,
    text: colors.greenDark,
    background: colors.beige,
    primary: colors.greenish,
    faded: lighten(0.25, colors.greenish),
  },
  text: {
    heading: {
      color: `background`,
    },
    subheading: {
      color: `text`,
    },
  },
  buttons: {
    primary: {
      ...baseButton,
      bg: `primary`,
      color: `background`,
    },
  },
}

export default theme
