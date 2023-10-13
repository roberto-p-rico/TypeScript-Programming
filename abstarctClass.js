class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }

    getReelTime() {
        // some complex calculation
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.burst = burst;
    }

    getSepia() {
        console.log("Sepia");
    }
}

const RR = new Instagram("test", "Test", 3);

RR.getReelTime();
