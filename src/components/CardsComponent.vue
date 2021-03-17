<template>
  <div class="container">
    <nav class="navbar mt-4 bg-light">
      <form class="form-inline w-100">
        <input
          v-model="search_card_name"
          @input="searchCards(search_card_name)"
          class="form-control mr-sm-2 w-100"
          type="search" placeholder="Search..." aria-label="Search">
      </form>
    </nav>
  </div>

  <div class="container d-flex justify-content-center" v-if="!searching">
    <div class="card w-50 mt-3">
      <div class="card-body">
        <h5 class="card-title">Create New Card</h5>
        <hr />
        <form>
          <div class="form-group">
            <input
              v-model="new_card_name"
              class="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <p>{{new_card_name}}</p>
          <button
            class="btn btn-sm btn-primary text-white float-right"
            @click="handleSubmit"
          >
            Add Card
          </button>
        </form>
        <p>Cards: {{cards.length}}</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="card in cards" :key="card.id">
        <div class="card w-100 mt-5">
          <div class="card-body">
            <h5 class="card-title">{{card.name}}</h5>
            <hr />
            <p>{{card.date}}</p>
            <button @click="redirect(card.id)" class="btn btn-sm btn-primary text-white float-right">Details</button>
            <footer class="blockquote-footer">{{card.addedDate}}</footer>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5" v-if="search_failed">
    <div class="d-flex align-items-center justify-content-center">
      <h2>Unable to find anything</h2>
    </div>
    <div class="d-flex align-items-center justify-content-center mt-2">
      <img src="https://thumbs-prod.si-cdn.com/RLA0euD8abrVXMLVy3IZ4xYwLcE=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/Vincent-van-Gogh-Doctor-Gachet-631.jpg">
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apiURL = "http://localhost:8081/api/allcards";
export default {
  name: "CardsComponent",
  data() {
    return {
      today: new Date(),
      new_card_name: "",
      search_card_name: "",
      searching: false,
      search_failed: false,
      cards: [
        // {id: 0, name: "test", addedDate: "2021-02-23"},
      ],
    }
  },
  methods: {
    handleSubmit(){
      const inputData = {name: this.new_card_name, addedDate: this.today}

      const headers = {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Content-Type": "application/json"
      };
      //const response = await
      axios.post("http://localhost:8081/api/addcard", inputData, {headers})

      this.new_card_name = ""
      event.preventDefault()
      this.$router.go("/")
    },
    redirect(id){
      this.$router.push("/cards/" + id)
    },
    fetchAPIData(){
      fetch(apiURL, {mode: 'cors'})
        .then(response => {
          return response.json()
        })
        .then(cards =>{
          this.cards = cards
        });
    },
    searchCards(new_card_name){
      this.search_failed = false;
      this.searching = true;
      fetch("http://localhost:8081/api/get_cards_by_name/" + new_card_name, {mode: 'cors'})
        .then(response => {
          return response.json()
        })
        .then(cards =>{
          if(cards.length === 0){
            this.search_failed = true;
          }
          this.cards = cards
        });
    }
  },
  created() {
    this.fetchAPIData()
  }
}
</script>

<style scoped>

</style>