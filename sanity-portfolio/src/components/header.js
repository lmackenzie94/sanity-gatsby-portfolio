/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: `primary`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            variant: `text.heading`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
