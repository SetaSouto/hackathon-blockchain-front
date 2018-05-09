<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media :src="img" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ address }}</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Solicitar crédito</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      img: String,
      address: String
    }
  }
</script>

<style scoped>

</style>
