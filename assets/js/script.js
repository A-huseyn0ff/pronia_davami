
  AOS.init();
  const arr=[
    "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png",
    "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png",
  ]
  let ind=0
 const slideimg=document.getElementById('img-slider')
 const left=document.getElementById('left-arrow')
 const right=document.getElementById('right-arrow')
 const colimg=document.getElementById('colimg')
//  slideimg.setAttribute('data-aos',"fade-up")
 left.addEventListener('click',()=>{
    ind--
    if (ind<0) {
    ind=1
    }
    slideimg.src=arr[ind]
 })
 right.addEventListener('click',()=>{
    ind++
    if (ind>1) {
        ind=0
    }
    slideimg.src=arr[ind]
 })


