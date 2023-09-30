BACKEND_URL = "some url";

SAMPLE_DATA = {
	cards: [
		{
			id: 1,
			asset: "asset 1",
			img: "https://picsum.photos/200/300",
			subbed: false,
			locked: false,
		},
		{
			id: 2,
			asset: "asset 2",
			img: "https://picsum.photos/200/300",
			subbed: false,
			locked: true,
		},
		{
			id: 3,
			asset: "asset 3",
			img: "https://picsum.photos/200/300",
			subbed: true,
			locked: false,
		},
		{
			id: 4,
			asset: "asset 4",
			img: "https://picsum.photos/200/300",
			subbed: true,
			locked: true,
		},
	],
};

function loadAssets() {
	const cardContainer = document.getElementById("card-container");
	cardContainer.innerHTML = "";
	SAMPLE_DATA.cards.forEach((card) => {
		const cardDiv = document.createElement("div");
		cardDiv.classList.add("card");

		const img = document.createElement("img");
		img.src = card.img;
		img.alt = card.asset;

		const cardContentDiv = document.createElement("div");
		cardContentDiv.classList.add("card-content");

		const h3 = document.createElement("h3");
		h3.textContent = card.asset;

		const p = document.createElement("p");
		p.textContent = card.subbed ? "Subscribed" : "Not Subscribed";

		const p2 = document.createElement("p");
		p2.textContent = card.locked ? "Locked" : "Unlocked";

		cardContentDiv.appendChild(h3);
		cardContentDiv.appendChild(p);
		cardContentDiv.appendChild(p2);

		cardDiv.appendChild(img);
		cardDiv.appendChild(cardContentDiv);
		cardContainer.appendChild(cardDiv);
	});
}

loadAssets();
