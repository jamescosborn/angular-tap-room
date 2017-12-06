import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
    <ul>
    <li *ngFor="let currentBeer of beers">{{currentBeer.name}}</li>
    </ul>
  `
})

export class AppComponent {
  beers: Beer[] = [
    new Beer("Cascadia IPA", "Cascadia Brewing", "$5/pint", 6),
    new Beer("Helles Belles Lager", "Ninkasi", "$6/pint", 5.3),
    new Beer("Total Domination", "Ninkasi", "$7/pint", 6.7),
    new Beer("Tricerahops", "Ninkasi", "5/pint", 8)
  ]
}

export class Beer {
  public pintCount: number = 150;
  constructor(public name: string, public brand: string, public price: string, public alcoholContent: number) {}
}
