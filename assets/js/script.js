// var message = "je fais du js";
// message = '<h1>' + message + '</h1>';

// document.write(message);

let message = '<ul>';

for(let i = -1722; i < 2756 ; i++) {
  if (i % 9 === 0) {
      message += '<li>';
      message += i;

      message += '</li>';
  }
}

message += '</ul>';
alert('wololo');
document.write(message);
