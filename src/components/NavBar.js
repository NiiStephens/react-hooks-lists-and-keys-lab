import React from "react";

function NavBar() {

  // create a new array using the map array method
  const links = ["home", "about", "projects"];
  let showLinks = links.map((item) =>{
    return <a href={"#" + item} key={item}>{item}</a>
  })

  return <nav> {showLinks}</nav>
}

export default NavBar;
