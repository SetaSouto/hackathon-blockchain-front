<template>
  <v-app id="inspire">
    <!--
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text"
                        :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    -->
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" :color="toolbar.color" dark app fixed>
      <v-toolbar-title style="width: 275px" class="ml-0 pl-3">
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"/> -->
        <span class="hidden-sm-and-down">Registro de propiedades</span>
      </v-toolbar-title>
      <v-text-field flat solo-inverted prepend-icon="search" label="Búsqueda por ROL, comuna o ciudad"
                    @keyup.enter="search" v-model="searchText"
                    class="hidden-sm-and-down"/>
      <v-spacer/>
      <v-btn icon @click="changeToRealEstate">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon @click="changeToBank">
        <v-icon>account_balance</v-icon>
      </v-btn>
      <v-btn icon @click="changeToUser">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn icon @click="changeToTrade">
        <v-icon>compare_arrows</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      searchText: '',
      toolbar: {
        color: 'blue darken-3'
      }
    }),
    methods: {
      changeToBank () {
        this.toolbar.color = 'teal'
        this.$router.push('/banco')
      },
      changeToUser () {
        this.toolbar.color = 'blue darken-3'
        this.$router.push('/busqueda')
      },
      changeToRealEstate () {
        this.toolbar.color = 'deep-purple lighten-2'
        this.$router.push('/inmobiliaria')
      },
      changeToTrade () {
        this.toolbar.color = 'orange lighten-1'
        this.$router.push('/transacciones')
      },
      search () {
        this.$store.commit('search', {
          results: [{
            address: 'Vergara 726, Santiago Centro',
            img: require('./views/search/sample.jpg'),
            price: '20000 UF'
          }]
        })
        this.changeToUser()
      }
    }
  }
</script>
