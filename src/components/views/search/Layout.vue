<template>
  <full-page-cover :background-image="require('../add-property/background.jpg')">
    <v-container>
      <!-- PROPERTIES -->
      <property-card v-for="result in results" :key="result.address" :img="result.img" :address="result.address"
                     :price="result.price" @credit="notifyCredit" @favorite="notifyFavorite"/>
      <!-- DIALOG -->
      <v-dialog v-model="notification.show" max-width="500px">
        <v-card>
          <v-card-title>
            <p class="notification-message">{{ notification.message }}</p>
          </v-card-title>
        </v-card>
      </v-dialog>
    </v-container>
  </full-page-cover>
</template>

<script>
  import FullPageCover from '../../FullPageCover'
  import PropertyCard from './PropertyCard'

  export default {
    components: {
      PropertyCard,
      FullPageCover
    },
    data () {
      return {
        notification: {show: false}
      }
    },
    computed: {
      results () {
        return this.$store.state.search.results
      }
    },
    methods: {
      notifyCredit () {
        this.notification.show = true
        this.notification.message = 'Hemos notificado a los bancos que estás buscando crédito hipotecario. ¡Suerte!'
      },
      notifyFavorite () {
        this.notification.show = true
        this.notification.message = 'Agregado a favoritos.'
        const self = this
        setTimeout(() => { self.notification.show = false }, 2000)
      }
    }
  }
</script>

<style scoped>
  .notification-message {
    font-size: 20px;
  }

</style>
