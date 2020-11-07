import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from 'src/app/service/notes.service';
import {Note} from '../../models/note.model';

@Component({
  selector: 'app-note-write',
  templateUrl: './note-write.component.html',
  styleUrls: ['./note-write.component.scss']
})
export class NoteWriteComponent implements OnInit {
   title = '';
   body = '';
   note: Note;
  constructor(private noteservice: NotesService) { }

  ngOnInit(): void {
    this.note = new Note();
  }
  // tslint:disable-next-line: typedef
  onSubmit(form: NgForm){
    this.noteservice.add(form.value);
  }
}
