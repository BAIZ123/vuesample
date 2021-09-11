<template>
  <div class="dashboardimage" id="app">
    <sidebar-menu :menu="menu" />
    <AddTodo />
    <FilterTodos/>
    <Todos />

  </div>
</template>

<script>
import AddTodo from './AddTodo.vue'
import Todos from './Todos.vue'
import FilterTodos from './FilterTodos.vue'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  name: 'name',
  components: {
    AddTodo,
    Todos,
    FilterTodos,
    SidebarMenu
  },
  data(){
    return {
  menu: [
      
      {
        href: '/dashboard',
        title: 'Dashboard',
        icon: 'fa fa-user'
      },
      {
        href: '/helloworld',
        title: 'Comment Section',
        icon: 'fas fa-registered'
      },
      {
        href: '/cards',
        title: 'Cards',
        icon: 'fa fa-address-card'
      },
      
{
        href:'/details',
        title:'Details',
        icon: 'fa fa-eye'
      },
      {
        href: '/name',
        title: 'Content',
        icon: 'fa fa-comment'
      },
      {
        href: '/login',
        title: 'Logout',
        icon: 'fas fa-sign-in-alt'
      },
    ]
    }
  }
}
</script>

<style scoped>
.dashboardimage {
   background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
    background-size: cover;
    padding-bottom: 250px;
    padding-top: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
