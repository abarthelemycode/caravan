import { Component, Input, Inject, forwardRef} from '@angular/core';
import { OnChanges, SimpleChanges} from '@angular/core';

import { HomeComponent } from '../home/index';
import { NoteService } from '../_services/index';
import { Note } from '../_models/index';

@Component({
  selector: 'note',
  styleUrls: ['./note.component.css'],
  templateUrl: './note.component.html',
  providers : [NoteService]
})

export class NoteComponent {
  private parent;
  @Input() note: Note;

  constructor(@Inject(forwardRef(() => HomeComponent)) private _parent:HomeComponent, private noteService :NoteService) { 
    this.parent = _parent;
  }

  
  edit() {
    this.parent.loading = true;
    this.noteService.update(this.note).subscribe(() => { this.parent.loadAllNotes(); });
  }

  delete() {
    this.parent.loading = true;
    this.noteService.delete(this.note.id).subscribe(() => { this.parent.loadAllNotes();});
  }

}
