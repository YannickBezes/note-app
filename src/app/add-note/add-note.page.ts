import { Component, OnInit } from "@angular/core";
import { NoteService } from "../note.service";
import { Note } from "../model/note";
import { FormGroup, FormControl } from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.page.html",
  styleUrls: ["./add-note.page.scss"]
})
export class AddNotePage implements OnInit {
  noteForm: FormGroup;
  note: Note;

  constructor(private noteService: NoteService, public navCtrl: NavController) {  }

  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    });
  }

  saveNote(note: Note) {
    this.noteService.saveNote(note);
    this.navCtrl.pop();
  }
}
