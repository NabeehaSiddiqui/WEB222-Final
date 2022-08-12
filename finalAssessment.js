function emailValidate() {
    let regexCheck =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
    let postal = document.getElementById('postal').value;
    if (!regexCheck.test(postal)) {
      alert("Postal Code Invalid");
      return false;
    } else {
      return true;
    }
};

function display() {
    let radio = document.getElementById('rate');
    rate.style.display = "block";
    rate.setAttribute("required", "required");
}

function hide() {
    let radio = document.getElementById('rate');
    rate.style.display = "none";
    rate.value= "none";
}
