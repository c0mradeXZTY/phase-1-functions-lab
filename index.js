// Code your solution in this file!
function distanceFromHqInBlocks(pickupLoc){
    if(pickupLoc > 42){
       return pickupLoc - 42
    }else {
        return 42 - pickupLoc
    }
}

function distanceFromHqInFeet(pickupLoc){
   return distanceFromHqInBlocks(pickupLoc) * 264
}

function distanceTravelledInFeet(start, end){
     const blocksNo = Math.abs(start - end);
     return blocksNo * 264
}

function calculatesFarePrice(start, destination){
     const distance = distanceTravelledInFeet(start, destination);
     if(distance <= 400){
        return 0
     }else if(distance > 400 && distance <= 2000){
         return (distance - 400) * 0.02
     }else if(distance > 2000 && distance <= 2500){
        return 25
     }else {
        return 'cannot travel that far'
     }
}
 


/*First, Scuber's executives want to ensure that Scuber's headquarters is near its
customers. They would like you to write a function, `distanceFromHqInBlocks`,
that takes in a pickup location for a passenger, and returns the _number of
blocks_ from Scuber headquarters on 42nd Street. For example, if the pickup
location is `50` (i.e., 50th Street), the return value should be `8`.*/