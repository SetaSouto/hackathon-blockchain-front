<template>
  <full-page-cover :background-image="require('../add-property/background.jpg')">
    <v-container>
      <v-layout>
        <applicant-card v-for="tuple in applicants" :key="tuple.applicant.rut" :applicant="tuple.applicant"
                        :property="tuple.property"/>
      </v-layout>
    </v-container>
  </full-page-cover>
</template>

<script>
  import FullPageCover from '../../FullPageCover'
  import ApplicantCard from './ApplicantCard'

  export default {
    components: {
      ApplicantCard,
      FullPageCover
    },
    data () {
      return {
        applicants: [
          {
            property: {
              address: 'Vergara 726, depto 400, Santiago',
              price: '10.000 UF',
              img: require('../search/sample.jpg')
            },
            applicant: {
              name: 'Fabián Souto',
              rut: '18876543-2',
              phone: '+56984215265',
              email: 'fabian.souto@email.com'
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
