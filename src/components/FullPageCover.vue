<template>
  <div :style="style">
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      backgroundImage: {
        type: String,
        required: true
      }
    },
    computed: {
      style () {
        return {
          backgroundImage: `url(${this.backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100%',
          minWidth: '100%',
          display: 'flex'
        }
      }
    }
  }
</script>

<style></style>
