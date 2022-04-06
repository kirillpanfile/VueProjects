const app = Vue.createApp({
    data: function(){
        return {
            placeholderString: "Input a new task",
            title: 'Todo List',
            inputValue: '',
            notes: [
                'Task 1',
                'Task 2',
                'Task 3',
                'Task 4',
                'Task 5',
            ]
        }
    },
    methods: {
    //   inputChange(event) {
    //     this.inputValue = event.target.value
    //   },
      addItemInList() {
          if (this.inputValue != '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''   
          }
      },
      deleteElement(index) {
        this.notes.splice(index,1)
      },
    },
    computed: {
        doubleCountComputed() {
            console.log(1);
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 30) {
                this.inputValue = ''
            }
        }
    }
}).mount('#app')

