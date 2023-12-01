import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './todo-list/todo-item/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    EditComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), IonicModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
