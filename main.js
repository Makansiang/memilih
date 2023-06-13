const p1 = document.querySelector('#pilihan1');
const p2 = document.querySelector('#pilihan2');
const p3 = document.querySelector('#pilihan3');
const p4 = document.querySelector('#pilihan4');
const mulai = document.querySelector('#btn1');
const selesai = document.querySelector('#btn2');

const fr = document.querySelector('#form')
mulai.addEventListener('click', ()=>{
    if(p1.checked){
        fr.style.display = "none";
        mulai.style.display ="none";
        selesai.style.display ="none";
        document.querySelector('.jawaban1').style.display="block";
        document.querySelector('.icon').style.display="block";
    }
    else if(p2.checked){
        fr.style.display = "none";
        mulai.style.display ="none";
        selesai.style.display ="none";
        document.querySelector('.jawaban2').style.display="block";
        document.querySelector('.icon').style.display="block";
    }
    else if(p3.checked){
        fr.style.display = "none";
        mulai.style.display ="none";
        selesai.style.display ="none";
        document.querySelector('.jawaban3').style.display="block";
        document.querySelector('.icon').style.display="block";
    }
    else if(p4.checked){
        fr.style.display = "none";
        mulai.style.display ="none";
        selesai.style.display ="none";
        document.querySelector('.jawaban4').style.display="block";
        document.querySelector('.icon').style.display="block";
    }else{
        alert('coba pilih dong');
    }
})
