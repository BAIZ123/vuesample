<template>
   
        <div class="loginimage">
            <h1 class="heading" >Login Form</h1>
            <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">
     <v-btn color="primary" elevation="2" @click="handleSubmit" >LOGIN</v-btn>

        </div>


</template>


<script>
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert"
Vue.use(VueSimpleAlert)
export default ({
    name: 'loginForm',
    data() {

  return {

   email: '',
   password: ''
   
  }
},
methods: {
    handleSubmit() {
        if(this.email == "baiz@gmail.com" && this.password == "123456"){
            this.$fire({
                 title: "Login Successfully..!",
                 type: "success",
                 timer: 2000
             })
             window.location.href="http://localhost:8080/#/helloworld"
        }else {
            this.$fire({
                 title: "Invalid Email or Password",
                 type: "error",
                 timer: 2000
             })
        } 
    }
}
})
</script>
<style scoped>
.loginimage {
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
</style>
