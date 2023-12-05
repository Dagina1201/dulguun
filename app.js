const headerItem = document.querySelector(".header-carousel");
const shopfrontItems = document.querySelector(".shopfront");
const authorItems = document.querySelector(".author");
const specialItems = document.querySelector(".special");
const getData = async () => {
  await fetch(`./data.json`)
    .then((d) => d.json())
    .then((d) => {
      let authors = d.filter((f) => f.author == "Virginia Woolf");

      var headers = d.splice(0, 5);
      let special = d.splice(12, 15);
      let shopfront = d.splice(0, 18);
      headers.map((e, i) => {
        let opt = document.createElement(`div`);
        opt.innerHTML = `
          <div class="left"><img src=${e.imageLink} alt="" /></div>
         <div class="right">
         <h2 class="title-large">${e.title}</h2>

         <p class="text-gold">By ${e.author}</p>
         <p>$${e.pages}</p>
         </div>
       
      `;

        opt.classList = `carousel-item ${i == 0 ? "active" : ""}  header-slide`;

        headerItem.appendChild(opt);
      });
      shopfront.map((e) => {
        let opt = document.createElement(`div`);
        opt.innerHTML = `
          <div class="shopfront-item">
          <img src=${e.imageLink} alt="" />

         <h2 class="title-small">${e.title}</h2>

         <p class="text-gold">By ${e.author}</p>

         </div>
       
      `;
        shopfrontItems.appendChild(opt);
      });
      let author = authors[0];
      let authorItemLeft = document.createElement("div");
      authorItemLeft.classList = `author-items-left`;
      authorItemLeft.innerHTML = `
      <h2 class="title">${author.title}</h2>
      <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed dolorem inventore, eius doloremque quam libero quidem pariatur soluta dolorum ipsam eos aliquid ratione molestiae. Voluptatum ipsam quam nihil sint!</i></p>
      `;

      authorItems.appendChild(authorItemLeft);
      let authorItemCenter = document.createElement("div");
      authorItemCenter.classList = `author-items-center`;
      authorItemCenter.innerHTML = `<img src=${author.imageLink}>`;
      authorItems.appendChild(authorItemCenter);
      let authorItemRight = document.createElement("div");
      authorItemRight.classList = `author-items-right`;
      authorItemRight.innerHTML = `
        <h3 class="title-small">About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed dolorem inventore, eius doloremque quam libero quidem pariatur soluta dolorum ipsam eos aliquid ratione molestiae. Voluptatum ipsam quam nihil sint!</p>
        <h3 class="title-small">Books</h3>
        <div class="author-books">
        ${authors.map((e) => {
          return `<img src=${e.imageLink} >`;
        })}</div>
         <button class="btn-under">to write page</button>
        `;
      authorItems.appendChild(authorItemRight);
      special.map((e, i) => {
        let item = document.createElement(`div`);
        item.innerHTML = `
        <div class="d-flex" style="position: relative">
        <div
          class="d-flex justify-content-center"
          style="
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
            max-height: 300px;
            height: 100%;
          "
        >
          <img
            src=${e.imageLink}
                    style="height: 100%; width: auto"
          />
        </div>
        <div class="w-40" style="flex: 1">
          <img src=${e.imageLink} />
        </div>
        <div
          class="d-flex justify-content-center align-items-center"
          style="flex: 1"
        >
          <div class="w-40" style="width: 30%">
          <h2 class="title p-0" style="text-align: start">${e.title}</h2>
          <p class="text-gold">${e.author}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              aperiam expedita vero molestias dolorem nam repellat assumenda in
              doloremque itaque, adipisci laborum voluptatum tempore numquam saepe
              perferendis, dignissimos nesciunt sit!
            </p>
            <button class="btn-under">to write page</button>
          </div>
        </div>
      </div>
      `;
        item.classList = `carousel-item ${i == 0 ? "active" : ""}`;
        specialItems.appendChild(item);
      });
    });
};
getData();
const newsItems = document.querySelector(".news");
const getNews = async () => {
  await fetch(`./news.json`)
    .then((d) => d.json())
    .then((d) => {
      var news = d.splice(0, 3);

      news.map((e) => {
        let opt = document.createElement(`div`);
        opt.innerHTML = `
            <div><img src=${e.thumbnailUrl} alt="" /></div>
           <div>
           <h2 class="title">${e.title}</h2>
  
           <p class="text-gold">${e.authors[0]}</p>
           <p>${e.publishedDate.$date.substring(0, 10)}</p>
           </div>
         
        `;
        opt.classList = "news-items";

        newsItems.appendChild(opt);
      });
    });
};
getNews();
