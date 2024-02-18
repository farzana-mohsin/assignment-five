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
