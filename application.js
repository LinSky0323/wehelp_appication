const tags=document.querySelectorAll(".tag");
const text=document.querySelectorAll(".text");
for(const item of tags){
    const inner=item.nextElementSibling;
    item.addEventListener("click",(e)=>{
        for(const i of text){
        if(i==inner){
            continue;
        }
        i.classList.remove("open");
    }
    if(inner.classList.contains("open")){
        inner.classList.toggle("open");
    }
    else{
    setTimeout(()=>{
        inner.classList.toggle("open");
    },500)}
    })
}