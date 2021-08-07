<template>
  <div class="wrapper">
    <Header />

    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer },
};
</script>

<style >
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.wrapper-content {
  margin-top: 100px;
  height: 70vh;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
}

a {
  text-decoration: none;
}
a:active,
a:hover {
  outline: 0;
}
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
:focus {
  outline: 0;
}

img,
audio,
video {
  max-width: 100%;
  height: auto;
}
audio,
canvas,
iframe,
video,
img,
svg {
  vertical-align: middle;
}
iframe {
  border: 0;
}

textarea {
  resize: none;
  overflow: auto;
  vertical-align: top;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}
input,
textarea,
select,
button {
  outline: none;
  border: none;
  font-size: 100%;
  margin: 0;
}
button,
input {
  line-height: normal;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
  text-align: left;
}
</style>
