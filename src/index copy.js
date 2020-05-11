// const express = require('express');

// const app = express();

// app.get('/',  (request, response) => {
//   return response.send('Hello World')
// })

// app.listen(3333);

const express = require('express');
const app = express();

app.use(express.json());

//const port = 3000

// app.get('/', (req, res) => res.send('Hello 999 World!'))
// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

/*
app.get('/seatings',  (request, response) => {
  return response.json({
    id: 01,
    seaterId: 0001,
    seatersTogether: 40,
    lengthInMinutes: 60,
    percentageAccomplished: 1,
    startedAt: new Date(),
    geolocation: {
      lat: 12312312,
      long: 5675675435
    }
  })
})
*/
// PUT: alterar. DELETE: deletar. POST: gravar. GET: listar.

// app.get('/users/:id',  (request, response) => {
app.post('/users',  (request, response) => {
  const body = request.body
  console.log(body)

  //http://localhost:3000/users/33

  //const params = request.query
  //http://localhost:3000/users?name=Diego&idade=25

  //const params = request.params
  //  console.log(params)

  // const body = request.body
  // console.log(body)

  return response.json({
  
    id: 0,
    accountCreatedAt: new Date(),
    gender: 'male',
    username: 'Paulo Pamplona',
    bio: 'I\'m a web developer who practice Vipassana meditation and lives in Brazil.',
    image: "https://morganfillman.space/200/200",

    meditation: {
      seatings: [ 12312, 12354, 54345, 3454345 ],
      currentLength: 0,
      favorites: [ 'vipassana', 'anapana', 'transcendental', 'dynamic', 'terço bisantino' ],
    },

    dating: {
      isAllowed: true,
      hasActiveMatch: false,
      reported: {
        hasBadReviews: false,
        badReviews: []
      }
    },

    places: {
      favoritePlaces: [ 123123, 123123, 123123 ],
      palcesCheckedIn: [ 12312, 123123, 123123, 55545, 3312 ]
    },

    shopping: {
      favoriteStores: [],
      favoriteProducts: []
    },

    veganFood: {
      favoritesRestaurants: [],
      favoriteFoods: [],
      orderHistory: [ 212323, 123123, 1231231, 12312312, 12312312 ]
    },

    news: {
      influencersFollowing: [ 123123, 123123, 123123, 123123 ],
      followers: [ 12123, 123123, 123123, 123123 ],
      likedContents: [ 234234, 234234, 234234, 234234 ],
      ownPosts: [ 123123, 123123, 123123, 123123 ],
      likesGotten: [ 213123, 12312344, 213123 ]
    }
  })
})

app.listen(3000)
