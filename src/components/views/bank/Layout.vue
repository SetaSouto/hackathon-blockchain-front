<template>
  <full-page-cover :background-image="require('../add-property/background.jpg')">
    <v-container>
      <v-layout style="text-align: center;">
        <v-flex v-if="applicants.length">
          <h1 class="principal-title">Hay gente buscando un crédito hipotecario.</h1>
          <h1 class="secondary-title">Contacta a alguna de estas personas que están buscando comprar alguna
            propiedad.</h1>
        </v-flex>
        <v-flex v-else>
          <h1 class="principal-title">No hay nadie buscando un crédito hipotecario.</h1>
          <h1 class="secondary-title">Te notificaremos ante cualquier nuevo movimiento.</h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <applicant-card v-for="tuple in applicants" :key="tuple.applicant.rut" :applicant="tuple.applicant"
                        :property="tuple.property" @approveCredit="approveCredit(tuple)"/>
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
  import ApplicantCard from './ApplicantCard'

  export default {
    data () {
      return {
        notification: {
          show: false,
          message: 'Crédito aprobado, notificaremos a tu cliente y al vendedor para que apruebe la transacción.'
        }
      }
    },
    components: {
      ApplicantCard,
      FullPageCover
    },
    computed: {
      applicants () {
        return this.$store.state.applicants
      }
    },
    methods: {
      approveCredit ({property, applicant}) {
        this.notification.show = true
        this.$store.commit('approveCredit', property)
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
