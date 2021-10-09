function regex(){
    let data ="belajar menimba ilmu programming bersama niomic";
    let str = new RegExp('bersama');
    console.log(str.exec(data));
}
regex()