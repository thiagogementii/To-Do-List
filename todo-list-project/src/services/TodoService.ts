import { TodoList } from "../models/TodoList";

export class TodoService {
    private todoList: TodoList;

    constructor() {
        this.todoList = new TodoList();
    }

    // Adiciona uma tarefa
    addTask(task: string): void {
        if (!this.todoList.hasTask(task)) {
            this.todoList.addTask(task);
            console.log(`Tarefa adicionada: ${task}`);
        } else {
            console.log(`Tarefa já existe: ${task}`);
        }
    }

    // Remove uma tarefa
    removeTask(task: string): void {
        if (this.todoList.hasTask(task)) {
            this.todoList.removeTask(task);
            console.log(`Tarefa removida: ${task}`);
        } else {
            console.log(`Tarefa não encontrada: ${task}`);
        }
    }

    // Lista todas as tarefas
    listTasks(): void {
        const tasks = this.todoList.listTasks();
        if (tasks.length === 0) {
            console.log("Nenhuma tarefa na lista.");
        } else {
            console.log("Tarefas:");
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    }
}
