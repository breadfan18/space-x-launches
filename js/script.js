// Constant Variables
const BASE_URL = 'https://api.spacexdata.com/v3/launches?limit=12';

// State Variables
let launches;

// Cached element references --> parts of the dom we need to touch. 
const $launches = $('section#launches');


// Event Listeners 


// Functions
init();

function init() {
    getData();
}

function getData() {
    $.ajax(BASE_URL)
        .then(
            function (data) {
                launches = data;
                console.log(data);
                render();
            },
            function error() {
                console.log(error);
            }
        );
}

function render() {
    const html = launches.map(function (launch) {
        return `
            <article class="card">
            <h1>${launch.mission_name}</h1>
            <p>${launch.launch_year}</p>
            </article>
        `;
    })

    $launches.append(html);
    
}