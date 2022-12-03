/*class Alarm{
    constructor(time, timeAction,timeId){                
        this.id = timeId;
        this.time = time;
        this.callback = timeAction;
        this.timeoutId = undefined;
    }
}*/

class AlarmClock{
    constructor (){ // выделяет память для объекта        
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, timeAction, timeId){ 
        // добавляет новый звонок в коллекцию существующих
        if (!timeId){
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        
        let alarm = this.alarmCollection.find(item => item.id == timeId);
        if (alarm) {
            console.log('Будильник с таким id уже существует');
            return;
        }

        let newAlarm = {'id': timeId, 'time': time, 'callback': timeAction};//new Alarm(time, timeAction, timeId);
        this.alarmCollection.push(newAlarm);        
    }

    removeClock(id){ 
        // удаляет определенный звонок
        // TO DO ***
        let alarm = this.alarmCollection.find( item => item.id == id)        
        
        if (alarm) {
            debugger;
            let pos = this.alarmCollection.indexOf(alarm);
            this.alarmCollection.splice(pos,1);
        }
        
    }

    getCurrentFormattedTime(){ 
        // возвращает текущее время в строковом формате HH:MM
        const curTime = new Date();
        const curHours = curTime.getHours();
        const curMinutes = curTime.getMinutes();
        
        const strCurHours = curHours < 10 ? `0${curHours}`: `${curHours}`;
        const strCurMinutes = curMinutes < 10 ? `0${curMinutes}`: `${curMinutes}`;        

        return `${strCurHours}:${strCurMinutes}`;
        
        //Sat Dec 03 2022 14:10:49 GMT+0300 (Москва, стандартное время)
        //2022-12-03T11:11:59.072Z
        //return curTime.toISOString().slice(11,16);
    }

    checkClock(alarm){
        if (alarm.time == this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }

    start(){ 
        // запускает все звонки
        if (!this.timerId) {
            this.timerId = setInterval(() => {this.alarmCollection.map(item => this.checkClock(item))});
        }
    }

    stop(){ 
        // останавливает выполнение всех звонков
        if (this.timerId) { // если не = undefined/null
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarm(){ 
        //печатае все звонки        
        console.log('Печать всех будильников в количестве: '+ this.alarmCollection.length);
        for (let alarm of this.alarmCollection) {
            console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`);
        }
    }

    clearAlarms(){ 
        //удаляет все звонки
        this.alarmCollection = [];
    }

}

let clock = new AlarmClock();

// clock.addClock("16:45", f => f, 1);
// clock.addClock("16:45", f => f, 2);
// clock.addClock("16:45", f => f, 3);

// clock.printAlarm();