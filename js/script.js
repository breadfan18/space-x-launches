// Constant Variables

// State Variables

// Cached element references --> parts pf the dom we need to touch. 


// Event Listeners 


// Functions

function getData() {
    $.ajax('https://api.spacexdata.com/v3/launches')
        .then(
            function (data) {
                console.log(data);
            },
            function error() {
                console.log(error);
            }
        );
}

getData();