function numOfPlatforms(arrivals, departures) {

    let maxPlatforms = 0;
    let currPlatforms = 0;
    let arrivePos = 0;
    let departPos = 0;

    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    while (arrivePos < arrivals.length && departPos < departures.length) {

        if (arrivals[arrivePos] <= departures[departPos]) {
            currPlatforms++;
            arrivePos++;
        } else {
            currPlatforms--;
            departPos++;
        }

        if (currPlatforms > maxPlatforms) maxPlatforms = currPlatforms;
    }

    return maxPlatforms;
}

function main() {
    let arrivals = [9, 8, 1, 3, 4, 19];
    let departures = [16, 11, 2, 4, 5, 24];

    console.log(numOfPlatforms(arrivals, departures));
}

main();
