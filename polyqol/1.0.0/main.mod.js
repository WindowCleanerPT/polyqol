import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class SoundboardMod extends PolyMod {
    play(url) {
        const audio = new Audio(url);
        audio.volume = 1;
        audio.play();
    }

    init(pml) {
        this.pml = pml;
        pml.registerBindCategory("Soundboard");

        pml.registerKeybind("Beep", "sb_beep", "keydown", "KeyZ", null, () => {
            this.play("https://actions.google.com/sounds/v1/cartoon/beep_short.ogg");
        });

        pml.registerKeybind("Boop", "sb_boop", "keydown", "KeyX", null, () => {
            this.play("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
        });

        pml.registerKeybind("Explosion", "sb_explode", "keydown", "KeyC", null, () => {
            this.play("https://actions.google.com/sounds/v1/explosions/explosion.ogg");
        });
    }
}

// export instance as mutable
let polyMod = new SoundboardMod();
export { polyMod };
