'use strict';

const Hapi = require('hapi');
const uuid = require('uuid');

let books = [
  {
    id: uuid.v4(),
    title: 'The Lords Of The Rings',
    isbn: 1234567891112,
    author: {
      firstName: 'JRR',
      lastName: 'Tolkien'
    },
    category: 'fantasy,hobbits,war,dwarves,elves'
  },
  {
    id: uuid.v4(),
    title: 'The Silmarillion',
    isbn: 1234578891112,
    author: {
      firstName: 'JRR',
      lastName: 'Tolkien'
    },
    category: 'fantasy,hobbits,war,dwarves,elves'
  },
  {
    id: uuid.v4(),
    title: 'Game Of Thrones',
    isbn: 1234567891177,
    author: {
      firstName: 'George R',
      lastName: 'Martin'
    },
    category: 'fantasy,war'
  }
];

const server = new Hapi.Server();
server.connection({ port: 3000, routes : { cors: true }});

server.start(err => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

server.route({
  method: 'GET',
  path: '/back/books',
  handler: function (request, reply) {
      reply(books);
  }
});

server.route({
  method: 'GET',
  path: '/back/books/{id}',
  handler: function (request, reply) {
      const id = request.params.id;
      
      reply(books.find(book => book.id === id));
  }
});

server.route({
  method: 'DELETE',
  path: '/back/books/{id}',
  handler: function (request, reply) {
      const id = request.params.id;
      const bookIndex = books.findIndex(book => book.id === id);

      books.splice(bookIndex, 1);
      reply(true);
  }
});

server.route({
  method: 'PUT',
  path: '/back/books/{id}',
  handler: function (request, reply) {
    const id = request.params.id;
    const bookIndex = books.findIndex(book => book.id === id);

    books[bookIndex] = request.payload;
    reply(true);
  }
});

server.route({
  method: 'POST',
  path: '/back/books',
  handler: function (request, reply) {
    let book = request.payload;
    book.id = uuid.v4();
    books.push(book);
    reply(true);
  }
});