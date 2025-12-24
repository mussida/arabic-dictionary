import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sections-tabs',
  imports: [CommonModule],
  templateUrl: './sections-tabs.html',
  styleUrl: './sections-tabs.css',
})
export class SectionsTabs {
@Output() sectionChange = new EventEmitter<
    'numbers' | 'bar' | 'essentials'
  >();

  sections = [
    { id: 'numbers', label: 'Numbers' },
    { id: 'bar', label: 'Bar' },
    { id: 'essentials', label: 'Essentials' },
  ] as const;

  active: 'numbers' | 'bar' | 'essentials' = 'numbers';

  select(section: 'numbers' | 'bar' | 'essentials') {
    this.active = section;
    this.sectionChange.emit(section);
  }
}
