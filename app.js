function plusMinus(isIncreasing, item, price) {
    let previousValue = document.getElementById(item + '-quantity').value;
    if (isIncreasing == true) {
        previousValue = parseInt(previousValue) + 1;
    }
    else if (previousValue > 0) {
        previousValue = parseInt(previousValue) - 1;
    }
    document.getElementById(item + '-quantity').value = previousValue;
    document.getElementById(item + '-cost').innerText = previousValue * price;
}

document.getElementById('phone-btn-plus').addEventListener('click', function () {
    plusMinus(true, 'phone', 1219);
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    plusMinus(false, 'phone', 1219);
})
document.getElementById('case-btn-plus').addEventListener('click', function () {
    plusMinus(true, 'case', 59);
})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    plusMinus(false, 'case', 59);
})