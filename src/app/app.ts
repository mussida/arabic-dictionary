import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumbersTableComponent } from "./components/numbers-table/numbers-table";
import { SectionsTabs } from "./components/sections-tabs/sections-tabs";
import { BarComponent } from "./components/bar/bar";
import { EssentialsComponent } from "./components/essentials/essentials";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumbersTableComponent, SectionsTabs, BarComponent, EssentialsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('arabicDictionary');
   activeSection: 'numbers' | 'bar' | 'essentials' = 'numbers';

  onSectionChange(section: 'numbers' | 'bar' | 'essentials') {
    this.activeSection = section;
  }
}
