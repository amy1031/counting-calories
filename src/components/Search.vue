<template>
    <div>
        <form @submit.prevent="search">
            <input type="text" v-model="query">
            <button type="submit">Find</button>
        </form>
            <div v-for="item in food">
            {{item.fields.brand_name}} - {{item.fields.item_name}} <button @click="addFood">Add</button>
            </div>
            <h4>Food Added</h4>
            <div v-for="saved in tracked">
            <ul>
              <li>{{saved.fields.brand_name}} - {{saved.fields.item_name}}</li>
            </ul>
            </div>
            <!--You should also have some way of adding a food to todays foodlist-->
    </div>
</template>


<script>
import foodService from '../food-service'
import store from '@/store/day-store'

export default {
  name: 'search',
  data () {
    return {
      query: '',
      food: [],
      tracked: []
    }
  },
  methods: {
    search(){
      foodService.getFoods(this.query).then(foods=>{
          console.log(foods)
          foods.hits.forEach(resFood=>{
            this.food.push(resFood)
          })
      })
       //this should call to your foodservice, pass it the search perameters 
       //then when it gets back you may need to format it a bit before pushing it into the foods array
    },
    addFood() {
            this.tracked.push(this.food.item.item_name, this.food.item.nf_calories)
        }
  }
}
</script>

<style>
</style>


