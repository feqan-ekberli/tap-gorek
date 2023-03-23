const dogruCavab = ['B', 'A', 'B', 'D', 'A'];
const sonuc = document.querySelector('.result');

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let puan = 0;

    const kulaniciCavab = [form.s1.value, form.s2.value, form.s3.value, form.s4.value, form.s5.value,];

    kulaniciCavab.forEach((cavab, index) => {

        if (cavab == dogruCavab[index]) {
            puan +=20;
        }
    });

    sonuc.querySelector('span').textContent = `${puan}%`;
    sonuc.classList.remove('d-none');

    window.scrollTo(0, 0);
    

    let tamponpuan =0;
    const animasyon =setInterval(() => {

        sonuc.querySelector('span').textContent=`${tamponpuan}%`;
        if(tamponpuan===puan){
            clearInterval(animasyon);
        }else{
            tamponpuan++;
        }
    },10);


});
