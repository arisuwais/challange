function repeat(num, char) {

    // recursive case
    if (num - 1 > 0) {
        return char + repeat(num - 1, char);
    }
    // base case
    else {
        return char;
    }
}

repeat(3, 'Hey'); // 'HeyHeyHey'