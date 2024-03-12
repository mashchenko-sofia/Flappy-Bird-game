export default class Score {
    constructor(params){
        this.params = params;
        this._currentScore = 0;
        this._record;
        // console.log(this.params.scoreBox, this.params.recordBox);
        this.scoreBox = this.params.scoreBox
        this.recordBox = this.params.recordBox
    }
    update() {
        // this.increaseScore();
        this.setRecord();
        this.create();
    }
    create() {
        this.getRecord();

        this.scoreBox.innerHTML = this._currentScore;
        this.recordBox.innerHTML = this._record;
    }
    increaseScore() {
        this._currentScore += 1;
        this.update()
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