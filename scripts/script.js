const container = document.getElementById("postsContainer");

if (container) {
  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
          <h2>${post.title}</h2>
          <small>${post.date}</small>
          <p>${post.content}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      container.innerHTML = "<p>Couldn't load posts. Either I'm offline or the universe hates me.</p>";
      console.error(err);
    });
}
