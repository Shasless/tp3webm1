<template>
  <footer>
    <ul class="footer">
      <li class="footer-item"><a href="#top" ><i class="fas fa-angle-double-up fa-2x"><font-awesome-icon :icon="['fas', 'user-secret']" /></i></a></li>
      <li class="footer-item"><a href="https://twitter.com"><i class="fab fa-twitter fa-2x" ></i><font-awesome-icon :icon="['fab', 'font-awesome']" /></a></li>
      <li class="footer-item"><a href="https://github.com/Shasless"><i class="fab fa-github fa-2x" ></i><font-awesome-icon :icon="['fab', 'font-awesome']" />></a></li>

    </ul>
  </footer>
</template>

<script>
export default {
  name: "base_footer",
  data(){
    return{

    }
  }
}
</script>
<style scoped>
* {
  outline: none;
  padding: 0;
  margin: 0;
}
a {
  outline: none !important;
}
body {

  background: linear-gradient(#ffffff, #7694ba);
  min-height: 100vh;
  font-size: 1.1em;
  font-family: avenir-light, Helvetica, sans-serif;
  outline: none;
  padding: 0;
  margin: 0;
}


nav ul {
  -webkit-font-smoothing: antialiased;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
nav li {
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
}
nav a {
  color: #f5f5f5;
  display: block;
  font: normal 13px/50px avenir-light, Helvetica, sans-serif;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
nav li:hover a, nav li:focus a, nav li:active a {
  background: #7694ba;
  color: #f5f5f5;
}
nav li ul {
  float: left;
  left: 0;
  width:150%;
  opacity: 0;
  position: absolute;
  top: 35px;
  visibility: hidden;
  z-index: 1;
  -webkit-transition: all .25s ease;
  -moz-transition: all .25s ease;
  -ms-transition: all .25s ease;
  -o-transition: all .25s ease;
  transition: all .25s ease;
}
nav li:hover ul, nav li:focus ul, nav li:active ul {
  opacity: 1;
  top: 50px;
  visibility: visible;
}
nav li ul li {
  float: none;
  width: 100%;
}
nav li ul a:hover,nav li ul a:focus,nav li ul a:active {
  background: #346990;
}



footer {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;

  padding: 5px 5px 10px 10px;
}

.footer {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  justify-content: left;
  padding: 0 5px;
}


.footer-item {
  height: 15px;
  letter-spacing: 1px;
  opacity: .5;
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 10px;
}


.footer-item a {
  color: #081f49;
  text-decoration: none;
  cursor: pointer;
}

.footer-item:hover , .footer-item:focus, .footer-item:active {
  opacity: 1;
  color: #49083e;
  -webkit-transition: opacity .2s ease-out;
  -o-transition: opacity .2s ease-out;
  transition: opacity .2s ease-out;
}

.footer-item:not(:first-child) {
  border-left: 1px solid #49083e;
}

.footer-item {
  font-family: avenir-light Light, serif;
  font-size: 13px;
  display: flex;
  color: #49083e;

}


.main-text h1 {
  box-sizing: border-box;
  border: 0;
  font-style: inherit;
  margin: 0;
  outline: 0;
  vertical-align: baseline;
  font-family: avenir-light, sans-serif;

  padding: 20px 0 10px 0;
  font-weight: 600;
  text-transform: none;
  font-size: 4vw;
  line-height: 1.3;
  text-align: center;
}
</style>