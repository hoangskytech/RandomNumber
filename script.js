var max = document.getElementById("max");
var arrays = [];
window.onload = function() {
    max.addEventListener("input", function() {
        for (let i = 1; i <= max.value; i++) {
            arrays.push(i);
        }
    });
};
let intervalId;
var kq = [];

function generateRandom() {
    var seconds = document.getElementById("seconds").value;
    var results = document.getElementById("results").value;
    var output = document.getElementById("output");
    var resultsBody = document.getElementById("results-body");
    var resetBtn = document.getElementById("resetBtn");
    var randomizeBtn = document.getElementById("randomizeBtn");

    // start sound
    var startSound = new Audio("path/to/sound1.mp3");
    startSound.play();

    // generate random numbers
    var number = "";

    function unique(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    function arrayRemove(arr, value) {
        return arr.filter(function(ele) {
            return ele != value;
        });
    }
    //var newKq = [];
    var index;
    intervalId = setInterval(() => {
        let numbers = [];
        let div = arrays.length % results;
        if (arrays.length == 0) {
            return;
        } else if (arrays.length < results) {
            while (true) {
                index = Math.floor(Math.random() * arrays.length);
                numbers.push(arrays[index]);
                numbers = unique(numbers);

                if (numbers.length == div) {
                    break;
                }
            }
        } else {
            while (true) {
                index = Math.floor(Math.random() * arrays.length);
                numbers.push(arrays[index]);
                numbers = unique(numbers);

                if (numbers.length == results) {
                    break;
                }
            }
        }
        //newNum = unique(numbers);
        kq = numbers;
        output.innerHTML = kq.join("-");

        return kq;
    }, 50);

    for (let i = 0; i < kq.length; i++) {
        arrays = arrayRemove(arrays, kq[i]);
    }
    // wait for specified number of seconds
    var myVar = setTimeout(function() {
        // end sound
        clearInterval(intervalId);
        var endSound = new Audio("path/to/sound2.mp3");
        startSound.pause();
        endSound.play();
        if (randomizeBtn.disabled == true) {
            endSound.pause();
        }
        // display numbers
        var table = document.getElementById("table");
        for (var i = 0; i < kq.length; i++) {
            var row = table.insertRow();
            var cell = row.insertCell();
            cell.innerHTML = kq[i];
        }
        resultsBody.innerHTML += "-------";
    }, seconds * 1000);
    resetBtn.addEventListener("click", function() {
        location.reload();
    });
    //
    if (arrays.length === 0) {
        alert(
            "すべての番号が使用されています。リセットしてください。!"
        );
        randomizeBtn.disabled = true;
        startSound.pause();
        clearTimeout(myVar);


        return;
    }
}