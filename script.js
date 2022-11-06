function Change_bp() {
  var bd = document.querySelector('body')
  var txt = document.querySelector('.txt')
  var h_1 = document.querySelector('h1')
  var upl = document.querySelector('ul')
  if(document.getElementById("color_bt").value === 'black') {
    bd.style.backgroundColor = 'black';
    txt.style.color = 'white';
    h_1.style.borderBottom = '1px solid white';
    upl.style.borderRight = '1px solid white';
    document.getElementById("color_bt").value = 'powderblue';}
  else {
    bd.style.backgroundColor = 'powderblue';
    txt.style.color = 'black';
    h_1.style.borderBottom = '1px solid black';
    upl.style.borderRight = '1px solid black';
    document.getElementById("color_bt").value = 'black';}
}
