<template>


<div class="image" method="post">
<!-- <form v-show="isForm" > -->
    <h2 class="heading" align="center">REGISTRATION FORM</h2>
    <label>First Name:</label>
    <input type="firstName" placeholder="Enter First Name" required v-model="firstName" />

    <label>last Name:</label>
    <input type="lastName" placeholder="Enter Last Name" required v-model="lastName" />

    <label>Email:</label>
    <input type="email" placeholder="Enter EmailId" required v-model="email" />

    <label>Password:</label>
    <input type="password" placeholder="Enter Password" required v-model="password" />

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

<div class="submit">
   <v-btn color="primary" elevation="2" @click="handleSubmit" >Create an Account</v-btn>
</div>

  <v-alert v-show="isalert" type="success">Registered Successfully</v-alert>
<!-- </form> -->

</div>
    
</template>

<script>
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert"

Vue.use(VueSimpleAlert)
let array = []
let obj ={}

export default {
   name: 'signup', 
    components: {

  },
data() {

  return {

   firstName: '',
   lastName: '',

   email: null,
   password: null,
   
   role: 'designer',
   terms: false,
   isForm: true,
   drawer: false
   
  }
},
methods: {

    handleSubmit() {
        
        this.isForm=false
        if(this.firstName && this.lastName && this.email && this.password){
        //this.isalert = true
              obj ={
                 FirstName : this.firstName,
                 LastName : this.lastName,
                 Email : this.email,
                 Password : this.password,
                 Role : this.role
             }
             array.push(obj)
             localStorage.setItem("Email", JSON.stringify(array))
             this.firstName = ''
             this.lastName = ''
             this.email = ''
             this.password = ''
             this.terms = false
             this.$fire({
                 title: "Registered Successfully..!",
                 type: "success",
                 timer: 1000
             })
             window.location.href="http://localhost:8080/#/login"
        }else {
            this.$fire({
                title: "Registration Failed",
                text: "Fill all fields",
                type: "error",
                timer: 2000
            })
           // window.location.href="http://localhost:8080/#/"
        }

    }
}


}

</script>


<style>
.image {
    background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
    background-size: cover;
    text-align: left;
    padding: 650px;
    padding-top: 50px;
    border-radius: 10px;
}

form {
    max-width: 520px;
    margin: 30px auto;
    background: rgb(8, 128, 226);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: rgb(240, 228, 236);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-style: oblique;
}
input,select {
    display: block;
    padding: 6px 6px;
    background: #faf9f9;
    border-radius: 10px;
    width: 90%;
    
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    margin: 0 30px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background:#eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color:#777;
    cursor: pointer;
}
button {
    background: #13e725;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: rgb(235, 29, 29);
    border-radius: 20px;
}
.submit {
    text-align: center;
}

</style>