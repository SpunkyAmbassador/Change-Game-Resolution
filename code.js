import { RPM } from "../path.js"

/**
 * This plugin changes the resolution of the game.
 * It reads the saved resolution from config.json and sets the window size.
 * It also allows to set the resolution and full screen mode.
 */

// Plugin name
const pluginName = "Change Game Resolution";

// Path to config.json
const configPath = RPM.Common.Paths.PLUGINS + pluginName + "/config.json";

// Require the file system module
const fs = require('fs');

// In first playthrough there is no config file. I used try catch to avoid crashing.
try {
    // Read the screen configuration from config.json
    const screenConfig = require(configPath)

    /**
     * Initialize the plugin by setting the window size to the saved size.
     * Sleep function is used to allow for the game to load.
     */
    async function init() {
        await sleep(100);
        setWindowSize(screenConfig["width"], screenConfig["height"], screenConfig["fullscreen"]);
    }

    /**
     * Sleep function to delay the execution of the code.
     * @param {number} ms - The time to sleep in milliseconds.
     * @returns {Promise} A promise that resolves after the specified time.
     */
    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    // Sleep function to allow for the game to load
    init()

} catch (e) {
    console.log(e);
}

/**
 * Set the window size to the specified width, height and full screen mode.
 * @param {number} width - The width of the window.
 * @param {number} height - The height of the window.
 * @param {boolean} fullscreen - Indicates if the window is in full screen mode.
 */
function setWindowSize(width, height, fullscreen) {
    // Running function two times because of a bug where screen size becomes less than game size which leads to game getting cropped
    RPM.Datas.Systems.updateWindowSize(width, height, fullscreen);
    RPM.Datas.Systems.updateWindowSize(width, height, fullscreen);
    // Save the new screen configuration to config.json
    fs.writeFile(configPath, JSON.stringify({ width: width, height: height, fullscreen: fullscreen }), (e) => {
        if (e) console.log(e);
    })
}

/**
 * Set the desired screen resolution.
 * @param {number} Width - The width of the screen.
 * @param {number} Height - The height of the screen.
 */
RPM.Manager.Plugins.registerCommand(pluginName, "Set Resolution", (Width, Height) => {
    setWindowSize(Width, Height, false);
});

/**
 * Set the game to full screen mode.
 */
RPM.Manager.Plugins.registerCommand(pluginName, "Set Full Screen", () => {
    setWindowSize(0, 0, true);
});

