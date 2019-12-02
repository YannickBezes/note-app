import { Component } from "@angular/core";
import { NoteService } from "../note.service";
import { Note } from "../model/note";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-view-note",
  templateUrl: "./view-note.page.html",
  styleUrls: ["./view-note.page.scss"]
})
export class ViewNotePage {
  note: Note;

  constructor(
    private noteService: NoteService,
    public route: ActivatedRoute,
    public navCtrl: NavController
  ) {
    this.route.queryParams.subscribe(params => {
      if(params && params.note) {
        this.note = JSON.parse(params.note)
      }
    });
  }

  deleteNote(createDate: number) {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }
}
