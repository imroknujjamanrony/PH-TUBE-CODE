const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos");
  videos.forEach((videoItem) => {
    console.log(videoItem);

    const card = document.createElement("div");
    card.classList = "card card-compact";

    //   {
    //     "category_id": "1001",
    //     "video_id": "aaaa",
    //     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    //     "title": "Shape of You",
    //     "authors": [
    //         {
    //             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
    //             "profile_name": "Olivia Mitchell",
    //             "verified": ""
    //         }
    //     ],
    //     "others": {
    //         "views": "100K",
    //         "posted_date": "16278"
    //     },
    //     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
    // }
    card.innerHTML = `
    
    <figure class='h-[200px] relative'>
    <img
    class='h-full w-full object-cover'
      src=${videoItem.thumbnail}
      alt="Shoes" />

      ${
        videoItem.others.posted_date.length == 0
          ? ""
          : ` <span class='absolute right-2 bottom-2 bg-black rounded p-1 text-white'>${videoItem.others.posted_date}</span>`
      }
     
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class='w-10 h-10 rounded-full' src=${
      videoItem.authors[0].profile_picture
    }/>
    </div>

    <div>
    <h2 class='font-bold'>${videoItem.title}</h2>
    <div class='flex items-center gap-2'>
        <p class='text-gray-400'>${videoItem.authors[0].profile_name}</p>

        ${
          videoItem.authors[0].verified == true
            ? `        <img class='h-4 w-4 rounded-full' src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
`
            : ""
        }
        </div>
    <p></p>
    </div>

  </div>
    
    `;
    videosContainer.append(card);
  });
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);

    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoryContainer.append(button);
  });
};

// call the function

loadCategories();
loadVideos();
