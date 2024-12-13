export default function GlobalPlugin(scene) {
    console.log("Global plugin added to:", scene.name);
    // Add global plugin behavior here
    scene.globalData = "Global Plugin Activated";
}
