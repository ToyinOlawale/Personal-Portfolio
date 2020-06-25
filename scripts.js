const nav = document.querySelector (".nav"),
      navList = nav.querySelectorAll ("li"),
      totalNavList= navList.length;

for (let i=0 ; i<totalNavList; i++) {
  const a=navList[i].querySelector ("a");
  a.addEventListener ('click',function(){
    for (let j=0 ; j<totalNavList; j++){
    navList[j].querySelector ("a").classList.remove ("active");
  }
    // console.log (this);
    this.classList.add ("active");

    showSection(this);
  })
}

function showSection (eLement) {
  const target= (element.getAttribute ("href").split("#")[1]);

  document.querySelector("#" +target).classList.add("active")
    
}
