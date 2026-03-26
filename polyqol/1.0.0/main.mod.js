import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class PolyQOL extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        this.attempts = 0;
        this.finishes = 0;
        this.overlay = null;
    }

    onGameLoad = () => {
        // Get the car object when game loads
        const car = this.pml.car; // or however the mod API exposes the car
        
        if (car) {
            this.trackRun(car);
        }
    }

    trackRun = (car) => {
        // Increment attempts when a new run starts
        car.addResetCallback(() => {
            this.attempts++;
            this.updateOverlay();
        });

        // Increment finishes when run completes
        car.addFinishCallback((finishedCar) => {
            this.finishes++;
            this.updateOverlay();
        });

        // Initial state
        this.attempts++;
        this.updateOverlay();
    }

    updateOverlay = () => {
        if (!this.overlay) {
            this.createOverlay();
        }

        const finishRate = this.attempts > 0 
            ? ((this.finishes / this.attempts) * 100).toFixed(1) 
            : 0;

        this.overlay.innerHTML = `
            <div style="font-weight: bold; font-size: 16px;">Session Stats</div>
            <div>Attempts: ${this.attempts}</div>
            <div>Finishes: ${this.finishes}</div>
            <div>Success Rate: ${finishRate}%</div>
        `;
    }

    createOverlay = () => {
        this.overlay = document.createElement('div');
        this.overlay.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            z-index: 9999;
            min-width: 150px;
        `;
        document.body.appendChild(this.overlay);
    }
}

export let polyMod = new PolyQOL();
