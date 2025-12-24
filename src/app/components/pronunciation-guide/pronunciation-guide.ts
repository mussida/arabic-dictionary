import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pronunciation-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pronunciation-guide.html',
  styleUrl: './pronunciation-guide.css',
})
export class PronunciationGuideComponent {
  private audio = new Audio();

  audio3 = 'audio/pronunciation/3.m4a';

  isPlaying = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.cdr.detectChanges();
    });
  }

  play3() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
      this.cdr.detectChanges();
      return;
    }

    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.src = this.audio3;
    this.audio.play();

    this.isPlaying = true;
    this.cdr.detectChanges();
  }
}
