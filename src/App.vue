<template>
  <div id="nav">
    <Header></Header>
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
  </div>
  <router-view />
</template>

<script>
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.css';
import '@ant-design/icons-svg';
import '@/custom_styles.css';

export default {
  name: "Login",
  components: { Header },
  data() {
    return {
      cards: [
        // {id: 0, name: "test", addedDate: "2021-02-23"},
      ],
    }
  },
  methods:{
    fetchAPIData(){
      fetch("http://localhost:8081/api/card/" + this.$route.params.id, {mode: 'cors'})
        .then(response => {
          return response.json();
        })
        .then(card =>{
          this.card = card;
        });


      fetch("http://localhost:8081/api/allcards" + this.$route.params.id, {mode: "cors"})
        .then(response => {
          return response.json();
        })
        .then(card_tasks =>{
          this.card_tasks = card_tasks;
        });
    }
  },
  created() {
    this.fetchAPIData();
  },
}
</script>

<style>
</style>
