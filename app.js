document.getElementById("check-btn").addEventListener("click", function() {
    var integer1 = parseInt(document.getElementById("integer1").value);
    var integer2 = parseInt(document.getElementById("integer2").value);

    if (integer1 > integer2) {
        document.getElementById("result").textContent = `${integer1} is the greater integer!`;
    } else if (integer2 > integer1) {
        document.getElementById("result").textContent = `${integer2} is the greater integer!`;
    } else {
        document.getElementById("result").textContent = `${integer1} is equal to ${integer2}.`;
    }
});


