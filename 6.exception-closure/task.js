// Задача 1 - Форматтер чисел
function parseCount(count) {
       
    let result = Number.parseInt(count);
    if(isNaN(result)){        
        let error = new Error("Невалидное значение");
        throw error;    
    }
    
    return result;

}

function validateCount(count) {

    try{
        let result = parseCount(count);
        return result;
    } catch(error){
        return error;
    }    
    
}

// Задача 2 - Треугольник
class Triangle{
    constructor(a, b, c){
        if((a + b < c) || (a + c < b) || (b + c < a)){
            let error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }

        this.a = a;
        this.b = b;
        this.c = c; 
    }

    getPerimeter(){        
        let result = this.a + this.b + this.c;
        return result;
    }

    getArea(){
        let p = this.getPerimeter()/2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        s = parseFloat(s.toFixed(3));
        return s;
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch(error) {
       return {
            getPerimeter: function() {return "Ошибка! Треугольник не существует"}, 
            getArea: function() {return "Ошибка! Треугольник не существует"}
        } 
    }
}