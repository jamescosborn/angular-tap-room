TO START:

$ npm install
$ bower init
$ bower install
$ gulp build
$ gulp serve

# Specs  

Description: User can see a list of all available kegs by title.
Input: View List
Output: 'Cascadia IPA', 'Helles Belles Lager', 'Other Beer'

Description: When user clicks on the name of a keg, they see its name, brand, price, alcohol content, and pint count.
Input: Click on Cascadia IPA
Output: Name: Cascadia IPA, Brand: Cascadia Brewing, Price: $5 a pint, Alcohol Content: 6%, Pints Left: 15

Description: Users can add new kegs to the list
Input: Click Add
Output: Form to add new keg

Description: Users can edit a keg's properties
Input: Click Edit next to property
Output: Property can be editted

Description: User can click a button next to keg to decrease pint count by 1
Input: Click Pint next to Keg
Output: Pint Count goes down by 1

Description: User can click a button showing kegs with 10 or less pints remaining
Input: Click Low Kegs
Output: Shows a list of kegs with 10 or less pints remaining

Description: User can see the difference between "house beers" and "guest taps", sorted by color
Input: View keg list
Output: Cascadia IPA (red for house beer), Mama's Little Yella Pils (blue for guest tap)

Description: User can see which beers are "Imperial" (>8% Alcohol Content) have a different color
Input: View keg list
Output: Cascadia IPA (red for house, green for imperial)
