<template>
  <v-flex xs12 sm4 style="margin: auto;">
    <v-card>
      <v-card-media :src="property.img" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ property.address }}</h3>
          <h1 class="light-green--text">{{ property.price }}</h1>
          <h3>Solicitante:</h3>
          <ul style="margin-left: 20px;">
            <li><strong>Nombre:</strong> {{ applicant.name }}</li>
            <li><strong>Rut:</strong> {{ applicant.rut }}</li>
            <li><strong>Teléfono:</strong>{{ applicant.phone }}</li>
            <li><strong>Email:</strong>{{ applicant.email }}</li>
          </ul>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="grey">Contactar</v-btn>
        <v-btn flat color="orange" @click="$router.push('/propiedades/4567-65')">Ver propiedad</v-btn>
        <v-btn flat color="success" @click="$emit('approveCredit')">Crédito aprobado</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      img: String,
      applicant: Object,
      property: Object
    }
  }
</script>

<style scoped>

</style>

