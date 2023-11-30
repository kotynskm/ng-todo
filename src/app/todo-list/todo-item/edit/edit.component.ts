import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  @Input() index!: number;
  @Input() item?: string;

  constructor(private dataService: DataService) {}

  editToDo(value: string, index: number) {
    this.dataService.editToDo(value, index);
  }
}
