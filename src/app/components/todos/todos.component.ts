import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
 
todos:Todo[];

inputTodo:string = "";

  constructor() {}

  ngOnInit(): void {

    this.todos = [
      {
        content: 'First todo',
        completed: true,
        date: new Date()
      },
      {
        content: 'Second todo',
        completed: false,
        date: new Date()
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
       return v;
  
    })
  }
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      date: new Date()
    })
    this.inputTodo = "";
    
  }
  OnPageChange(event:PageEvent) {
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.todos.length) end = this.todos.length;
  }
  
}


