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
const seat = document.getElementById("A1");
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
  tRow.appendChild(td3);

  const bodyParent = document.getElementById("body-parent");
  bodyParent.appendChild(tRow);
}
