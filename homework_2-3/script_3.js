let bills = [100, 50, 20, 10, 5, 2, 1];
let allBills = 30;

function giveChange(cost, amountGiven) {
  let numberOfBills = [];
  let change = amountGiven - cost;
  let numberOfThisBill = 0;
  let minNumberOfBills = 0;

  if (change >= 0) {
    for (let i = 0; i < bills.length; i++) {
      numberOfThisBill = Math.floor(change / bills[i]);
      minNumberOfBills += numberOfThisBill;
      numberOfBills[i] = numberOfThisBill;
      change = change % bills[i];
      if (change === 0) {
        break;
      }
    }
  } else {
    numberOfBills[0] = 'Цього недостатньо, щоб заплатити за товар';
  }
  return numberOfBills;
}

document.getElementById('submit').onclick = function () {
  let answer = [];
  let string = [];
  let minNumberOfBills = 0;
  answer = giveChange(document.getElementById('cost').value, document.getElementById('amountGiven').value);
  if (typeof answer[0] === 'string') {
    string[0] = answer[0];
  } else {
    for (let i = 0; i < answer.length; i++) {
      minNumberOfBills += answer[i];
      if (minNumberOfBills > allBills) {
        alert('Недостатньо купюр для видачі здачі');
        break;
      }
      string[i + 1] = `${answer[i]} шт. номіналом ${bills[i]} грн. `;
    }
    string[0] = `Загальна кількість купюр: ${minNumberOfBills}. З них: `;
  }
  let br = document.createElement('br');
  let answerElement = document.getElementById('answer');

  for (let i = 0; i < string.length; i++) {
    let t = document.createTextNode(string[i]);
    answerElement.appendChild(t);
    answerElement.appendChild(br);
  };
}