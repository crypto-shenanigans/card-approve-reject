BACKEND_URL = "some url";

SAMPLE_DATA = {
	cards: [
		{
			id: 1,
			asset: "asset 1",
			img: "https://picsum.photos/200/300",
			subbed: false,
			locked: false,
			classification: "approved"
		},
		{
			id: 2,
			asset: "asset 2",
			img: "https://picsum.photos/200/300",
			subbed: false,
			locked: true,
			classification: "rejected"
		},
		{
			id: 3,
			asset: "asset 3",
			img: "https://picsum.photos/200/300",
			subbed: true,
			locked: false,
			classification: "pending"
		},
		{
			id: 4,
			asset: "asset 4",
			img: "https://picsum.photos/200/300",
			subbed: true,
			locked: true,
			classification: "approved"
		},
	],
};

const cardContainer = document.getElementById("card-container");
const pendingTab = document.getElementById("pending-tab");
const acceptedTab = document.getElementById("accepted-tab");
const rejectedTab = document.getElementById("rejected-tab");

let activeFilter = null;

function createCard(card) {
	const hr = document.createElement("hr");``

	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");

	const img = document.createElement("img");
	img.src = card.img;
	img.alt = card.asset;

	const cardContentDiv = document.createElement("div");
	cardContentDiv.classList.add("card-content");

	const asset = document.createElement("div");
	asset.textContent = card.asset;
	// have the h3 link to https://xchain.io/asset/{asset}
	asset.addEventListener("click", () => {
		window.open(`https://xchain.io/asset/${card.asset}`);
	});

	const p = document.createElement("p");
	p.textContent = card.subbed ? "Subscribed" : "Not Subscribed";

	const p2 = document.createElement("p");
	p2.textContent = card.locked ? "Locked" : "Unlocked";

	cardContentDiv.appendChild(asset);
	cardContentDiv.appendChild(hr);
	cardContentDiv.appendChild(p);
	cardContentDiv.appendChild(hr.cloneNode());
	cardContentDiv.appendChild(p2);
	cardContentDiv.appendChild(hr.cloneNode());

	cardDiv.appendChild(img);
	cardDiv.appendChild(cardContentDiv);
	cardContainer.appendChild(cardDiv);
}

function loadAssets() {
    cardContainer.innerHTML = "";

    SAMPLE_DATA.cards.forEach((card) => {
        if (!activeFilter || card.classification === activeFilter) {
            createCard(card);
        }
    });
}

// Function to toggle the active filter state
function toggleActiveFilter(tab, filter) {
	if (activeFilter === filter) {
		activeFilter = null; // Remove the active filter
		tab.classList.remove("active");
	} else {
		activeFilter = filter; // Set the active filter
	}
}

function changeActiveTab(activeTab, filter) {
	const tabs = document.querySelectorAll("#tabs-container button");
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active");
	}
	activeTab.classList.add("active");
	toggleActiveFilter(activeTab, filter);
	loadAssets(activeFilter); // Load assets with the active filter
}

// Add event listeners to tabs
pendingTab.addEventListener("click", () => {
	changeActiveTab(pendingTab, "pending");
});

acceptedTab.addEventListener("click", () => {
	changeActiveTab(acceptedTab, "approved");
});

rejectedTab.addEventListener("click", () => {
	changeActiveTab(rejectedTab, "rejected");
});

// Initially load all cards
loadAssets();