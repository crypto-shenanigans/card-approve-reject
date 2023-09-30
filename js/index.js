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
		cardDiv.innerHTML = `
            <img src="${card.img}" alt="${card.asset}" />
            <div class="card-content">
                <h3>${card.asset}</h3>
                <p>${card.subbed ? "Subscribed" : "Not Subscribed"}</p>
                <button class="btn btn-${card.subbed ? "danger" : "success"}">${
			card.subbed ? "Unsubscribe" : "Subscribe"
		}</button>
            </div>
        `;
		cardContainer.appendChild(cardDiv);
	});
}

loadAssets();
