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
    computed: {
      applicants () {
        return this.$store.state.applicants
      }
    }
  }
</script>

<style scoped>

</style>
