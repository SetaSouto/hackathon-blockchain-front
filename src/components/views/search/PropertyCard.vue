<template>
  <v-layout>
    <v-flex xs12 sm4>
      <v-card>
        <v-card-media :src="img" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ address }}</h3>
            <h1 class="light-green--text">{{ price }}</h1>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="blue">Agregar a favoritos</v-btn>
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
      address: String,
      price: String
    }
  }
</script>

<style scoped>

</style>
