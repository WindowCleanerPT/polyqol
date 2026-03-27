import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class SoundboardMod extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        pml.registerBindCategory("Soundboard");
        pml.registerKeybind("Beep", "sb_beep", "keydown", "KeyZ", null, () => {
            const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/beep_short.ogg");
            audio.play();
        });
    }
}

export let polyMod = new SoundboardMod();
