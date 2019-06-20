<template>
  <v-app>
    <v-toolbar 
      app 
      class="text-xs-center"
    >
      <v-toolbar-title class="headline">
        <span>Меню</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        v-for="item of menu"
        :key="item.name"
        :to="item.link"
        active-class="v-btn--active"
        flat
      >
        {{item.name}}
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menu: [
        {
          name: "Пользователи",
          link: '/users'
        },
        {
          name: "Группы",
          link: '/groups'
        }
      ]
    }
  }
}
</script>
