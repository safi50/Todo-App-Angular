import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoData!: Todo;
  @Output() todoDelete = new EventEmitter();
  @Output() checkBoxToggled = new EventEmitter();
  constructor() { }

  onClick(todoItem: Todo) {
    this.todoDelete.emit(todoItem);
    console.log('Clicked');
  }

  onCheckBoxClick(todoItem: Todo) {
    this.checkBoxToggled.emit(todoItem);

  }
}
