//membuat fungsi convert
function convert() {
    //mengisi variabel numberInput dengan element dari variabel tersebut (input pengguna)
    let numberInput = document.getElementById("numberInput").value;
    //mengisi variabel result dengan element dari variabel tersebut (input pengguna)
    let result = document.getElementById("result");

    //melakukan seleksi kondisi if else untuk case yang telah ditentukan
    if (numberInput >= 0 && numberInput <= 40) {
        result.innerHTML = "E";
    } else if (numberInput >= 41 && numberInput <= 55) {
        result.innerHTML = "D";
    } else if (numberInput >= 56 && numberInput <= 60) {
        result.innerHTML = "C";
    } else if (numberInput >= 61 && numberInput <= 65) {
        result.innerHTML = "BC";
    } else if (numberInput >= 66 && numberInput <= 70) {
        result.innerHTML = "B";
    } else if (numberInput >= 71 && numberInput <= 80) {
        result.innerHTML = "AB";
    } else if (numberInput >= 81 && numberInput <= 100) {
        result.innerHTML = "A";
    } else {
        result.innerHTML = "Masukkan Angka 0 hingga 100.";
    }
}

//membuat fungsi clearTextboxes yang berguna untuk mengkosongkan seluruh nilai input dan hasil
function clearTextboxes() {
    document.getElementById("result").value = "";
    document.getElementById("numberInput").value = "";
}