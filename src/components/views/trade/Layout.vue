<template>
  <full-page-cover :background-image="require('../add-property/background.jpg')">
    <v-container v-if="!property">
      <v-layout>
        <v-flex style="text-align: center;">
          <h1 class="principal-title">No hay transacciones para aprobar.</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-if="property">
      <v-layout>
        <v-flex style="text-align: center;">
          <h1 class="principal-title">¡Casi listo!</h1>
          <h1 class="secondary-title">Tu comprador ya tiene su crédito aprobado, solo basta arobar la transacción.</h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md4 offset-md4>
          <v-card>
            <v-card-media :src="property.img" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ property.address }}</h3>
                <h1 class="light-green--text">{{ property.price }}</h1>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="green" @click="allowTransaction">Aprobar transacción</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- DIALOG -->
    <v-dialog v-model="notification.show" max-width="500px">
      <v-card>
        <v-card-title>
          <p class="notification-message">{{ notification.message }}</p>
        </v-card-title>
      </v-card>
    </v-dialog>
  </full-page-cover>
</template>

<script>
  import FullPageCover from '../../FullPageCover'

  export default {
    components: {
      FullPageCover
    },
    data () {
      return {
        property: {
          address: 'Vergara 726, Santiago Centro',
          img: require('../search/sample.jpg'),
          price: '20000 UF'
        },
        notification: {
          show: false,
          message: 'Transacción aprobada, notificaremos al nuevo dueño.'
        }
      }
    },
    methods: {
      allowTransaction () {
        this.notification.show = true
        this.property = null
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #fff;
  }

  .principal-title {
    font-size: 80px;
  }

  .secondary-title {
    font-size: 30px;
  }

  .notification-message {
    font-size: 20px;
  }
</style>
