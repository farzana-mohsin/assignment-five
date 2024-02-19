let seatsSelectedCount = 0;
const seatsSelectedList = [];

// scroll to ticketing section
const buyTickets = document.getElementById("buy-tickets");
buyTickets.addEventListener("click", scrollToTicket);

function scrollToTicket(event) {
  const ticketingSection = document.getElementById("ticketing-section");
  ticketingSection.scrollIntoView({
    behavior: "smooth",
  });
}

const seats = document.getElementsByClassName("seat-selection");
for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];

  seat.addEventListener("click", function (event) {
    if (!seatsSelectedList.includes(event.target.innerText)) {
      if (seatsSelectedCount >= 4) {
        alert("you cannot select more than four seats");
      } else {
        seatsSelectedCount++;
        seatsSelectedList.push(event.target.innerText);

        if (!(event.target.value === "") && !(passengerName.value === "")) {
          const nextButton = document.getElementById("next-button");
          nextButton.classList.remove("bg-gray-300");
          nextButton.classList.add("bg-green-500");
          nextButton.disabled = false;
        }

        const seatsLeft = getParsedInnerTextById("seats-left");
        const newSeatsLeft = seatsLeft - 1;
        setInnerTextById("seats-left", newSeatsLeft);

        // set background color of the selected seat
        setBackgroundColorByElement(event.target, "bg-green-400");

        // increase number of seats selected on seat click
        const seatCount = getParsedInnerTextById("seat-added");
        const newSeatCount = seatCount + 1;
        setInnerTextById("seat-added", newSeatCount);

        // set seat, class, and price details on seat click
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
        // console.log(typeof perSeatPrice);

        const bodyParent = document.getElementById("body-parent");
        bodyParent.appendChild(tRow);

        // put correct value to Total Price field
        // const price = getParsedInnerTextById("per-seat-price");
        // console.log(typeof price);
        const perSeatPrice = parseInt(td3.innerText);
        let totalPrice = getParsedInnerTextById("total-price");
        const newTotalPrice = (totalPrice += perSeatPrice);
        console.log(newTotalPrice);
        setInnerTextById("total-price", newTotalPrice);

        // put correct value to Grand Total Price field
        const grandTotalPrice = getParsedInnerTextById("grand-total");
        setInnerTextById("grand-total", newTotalPrice);
      }
      console.log(seatsSelectedList);
    }
  });
}

// apply discount and hide discount section
const applyButton = document.getElementById("apply-button");
applyButton.addEventListener("click", function () {
  const couponCode = document.getElementById("apply-coupon").value;
  const totalPrice = getParsedInnerTextById("total-price");
  const grandTotalPrice = getParsedInnerTextById("grand-total");
  const couponSection = document.getElementById("coupon-section");
  if (couponCode === "NEW15") {
    const discountAmount = totalPrice * 0.15;
    console.log(discountAmount);
    const newGrandTotalPrice = grandTotalPrice - discountAmount;
    setInnerTextById("grand-total", newGrandTotalPrice);

    couponSection.style.display = "none";
  } else if (couponCode === "Couple 20") {
    const discountAmount = totalPrice * 0.2;
    const newGrandTotalPrice = grandTotalPrice - discountAmount;
    setInnerTextById("grand-total", newGrandTotalPrice);

    couponSection.style.display = "none";
  }
});

// passenger info section

const passengerName = document.getElementById("name");
passengerName.addEventListener("keyup", enableNextButton1);
const passengerPhone = document.getElementById("phone");
passengerPhone.addEventListener("keyup", enableNextButton2);

function enableNextButton1(event) {
  const passengerPhone = document.getElementById("phone");
  if (
    !(event.target.value === "") &&
    !(passengerPhone.value === "") &&
    seatsSelectedCount > 0
  ) {
    const nextButton = document.getElementById("next-button");
    nextButton.classList.remove("bg-gray-300");
    nextButton.classList.add("bg-green-500");
    nextButton.disabled = false;
  }
}

function enableNextButton2(event) {
  const passengerName = document.getElementById("name");
  if (
    !(event.target.value === "") &&
    !(passengerName.value === "") &&
    seatsSelectedCount > 0
  ) {
    const nextButton = document.getElementById("next-button");
    nextButton.classList.remove("bg-gray-300");
    nextButton.classList.add("bg-green-500");
    nextButton.disabled = false;
  }
}
