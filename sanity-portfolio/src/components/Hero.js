/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

function Hero() {
  return (
    <section
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        mt: 75,
      }}
    >
      <ul
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          flex: `1 1 25%`,
          m: 0,
          "& li": { listStyle: `none`, m: 0, mb: 40 },
          "& a": { textDecoration: `none`, color: `text`, fontSize: 30 },
        }}
      >
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div sx={{ flex: `0 0 75%` }}>
        <h2>Web Developer. Toronto.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptates distinctio earum, magni sed excepturi non impedit! Odio
          odit consequatur non error quis, deleniti amet corporis doloremque
          vero autem exercitationem sit rerum illo reiciendis repellat esse!
          Fugit quibusdam ratione obcaecati alias perferendis reiciendis quod
          sint nobis, vero dolores id cupiditate?
        </p>
        {/* <button sx={{ variant: "buttons.primary" }}>Click Me</button> */}
      </div>
    </section>
  )
}

export default Hero
