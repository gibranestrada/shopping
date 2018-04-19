# Shopping for Phones

I created this website using javascript6, html5 and css3.  I uploaded dummy phone data to
mocky.io so I can request that data through an api fetch. Used map on the data to show it on the DOM.
In this project I used a lot of javascript to:
1. Map through the api data and display it on the DOM  as cards.
2. Filter phones by phone name
3. Added 'click to cart' button to add any phone selected to the shopping cart and
    it adds it to the localStorage.
4.  Added 'more info' button when clicked a hidden card shows up with more information on the selected item.
5. Close button to close the current revealed hidden card.
6. Added two buttons to the shopping cart to close a single selected item or to clear the whole shopping cart.
    These buttons also erase the data thats saved in the localStorage.

I had trouble on the event handlers. Whenever I opened multiple hidden cards and try to close one,
It would give me an error and other random cards would show up. After a few hours of googling I figured it out... I had to make sure I was removing the right element and I had to add an index to the map loop. I learned a lot on
manipulating the DOM and got more skilled in JavaScript.
