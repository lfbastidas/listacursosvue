new Vue({
    el: '#app',
    
    data () {
      return {
        courses: [],
        title:'',
        time:'0'
      }
    },
    
    computed: {
      totalTime() {
        temp=0;
        for(i=0; i<this.courses.length; i++){
          temp = temp + this.courses[i].time
        }
        return temp;
        
      }
      
    },
    
    methods: {
      addCourse () {
        this.courses.push({title:this.title, time: parseInt(this.time)})
      }
    }
  })