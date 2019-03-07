import React from "react";

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
   <a className="navbar-brand"   href="/"></a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar collapse" id="navbarNav"></div>
  <ul class="navbar-nav"></ul>
  <li class="nav-item active"></li>
    <a class="nav-link" href="#">title <span class="sr-only"></span></a>
    <a class="nav-link" href="#">artist<span class="sr-only"></span></a>
    <a class="nav-link" href="#">album<span class="sr-only"></span></a>
    <a class="nav-link" href="#">year<span class="sr-only"></span></a>   
    );
    };
     
    
export default Nav;