const imagecontainer=document.getElementById("imagecontainer");
const btn=document.getElementById("btn");



async function getImages(){
  try{
    const allimages=await fetch("https://api.unsplash.com/photos/random/?client_id=UF9puCDgRRRRPFGWbXbqxyR1fhlzm3zdpP6LRHmBi7I&count=20");
    const data=await allimages.json();
data.map((el)=>{
    const image=document.createElement("img");
    image.src=el.urls.raw;
    image.classList.add("imag");
    imagecontainer.appendChild(image);
   
})
  }catch(err){
      err="there is some issue";
      console.log(err);
  }

}
getImages();
window.addEventListener("scroll",()=>{

if(window.scrollY+window.innerHeight>=window.document.documentElement.scrollHeight){
    getImages();
}

});
// btn.addEventListener("click",getImages);