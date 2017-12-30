import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo list';

  newTask: string;
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }

  remove(task) {
   this.taskList = this.taskList.filter(e => e !== task);
  }

  removeDone(task) {
    this.taskDone = this.taskDone.filter(e => e !== task)
  }

  getColor():string {
    return this.taskList.length >= 3 ? 'list-group-item-danger' : 'active';
  }

  getColorDone():string {
    return this.taskDone.length >= 3 ? 'list-group-item-danger' : 'active';
  }
}
