Vue.config.devtools = true;

const app = new Vue (
    {

        el: '#app',
        data: {

            listTasks : [
                'alto',
                'basso',
                'magro',
                'grasso',
            ],
            newElement: '',
        },

        methods: {
            addTask: function () {
                this.listTasks.push(this.newElement);
                this.newElement = '';

            },

            deleteTask: function (index) {
                this.listTasks.splice(index, 1);
            }

        }
    }

)