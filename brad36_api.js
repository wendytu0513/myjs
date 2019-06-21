function clone(source){
    if (source ==null || typeof(source) != 'object') 
    return null;

    let target = new Object();
    for (let attr in source){
        if (typeof source[attr] != 'object'){
            target[attr] = source[attr];
        }else{
            target[attr] = clone(source[attr]);
        }
        
    }
    return target;
}




Date.prototype.getcheak = function(){
    let w = this.getDay();
    let ws = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    return ws[w];
}
