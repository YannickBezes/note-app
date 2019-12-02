import { Component, OnInit } from "@angular/core";
import { NoteService } from "../note.service";
import { Note } from "../model/note";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  notes: Promise<Note[]>;

  constructor(private noteService: NoteService, public router: Router) { }
  
  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  getNote(createDate: number) {
    this.noteService.getNote(createDate).then(note => {
      this.router.navigate(['/view-note'], {queryParams: { note: JSON.stringify(note) }})
    })
  }
}
