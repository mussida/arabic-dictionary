import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

interface NumberRow {
  value: number;
  italian: string;
  arabic: string;
  transliteration: string;
  audio: string;
}

@Component({
  selector: 'app-numbers-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numbers-table.html',
  styleUrl: './numbers-table.css',
})
export class NumbersTableComponent {
  private audio = new Audio();
  playingIndex: number | null = null;

  numbers: NumberRow[] = [
    { value: 1, italian: 'uno', arabic: 'واحد', transliteration: 'wahid', audio: 'audio/numbers/1.m4a' },
    { value: 2, italian: 'due', arabic: 'اثنان', transliteration: 'ithnan', audio: 'audio/numbers/2.m4a' },
    { value: 3, italian: 'tre', arabic: 'ثلاثة', transliteration: 'thalatha', audio: 'audio/numbers/3.m4a' },
    { value: 4, italian: 'quattro', arabic: 'أربعة', transliteration: 'arba3a', audio: 'audio/numbers/4.m4a' },
    { value: 5, italian: 'cinque', arabic: 'خمسة', transliteration: 'khamsa', audio: 'audio/numbers/5.m4a' },
    { value: 6, italian: 'sei', arabic: 'ستة', transliteration: 'sitta', audio: 'audio/numbers/6.m4a' },
    { value: 7, italian: 'sette', arabic: 'سبعة', transliteration: 'sab3a', audio: 'audio/numbers/7.m4a' },
    { value: 8, italian: 'otto', arabic: 'ثمانية', transliteration: 'thamāniya', audio: 'audio/numbers/8.m4a' },
    { value: 9, italian: 'nove', arabic: 'تسعة', transliteration: 'tis3a', audio: 'audio/numbers/9.m4a' },
    { value: 10, italian: 'dieci', arabic: 'عشرة', transliteration: '3ashara', audio: 'audio/numbers/10.m4a' },
  ];

  constructor(private cdr: ChangeDetectorRef) {
    // ✅ EVENT LISTENER ROBUSTO
    this.audio.addEventListener('ended', () => {
      this.stopInternal();
    });
  }

  play(row: NumberRow, index: number) {
    // toggle
    if (this.playingIndex === index) {
      this.stop();
      return;
    }

    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.src = row.audio;
    this.audio.play();

    this.playingIndex = index;
    this.cdr.detectChanges(); // 🔑 forza update
  }

  private stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playingIndex = null;
    this.cdr.detectChanges(); // 🔑 forza update
  }

  // chiamata SOLO dall'evento audio
  private stopInternal() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playingIndex = null;
    this.cdr.detectChanges(); // 🔥 QUESTO È IL FIX
  }
}
