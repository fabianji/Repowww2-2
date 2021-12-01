import * as React from "react"
import {ReactNode} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NameForm from "../components/name_form"
import IndexRoute from "../components/ComponentRoute"
import { PageProps } from "gatsby"

class usuario {
  readonly id: number;
  nombre: string;
  
  constructor(code: number, name: string)     {
      this.id = code;
      this.nombre = name;
  }
}

let emp = new usuario(1, "Typscript");
emp.nombre = 'Typescript'; 

const holamundo = (props: PageProps) => (

  <Layout>
      <p>Hola {emp.nombre}, tu nombre es un string, y tu id es de tipo número, y es {emp.id} </p>
  </Layout>
)

export default holamundo
