<template>
  <div id="content">
      <h3>
        {{ title }}
      </h3>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: "잘못된 접근입니다. Page Not Found"
        }
    }
}
</script>

<style scoped>  
  #content {
      overflow: hidden;
      margin-top: 200px;
      text-align: center;
  }
</style>