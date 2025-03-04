import { TodoService } from "./services/TodoService";

// Cria uma instância do serviço de tarefas
const todoService = new TodoService();

// Adiciona algumas tarefas
todoService.addTask("Estudar TypeScript");
todoService.addTask("Fazer exercícios");
todoService.addTask("Ler um livro");

// Lista as tarefas
todoService.listTasks();

// Remove uma tarefa
todoService.removeTask("Fazer exercícios");

// Lista as tarefas novamente
todoService.listTasks();
