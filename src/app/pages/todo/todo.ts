import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService, User } from '../../services/todo-service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {
  todo: User = { name: '', email: '' };
  showToast = false;
  
  constructor(private todoService: TodoService) {}
  
  ngOnInit() {
    // Component initialization
  }
  
  onSubmit() {
    this.todoService.createUser(this.todo).subscribe((response: any) => {
      debugger;
      console.log(response);
      this.showToast = true;
      setTimeout(() => this.showToast = false, 2000);
      this.todo = { name: '', email: '' };
    });
  }
}
