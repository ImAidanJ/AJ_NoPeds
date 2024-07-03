//  ___              _    _     _                 _ 
// |_ _|_ __ ___    / \  (_) __| | __ _ _ __     | |
//  | || '_ ` _ \  / _ \ | |/ _` |/ _` | '_ \ _  | |
//  | || | | | | |/ ___ \| | (_| | (_| | | | | |_| |
// |___|_| |_| |_/_/   \_\_|\__,_|\__,_|_| |_|\___/ 
// 

const Function = {
    Prefix: "^4[AJ:NoPeds]^0",
    ResourceName: "AJ_NoPeds",
    Version: "FINAL"
};

const Debug = { Enabled: false };

// Variables
const currentResource = GetCurrentResourceName();

// Check Name Function
const checkName = () => {
    if (currentResource !== Function.ResourceName)
    {
        console.log("^1[ERROR]^7 Incorrect resource name detected. Shutting down the resource...");
        console.log(`^1[ERROR]^7 Resource must be named ${currentResource} to work.`);
        StopResource(currentResource);
        return;
    };
};

// Debug Check
const debugCheck = () => {
    if (Debug.Enabled)
    {
        console.log(`^1[WARNING]^7 ${currentResource} is currently in debug mode.`);
    };
};

// Run Checks
checkName();
debugCheck();


// Credits
// Don't be greedy.. Leave my Credits!!
console.log(`${Function.Prefix} ${Function.ResourceName} by ImAidanJ`);
console.log(`${Function.Prefix} Current Version: ${Function.Version}`);