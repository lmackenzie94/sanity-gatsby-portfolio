/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const navItems = ["about", "work", "blog"]

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
          luke.
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
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link to={item}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
