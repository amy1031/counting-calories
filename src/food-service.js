import $ from 'jquery'
//Replace these with your own!!!
const key = '8120134b8a361912934e53e415fffd2c'
const id = '814a7db9'

const baseUrl = 'https://api.nutritionix.com/v1_1/search/'
const fields = '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein&appId='+id+'&appKey='+ key


export default {
  getFoods(query) {
    return $.get(baseUrl + query + fields)
  }
}