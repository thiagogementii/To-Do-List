export class TodoList {
    private tasks: string[];

    constructor() {
        this.tasks = [];
    }

    // Adiciona uma nova tarefa
    addTask(task: string): void {
        this.tasks.push(task);
    }

    // Remove uma tarefa
    removeTask(task: string): void {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    // Retorna a lista de tarefas
    listTasks(): string[] {
        return this.tasks;
    }

    // Verifica se uma tarefa existe
    hasTask(task: string): boolean {
        return this.tasks.includes(task);
    }
}
