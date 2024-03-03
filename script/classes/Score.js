export default class Score {
    constructor(){
        this._currentScore = 0;
        this._record;

        this.scoreBox = document.getElementById("score__count");
        this.recordBox = document.getElementById("record__count");
    }
    update() {
        this.increaseScore();
        this.setRecord();
        this.create();
    }
    create() {
        this.getRecord();

        this.scoreBox.innerHTML = this._currentScore;
        this.recordBox.innerHTML = this._record;
    }
    increaseScore() {
        this.currentScore += 1;
    }
    setRecord() {
        if (this._currentScore > this._record) {
            localStorage.setItem("record", this._currentScore);
        } else {
            localStorage.setItem("record", this._record);
        }

    }
    getRecord() {
        this._record = localStorage.getItem("record");
    }   
    resetRecord() {
        localStorage.setItem("record", 0);
    }
    get currentScore() {
        return this._currentScore;
    }
    get record() {
        return this._record;
    }
}