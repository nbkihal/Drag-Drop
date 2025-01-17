let btn = document.getElementById('btn')
let inp = document.getElementById('inp')
let boxes = document.querySelectorAll('.box')
let drag = null
let boxnb = document.getElementById('boxnb')
let add = document.getElementById('add')

btn.onclick = function () {
  if (inp.value !== '') {
    let a = parseInt(boxnb.value, 10);
    if (a >= 1 && a <= 4) {
      boxes[a - 1].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
      inp.value = '';
      boxnb.value = '';
    } else {
      btn.classList.add('animate-error');
      setTimeout(() => btn.classList.remove('animate-error'), 1000);
    }
  } else {
    btn.classList.add('animate-error');
    setTimeout(() => btn.classList.remove('animate-error'), 1000);
  }

  dragitem();
};


function dragitem(){
  let items = document.querySelectorAll('.item')
  items.forEach(item=>{
    item.addEventListener('dragstart',function(){
      drag = item 
      item.style.opacity = '0.3'
      item.style.cursor = 'grabbing'
    })

    item.addEventListener('dragend',function(){
      drag = null
      item.style.opacity = '1'
      item.style.cursor = 'grab'
    })

    boxes.forEach(box=>{
      box.addEventListener('dragover', function (event) {
        event.preventDefault();
        box.classList.add('highlight');
      });

      box.addEventListener('dragleave', function () {
      box.classList.remove('highlight');
    });
  
      // Handle the drop event
      box.addEventListener('drop', function () {
        if (drag) {
          box.append(drag);
          box.classList.remove('highlight');
        }
      });
    })

  })
}

let scroll = document.getElementById('scrollbtn')

scroll.onclick = function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}