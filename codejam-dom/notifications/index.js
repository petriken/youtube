const Notif = document.body.children[0];

if (localStorage.getItem('notifKey') !== null) {
  Notif.style.display = "none";
} else {
  setTimeout(function() {
    Notif.style.visibility = "visible"
  }, 1000);
}
const arr = ['My name is notification № 1',
  'Callstack overflow, you must change code (2)',
  'What theme for the presentation should I choose? (3)',
  'I need more time, it is not enough all the time (4)',
  'Javascript is not strictly typed programming language (5)',
  'Enough to make a notification, you need to make youtube search code (6)'
];
const startNotif = arr[1];
let notification = document.querySelector('.first-notif').firstChild;
let firstNotif = document.createTextNode(startNotif);
notification.appendChild(firstNotif);

const closeNotif = document.querySelector('#close');
function hiddenNotif() {
  Notif.style.visibility = "hidden";
  closeNotif.removeEventListener('click', hiddenNotif);
}
closeNotif.addEventListener('click', hiddenNotif);

const smallCircle = document.querySelector('.pseudo-slide');
let pos = arr.indexOf(startNotif);
smallCircle.children[pos].classList.add("circle-small-full");

const leftNotif = document.querySelector('.left-arrow');
function prevNotif() {
  if (pos > 0 && pos < arr.length) {
    notification.innerHTML = arr[pos - 1];
    smallCircle.children[pos - 1].classList.add("circle-small-full");
    smallCircle.children[pos].classList.remove("circle-small-full");
    pos--;
  } else if (pos = arr.length) {
    notification.innerHTML = arr[pos - 1];
    smallCircle.children[pos - 1].classList.add("circle-small-full");
    smallCircle.children[0].classList.remove("circle-small-full");
    pos--;
  } else {
    notification.innerHTML = arr[arr.length - 1];
    pos = arr.length - 1;
    smallCircle.children[pos].classList.add("circle-small-full");
    smallCircle.children[pos + 1].classList.remove("circle-small-full");
  }
}
leftNotif.addEventListener('click', prevNotif);

const RightNotif = document.querySelector('.right-arrow');

function nextNotif() {
  if (pos >= 0 && pos < arr.length - 1) {
    notification.innerHTML = arr[pos + 1];
    smallCircle.children[pos + 1].classList.add("circle-small-full");
    smallCircle.children[pos].classList.remove("circle-small-full");
    pos++;
  } else { // pos = arr.lenght;
    notification.innerHTML = arr[0];
    pos = 0;
    smallCircle.children[pos].classList.add("circle-small-full");
    smallCircle.children[arr.length - 1].classList.remove("circle-small-full");
  }
}
RightNotif.addEventListener('click', nextNotif);

window.addEventListener('keydown', keypress);

function keypress(e) {
  if (e.keyCode == '37') {
    prevNotif();
  } else if (e.keyCode == '39') {
    nextNotif();
  };
}

const disable = document.querySelector('.checkbox');
function disableNotif() {
  localStorage.setItem('notifKey', arr);
}
disable.addEventListener('click', disableNotif);
// localStorage.clear();