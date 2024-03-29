//驗證身分證
//(1)10碼
//(2)第1碼為英文
//(3)第2碼為1或2
//(4)

function checktwid(id) {
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;
    //(1)正規表式法,外面帶參數 
    //(2)$ : 符合輸入字串的結束位置 
    //(3)g : 全域搜尋
    //(4)i : 不分大小寫
    let result = id.match(regex);
    if (result != null) {
        let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c12 = id.substr(0, 1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6
            + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }
    return ret
}