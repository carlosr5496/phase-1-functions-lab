function  distanceFromHqInBlocks(x) {
    const hqStreet = 42;
    let dist;
    // if (hqStreet < x) {
    //     dist = x - hqStreet;
    //     return dist
    // }
    // else if (hqStreet > x) {
    //     dist = hqStreet - x;
    //     return dist
    // }

    // Ternary Operator version of the above if
    hqStreet < x ? dist = x - hqStreet : dist = hqStreet - x ;
    return dist;
}
function distanceFromHqInFeet(x) {
    //  const distanceInFeetFromBlock = distanceFromHqInBlocks(x);
    return  distanceFromHqInBlocks(x) * 264
} 

function distanceTravelledInFeet(start, destination ) {
    return    start < destination ? (destination - start) * 264 : (start - destination) * 264

}
function calculatesFarePrice(start, destination) {
   const totalFeet = distanceTravelledInFeet(start, destination );
   let totalCost;
   
    if (totalFeet < 400 && totalFeet >= 0) {
        totalCost = totalFeet * 0;
        return totalCost
    }
    else if (totalFeet > 2000 && totalFeet < 2500) {
        totalCost = 25
        return totalCost
    }
    
    else if (totalFeet >= 400 && totalFeet <= 2000) {
        totalCost = (totalFeet - 400) * 0.02;
        return totalCost
    }
    else {
        totalCost = "cannot travel that far";
        return totalCost
    }
}



// function calculatesFarePrice(start, destination) {
//     const totalFeet = distanceTravelledInFeet(start, destination );
//     let totalCost = totalFeet * 0.02;
    
//      if (totalFeet < 400 && totalFeet >= 0) {
//          totalCost = totalFeet * 0;
//          return totalCost
//      }
//      else if (totalFeet > 2000 && totalFeet < 2500) {
//          totalCost = 25
//          return totalCost
//      }
//      else if (totalFeet > 2500) {
//          totalCost = "cannot travel that far";
//          return totalCost
//      }
//      else {
//          return totalCost
//      }
//  }