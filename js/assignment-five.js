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
seat.addEventListener("click", changeSeatsLeftCount);

function changeSeatsLeftCount(event) {
  const seatsLeft = getParsedInnerTextById("seats-left");
  const newSeatsLeft = seatsLeft - 1;
  setInnerTextById("seats-left", newSeatsLeft);
}

// set background color of the selected seat
seat.addEventListener("click", changeSelectedSeatColor);

function changeSelectedSeatColor(event) {
  setBackgroundColorByElement(event.target, "bg-green-400");
}
