document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector("#submitComment");
  const commentInput = document.querySelector("#commentInput");
  const commentContainer = document.querySelector("#commentsContainer")

  submitBtn.addEventListener("click", function () {
    const commentText = commentInput.value;
    addComment(commentText);
  });

  // event delegation for the commentContainer to make the reply btn work

  commentContainer.addEventListener('click' , function(e){
    if(e.target.className.includes('replyBtn')){
        const parentComment = e.target.parentElement
        const replyInput = parentComment.querySelector('.replyInput')
        const replyText = replyInput.value
        addReply(parentComment , replyText)
    }
  })

  function addComment(text) {
    const commentElement = document.createElement("div");

    commentElement.className = "repliesContainer";

    commentElement.innerHTML = `<p>${text}</p>
        <button class="replyBtn">Reply</button>
        <textArea class="replyInput" placeholder="Write a reply ..."></textArea>`;
    commentContainer.appendChild(commentElement)  
  }


  function addReply(parentComment , text){
     const replyElement = document.createElement('div')

     replyElement.className = 'repliesContainer'

     replyElement.innerHTML = `<p>${text}</p>`

     parentComment.appendChild(replyElement)
  }


});
