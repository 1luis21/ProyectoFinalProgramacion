var app = new Vue({
    el: '#app',
    data: {
        title: 'Proyecto final con Vuejs',
        items: [],

        input: {
            id: '',
            nombre: '',
            email: '',
            celular: '',
            domicilio: ''
        },
        guardarbtn: true,
        actualizarbtn: false
    },
    created: function(){
        this.view()
    },
    methods: {
        view: function(){
            this.items = [
                { id: '1', nombre: 'Antonio Cabrera', email: 'anto_nio@gmail.com', celular: '3124531224',
                domicilio: 'paseo de las rosas #44'},
                { id: '2', nombre: 'Francisco Gonzalez', email: 'Francisco_g@gmail.com', celular: '3125930229',
                domicilio: 'villas de ortiz #901'},
                { id: '3', nombre: 'Arnulfo Rivera', email: 'arnulf_river@gmail.com', celular: '3121014752',
                domicilio: 'francisco villa #542'},
                { id: '4', nombre: 'Angela Baltazar', email: 'ang_balt@gmail.com', celular: '3121970855',
                domicilio: 'lopez mateos #123'},
                { id: '5', nombre: 'Adriana Corona', email: 'Adriana_cor@gmail.com', celular: '3123429187',
                domicilio: 'xanchopan #14'}
            ]
        },
        guardar: function(){
            let id = this.input.id
            let nm = this.input.nombre
            let em = this.input.email
            let cel = this.input.celular
            let dom = this.input.domicilio

            this.items.push({id: id, nombre: nm, email: em, celular: cel, domicilio: dom})
            this.borrar()

            swal('Agregado', 'Nuevo elemento registrado', 'success')
        },
        borrar: function(){
            this.guardarbtn = true
            this.actualizarbtn = false

            this.input.id = ''
            this.input.nombre = ''
            this.input.email = ''
            this.input.celular = ''
            this.input.domicilio = ''
        },
        editar: function(item){
            this.guardarbtn = false
            this.actualizarbtn = true

            this.input.id = item.id
            this.input.nombre = item.nombre
            this.input.email = item.email
            this.input.celular = item.celular
            this.input.domicilio = item.domicilio
        },
        actualizar: function(id){
            let myid = id - 1
            Object.assign(this.items[myid], this.input)
            this.borrar()

            swal('Actualizado', 'El elemento se modificó', 'warning')
        },
        eliminar: function(item){
            let del = this.items.indexOf(item)
            swal({
                title: 'El elemento será eliminado',
                text: '¿Esta seguro de eliminarlo?',
                icon: 'error',
                buttons: true,
                dangerMode: true
            }).then((willDelete) => {
                if(willDelete){
                    this.items.splice(del, 1)
                    swal("El registro se ha eliminado", {
                    icon: "success",
                    });
                } else{

                }
            })
        }
    }
})