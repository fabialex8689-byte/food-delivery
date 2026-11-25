import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Tabs } from './core/components/tabs/tabs';

@Component({
  imports: [RouterOutlet, RouterLink, Tabs],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('food-delivery');
}
