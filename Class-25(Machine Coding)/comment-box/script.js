document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector("#submitComment");
  const commentInput = document.querySelector("#commentInput");
  const commentContainer = document.querySelector("#commentsContainer")

  submitBtn.addEventListener("click", function () {
    const commentText = commentInput.value;
    addComment(commentText);
  });

  function addComment(text) {
    const commentElement = document.createElement("div");

    commentElement.className = "repliesContainer";

    commentElement.innerHTML = `<p>${text}</p>
        <button class="replyBtn">Reply</button>
        <textArea class="replyInput" placeholder="Write a reply ..."></textArea>`;
    commentContainer.appendChild(commentElement)  
  }


});
