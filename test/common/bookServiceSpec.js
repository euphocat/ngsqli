describe('booksService', function () {

  var booksService;
  var $rootScope;
  var $httpBackend;

  var bookList = [
    {
      id: 'testuuid',
      title: 'The Lords Of The Rings',
      isbn: 1234567891112,
      author: {
        firstName: 'JRR',
        lastName: 'Tolkien'
      },
      category: 'fantasy,hobbits,war,dwarves,elves'
    },
    {
      id: 'testuuid',
      title: 'The Silmarillion',
      isbn: 1234578891112,
      author: {
        firstName: 'JRR',
        lastName: 'Tolkien'
      },
      category: 'fantasy,hobbits,war,dwarves,elves'
    },
    {
      id: 'testuuid',
      title: 'Game Of Thrones',
      isbn: 1234567891177,
      author: {
        firstName: 'George R',
        lastName: 'Martin'
      },
      category: 'fantasy,war'
    }
  ];

  beforeEach(module("common"));

  beforeEach(inject(function(_$rootScope_, _$httpBackend_,_bookService_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    booksService = _bookService_;
  }));

  it('should work !', function () {
    expect(true).toBe(false);
  });

  it('should fetch a list of book', function () {

    $httpBackend.expectGET('http://localhost:3000/back/books').respond(200, bookList);

    booksService.getBooks().then(function (books) {
      expect(books.data).toBeDefined();
      expect(books.data.length).toEqual(false);
      expect(books.data[0].title).toEqual('???');
    });

    $httpBackend.flush();

  });

  it('should fetch a list of author', inject(function ($timeout) {

    $httpBackend.expectGET('http://localhost:3000/back/books').respond(200, bookList);

    booksService.getUniqueAuthors().then(function (authors) {
      expect(authors).toBeDefined();
      expect(authors.length).toEqual(false);
      var isArrayHavingDuplicatedValues = true;
      expect(isArrayHavingDuplicatedValues).toBe(false);
    });

    $httpBackend.flush();
    $timeout.flush();

  }));
});