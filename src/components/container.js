
import * as React from "react"

const Container = ({children}) => (
    <div className="container">
    <div className="row">
      {children}
    </div>
  </div>
)

export default Container
