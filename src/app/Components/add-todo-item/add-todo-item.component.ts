import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})


export class AddTodoItemComponent {
  title: string;
  description: string;
  @Output() todoAdd = new EventEmitter();

  constructor() {
    this.title = '';
    this.description = '';
  }

  onSubmit() {
    console.log(this.title);
    console.log(this.description);
    const newTodoItem = {
      title: this.title,
      description: this.description,
      serialNo: 10,
      active: true
    }
    // todoAdd is an output , and we emit the newly created Todo item using this
    this.todoAdd.emit(newTodoItem);
  }

}
