function createAnswer(n = 3) {
    let num = [];
    for (let i = 0; i < 10; i++) num[i] = i;
    for (let i = num.length - 1; i > 0; i--) {   //0~5  5,4,3,2,1隨機排序
        let rand = parseInt(Math.random() * (i + 1));
        [num[i], num[rand]] = [num[rand], num[i]]

    }

    let ret = '';
    for (let i = 0; i < n; i++) ret += num[i];
    return ret;
}


function checkAB(ans, gus) {
    let a = 0, b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) == ans.charAt(i)) {
            a++;
        } else if (ans.indexOf(gus.charAt(i))) {
            b++;
        }
    }
    return a + 'A' + b + 'B';
}