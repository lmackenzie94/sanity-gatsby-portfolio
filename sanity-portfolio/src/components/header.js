/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Header = () => (
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
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
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
          {/* {siteTitle} */}luke.
        </Link>
      </h1>
      <nav>
        <ul
          sx={{
            display: `flex`,
            m: 0,
            "& li": { listStyle: `none`, pl: 35, m: 0 },
            "& a": { textDecoration: `none`, color: `text` },
          }}
        >
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">work</a>
          </li>
          <li>
            <a href="/">blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
