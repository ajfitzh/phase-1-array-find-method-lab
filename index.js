function superbowlWin(record){
    function isWin(record){
        return record.result === 'W';
    }


    let result = undefined; 
    for(let item of record){
        if(isWin(item) === true){
            result = item.year;
            break;
        }
    }
    return result;
}
