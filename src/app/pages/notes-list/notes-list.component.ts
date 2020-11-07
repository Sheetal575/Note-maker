import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  addNote = false;
  notes: Note[] = new Array<Note>();
  constructor(private noteservice: NotesService) { }

  ngOnInit(): void {
    this.notes = this.noteservice.getAll();
  }

}
