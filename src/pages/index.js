import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Header from "../components/Home/Header"
import Advantages from "../components/Home/Advantages"

export default () => (
  <Layout>
    <Header />
    <SimpleHero>
      <Banner info="Մատչելի և որակյալ քիմմաքրման ծառայություններ">
        <Link to="/tours" className="btn-white">
          Մեր Ծառայությունները
        </Link>
      </Banner>
    </SimpleHero>
    <Advantages />
    <About />
    <Services />
  </Layout>
)
