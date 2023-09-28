const TakePhoto = {
    cameraMode: '',
    filer: '',
    burst: 0,
};

const Story = {
    createStory: function() {
        console.log("Story was created");
    },
};

class Instagram {
    constructor(cameraMode, filer, burst) {
        this.cameraMode = cameraMode;
        this.filer = filer;
        this.burst = burst;
    }
}

class Youtube {
    constructor(cameraMode, filer, burst, short) {
        this.cameraMode = cameraMode;
        this.filer = filer;
        this.burst = burst;
        this.short = short;
    }

    createStory() {
        console.log("Story was created");
    }
}
