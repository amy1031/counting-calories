<template>
    <div class="day">
    <h1>Calorie Tracker</h1>
       <h2>{{days.name}}</h2>
        <!--List of all that days consumed foods -->
        <search></search>
    </div>
</template>


<script>
import search from './Search'
import store from '@/store/day-store'

export default {
    name: 'day',
    components: {search},
    data () {
        return {
            days: {}
        }
    },
    mounted: function() {
        this.days = store.getDayByName(this.$route.params.day) 
    }
}

</script>

<style>
</style>

