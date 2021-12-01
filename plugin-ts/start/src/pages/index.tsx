import * as React from "react"
import {ReactNode} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NameForm from "../components/name_form"
import IndexRoute from "../components/ComponentRoute"
import { PageProps } from "gatsby"

class Employee {
  readonly empCode: number;
  empName: string;
  
  constructor(code: number, name: string)     {
      this.empCode = code;
      this.empName = name;
  }
}
let emp = new Employee(25, "Bolbasor");
emp.empName = 'Pikachu'; 

const IndexPage = (props: PageProps) => (

  <Layout>
    <div>
    <StaticImage
      src="../images/pikachu.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
    <p>{emp.empName}</p>
    <p>{emp.empName} es el Pokemon número {emp.empCode} de la Pokedex</p>
    </div>
    <div>
    <StaticImage
      src="../images/pikachu1.jfif"
      width={300}
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
        <StaticImage
      src="../images/pikachu2.jfif"
      width={300}
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
        <StaticImage
      src="../images/pikachu3.jpg"
      width={300}
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
    </div>
    <div>
    <StaticImage
      src="../images/pikachu4.jfif"
      width={300}
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
        <StaticImage
      src="../images/pikachu5.jpg"
      width={300}
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
      <StaticImage
      src="../images/pikachu6.png"
      width={300}
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    />
    </div>
    <Seo title="Home" />
    <h1>Hi peopleXD</h1>
    <h1>Path:</h1>
    <p>{props.path}</p>
    <p>{emp.empName}</p>
    <p>{emp.empCode}</p>
    <NameForm></NameForm>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
      <Link to="/holatypscript">TSX"</Link>
    </p>
  </Layout>
)

export default IndexPage
