/*-------------------- CALCULETE ----------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('#btn_for_calc');
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const x_1 = document.querySelector('#x_1')
    const x_2 = document.querySelector('#x_2')
    const massege_in_calc = document.querySelector('#massege_in_calc');

    button.onmousedown = function (){
        button.style.opacity = 0.7;
    }

    button.onmouseup = function (){
        button.style.opacity = 1;
        let a_vel = a.value;
        let b_vel = b.value;
        let c_vel = c.value;
        
        if (!a_vel | !b_vel | !c_vel) {
            massege_in_calc.style.display = 'block';
            massege_in_calc.innerHTML = 'Ведіть числове значення<br>Imput numeric';
            return

        } else if (!(a_vel*b_vel*c_vel)) {
            massege_in_calc.style.display = 'block';
            massege_in_calc.innerHTML = 'Ведіть числове значення<br>Imput numeric';
            return

        } else {
            massege_in_calc.style.display = 'none';
            massege_in_calc.innerHTML = ' ';

            let desk = (b_vel*b_vel) + (4*a_vel*c_vel);
            let dk = Math.sqrt(desk);
            let a2 = 2*a_vel;
            let x1 = Math.floor((-b_vel+dk)/a2);
            let x2 = Math.floor((-b_vel-dk)/a2);
            let x = Math.floor(-b_vel/a2);

            if (desk<0 || a2===0){
                x_1.innerHTML = 'NON';
                x_2.innerHTML = 'NON';
            }else if (desk===0){
                x_1.innerHTML = x;
                x_2.innerHTML = x;
            }else if (desk>0){
                x_1.innerHTML = x1;
                x_2.innerHTML = x2;
            }
        }
    }
});