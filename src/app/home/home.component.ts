import { Component, OnInit, Input} from '@angular/core';

import { Note } from '../_models/index';
import { NoteService } from '../_services/index';
import { NoteComponent } from '../note/index';

@Component({
    moduleId: module.id,
    selector : "home",
    styleUrls: ['./home.component.css'],
    templateUrl: 'home.component.html',
})


export class HomeComponent implements OnInit {

    notes:Note[] = [];
    loading:boolean = false;

    constructor(private noteService: NoteService) {}

    ngOnInit() {
        this.loadAllNotes();
    }

    addNote() {
        this.loading = true;
        var note = new Note();
        note.title   = "Nouvelle note";
        note.comment = "Contenu";
        this.noteService.create(note).subscribe((response) => { 
            this.loadAllNotes() 
        });
    }

    loadAllNotes() {
        this.loading = false;
        this.noteService.getAll().subscribe(json => { 
            this.notes = json.results; 
        });
    }
}