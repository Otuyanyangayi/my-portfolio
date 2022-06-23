function moreInfo(id){
 document.getElementById("more").innerHTML = "I have also worked as a IT support staff(attachement) in Kenya Forest Service.";
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const comment = document.querySelector('input#comment-input').value
    const commentsList = document.querySelector('.comments')
    const p = document.createElement("p");
    const node = document.createTextNode(comment)
    p.appendChild(node);
    commentsList.appendChild(p);
    document.querySelector('input#comment-input').value = ''
  });

 
  
  