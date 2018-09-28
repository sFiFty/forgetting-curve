import React, { Component } from 'react'
import * as A from "@blueprintjs/core";

export default class NavBar extends Component {
  render() {
    console.log(A)
    return (
      <div>
        <A.Navbar>
          <A.Navbar.Group>
              <A.Navbar.Heading>Blueprint</A.Navbar.Heading>
              <A.Navbar.Divider />
              <A.Button className="bp3-minimal" icon="home" text="Home" />
              <A.Button className="bp3-minimal" icon="document" text="Files" />
          </A.Navbar.Group>
        </A.Navbar>
      </div>
    )
  }
}
