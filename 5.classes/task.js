// Задача 1 - Печатное издание
class PrintEditionItem{
    
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null
    }  
    
    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        let newState = state;
        if(state < 0) {
            newState = 0;
        } else if(state > 100) {
            newState = 100;
        }
        
        this._state = newState;
    }
    
    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2 - Библиотека
class Library{
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = null;
        for(let book of this.books){            
            if(book[type] === value){
                result = book;            
            }
        }
        return result;
    }

    giveBookByName(bookName){
        let book = this.findBookBy("name",bookName);               
        if(book != null){
            let pos = this.books.indexOf(book);
            this.books.splice(pos, 1);
        }
        debugger;
        return book;       
    }
}

// // Задача 3 - Студент
// class Student{
//     constructor(name, gender, age){
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//     }

//     setSubject(subjectName){
//         this.subject = subjectName;
//     }
    
//     addMark(mark, subjectName){
//         if(this[subjectName].makrs === undefined){
//             this[subjectName].mark = [mark];
//         } else {
//             this[subjectName].marks.push(mark);
//         }
//     }
    
//     //addMarks(...makrs){
//     //    for(let mark of makrs){
//     //        this.addMark(mark);
//     //    }

//     }

//     getAverage(){
//         let sum = 0;
//         for(let mark of this.mark){
//             sum += mark;
//         }
        
//         count = this.marks.lenght;
//         let averageMark = 0;
//         if(count != 0) {
//             averageMark = sum / count;
//         }
//         return averageMark;
//     }

//     exclude(reason){
//         delete this.subject;
//         delete this.marks;

//         this.excluded = reason;
//     }

// }