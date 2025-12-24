import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

interface BarPhrase {
  id: number;
  italian: string;
  arabic: string;
  transliteration: string;
  audio: string;
}

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar.html',
  styleUrl: './bar.css',
})
export class BarComponent {
  private audio = new Audio();
  playingIndex: number | null = null;

  phrases: BarPhrase[] = [
    // {
    //   id: 1,
    //   italian: 'Vorrei una birra',
    //   arabic: 'ممكن بيرة؟',
    //   transliteration: 'momken bīra?',
    //   audio: 'audio/bar/1.m4a',
    // },
    {
      id: 2,
      italian: 'Una birra, per favore',
      arabic: 'بيرة لو سمحت',
      transliteration: 'bīra law samaḥt',
      audio: 'audio/bar/2.m4a',
    },
    {
      id: 3,
      italian: 'Un caffè',
      arabic: 'قهوة',
      transliteration: '’ahwa',
      audio: 'audio/bar/3.m4a',
    },
    {
      id: 4,
      italian: 'Un caffè con zucchero',
      arabic: 'قهوة بسكر',
      transliteration: '’ahwa bi-sokkar',
      audio: 'audio/bar/4.m4a',
    },
    {
      id: 5,
      italian: 'Un caffè senza zucchero',
      arabic: 'قهوة سادة',
      transliteration: '’ahwa sāda',
      audio: 'audio/bar/5.m4a',
    },
    {
      id: 6,
      italian: 'Tè',
      arabic: 'شاي',
      transliteration: 'shāy',
      audio: 'audio/bar/6.m4a',
    },
    {
      id: 7,
      italian: 'Tè con zucchero',
      arabic: 'شاي بسكر',
      transliteration: 'shāy bi-sokkar',
      audio: 'audio/bar/7.m4a',
    },
    {
      id: 8,
      italian: 'Tè senza zucchero',
      arabic: 'شاي سادة',
      transliteration: 'shāy sāda',
      audio: 'audio/bar/8.m4a',
    },
    {
      id: 9,
      italian: 'Quanto costa?',
      arabic: 'بكام؟',
      transliteration: 'bekām?',
      audio: 'audio/bar/9.m4a',
    },
    {
      id: 10,
      italian: 'Il conto, per favore',
      arabic: 'الحساب لو سمحت',
      transliteration: 'el-ḥesāb law samaḥt',
      audio: 'audio/bar/10.m4a',
    },
    {
      id: 11,
      italian: 'È molto buono',
      arabic: 'حلو قوي',
      transliteration: 'ḥelw awi',
      audio: 'audio/bar/11.m4a',
    },
    {
      id: 12,
      italian: 'Ancora uno!',
      arabic: 'واحد كمان',
      transliteration: 'wāḥed kamān',
      audio: 'audio/bar/12.m4a',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {
    this.audio.addEventListener('ended', () => {
      this.stopInternal();
    });
  }

  play(row: BarPhrase, index: number) {
    if (this.playingIndex === index) {
      this.stop();
      return;
    }

    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.src = row.audio;
    this.audio.play();

    this.playingIndex = index;
    this.cdr.detectChanges();
  }

  private stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playingIndex = null;
    this.cdr.detectChanges();
  }

  private stopInternal() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playingIndex = null;
    this.cdr.detectChanges();
  }
}
