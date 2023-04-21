let section = document.querySelector('section');
fetch('https://api.github.com/users')
  .then((response) => {
    response
      .json()
      .then((data) => {
        data.map((value) => {
          section.innerHTML += `
         <article>
          <div class="container">
        <img src="${value.avatar_url}" alt="" />
        <h3>${value.login}</h3>
        <p><a href="${value.html_url}">Goto Profile</a></p>
      </div>
      <article>`;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
console.log('hello');
