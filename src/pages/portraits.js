import React from "react"

import Menu from "../components/menu"
import Sky from "../components/sky"
import SEO from "../components/seo"

const Portraits = () => (
  <>
   <Sky />
    <Menu />
    <SEO title="Portraits" />
    <h1>Portraits</h1>
    <div className="photography-content">

    <img
      alt="me"
      src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
    />
    </div>
  </>
)

export default Portraits
