module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
    'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred', 'one thousand'];

  if (number === 0) {
    return 'zero';
  }
  if (number < 20) {
    return units[number];
  }
  if (number < 100) {
    const answear = tens[Math.floor(number / 10)] + ' ' + units[number % 10];
    return answear.trim();
  }
  if (number % 10 === 0 && number % 100 ===0) {
    return hundreds[number / 100];
  }

  if (number < 1000) {
    return units[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100);
  }

  return 'Number out of range';

}
