// Initial active tab ---
let buttonClick = "all";

const tabActive = ["bg-black", "border-navy", "text-white"];
const tabInActive = [
  "bg-transparent",
  "text-slate-800",
  "border-state-200",
  "text-black",
];
// containers --- 
const allContainer = document.getElementById("all_container");
const interviewContainer = document.getElementById("interview_container");
const rejectContainer = document.getElementById("rejecte_container");
const main_card_container = document.getElementById("main_card_container");

const total = document.getElementById("total");
const interview = document.getElementById("interview");
const reject = document.getElementById("rejected");

// Function to switch tabs
function buttonSwitch(tab) {
  // Update tab button styles
  ["all", "interview", "rejected"].forEach((tabName) => {
    const btn = document.getElementById("tab-" + tabName);
    if (tabName === tab) {
      btn.classList.remove(...tabInActive);
      btn.classList.add(...tabActive);
    } else {
      btn.classList.remove(...tabActive);
      btn.classList.add(...tabInActive);
    }
  });

  allContainer.classList.add("hidden");
  interviewContainer.classList.add("hidden");
  rejectContainer.classList.add("hidden");

  // Show selected section
  if (tab === "all") allContainer.classList.remove("hidden");
  else if (tab === "interview") interviewContainer.classList.remove("hidden");
  else rejectContainer.classList.remove("hidden");
}

function updateCounters() {
  total.innerText = allContainer.querySelectorAll(".card").length;
  interview.innerText = interviewContainer.querySelectorAll(".card").length;
  reject.innerText = rejectContainer.querySelectorAll(".card").length;
}

updateCounters();

main_card_container.addEventListener("click", function (event) {
  const clicked = event.target;
  const card = clicked.closest(".card");
  if (!card) return; // ignore if not clicked inside a card

  const status = card.querySelector(".status");

  if (clicked.classList.contains("interview")) {
    status.innerText = "Interviewed";
    interviewContainer.appendChild(card);
  } else if (clicked.classList.contains("rejected")) {
    status.innerText = "Rejected";
    rejectContainer.appendChild(card);
  } else if (clicked.classList.contains("delete")) {
    card.remove();
  }

  updateCounters();
});
buttonSwitch(buttonClick);
