const lst = document.getElementById('list');
var i = -1;

function addItm() {

  var inptVal = document.getElementById('item').value;

  if (inptVal === "" || inptVal === undefined) {

    alert('Please fill out filed');

  } else {
    
    i++;

    let li = `<li id="${i}" class="list-group-item"><i class="fa fa-check"></i> <p class="item entry">${inptVal}</p><i class="fa fa-times"></i></li>`;
    
    lst.innerHTML += li;
    
    localStorage.setItem(`${i}`, `${inptVal}`);
  }

}

(function(){
  lst.addEventListener('click', function (el) {

    let a = el.target;

    if (a.classList[1] === 'entry') {

      if (a.parentElement.children[1].style.textDecoration === 'line-through') {
        console.log('remove line hide ckeck');

        a.previousElementSibling.style.display = 'none';
        a.parentElement.children[1].style.textDecoration = '';
      } else {
        console.log('add line show check');

        a.parentElement.children[1].style.textDecoration = 'line-through';
        a.previousElementSibling.style.display = 'flex';
        a.previousElementSibling.style.color = 'lightgreen';
      }

    } else if (a.classList[1] === 'fa-times') {
      console.log('remove list item');

      let k = a.parentElement.id;
      a.parentElement.remove();
      localStorage.removeItem(k);
    } else {
      console.log('not-it');
    }

  });

})();