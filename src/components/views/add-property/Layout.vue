<template>
  <full-page-cover :background-image="require('./background.jpg')">
    <!-- CONTENT -->
    <v-container fluid text-md-center class="fill-height">
      <v-layout row>
        <v-flex md12>
          <h1 class="principal-title">¿Nueva propiedad?</h1>
          <h1 class="secondary-title">Ingrésala a la Blockchain</h1>
          <v-btn large color="blue darken-1" class="white--text elevation-10" @click="dialog.show = true">
            Subir propiedad
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- DIALOG WITH FORM -->
    <v-dialog v-model="dialog.show" max-width="500px">
      <v-card>
        <v-card-title>
          <h2 class="headline">Agregar propiedad a la blockchain</h2>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout>
              <v-flex md12>
                <v-text-field label="Dirección" single-line prepend-icon="home"/>
                <v-text-field label="Dirección" single-line prepend-icon="home"/>
                <v-text-field label="Dirección" single-line prepend-icon="home"/>
                <v-text-field label="Dirección" single-line prepend-icon="home"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey" flat @click.native="dialog.show = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog.show = false">Guardar</v-btn>
        </v-card-actions>
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
        dialog: {
          show: false
        }
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
</style>
