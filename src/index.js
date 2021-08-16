module.exports = function toReadable (number) {
    if (number == 0) return "zero";
    else return convert_millions(number);
}

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_millions(number) {
  if (number >= 1000000) {
    return convert_millions(Math.floor(number / 1000000)) + " million " + convert_thousands(number % 1000000);
  } else {
    return convert_thousands(number);
  }
}

function convert_thousands(number) {
  if (number >= 1000) {
    return convert_hundreds(Math.floor(number / 1000)) + " thousand " + convert_hundreds(number % 1000);
  } else {
    return convert_hundreds(number);
  }
}

function convert_hundreds(number) {
  if (number > 99) {
    return ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
  } else {
    return convert_tens(number);
  }
}

function convert_tens(number) {
  if (number < 10) return ones[number];
  else if (number >= 10 && number < 20) return teens[number - 10];
  else {
    return tens[Math.floor(number / 10)] + " " + ones[number % 10];
  }
}