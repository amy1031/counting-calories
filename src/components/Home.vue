<template>
    <div class="home">
    <h1>Calorie Tracker</h1>
        <div v-for="day in days">
      <!--  {{day.name}} -->
          <router-link :to="'/daily/'+day.name">{{day.name}}</router-link>
        </div>
    </div>
</template>


<script>
import store from '@/store/day-store'

export default {
    name: 'home',
    components: {},
    data () {
        return {
            days: store.getDay()
        }
    }
}

</script>

<style>
</style>

