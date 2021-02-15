new Vue({
    el: '#app',
    
    data () {
      return {
        contactos: [],
        title:'',
        num:'',
        correo:''
      }
    },
    
    
    methods: {
      addContacto () {
        
        this.contactos.push({title:this.title, num: parseInt(this.num), correo: this.correo})
        
      },
      editarContacto: function(id) {
        console.log(id)
      let con = this.contactos[id]
     //console.log(con,id,this.contactos)
        this.title=  con.title
        this.num = con.num
        this.correo = con.correo
       
      },
      eliminarContacto: function (id) {
        console.log(this.contactos.splice(id,1))
       
      },
    }
  })