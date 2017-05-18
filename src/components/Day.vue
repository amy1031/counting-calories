<template>
    <div class="day">
    <h1>Calorie Tracker</h1>
       <div v-for="day in days">
       <h2>{{day.name}}</h2>
       </div>
        <search></search>
    </div>
</template>


<script>
import search from './Search'

export default {
    name: 'day',
    components: {search},
    data () {
        return {
            
        }
    }
}

</script>

<style>
</style>

