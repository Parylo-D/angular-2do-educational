import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
todoList: Array<Todo>;

constructor() {
  // this.todoList= todos;
 }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    setTimeout(() => {
      this.todoList = todos;
    }, 5000);
    
  }

}

const todos = [
  {
    id: 1,
    title: 'Angular',
    description: '',
    isDone: false
  },
  {
    id: 2,
    title: 'JS',
    description: 'Test Description',
    isDone: true
  }
];
