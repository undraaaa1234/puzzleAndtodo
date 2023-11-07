const cards = document.querySelector(".cards");
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector("form");
const toDo = document.querySelector(".toDo");
const error = document.querySelector(".error");
const inProgress = document.querySelector(".inProgress")
const donE = document.querySelector(".Done")
const option = document.querySelectorAll("option")

let count = 3;

let data = [
    {
        id: "id0",
        text: "1",
        status: "todo"
    },
    {
        id: "id1",
        text: "2",
        status: "todo"
    },
    {
        id: "id2",
        text: "3",
        status: "todo"
    },
];

const setData = (arr) => {
    data = arr;
    render();
};

const render = () => {
    toDo.innerHTML = "";
    inProgress.innerHTML = "";
    donE.innerHTML = "";

    data.forEach((item) => {
        if (item.status === "todo") {
            toDo.innerHTML += Card(item);
        } else if (item.status === "inprogress") {
            inProgress.innerHTML += Card(item);
        } else if (item.status === "done") {
            donE.innerHTML += Card(item);
        }
    });

    const remove = document.querySelectorAll(".remove");

    remove.forEach((za) => {
        za.addEventListener("click", () => {
            console.log(za);
            const id = za.id;

            const newData = data.filter((item) => {
                return item.id !== id;
            });

            setData(newData)
        });
    });

    const doneButton = document.querySelectorAll(".ok");

    doneButton.forEach((element) => {
        element.addEventListener("click", (event) => {
            let id = event.target.id;
            const newData = data.map((item) => {
                if (item.id === id) {
                    item.status = "done"
                }
                return item;
            })
            setData(newData);
        })
    });





};

const Card = (item) => {
    return `
        <div draggable="true" class="card">
            <button class="ok" id="${item.id}">done</button>
            <h3>${item.text}​​​​​​​​</h3>
            <img id="${item.id}" src="./img/x.svg"/ class="remove">
        </div>
    `;
};



render();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements } = event.target;

    if (elements.text.value == "") {
        error.textContent = "Бөглөнө үү!"
        return;
    }
    //buglunuugee alga bolgojinoo
    error.textContent = ""

    const text = elements["text"].value;
    const status = elements["status"].value
    const newData = [...data, { text, status, id: "id" + count }];


    count++;

    setData(newData);

    form.reset();

});

