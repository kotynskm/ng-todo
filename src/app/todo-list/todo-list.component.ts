import { Component, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { ToDo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  completedItems: ToDo[] = [];
  listItems: ToDo[] = [];
  isEditing$?: boolean;
  @ViewChild('form') form?: NgForm;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.listItems = this.dataService.getToDos();
    this.dataService.isEditing.subscribe((value) => {
      this.isEditing$ = value;
    });
  }

  addToDo(value: string) {
    this.dataService.addToDo(value);
    this.form?.reset();
  }

  deleteToDo(index: number) {
    this.dataService.deleteToDo(index);
  }

  toggleCompleted(item: ToDo, index: number) {
    if (item.isCompleted === false) {
      this.completedItems.push(item);
    } else {
      const itemIndex = this.completedItems.findIndex(
        (item) => item.index === index
      );

      if (itemIndex !== -1) {
        // Remove the item with the matching index
        this.completedItems.splice(itemIndex, 1);
      }
    }
  }
}
