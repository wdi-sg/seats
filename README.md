# seats

![https://media.giphy.com/media/WKJpCXfvBHyla/giphy.gif](https://media.giphy.com/media/WKJpCXfvBHyla/giphy.gif)

Implement a program for a kiosk that sells airline tickets.

A plane has 10 seats.

When the plane is empty a seat is $50.

For each seat sold the ticket price goes up 5% over the original price of $50.

When a user types `buy` into the input, consider that seat sold and show the user the price of their seat.

### further
The airline boss requests finer-grained pricing:

For the first half of the seats, the price goes up 3% over the original price of $50.

For the second half it goes up by 5% over the original price of $50.

The last seat is $91,000.

### further
When outputing a message tell the user how many tickets are left before the price bracket goes up.

### further
Change the pricing to increase by 3% and 5% over the *current* price of the ticket. (i.e., each ticket is some percentage more than the last)

### further
Implement a check of the input. Make sure to show the user a message when they type something invalid.

### further
The airline upgraded it's fleet of aircraft. Each plane has 3 cabins, economy, business and first class.

The user can now type in "buy first class" and the kiosk will sell them a first class seat, same for the other cabins.

A plane now has 15 economy seats, 6 business class seats and 4 first class seats.

##### The pricing models have also changed:

##### For economy pricing is the same.

For the first half of the seats, the price goes up 3%.

For the second half it goes up by 5%.

The last seat is $91,000.

##### For business class:

For the first half of the seats, the price goes up 6%.

For the second half it goes up by 10%.

The last seat is $91,000.

##### For first class:

All seats goes up by 15% over the original price of $50.

The last seat is $191,000.