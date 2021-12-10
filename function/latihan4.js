function nilai(n) {
    if (n === 0) return 1;
    console.log(n);
    return n * nilai(n-1);
}

nilai(10);