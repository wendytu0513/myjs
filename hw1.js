function checknum(num) {
    let isnum = false;

    if ((num == 1) || (num == 0)) {
        return isnum;
    } else {
        for (let n = 2; n < num; n++) {
            if (num % n == 0) return isnum;
        }

        isnum = true;
        return isnum;
    }

}