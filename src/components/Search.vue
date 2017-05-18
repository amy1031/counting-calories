<template>
    <div>
        <form @submit.prevent="search">
            <input type="text" v-model="query">
            <button type="submit">Find</button>
        </form>
        <ul>
            <li>Your food List should show up here</li>
            <!--You should also have some way of adding a food to todays foodlist-->
        </ul>
    </div>
</template>


<script>
import foodService from '../food-service'
export default {
  name: 'search',
  data () {
    return {
      query: '',
      foods: [],
    }
  },
  methods: {
    search(){
      foodService.getFoods(this.query).then(foods=>{
          console.log(foods)
      })
       //this should call to your foodservice, pass it the search perameters 
       //then when it gets back you may need to format it a bit before pushing it into the foods array
    }
  }
}
</script>

<style>
</style>


