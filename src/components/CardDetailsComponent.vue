<template v-if="card != null">
  <div class="container d-flex justify-content-center">
    <div class="card w-100 mt-5">
      <div class="card-body">
        <form>
          <div class="form-group">
            <input
                v-model="card.name"
                class="form-control"
            />
          </div>
          <p>{{card.date}}</p>
          <button
              class="btn btn-sm btn-primary text-white float-right"
              @click="updateCard(card)"
          >
            Edit
          </button>
        </form>
        <form>
          <button
              class="btn btn-sm btn-danger text-white mr-3 float-right"
              @click="deleteCard(card)"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="card w-100 mt-5">
      <div class="card-body">
        <h5 class="card-title">Create New Card</h5>
        <hr />
        <form>
          <div class="form-group">
            <input
                v-model="taskText"
                class="form-control"
                id="formGroupExampleInput2"
            />
          </div>
          <p>{{taskText}}</p>
          <button
              class="btn btn-sm btn-primary text-white float-right"
              @click="handleSubmit"
          >
            Add Card Task {{card_tasks.length}}
          </button>
        </form>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12" v-for="task in tasks" :key="task.id">
        <div class="card w-100 mt-5">
          <div class="card-body">
            <h5 class="card-title">{{task.taskText}}</h5>
            <hr />
            <p>{{task.added_date}}</p>
            <form>
            <div class="form-check">
              <input v-model="task.done" class="form-check-input" type="checkbox" :checked="task.done"  :onchange="changeTaskStatus(task)">
              <label class="form-check-label">
                Is Finished: {{task.done}}
              </label>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const apiURL = "http://localhost:8081/api/cards/";
export default {
  name: "CardDetailsComponent",
  data() {
    return {
      today: new Date(),
      taskText: "",
      done: false,
      card_tasks: [],
      card: null
    }
  },
  methods: {
    handleSubmit(){
      const inputData = {addedDate: this.today, card: this.card ,done: this.done,taskText: this.taskText}
      const headers = {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Content-Type": "application/json"
      };
      //const response = await
      axios.post("http://localhost:8081/api/addcardtask", inputData, {headers})
      this.taskText = "";
      this.done = false;
      event.preventDefault()
    },
    changeTaskStatus(task){
      // const inputData = { task}

      const headers = {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Content-Type": "application/json"
      };
      //const response = await
      axios.post("http://localhost:8081/api/savecardtask", task, {headers})
      event.preventDefault();
    },
    updateCard(card){

      const headers = {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Content-Type": "application/json"
      };
      axios.post("http://localhost:8081/api/savecard", card, {headers})
      event.preventDefault();
    },
    deleteCard(card){
      const headers = {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Content-Type": "application/json"
      };
      axios.post("http://localhost:8081/api/deletecard", card, {headers})
      this.$router.push("/");
    },
    fetchAPIData(){
      fetch("http://localhost:8081/api/card/" + this.$route.params.id, {mode: 'cors'})
        .then(response => {
          return response.json();
        })
        .then(card =>{
          this.card = card;
          fetch(apiURL + card.id, {mode: "cors"})
            .then(response => {
              return response.json();
            })
            .then(card_tasks =>{
              this.card_tasks = card_tasks;
            });
        });


      // fetch(apiURL + this.$route.params.id, {mode: "cors"})
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(card_tasks =>{
      //     this.card_tasks = card_tasks;
      //   });
    }
  },
  computed: {
    tasks(){
      return this.card_tasks
    }
  },
  created() {
    this.fetchAPIData();
  }
};
</script>

<style scoped>

</style>