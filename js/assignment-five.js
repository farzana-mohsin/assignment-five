// scroll to ticketing section
const buyTickets = document.getElementById("buy-tickets");
buyTickets.addEventListener("click", scrollToTicket);

function scrollToTicket(event) {
  const ticketingSection = document.getElementById("ticketing-section");
  ticketingSection.scrollIntoView({
    behavior: "smooth",
  });
}

// change seatsLeft count on seat click
let totalPrice = 0;
const seats = document.getElementsByClassName("seat-selection");
for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];
  seat.addEventListener("click", decrementSeatsLeftCount);

  function decrementSeatsLeftCount(event) {
    const seatsLeft = getParsedInnerTextById("seats-left");
    const newSeatsLeft = seatsLeft - 1;
    setInnerTextById("seats-left", newSeatsLeft);
  }

  // set background color of the selected seat
  seat.addEventListener("click", changeSelectedSeatColor);

  function changeSelectedSeatColor(event) {
    setBackgroundColorByElement(event.target, "bg-green-400");
  }

  // increase number of seats selected on seat click
  seat.addEventListener("click", incrementSeatsSelectedCount);

  function incrementSeatsSelectedCount(event) {
    const seatCount = getParsedInnerTextById("seat-added");
    const newSeatCount = seatCount + 1;
    setInnerTextById("seat-added", newSeatCount);
  }

  // set seat, class, and price details on seat click
  seat.addEventListener("click", displaySeatDetails);

  function displaySeatDetails(event) {
    const tRow = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = event.target.innerText;
    tRow.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = "Economy";
    tRow.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = 550;
    console.log(typeof td3);
    tRow.appendChild(td3);

    const bodyParent = document.getElementById("body-parent");
    bodyParent.appendChild(tRow);
  }

  // put correct value to Total Price field
  seat.addEventListener("click", displayTotalPrice);
  function displayTotalPrice(event) {
    const price = getParsedInnerTextById("per-seat-price");
    console.log(typeof price);
    let totalPrice = getParsedInnerTextById("total-price");
    totalPrice += price;
    console.log(typeof totalPrice);
    // setInnerTextById("total-price", newTotalPrice);
  }

  // put correct value to Grand Total Price field
  seat.addEventListener("click", displayGrandTotalPrice);
  function displayGrandTotalPrice(event) {
    const totalPrice = getParsedInnerTextById("grand-total");
    const newTotalPrice = totalPrice + 550;
    setInnerTextById("grand-total", 550);
  }
}

// run for of loop on the seats
// const seats = document.getElementsByClassName("seat-selection");
// for (const seat of seats) {
// }
