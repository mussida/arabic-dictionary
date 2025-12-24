import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

interface EssentialPhrase {
  italian: string;
  arabic: string;
  transliteration: string;
  audio: string;
}

@Component({
  selector: 'app-essentials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './essentials.html',
  styleUrl: './essentials.css',
})
export class EssentialsComponent {
  private audio = new Audio();
  playingIndex: number | null = null;

  phrases: EssentialPhrase[] = [
    { italian: 'Andiamo nel deserto', arabic: 'نروح الصحراء', transliteration: 'nerūḥ el-ṣaḥrā', audio: 'assets/audio/essentials/1.m4a' },
    { italian: 'Guarda le stelle / il cielo', arabic: 'بصّ النجوم / السما', transliteration: 'boṣṣ el-nogūm / el-samā', audio: 'assets/audio/essentials/2.m4a' },
    { italian: 'Natale sul Nilo', arabic: 'كريسماس على النيل', transliteration: 'Krismas ʿala el-Nīl', audio: 'assets/audio/essentials/3.m4a' },
    { italian: 'Possiamo attraversare il Nilo sulla tua barca?', arabic: 'ممكن نعدّي النيل بمركبك؟', transliteration: 'momken neʿaddi el-Nīl be-markabak?', audio: 'assets/audio/essentials/4.m4a' },
    { italian: 'Mi presti il tuo cammello?', arabic: 'ممكن أستلف الجمل بتاعك؟', transliteration: 'momken astalef el-gamal betaʿak?', audio: 'assets/audio/essentials/5.m4a' },
    { italian: 'Quanto costa questo tappeto?', arabic: 'بكام السجادة دي؟', transliteration: 'bekām el-saggāda di?', audio: 'assets/audio/essentials/6.m4a' },
    { italian: 'Mi renderesti molto felice', arabic: 'تفرّحني قوي', transliteration: 'tefarraḥni awi', audio: 'assets/audio/essentials/7.m4a' },
    { italian: 'Non abbiate paura, ci penso io', arabic: 'متخافوش، أنا هظبطها', transliteration: 'metkhāfūsh, ana ha-zabbiṭha', audio: 'assets/audio/essentials/8.m4a' },
    { italian: 'Per favore', arabic: 'لو سمحت', transliteration: 'law samaḥt', audio: 'assets/audio/essentials/9.m4a' },
    { italian: 'Quanto costa?', arabic: 'بكام؟', transliteration: 'bekām?', audio: 'assets/audio/essentials/10.m4a' },
    { italian: 'Grazie', arabic: 'شكراً', transliteration: 'shukran', audio: 'assets/audio/essentials/11.m4a' },
    { italian: 'Prego', arabic: 'عفواً', transliteration: 'ʿafwan', audio: 'assets/audio/essentials/12.m4a' },
    { italian: 'Un pacchetto di sigarette Cleopatra', arabic: 'علبة سجاير كليوباترا', transliteration: 'ʿelbet sagāyer Kleopatra', audio: 'assets/audio/essentials/13.m4a' },
    { italian: 'Dove si trova il bagno?', arabic: 'الحمّام فين؟', transliteration: 'el-ḥammām fēn?', audio: 'assets/audio/essentials/14.m4a' },
    { italian: 'Siamo italiani', arabic: 'إحنا إيطاليين', transliteration: 'eḥna īṭālyīn', audio: 'assets/audio/essentials/15.m4a' },
  ];

  constructor(private cdr: ChangeDetectorRef) {
    this.audio.addEventListener('ended', () => this.stopInternal());
  }

  play(row: EssentialPhrase, index: number) {
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
