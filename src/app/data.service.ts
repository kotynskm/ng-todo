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

  completedItems: ToDo[] = [];

  isEditing = new BehaviorSubject<boolean>(false);

  getToDos() {
    return this.toDoItems;
  }

  getCompletedToDos() {
    return this.completedItems;
  }

  toggleCompleted(item: ToDo, index: number) {
    if (item.isCompleted === false) {
      this.completedItems.push(item);
    } else {
      const itemToFind = this.toDoItems[index];
      const itemIndex = this.completedItems.findIndex(
        (item) => item.name === itemToFind.name
      );

      if (itemIndex !== -1) {
        // Remove the item with the matching index
        this.completedItems.splice(itemIndex, 1);
      }
    }
  }

  addToDo(value: string, isEditing = false, isCompleted = false) {
    const index = this.toDoItems.length;
    const newTodo = { index: index, name: value, isEditing, isCompleted };
    this.toDoItems.push(newTodo);
  }

  deleteToDo(index: number) {
    this.toDoItems.splice(index, 1);
    if (this.isEditing) {
      this.setGlobalEditing(false);
    }
  }

  editToDo(value: string, index: number) {
    this.toDoItems[index] = {
      index: index,
      name: value,
      isEditing: false,
      isCompleted: false,
    };
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
