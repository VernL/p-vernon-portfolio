---
title: "The Travel Shelf"
date: "2018-01-30"
link: "https://www.fabricateinc.com/barcodes"
---

In fall 2017, I joined the [LAB12](https://www.pitonneux.org/lab12/) self directed learning program. The program's main focus was to join a team and build a project. Along with a tone of programming experience, I learned and applied agile development workflows and used github to effectively collaborate with my team. LAB12 was a tone of fun and I highly recommend it to anyone looking to level up their coding skills. Just be prepared to put in a tone to get your team across the finish line.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180203214520580.png)

[The Travel Shelf](www.thetravelshelf.com) was born out of the LAB12 program. It's an open source project aiming to promote independent bookstores around the world. I worked on every aspect of the project including coding for the frontend and backend, working on the design, creating user stories and managing the team. We created a single page application written in JavaScript using React with Redux on the frontend and a Node/Express backend. An overview of the project is shown in the diagram below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180203132819961.png)

Bookstore data was modeled using Mongoose and stored in a MongoDB database hosted on [mlab](https://mlab.com/). The backend API exposes a series of endpoints to communicate with the client:

```javascript
const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function (req, res, next) {
  db.Bookstore.find()
    .then(stores => res.json(stores))
    .catch(err => console.log(err))
})

router.get('/:name', function (req, res, next) {
  db.Bookstore.findOne({name: req.params.name})
    .then(store => res.json(store))
    .catch(err => console.log(err))
})

router.post('/', function (req, res, next) {
  let newStore = new db.Bookstore({...req.body})
  res.sendStatus(200)
  newStore.save()
    .then(() => console.log('Store successfully added to database'))
    .catch(err => console.log(err))
})

module.exports = router
```

On the client side, the redux thunk middleware was ysed to dispatch asynchronous actions and load data into the Redux store:

```javascript
import * as actionTypes from './actionTypes'

export const setStores = (stores) => {
  return {
    type: actionTypes.SET_STORES,
    stores: stores
  }
}

export const setSelectedStore = (store) => {
  return {
    type: actionTypes.SET_SELECTED_STORE,
    store: store
  }
}

export const selectStore = (name) => {
  return dispatch => {
    fetch('/api/bookstores/' + name)
      .then(res => {
        if (!res.ok) {
          throw Error(res.status)
        } else {
          return res.json()
        }
      })
      .then(store => dispatch(setSelectedStore(store)))
      .catch(error => console.log('Error Fetching Stores', error))
  }
}

export const fetchStores = () => {
  return dispatch => {
    fetch('/api/bookstores')
      .then(res => {
        if (!res.ok) {
          throw Error(res.status)
        } else {
          return res.json()
        }
      })
      .then(stores => dispatch(setStores(stores)))
      .catch(error => console.log('Error Fetching Stores', error))
  }
}
```

From the Redux store, data is shared across the application and used to render components dynamically. The code snippet below shows the process of retrieving and mapping through data to generate cards on the index page:

```javascript
import ...

class StoreIndex extends Component {

  storeSelectHandler = (name) => {
    this.props.history.push({pathname: this.props.match.url + '/' + name})
  }

  render () {
    let stores = null

    if(this.props.stores){
      stores =  this.props.stores.map(store => (
            <StoreCard
              key={store.name}
              {...store}
              clicked={() => this.storeSelectHandler(store.name)}
            />
        )
      )
    }

    return (
        <section>
          <div className='row justify-content-center'>
            <div className='col d-flex flex-wrap justify-content-around'>
              {stores}
            </div>
            </div>
        </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(mapStateToProps) (StoreIndex)
```

This is what it looks like in the browser:

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180203234532243.png)

The repository for the project is available [here](https://github.com/RichardLitt/the-travel-shelf). It's an open source project so feel free to browse, fork or contribute!
