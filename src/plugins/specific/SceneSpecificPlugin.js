export default function SceneSpecificPlugin(scene) {
    console.log("Scene-specific plugin added to:", scene.name);
    // Add scene-specific plugin behavior here
    scene.specificData = "Scene-Specific Plugin Activated";
}
