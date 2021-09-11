<template >
<div class="dashboardimage">
<form>
      <div>
          <h1>Users List</h1>
          <table id="customers">
              <tr>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Age</th>
              </tr>
              <tr v-for="item in list" v-bind:key="item.id">
                  <td>{{item.employee_name}}</td>
                  <td>{{item.employee_salary}}</td>
                  <td>{{item.employee_age}}</td>
              </tr>
          </table>
          <sidebar-menu :menu="menu" />
          </div>
</form>  
</div>
    </template>

    <script>
     import Vue from 'vue';
     import axios from 'axios'
     import { SidebarMenu } from 'vue-sidebar-menu'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
name:"userlist",
components: {
    SidebarMenu
  },
data(){
    return {
        list:undefined,
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
},
mounted(){
    Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then((resp)=>{
        this.list=resp.data.data
    })
}
}


    </script>
    <style>
        form {
    max-width: 520px;
    margin: 30px auto;
    text-align: left;
    padding: 40px;
    padding-top: 50px;
    border-radius: 10px;
}
        .dashboardimage {
   background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
    background-size: cover;
    padding-bottom: 250px;
    padding-top: 100px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2415f5;
  
}
</style>
