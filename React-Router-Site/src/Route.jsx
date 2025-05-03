import { Outlet } from "react-router-dom"
import {Header , Footer} from "./index.js"

function Direction() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Direction
