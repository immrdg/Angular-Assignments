import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Grid} from "gridjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  songs: string[] = ['Song 1', 'Song 2', 'Song 3'];
  showSongCount = false;
  newSong: string = '';


  addSong(newSong: string): void {
    this.songs.push(newSong);
    this.newSong = ''; // Clear the input field
  }

  toggleSongCount(): void {
    this.showSongCount = !this.showSongCount;
  }

}
