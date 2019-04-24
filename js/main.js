let greenenergy = [
    {
        heading: "Solar Energy",
        path: "./img/solarb.jpg",
        alt: "Solar Battery",
        body: "This form of energy relies on the nuclear fusion power from the core of the Sun. This energy can be collected and converted in a few different ways. The range is from solar water heating with solar collectors or attic cooling with solar attic fans for domestic use to the complex technologies of direct conversion of sunlight to electrical energy using mirrors and boilers or photovoltaic cells. Unfortunately these are currently insufficient to fully power our modern society."
    },
    {
        heading: "Wind Energy",
        path: "./img/wturbine.jpg",
        alt: "Wind Turbine",
        body: "The movement of the atmosphere is driven by differences of temperature at the Earth's surface due to varying temperatures of the Earth's surface when lit by sunlight. Wind energy can be used to pump water or generate electricity, but requires extensive areal coverage to produce significant amounts of energy."
    },
    {
        heading: "Hydroelectric energy",
        path: "./img/dam.jpg",
        alt: "Dam",
        body: "This form uses the gravitational potential of elevated water that was lifted from the oceans by sunlight. It is not strictly speaking renewable since all reservoirs eventually fill up and require very expensive excavation to become useful again. At this time, most of the available locations for hydroelectric dams are already used in the developed world."
    }
];

let btn = document.querySelectorAll(".btn");
let info = document.querySelector(".info");

info.innerHTML = `<article>
                            <h3>${greenenergy[0].heading}</h3>
                            <img src="${greenenergy[0].path}" alt="${greenenergy[0].alt}">
                            <p>${greenenergy[0].body}</p>
                            </article>`;

function contentLoader(ev) {
    console.log(ev.target.textContent);

    let eventTarget = ev.target.textContent;

    if (eventTarget === "Solar Energy") {
        info.innerHTML = `<article>
                                    <h3>${greenenergy[0].heading}</h3>
                                    <img src="${greenenergy[0].path}" alt="${greenenergy[0].alt}">
                                    <p>${greenenergy[0].body}</p>
                                    </article>`;
    } else if (eventTarget === "Wind Energy") {
        info.innerHTML = `<article>
                                    <h3>${greenenergy[1].heading}</h3>
                                    <img src="${greenenergy[1].path}" alt="${greenenergy[1].alt}">
                                    <p>${greenenergy[1].body}</p>
                                    </article`;
    } else {
        info.innerHTML = `<article>
                                    <h3>${greenenergy[2].heading}</h3>
                                    <img src="${greenenergy[2].path}" alt="${greenenergy[2].alt}">
                                    <p>${greenenergy[2].body}</p>
                                    </article>`;
    }


    for (let obtn of btn) {
        if (obtn.id) {
            obtn.removeAttribute("id");
        }
    }

    ev.target.id = "active";
}


btn[0].addEventListener("click", contentLoader);
btn[1].addEventListener("click", contentLoader);
btn[2].addEventListener("click", contentLoader);


