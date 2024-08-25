<template>
  <header> 
    <div id ="nav" class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <a class="navbar-brand" aria-current="page">
          <router-link to="/"><img src="../src/assets/OrKSLogo.png" alt="" height="40"></router-link>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link to="/AktuelleProjekte" class="nav-item nav-link">Aktuelle Projekte</router-link>
              <router-link to="/Partner" class="nav-item nav-link">Partner</router-link>
              <router-link to="/OrKSUeberUns" class="nav-item nav-link">Über Uns</router-link>
            </div>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Suche" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Suchen</button>
            </form>
          </div>
      </nav>
    </div>
  </header>
  <router-view/>
  <footer id="footer" class="nav justify-content-center">
    <router-link to="/Impressum" class="nav-item nav-link">Impressum</router-link>
    <router-link to="/Datenschutz" class="nav-item nav-link">Datenschutz</router-link>
    <router-link to="/Kontakt" class="nav-item nav-link">Kontakt</router-link>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 22px;
  min-height: 98vh;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  #app {
    font-size: 12px;
  }
}

@media (min-width: 768px) {
  #app {
    font-size: 18px;
  }
}

nav {
  position: fixed;
  top: 0;
  margin-left: 20px;
  margin-right: 20px;
  background: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  width: 100%;
  background-color: white;
  margin-top: auto;
}

#footer a {
  color: gray;
}

li a {
  text-decoration: none;
  color: gray;
}
</style>
