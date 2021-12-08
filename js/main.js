let elBtns = document.querySelectorAll('.btn');
let elItem = document.querySelector('.item2');
let elAllPrise = document.querySelector('.all-prise');


let lst = [];
let lst2 = [];
let count = 0;

elBtns.forEach(function (val) {
  val.addEventListener('click', function (e) {
    let idf = e.target.parentElement.parentElement;
    createEle(idf,idf.querySelector('.title').textContent);

  });
});
function createEle(all,idf) {
  let filter = lst.some((e)=>{
    return idf == e.title;
  });
  if(!filter){
    let obj = db(all);
    lst2.push(parseInt(obj.prise),parseInt(obj.das));
    lst.push(obj);
    elItem.innerHTML = "";
    for (let i of lst) {
      let clone = document.createElement('li');
      clone.className = 'product last';
      clone.innerHTML = `
      <span class="close close-btn">x</span>
      <div class="product__img">
        <img src="${i.img}" alt="img">
      </div>
      <div class="content">
        <h2 class="title">${i.title}</h2>
        <P class="prise"><span class="span">Narh</span><span class="narh">${i.prise}<span></span></span></P>
        <P class="prisedas"><span class="spandas">Dastavka</span><span class="das">${i.das}<span></span></span></P>
      </div>
      `;
      elItem.appendChild(clone);
    }
  }else{
    let obj = db(all);
    lst2.push(parseInt(obj.prise),parseInt(obj.das));
  }
  count = lst2.reduce((el,i)=>{
    return el + i;
  });
  elAllPrise.textContent = count +'$';
  
}
function db(all){
  let obj = {
    img: all.querySelector('img').src,
    title: all.querySelector('.title').textContent,
    prise: all.querySelector('.narh').textContent,
    das: all.querySelector('.das').textContent
  };
  return obj;
}
