const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries =batteryBatches.reduce(addition,0)

function addition(a,b){
    return a+b
}
