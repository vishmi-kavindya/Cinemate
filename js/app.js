const movies = [
  { id: 1,  title: "Dune: Part Two",            year: 2024, rating: 8.5, genre: "Sci-Fi",    badge: "trending", type: "movie", poster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/02/dune_-part-two-poster-2024.jpg",  detail: "detail-dune2.html"           },
  { id: 2,  title: "Oppenheimer",               year: 2023, rating: 8.9, genre: "Drama",     badge: "new",      type: "movie", poster: "https://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",  detail: "detail-oppenheimer.html"     },
  { id: 3,  title: "The Dark Knight",           year: 2008, rating: 9.0, genre: "Action",    badge: "top",      type: "movie", poster: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",  detail: "detail-darkknight.html"      },
  { id: 4,  title: "The Grand Budapest Hotel",  year: 2014, rating: 8.1, genre: "Comedy",    badge: null,       type: "movie", poster: "https://th.bing.com/th/id/R.a6c017f47128a2fd95d82bb2b67db7d8?rik=1iPWn3sumwh2pA&pid=ImgRaw&r=0",  detail: "detail-grandbudapest.html"   },
  { id: 5,  title: "Parasite",                  year: 2019, rating: 8.5, genre: "Thriller",  badge: null,       type: "movie", poster: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",  detail: "detail-parasite.html"        },
  { id: 6,  title: "Inception",                 year: 2010, rating: 8.8, genre: "Sci-Fi",    badge: null,       type: "movie", poster: "https://image.tmdb.org/t/p/w342/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",  detail: "detail-inception.html"       },
  { id: 7,  title: "The Shawshank Redemption",  year: 1994, rating: 9.3, genre: "Drama",     badge: "top",      type: "movie", poster: "https://image.tmdb.org/t/p/w342/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",  detail: "detail-shawshank.html"       },
  { id: 8,  title: "Whiplash",                  year: 2014, rating: 8.5, genre: "Drama",     badge: null,       type: "movie", poster: "https://image.tmdb.org/t/p/w342/7fn624j5lj3xTme2SgiLCeuedmO.jpg",  detail: "detail-whiplash.html"        },
  { id: 9,  title: "Hereditary",                year: 2018, rating: 7.3, genre: "Horror",    badge: null,       type: "movie", poster: "https://image.tmdb.org/t/p/original/3TwpoxoUQTJfv3xMDZdqhOBj8ke.jpg",  detail: "detail-hereditary.html"      },
  { id: 10, title: "Inside Out 2",              year: 2024, rating: 7.6, genre: "Animation", badge: "new",      type: "movie", poster: "https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",  detail: "detail-insideout2.html"      },
  { id: 11, title: "Get Out",                   year: 2017, rating: 7.7, genre: "Horror",    badge: null,       type: "movie", poster: "https://tse4.mm.bing.net/th/id/OIP.c7D0XtSU6Q_HoMy4tFTI-AHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",  detail: "detail-getout.html"          },
  { id: 12, title: "Interstellar",              year: 2014, rating: 8.6, genre: "Sci-Fi",    badge: null,       type: "movie", poster: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",  detail: "detail-interstellar.html"    },
  { id: 13, title: "Furiosa",                   year: 2024, rating: 7.9, genre: "Action",    badge: "new",      type: "movie", poster: "https://image.tmdb.org/t/p/w342/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",  detail: "detail-furiosa.html"         },
  { id: 16, title: "Spider-Man: Spider-Verse",  year: 2018, rating: 8.4, genre: "Animation", badge: "top",      type: "movie", poster: "https://image.tmdb.org/t/p/w342/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",  detail: "detail-spiderverse.html"     },
  { id: 17, title: "Gone Girl",                 year: 2014, rating: 8.1, genre: "Thriller",  badge: null,       type: "movie", poster: "https://posterspy.com/wp-content/uploads/2021/05/4390e1ff-a5c1-4944-b779-ead8b30035c2_rw_1920.png",  detail: "detail-gonegirl.html"        },
  { id: 18, title: "La La Land",                year: 2016, rating: 8.0, genre: "Drama",     badge: null,       type: "movie", poster: "https://image.tmdb.org/t/p/w342/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",  detail: "detail-lalaland.html"        },
  // Task 1: 3 more movies added (classic badge for pre-2000)
  { id: 19, title: "Schindler's List",          year: 1993, rating: 9.0, genre: "Drama",     badge: "classic",  type: "movie", poster: "https://image.tmdb.org/t/p/w342/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",  detail: "detail-schindler.html"       },
  { id: 20, title: "Spirited Away",             year: 2001, rating: 8.6, genre: "Animation", badge: "classic",  type: "movie", poster: "https://image.tmdb.org/t/p/w342/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",  detail: "detail-spirited.html"        },
  { id: 21, title: "The Shining",               year: 1980, rating: 8.4, genre: "Horror",    badge: "classic",  type: "movie", poster: "https://image.tmdb.org/t/p/w342/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",  detail: "detail-shining.html"         },
];

const tvShows = [
  { id: 101, title: "Breaking Bad",          year: 2008, rating: 9.5, genre: "Drama",    badge: "top",      type: "tv", poster: "https://image.tmdb.org/t/p/w342/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",  detail: "detail-breakingbad.html"    },
  { id: 102, title: "The Last of Us",        year: 2023, rating: 8.7, genre: "Drama",    badge: "new",      type: "tv", poster: "https://image.tmdb.org/t/p/w342/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",  detail: "detail-lastofus.html"       },
  { id: 103, title: "Succession",            year: 2018, rating: 8.8, genre: "Drama",    badge: null,       type: "tv", poster: "https://artworks.thetvdb.com/banners/v4/series/338186/backgrounds/614f91fd19349.jpg",  detail: "detail-succession.html"     },
  { id: 104, title: "Severance",             year: 2022, rating: 8.7, genre: "Sci-Fi",   badge: "top",      type: "tv", poster: "https://image.tmdb.org/t/p/original/xU7GuzdAPbenxqdVCqKbRMH30M5.jpg",  detail: "detail-severance.html"      },
  { id: 105, title: "The Bear",              year: 2022, rating: 8.6, genre: "Comedy",   badge: "trending", type: "tv", poster: "https://image.tmdb.org/t/p/w342/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",  detail: "detail-thebear.html"        },
  { id: 106, title: "Shogun",                year: 2024, rating: 8.9, genre: "Drama",    badge: "new",      type: "tv", poster: "https://image.tmdb.org/t/p/w342/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",  detail: "detail-shogun.html"         },
  { id: 107, title: "True Detective",        year: 2014, rating: 9.0, genre: "Crime",    badge: null,       type: "tv", poster: "https://th.bing.com/th/id/R.61aab7a7648affdd59360827f3a48a8f?rik=eD6tVedUiUdRIg&pid=ImgRaw&r=0",  detail: "detail-truedetective.html"  },
  { id: 108, title: "House of the Dragon",   year: 2022, rating: 8.4, genre: "Fantasy",  badge: null,       type: "tv", poster: "https://image.tmdb.org/t/p/w342/z2yahl2uefxDCl0nogcRBstwruJ.jpg",  detail: "detail-hotd.html"           },
  { id: 109, title: "Peaky Blinders",        year: 2013, rating: 8.8, genre: "Crime",    badge: null,       type: "tv", poster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/peaky-blinders-netflix-poster.jpg",    detail: "detail-peakyblinders.html"  },
  { id: 110, title: "Stranger Things",       year: 2016, rating: 8.7, genre: "Sci-Fi",   badge: null,       type: "tv", poster: "https://image.tmdb.org/t/p/w342/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",  detail: "detail-strangerthings.html" },
  { id: 111, title: "Ted Lasso",             year: 2020, rating: 8.8, genre: "Comedy",   badge: null,       type: "tv", poster: "https://image.tmdb.org/t/p/w1280/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg",  detail: "detail-tedlasso.html"       },
  { id: 112, title: "Slow Horses",           year: 2022, rating: 8.5, genre: "Thriller", badge: "trending", type: "tv", poster: "https://images8.alphacoders.com/137/1375477.jpg",  detail: "detail-slowhorses.html"     },
  { id: 113, title: "Mindhunter",            year: 2017, rating: 8.6, genre: "Crime",    badge: null,       type: "tv", poster: "https://superstarsbio.com/wp-content/uploads/2020/12/Mindhunter-poster.jpg",  detail: "detail-mindhunter.html"     },
  { id: 114, title: "Ozark",                 year: 2017, rating: 8.4, genre: "Crime",    badge: null,       type: "tv", poster: "https://resizing.flixster.com/g6WGvi3ynvfItWC9RX206-jtkRM=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==",  detail: "detail-ozark.html"          },
  { id: 115, title: "Black Mirror",          year: 2011, rating: 8.8, genre: "Sci-Fi",   badge: null,       type: "tv", poster: "https://m.media-amazon.com/images/M/MV5BMTk5NTk1Mzg3Ml5BMl5BanBnXkFtZTcwNDAyNzY3OA@@._V1_.jpg",  detail: "detail-blackmirror.html"    },
  { id: 116, title: "The Witcher",           year: 2019, rating: 8.2, genre: "Fantasy",  badge: null,       type: "tv", poster: "https://wallpaperaccess.com/full/7801342.jpg",  detail: "detail-witcher.html"        },
];

function getRatingClass(rating) {
  if (rating >= 8.5) {
    return "high";       
  } else if (rating >= 6.0) {
    return "mid";        
  } else {
    return "low";        
  }
}

function getBadgeHTML(badge) {
  switch (badge) {
    case "trending":
      return `<span class="cbadge cb-trend">Trending</span>`;
    case "new":
      return `<span class="cbadge cb-new">New</span>`;
    case "top":
      return `<span class="cbadge cb-top">Top</span>`;
    case "classic":
      return `<span class="cbadge cb-classic">Classic</span>`;
    default:
      return ""; 
  }
}

function createCardHTML(item) {
  const ratingClass = getRatingClass(item.rating);
  const badgeHTML   = getBadgeHTML(item.badge);
  const tvBadge     = item.type === "tv" ? `<span class="cbadge cb-tv">TV</span>` : "";

  return `
    <div class="card">
      <div class="c-poster">
        <img src="${item.poster}" alt="${item.title} Poster" loading="lazy"/>
        ${badgeHTML}
        ${tvBadge}
        <a href="favourites.html" class="cfav">♡</a>
        <div class="card-shine"></div>
      </div>
      <div class="c-info">
        <a href="${item.detail}" class="c-link">View Details</a>
        <div class="c-title">${item.title}</div>
        <div class="c-meta">
          <span class="cy">${item.year}</span>
          <span class="cg">${item.genre}</span>
          <span class="cr rating-${ratingClass}">⭐ ${item.rating}</span>
        </div>
      </div>
    </div>`;
}

function renderCards(dataArray, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;  

  let allCardsHTML = "";

  for (let i = 0; i < dataArray.length; i++) {
    allCardsHTML += createCardHTML(dataArray[i]);
  }

  container.innerHTML = allCardsHTML;
}

const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" || currentPage === "") {
 
  const topMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > 8.0) {
      topMovies.push(movies[i]);
    }
  }
  renderCards(topMovies, "movies-grid");
}

if (currentPage === "movies.html") {
  renderCards(movies, "movies-grid");       
}

if (currentPage === "tv-shows.html") {
  renderCards(tvShows, "tvshows-grid");    
}