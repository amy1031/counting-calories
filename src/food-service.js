import $ from 'jquery'
//Replace these with your own!!!
const key = '6667b800a0bda2bfb04d46aff1e8afc6'
const id = '8ffe2f4c'

const baseUrl = 'https://api.nutritionix.com/v1_1/search/'
const fields = '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein&appId='+id+'&appKey='+ key


export default {
  getFoods(query) {
    return $.get(baseUrl + query + fields)
  }
}