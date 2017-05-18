<template>
    <div>
        <form @submit.prevent="search">
            <input type="text" v-model="query">
            <button type="submit">Find</button>
        </form>
            <div v-for="item in food">
            {{item.fields.item_name}}
            </div>
            <!--You should also have some way of adding a food to todays foodlist-->
    </div>
</template>


<script>
import foodService from '../food-service'
export default {
  name: 'search',
  data () {
    return {
      query: '',
      food: []
    }
  },
  methods: {
    search(){
      foodService.getFoods(this.query).then(foods=>{
          console.log(foods)
          foods.hits.forEach(resFood=>{
            this.food.push(resFood)
          })
         //this.food.push(foods.hits)
      })
       //this should call to your foodservice, pass it the search perameters 
       //then when it gets back you may need to format it a bit before pushing it into the foods array
    }
  }
}
</script>

<style>
</style>


