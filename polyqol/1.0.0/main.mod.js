import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";
class PolyQOL extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        this.attempts = 0;
        this.overlay = null;
        
        pml.registerGlobalMixin(
            {
                type: MixinType.INSERT,
                token: `(e.repeat || (0, C.GG)(this, ff, 0, "f"),`,
                func: `console.log("attempt fired"),ActivePolyModLoader.getMod("polyqol").attempts++,ActivePolyModLoader.getMod("polyqol").updateOverlay(),`,
            }
        );
    };
    onGameLoad = () => {
        this.createOverlay();
        this.updateOverlay();
    }
    createOverlay = () => {
        this.overlay = document.createElement('div');
        this.overlay.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 14px;
            z-index: 9999;
            min-width: 180px;
            border: 2px solid #4a9eff;
        `;
        document.body.appendChild(this.overlay);
    }
    updateOverlay = () => {
        if (!this.overlay) return;
        this.overlay.innerHTML = `
            <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">Session Stats</div>
            <div>Attempts: ${this.attempts}</div>
        `;
    }
}
export let polyMod = new PolyQOL();
