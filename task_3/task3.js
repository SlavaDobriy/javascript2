function numbEntrance() {
    var numbFloat = document.getElementById("inFloat").value;
    numbFloat = parseInt(numbFloat);
    console.log(numbFloat);

    if (numbFloat < 21) {
        alert("Подезд №1");
    } else if (20 > numbFloat || numbFloat < 65) {
        alert("Подезд №2");
    } else if (65 > numbFloat || numbFloat < 81) {
        alert("Подезд №3");
    } else {
        alert("Не верний № квартиры");
    }
}