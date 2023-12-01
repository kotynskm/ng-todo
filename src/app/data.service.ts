import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  toDoItems: ToDo[] = [
    { index: 0, name: 'Vacuum', isEditing: false, isCompleted: false },
    { index: 1, name: 'Buy Groceries', isEditing: false, isCompleted: false },
  ];

  isEditing = new BehaviorSubject<boolean>(false);

  getToDos() {
    return this.toDoItems;
  }

  addToDo(value: string, isEditing = false, isCompleted = false) {
    const index = this.toDoItems.length;
    const newTodo = { index: index, name: value, isEditing, isCompleted };
    this.toDoItems.push(newTodo);
  }

  deleteToDo(index: number) {
    this.toDoItems.splice(index, 1);
  }

  editToDo(value: string, index: number) {
    this.toDoItems[index] = { name: value, isEditing: false };
    this.setGlobalEditing(false);
  }

  setIsEditing(value: boolean, index: number): void {
    const toDoEdit = this.toDoItems[index];
    toDoEdit.isEditing = value;
  }

  setGlobalEditing(value: boolean) {
    this.isEditing.next(value);
  }
}
