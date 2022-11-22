import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //Defining Variables
  todoArray: Todo[];
  localItem: string;

  //Initializaing Variables in Constructor
  constructor() {
    //Getting Data From Local Storage
    this.localItem = localStorage.getItem('todoArray') || '';
    if (this.localItem == '') {
      this.todoArray = [];
    } else {
      this.todoArray = JSON.parse(this.localItem);
    }

  }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // todoItem is a parameter of type Todo
  deleteTodoItem(todoItem: Todo) {
    console.log(todoItem);
    const index = this.todoArray.indexOf(todoItem);
    this.todoArray.splice(index, 1);
    //Deleting From Local Storage
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
  }

  //USed to add new items in Todo Array Local Storage
  addTodoItem(todoItem: Todo) {
    console.log(todoItem);
    this.todoArray.push(todoItem);
    //Adding Data dynamically to Local Storage
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
  }

  // Handle toggle checkbox
  toggleTodoCheckBox(todoItem: Todo) {
    const index = this.todoArray.indexOf(todoItem);
    this.todoArray[index].active = !this.todoArray[index].active;
    //Adding Data dynamically to Local Storage
    localStorage.setItem('todoArray', JSON.stringify(this.todoArray));
  }
}




