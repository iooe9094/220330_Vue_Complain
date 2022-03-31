<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <HeaderCom></HeaderCom>
    <NavCom></NavCom>
    <!-- content가 바뀌는 부분 (router/index.js) -->
    <router-view/>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import HeaderCom from "@/components/common/HeaderCom.vue"
import NavCom from "@/components/common/NavCom.vue"
import FooterCom from "@/components/common/FooterCom.vue"

export default {
  components: {
    HeaderCom,
    NavCom,
    FooterCom
  }
}
</script>