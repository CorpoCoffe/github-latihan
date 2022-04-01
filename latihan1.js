// let number1=40;
// let number2=22;
// console.log(number1%number2);

// let cuaca="gerimis";

// if(cuaca=="hujan" || cuaca=="gerimis"){
//     console.log('gajadi keluar');
// }else{
//     console.log('gas meluncur');
// }
// let warnaSepatu=prompt("Masukkan warna kesukaan :");

// let warnaSepatu="ungu";

document.querySelector('#btnKirim').onclick=function(){
    
    // alert('tombolnya sudah diklik');
    let warnaSepatu=document.getElementById('warnaSepatu').value;
    console.log(warnaSepatu);

    if(warnaSepatu=="biru"){
        console.log("beli");
    }else if(warnaSepatu=="hijau"){
        console.log("beli deh");
    }else if(warnaSepatu=="merah"){
        console.log("boleh deh");
    }else{
        console.log("nggak jadi deh, warnanya gaada yang saya suka");
    }
}
// document.getElementById("frm1").submit();
    

