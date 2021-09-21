<template>
  <nav class="header">
    <ul class="cf">
      <li><a >bonjour</a></li>

      <li><a class="dropdown">Multimedia</a>
        <ul>
          <li><a> bonjour</a></li>
          <li><a> bonjour</a></li>
        </ul>

      </li>
      <li><a class="dropdown" >bonjour</a>
        <ul>
          <li><a >bonjour</a></li>
          <li><a > bonjour</a></li>
          <li><a>bonjour</a></li>
        </ul>

      </li>

    </ul>
  </nav>

</template>

<script>
export default {
  name: "base_header"
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

.header{
  background: #1a1a1c;

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

.cf:after, .cf:before {
  content: "";
  display: table;
}
.cf:after {
  clear: both;
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


.footer-item a {
  color: #081f49;
  text-decoration: none;
  cursor: pointer;
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