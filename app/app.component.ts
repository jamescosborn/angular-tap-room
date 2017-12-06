import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
    <ul>
    <li (click)="viewBeer(currentBeer)" *ngFor="let currentBeer of beers">{{currentBeer.name}}</li>
    </ul>


    <form>
      <label for="beerName">Enter a beer name</label>
      <input type="text" #beerName>
      <label for="beerBrand">Enter the beer brand name</label>
      <input type="text" #beerBrand>
      <label for="beerPrice">Enter the beer price</label>
      <input type="text" #beerPrice>
      <label for="beerAlcoholContent">Enter the beer alcohol-content</label>
      <input type="text" #beerAlcoholContent>
      <button (click)="newKeg(beerName.value, beerBrand.value, beerPrice.value, beerAlcoholContent.value)">Add!</button>
    </form>

    <div class="beer-wrapper" *ngIf="selectedBeer">
      <h3>Edit Beer?</h3>
      <label>Edit Beer Name:</label>
      <input [(ngModel)]="selectedBeer.name">
      <input [(ngModel)]="selectedBeer.brand">
      <input [(ngModel)]="selectedBeer.price">
      <input [(ngModel)]="selectedBeer.alcoholContent">
      <h2>{{selectedBeer.name}}<button (click)="editKegAttribute(selectedBeer.name)">Edit Keg</button></h2>
      <h4>{{selectedBeer.brand}}<button (click)="editKegAttribute()">Edit Keg</button></h4>
      <p>\${{selectedBeer.price}} per pint<button (click)="editKegAttribute()">Edit Keg</button></p>
      <p>{{selectedBeer.alcoholContent}}%<button (click)="editKegAttribute()">Edit Keg</button></p>
      <p>{{selectedBeer.pintCount}}<button (click)="editKegAttribute()">Have a pint</button></p>
    </div>
  `
})

export class AppComponent {
  beers: Beer[] = [
    new Beer("Cascadia IPA", "Cascadia Brewing", 5, 6),
    new Beer("Helles Belles Lager", "Ninkasi", 6, 5.3),
    new Beer("Total Domination", "Ninkasi", 7, 6.7),
    new Beer("Tricerahops", "Ninkasi", 5, 8)
  ];
  selectedKeg: Beer = this.beers[0];

  editKegAttribute(clickedKegAttribute) {
    this.selectedKeg = clickedKegAttribute;
  }

  newKeg(name, brand, price, alcoholContent) {
    let newBeer = new Beer(name, brand, price, alcoholContent);
    this.beers.push(newBeer);
  }

  viewBeer(clickedBeer){
    this.selectedBeer = clickedBeer;
  }

  hideBeer(){
    this.selectedBeer = null;
  }
  selectedBeer = null;

}

export class Beer {
  public pintCount: number = 150;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}
}
