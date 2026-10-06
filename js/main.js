const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            /* name: 'A-Name', */
            list:[1,2,3,4,5,6],
            nr: 0,
            hide: false,
            listnames: [
                {name: 'Alice', age: 25},
                {name: 'Bob', age: 32}
            ]
        }
    },
    methods: {
        myMethod(){

        },
        add(){
            this.list.push(this.nr)
        },
        hideList(){
            this.hide = !this.hide
        },
        addPerson(){
            this.listnames.push({name: this.name, age: this.age})
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
