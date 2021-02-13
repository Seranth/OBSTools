<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <nuxt-link to="/">
        <v-toolbar-title>OBSTools</v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-btn icon> </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: this.$vuetify.breakpoint.lgAndUp,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-book-open-page-variant',
          title: 'Documentation',
          to: '/documentation',
        },
        /*
        {
          icon: 'mdi-download',
          title: 'Downloads',
          to: '/downloads',
        },
         */
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
