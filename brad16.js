function sayYa5(...names){             //不定個數的參數傳遞，三個點加上參數名
    // document.write(typeof names + "  " + Array.isArray(names) + "<br>");
    for(let name of names){
        document.write(`Ya! ${name} <br>`);
    }
}

// function checkTWID(id){
//     let resault = true;
//     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if(id.length == 10){  //檢查總長度是否為10
//         let c1 = id.charAt(0);  //抽出第一個字母
//         if(letters.indexOf(c1)>=0){  //看第一個字母是否為大寫的英文字母，如果不是，則會顯示-1
//             let c2 = id.charAt(1);
//             if()
//         }
//     }else{
//         resault = false;
//     }
//     return resault;
// }


//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F
// function checkTWID(id){   //檢查身分證字號，哪裡有問題??寫錯了
//     let resault = false;
//     let regex = /^[A-Z][12][0-9]{8}$/;    //regex正規表示法;^開始符號;用[]表示範圍區間;$代表後面沒了，不可以再有字
//                                  //[][]表示第一個字母和第二個字母的規範;[12]表示數字1和2;{8}代表前面的[]會出現8次
//     let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';  //看維基的中華民國身分證編號規則
//     if(id.match(regex) != null){
//         let c1 = id.charAt(0);
//         let n12 = letters.indexOf(c1) + 10;   //A是10，所以一律加10
//         let n1 = parseInt(n12 / 10);
//         let n2 = n12 % 10;
//         let n3 = parseInt(id.substr(2,1));
//         let n4 = parseInt(id.substr(3,1));
//         let n5 = parseInt(id.substr(4,1));
//         let n6 = parseInt(id.substr(5,1));
//         let n7 = parseInt(id.substr(6,1));
//         let n8 = parseInt(id.substr(7,1));
//         let n9 = parseInt(id.substr(8,1));
//         let n10 = parseInt(id.substr(9,1));
//         let n11 = parseInt(id.substr(10,1));
//         let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 +
//             n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
//         ret = sum % 10 == 0;
//     }
//     return resault;
// }

function checkTWID(id){
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    if (id.match(regex) != null){
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));
        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 +
            n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
        ret = sum % 10 == 0;
    }
    return ret;
}

function checkPHONE(call){   //檢查行動電話
    let resault = false;
    let regex = /^09[0-9]{2}-[0-9]{6}$/;
    if(call.match(regex) != null){
        resault = true;
    }
    return resault;
}