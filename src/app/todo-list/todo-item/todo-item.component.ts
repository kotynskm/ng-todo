import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { ToDo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  constructor(private dataService: DataService) {}
  @Input() toDo?: ToDo;
  @Input() index!: number;
  isEditing$?: boolean;
  private readonly destroy$ = new Subject();

  ngOnInit() {
    this.dataService.isEditing
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.isEditing$ = value;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  deleteToDo(index: number) {
    this.dataService.deleteToDo(index);
  }

  turnOnEditMode() {
    this.dataService.setIsEditing(true, this.index);
    this.dataService.setGlobalEditing(true);
    console.log(this.index);
  }
}
