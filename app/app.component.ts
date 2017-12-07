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
      <input type="text" #beerName><br>
      <label for="beerBrand">Enter the beer brand name</label>
      <input type="text" #beerBrand><br>
      <label for="beerPrice">Enter the beer price</label>
      <input type="text" #beerPrice><br>
      <label for="beerAlcoholContent">Enter the beer alcohol-content</label>
      <input type="text" #beerAlcoholContent><br>
      <label for="beerHouse">House Beer/Guest Tap</label>
      <input type="radio" #beerHouse [value]="true">
      <input type="radio" #beerHouse [value]="false"><br>
      <button (click)="newKeg(beerName.value, beerBrand.value, beerPrice.value, beerAlcoholContent.value, beerHouse.value)">Add!</button>
    </form>

    <div class="beer-wrapper" *ngIf="selectedBeer">
      <h3>Edit Beer?</h3>
      <label>Edit Beer Name:</label>
      <input [(ngModel)]="selectedBeer.name">
      <input [(ngModel)]="selectedBeer.brand">
      <input [(ngModel)]="selectedBeer.price">
      <input type="radio" [(ngModel)]="selectedBeer.beerHouse" [value]="true">House
      <input type="radio" [(ngModel)]="selectedBeer.beerHouse" [value]="false">GuestTap
      <input [(ngModel)]="selectedBeer.alcoholContent">
      <!--<button (click)="editKegAttribute(selectedBeer.name)">Edit Keg</button>--->
      <h2>{{selectedBeer.name}}</h2>
      <h4>{{selectedBeer.brand}}</h4>
      <p>\${{selectedBeer.price}} per pint</p>
      <p>{{selectedBeer.alcoholContent}}%</p>
      <p>This is a House Beer: {{selectedBeer.beerHouse}}</p>
      <p>{{selectedBeer.pintCount}}<button (click)="servePint()">Serve a Pint!</button></p>
    </div>
    <button (click)="checkLowKegs()">Check to see what kegs are low</button>
    <div *ngIf="showLowKegs">
    <ul>
      <li *ngFor="let lowKegs of lowKeg">{{lowKegs.name}}</li>
    </ul>
    </div>
  `
})

export class AppComponent {
  beers: Beer[] = [
    new Beer("Cascadia IPA", "Cascadia Brewing", 5, 6, true),
    new Beer("Helles Belles Lager", "Ninkasi", 6, 5.3, false),
    new Beer("Total Domination", "Ninkasi", 7, 6.7, false),
    new Beer("Tricerahops", "Ninkasi", 5, 8, false)
  ];
  lowKeg: Beer[] = []
  selectedKeg: Beer = this.beers[0];
  showLowKegs: boolean = false;
  // editKegAttribute(clickedKegAttribute) {
  //   this.selectedKeg = clickedKegAttribute;
  // }

  newKeg(name, brand, price, alcoholContent, houseBeer) {
    let newBeer = new Beer(name, brand, price, alcoholContent, houseBeer);
    this.beers.push(newBeer);
  }

  viewBeer(clickedBeer){
    this.selectedBeer = clickedBeer;
  }

  checkLowKegs(){
    this.showLowKegs = !this.showLowKegs;
    this.lowKegs();
  }

  lowKegs() {
    this.beers.forEach((beer) => {
      if (beer.pintCount < 151) {
        // alert("it works");
        this.lowKeg.push(beer)
      }

    })
  }

  hideBeer(){
    this.selectedBeer = null;
  }
  selectedBeer = null;

servePint(){
  this.selectedBeer.pintCount = (this.selectedBeer.pintCount) - 1;
}

}

export class Beer {
  public pintCount: number = 150;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public houseBeer: boolean) {}
}
