<template>
  <div class="page">
    <div class="banner-container" />
    <div class="character">
      <i class="name">DueTy's</i>
      <p>程序员、机车男、One Piece、SD...</p>
    </div>
    <i style="color: rgb(82, 82, 82)">I'm in love with my machine</i>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/layouts/Footer.vue";
</script>

<style scoped lang="less">
.page {
  width: 80%;
  margin: auto;
  position: relative;
  min-height: 100vh;
}

.banner-container {
  background: url(~"@{cdnPrefix}/t-cdn/images/banner.jpeg");
  background-position: right 50%;
  background-repeat: no-repeat;
  background-size: 194%;
  width: 100%;
  height: 300px;
}

.character {
  font-family: "Helvetica Neue";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  flex-direction: column;

  .name {
    font-size: 20px;
  }
}
#outlook a {
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

table,
td {
  border-collapse: collapse;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
}

img {
  border: 0;
  height: auto;
  line-height: 100%;
  outline: none;
  text-decoration: none;
  -ms-interpolation-mode: bicubic;
}

p {
  display: block;
  margin: 13px 0;
}

@media only screen and (min-width: 480px) {
  .mj-column-per-100 {
    width: 100% !important;
    max-width: 100%;
  }

  .mj-column-px-400 {
    width: 400px !important;
    max-width: 400px;
  }
}

.moz-text-html .mj-column-per-100 {
  width: 100% !important;
  max-width: 100%;
}

.moz-text-html .mj-column-px-400 {
  width: 400px !important;
  max-width: 400px;
}
</style>
