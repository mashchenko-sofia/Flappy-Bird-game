export default class PhysicsEngine {
    constructor(params) {
        this._config = params.config

        this.fallStartSpeed = this._config.BIRD_FALL_START_SPEED,
        this.fallDelay = this._config.BIRD_FALL_DELAY,

        this.speed = this.fallDelay;
    }
    update(entity) {
        this.speed += this.fallStartSpeed;
        return entity.y += this.speed;
    }
    resetSpeed() {
        this.speed = this.fallDelay;
    }
}