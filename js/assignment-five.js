// scroll to ticketing section
const buyTickets = document.getElementById("buyTickets");
buyTickets.addEventListener("click", scrollToTicket);

function scrollToTicket() {
  const ticketingSection = document.getElementById("ticketingSection");
  ticketingSection.scrollIntoView({
    behavior: "smooth",
  });
}
