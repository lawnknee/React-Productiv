todoList
    state:
        todoList: [{id, title, description, priority}, ...]

    functions:
        addTodo(formData)
        editTodo(formData)
        removeTodo(id)
    
    todoList -> todo
            -> todoForm
            -> topTodo



editable todo
    props:
        id, title, description, priority
        editTodo
        removeTodo
    if isEditing == false: <Todo /><button><button>
    if isEditing == true: <TodoForm />

todo
    props: 
        id, title, description, priority



todoForm
    props:
        addTodo
        editTodo
    
    state:
        formData: {title, description, priority}

