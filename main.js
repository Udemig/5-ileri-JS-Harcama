var harcamaInput = document.getElementById("harcama")
var fiyatInput = document.getElementById("fiyat")
var harcamalarDiv = document.getElementById("harcamalar")


harcamalarDiv.addEventListener("click",handleDelete)

function ekle(){
  // INPUT ALANLARINI KONTROL ETTİK
  if (fiyatInput.value === '' || harcamaInput.value === '') {
    alert('İNPUT ALANLARINI DOLDURUN');
    return;
  }

  // ELEMAN OLUŞTURMA
  var harcamaDiv = document.createElement('div');
  //  ELEMANA CLASS EKLEME
  harcamaDiv.classList.add('harcama');
  //ELEMANIN İÇİNDEKİ HTMLİ DEĞİŞTİME
  harcamaDiv.innerHTML = ` 
            <h1> ${harcamaInput.value} </h1>
            <h3> ${fiyatInput.value} TL</h3>
            <img id="silBtn" src="trash.png" alt="">
  `;
  // harcamlar divinin içine atar
  harcamalarDiv.appendChild(harcamaDiv);

  //INPUTLARI TEMİZLEME İŞLEMİ
  fiyatInput.value = ""
  harcamaInput.value = ""
}

function handleDelete(e){
    var element = e.target
    if(element.id === "silBtn"){
       element.parentElement.remove()
    }
}