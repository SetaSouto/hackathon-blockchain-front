<template>
  <full-page-cover :background-image="require('../add-property/background.jpg')">
    <v-container>
      <v-layout>
        <v-flex xs12 md6 offset-md3>
          <v-card>
            <v-card-media :src="img" height="400px">
            </v-card-media>
            <v-container>
              <v-layout row>
                <v-flex class="align-center">
                  <h1>{{ address }}</h1>
                  <h3>Precio actual: <span class="light-green--text" style="font-size: 30px;">{{ price }}</span></h3>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex md8 offset-md2 sm12 class="align-center">
                  <h1>Histórico de tasaciones</h1>
                  <line-chart :data="oldPrices"></line-chart>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
        address: 'Vergara 726, depto 400',
        img: require('../search/sample.jpg'),
        price: '10000 UF',
        oldPrices: {
          '2010/10/05': 5000,
          '2011/11/10': 7000,
          '2012/10/12': 6500,
          '2014/07/13': 4000,
          '2015/08/25': 8500,
          '2017/01/30': 10000
        }
      }
    },
    created () {
      // TODO: Request info
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped>
  .align-center {
    text-align: center;
  }
</style>
