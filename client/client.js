//  ___              _    _     _                 _ 
// |_ _|_ __ ___    / \  (_) __| | __ _ _ __     | |
//  | || '_ ` _ \  / _ \ | |/ _` |/ _` | '_ \ _  | |
//  | || | | | | |/ ___ \| | (_| | (_| | | | | |_| |
// |___|_| |_| |_/_/   \_\_|\__,_|\__,_|_| |_|\___/ 
//

const mainLoop = async () => {
    while (true)
    {
        await Delay(0);

        SetVehicleDensityMultiplierThisFrame(0.0);
        SetPedDensityMultiplierThisFrame(0.0);
        SetRandomVehicleDensityMultiplierThisFrame(0.0);
        SetParkedVehicleDensityMultiplierThisFrame(0.0);
        SetScenarioPedDensityMultiplierThisFrame(0.0, 0.0);
        SetGarbageTrucks(false);
        SetRandomBoats(false);
        SetCreateRandomCops(false);
        SetCreateRandomCopsNotOnScenarios(false);
        SetCreateRandomCopsOnScenarios(false);

        const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
        ClearAreaOfVehicles(x, y, z, 1000, false, false, false, false, false);
        RemoveVehiclesFromGeneratorsInArea(x - 500.0, y - 500.0, z - 500.0, x + 500.0, y + 500.0, z + 500.0); 
    };
};

setImmediate(mainLoop);

const Delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Function to Replace Citizen.Wait(0)