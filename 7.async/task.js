class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback){
        if(!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.some(item => item.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true,
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(callTime => {
            return callTime.time !== time;
        });
    }

    getCurrentFormattedTime(){
       const currentTime = new Date();
       let hours = currentTime.getHours();
       let minutes = currentTime.getMinutes();

       if (hours < 10) {
        hours = '0' + hours;
       }
       if (minutes < 10) {
        minutes = '0' + minutes;
       }
       let res = `${hours}:${minutes}`;
       return res;
    }

    start() {
        if (this.intervalId) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((item) => {
                    if ((this.getCurrentFormattedTime() === item.time) && item.canCall == true) {
                        item.canCall = false;
                        item.callback();
                    }
                });
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}