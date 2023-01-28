var imgBtn = document.getElementById("imgBtn");
var max = document.getElementById("max");
var arrays = new Array();
max.onchange = function() {
    for (let i = 1; i <= max.value; i++) {
        arrays.push(i)
    }
};
let intervalId;
var kq = [];



function generateRandom() {
    var seconds = document.getElementById("seconds").value;
    var results = document.getElementById("results").value;
    var outputSo = document.getElementById("outputSo");
    var pOutput = document.getElementById("pOutput");

    //var Hinh = document.getElementById("Hinh");
    var resultsBody = document.getElementById("results-body");
    var resetBtn = document.getElementById("resetBtn");
    var randomizeBtn = document.getElementById("randomizeBtn");

    pOutput.classList.toggle("hieuung");


    //imgBtn.style.opacity = "100";
    //Hinh.style.opacity = "100";
    //Hinh.style.transition = "ease-in 1.5s";
    outputSo.style.display = "block";
    // start sound
    var startSound = new Audio("path/to/sound1.mp3");
    startSound.play();

    // generate random numbers


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
        if (arrays.length === 0) {
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

        var newNumbers = [];
        for (let i = 0; i < numbers.length; i += 5) {
            if (i + 5 > numbers.length) {
                newNumbers.push(numbers.slice(i, numbers.length));
            } else {
                newNumbers.push(numbers.slice(i, i + 5));
            }
        }

        var joinNumber = [];
        for (let i = 0; i < newNumbers.length; i++) {
            let ele = newNumbers[i].join("-") + `</br>`;
            joinNumber.push(ele);
        }

        pOutput.innerHTML = joinNumber.join(" ");



        kq = numbers;
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
        //resultsBody.innerHTML += "-------";
        for (var i = kq.length - 1; i >= 0; i--) {
            var row = table.insertRow(0);
            var cell = row.insertCell();
            cell.innerHTML = kq[i];
        }
        //resultsBody.innerHTML += "-------";
        var row = table.insertRow(0);
        var cell = row.insertCell();
        cell.innerHTML = "-------";

        // Hinh.style.opacity = "0"
        // Hinh.style.transitionDuration = "0s"


        //imgBtn.style.display = "none";
        //outputSo.style.display = "block";
    }, seconds * 1000);
    resetBtn.addEventListener("click", function() {
        location.reload();
    });
    //
    if (arrays.length === 0) {
        alert("すべての番号が使用されています。リセットしてください。!");
        randomizeBtn.disabled = true;
        startSound.pause();
        clearTimeout(myVar);

        return;
    }
}