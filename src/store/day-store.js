//PRIVATE
var state = {
    days: [{
    name: 'Sunday',
	tracked: [],
},
{
    name: 'Monday',
    tracked: [],
	},
    {
    name: 'Tuesday', 
	tracked: [],
},
{
    name: 'Wednesday',
    tracked: [],
},
{
    name: 'Thursday',
	tracked: [],
},
{
    name: 'Friday', 
	tracked: [],
},
{
    name: 'Saturday', 
	tracked: [],
}]
}

export default {
    getDay() {
        return state.days
    },
    getDayByName(name){
        for(var i = 0; i < state.days.length; i++) {
				var day = state.days[i];
				if(day.name == name){
				return state.days[i]
				}
			}
    }
}