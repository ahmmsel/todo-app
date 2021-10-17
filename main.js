let app = Vue.createApp({
  data: function () {
    return {
      title: "todo app",
      todos: [],
      todosName: "",
    };
  },
  methods: {
    addTodo: function () {
      this.todos.push({text: this.todosName, done: false });
      this.todosName = "";
    },
    deleteTodo: function (key) {
      this.todos.splice(key, 1);
    },
    deleteAll: function () {
      this.todos = [];
    }
  }
})
app.mount("#todo-app");
