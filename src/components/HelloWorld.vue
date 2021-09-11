<template>

  <div class="commentimage">
    <div class="left">
           <h1>{{ title }}</h1>
          <form >
             <v-text-field class="input" type="text" placeholder="Add a comment..." v-model="newLink"></v-text-field>
  
<button @click="handleSubmit">SUBMIT</button>
          </form>
            
           <ul class="comment">
                <h3 > Your Comment </h3>
               
             <li  v-for="(link, index) in links" v-bind:key="index">
                {{ link }}
             </li>
                
           </ul>
           <sidebar-menu :menu="menu" />
    </div>
    <div class="right">
          <stats />
    </div>
     </div>
</template>

<script>
import Stats from '@/components/Stats.vue'
import { mapState, mapMutations } from 'vuex'
import { SidebarMenu } from 'vue-sidebar-menu'


export default {
  name: 'HelloWorld',
 
  data() {
    return {
      newLink: '',
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
  components: {
    Stats,
    SidebarMenu
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ])
  },
  methods: {
     ...mapMutations([
       'ADD_LINK'
     ]),
     handleSubmit: function() {
       this.ADD_LINK(this.newLink)
       this.newLink = ''
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commentimage {
    background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
    background-size: cover;
    text-align: left;
    padding: 650px;
    padding-top: 50px;
    border-radius: 10px;
}
.heading {
    font-style: italic;
}
form {
    max-width: 520px;
    margin: 30px auto;
    background: rgb(136, 231, 200);
    text-align: left;
    padding: 40px;
    padding-top: 50px;
    border-radius: 10px;
}
.input{
  padding-bottom: 40px;
}
.comment{
  padding-bottom: 50px;
  font-style: italic;
  
}
</style>
