<template>
  <full-page-cover :background-image="require('../add-property/background.jpg')">
    <v-container>
      <property-card v-for="result in results" :key="result.direccion" :img="result.img" :address="result.address"/>
    </v-container>
  </full-page-cover>
</template>

<script>
  import FullPageCover from '../../FullPageCover'
  import PropertyCard from '../PropertyCard'

  export default {
    components: {
      PropertyCard,
      FullPageCover
    },
    data () {
      return {
        results: [{
          address: 'Vergara 726, depto 400',
          img: require('./sample.jpg')
        }]
      }
    }
  }
</script>

<style scoped>

</style>
