import { Injectable } from '@angular/core';
import {Note} from '../models/note.model';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = new Array<Note>();
  constructor() { }
  add(note: Note){
    const newLength = this.notes.push(note);
    const index = newLength - 1;
    return index;
  }
  getAll(){
    return this.notes;
  }

}
