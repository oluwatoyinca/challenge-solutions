function computeClosestToZero(numbers) {
    // Calculate closest number to zero. If both negative and positive, return positive value. If array null or empty, return 0
    if (numbers.length == 0) return 0

    let closest = numbers[0]
    for(x of numbers) {
        if (Math.abs(x) < Math.abs(closest)) closest = x
        else if ((Math.abs(x) == Math.abs(closest)) && x > 0) closest = x
    }
    return closest;
}
