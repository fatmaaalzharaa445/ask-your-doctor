let  btnlogOUT = document.getElementById('logOut');

 
btnlogOUT.addEventListener('click', function(){
    window.location.href ="index.html"
  });
  

  let btnMore = document.getElementsByClassName('link');


  for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener('click', function(){
        window.location.href ="infoDoc.html"
      });
      
  }