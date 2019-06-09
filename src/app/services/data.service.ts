import { Injectable } from '@angular/core';
import { Question } from "../models/Question";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions:Question[];
  constructor() { 
    this.questions = [
      {
        text:"What is your name?",
        answer: "My name is Soundharya",
        hide:true
      },
      {
        text:"What is your favorite color?",
        answer: "My favorite color is pink",
        hide:true
      },
      {
        text:"What is your favorite language?",
        answer: "My favorite language is Tamil",
        hide:true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
  }
  
  removeQuestion(question: Question){
    for(let i=0;i<this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1);
      }
    }
    // this.questions.removeQuestion(question);
  }

}
