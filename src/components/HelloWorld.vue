<template>
  <div>
    <h1 :class="$style.head">
      {{ msg }}
      <p>Paragraph</p>
      <p>{{ test }}</p>
      </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      test: 'TEST! TEST! TEST!'
    }
  }
}
</script>

<style lang="scss" module>
.head {
  background: rgb(133, 126, 126);
  p {
    color:#42b983
  }
}
</style>
