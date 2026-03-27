import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

export default class SoundboardMod extends PolyMod {
    init(pml) {
        this.pml = pml;

        // get pmlapi (required for sound system)
        this.pApi = pml.getMod("pmlapi");

        // create keybind category
        pml.registerBindCategory("Soundboard");

        // KEY 1
        pml.registerKeybind("Beep", "sb_beep", "keydown", "KeyZ", null, () => {
            this.pApi.soundManager.playSound("beep", 1);
        });

        // KEY 2
        pml.registerKeybind("Boop", "sb_boop", "keydown", "KeyX", null, () => {
            this.pApi.soundManager.playSound("boop", 1);
        });

        // KEY 3
        pml.registerKeybind("Explosion", "sb_explode", "keydown", "KeyC", null, () => {
            this.pApi.soundManager.playSound("explode", 1);
        });
    }

    postInit() {
        // register sounds AFTER init (IMPORTANT)

        this.pApi.soundManager.registerSound(
            "beep",
            ["https://actions.google.com/sounds/v1/cartoon/beep_short.ogg"]
        );

        this.pApi.soundManager.registerSound(
            "boop",
            ["https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"]
        );

        this.pApi.soundManager.registerSound(
            "explode",
            ["https://actions.google.com/sounds/v1/explosions/explosion.ogg"]
        );
    }
}
