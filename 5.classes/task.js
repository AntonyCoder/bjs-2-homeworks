class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state *= 1.5;
    }

    set state(stateBook) {
        if (stateBook < 0){
            this._state = 0;
        } else if (stateBook > 100){
            this._state = 100;
        } else {
            this._state = stateBook
        }
    }

    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor (author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor (author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor (author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor (author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

   findBookBy(type, value) {
    let currentBook = this.books.find((item) => item[type] === value);
    if (currentBook === undefined){
        return null;
    } else {
        return currentBook;
    }
   }

   giveBookByName(bookName) {
    let necessaryBook = this.books.find((book) => book.name === bookName);
    if (necessaryBook === undefined){
        return null;
    } else {
        this.books.splice(necessaryBook, 1);
        return necessaryBook;
    }
   }

}


class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject){
        if (mark < 2 || mark > 5){
            return;
        }

        if (!this.marks[subject]){
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
       
    }

    getAverageBySubject(subject){
        if (!this.marks.hasOwnProperty(subject)){
            return 0;
        } else {
            let sum = this.marks[subject].reduce((acc, item, index, arr) => {
                acc += item;
                if(index === arr.length - 1){
                    return acc/arr.length;
                }
                return acc;
            }, 0)
            return sum;
        }
    }

    getAverage(){
        let average = Object.keys(this.marks).reduce((acc, item, index, arr) => {
            acc += this.getAverageBySubject(item);
            if(index === arr.length - 1){
                return acc/arr.length;
            }
            return acc;
        },0)
        return average;
    }

}