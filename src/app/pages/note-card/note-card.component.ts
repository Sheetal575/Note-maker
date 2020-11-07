import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  @Input() title: string;
  @Input() body: string;


  constructor(private noteservice: NotesService) { }

  ngOnInit(): void{
    this.notes = this.noteservice.getAll();
  }
  onNoClick(): void {
    this.notes.pop();
    console.log('removes');
  }
}
