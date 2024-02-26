let QA = document.querySelectorAll('#QA')
// let Questionslist = document.querySelectorAll('.Questionslist')
// console.log(QA)

QA.forEach(function (v, index) {
    //  console.log(v)    
    v.addEventListener('click', function () {
        console.log(index)
        v.nextElementSibling.classList.toggle('active')

        // QA.forEach(function(el,i){
        //     if(i==index){
        //         el.nextElementSibling.classList.remove('active')
        //     }
        // });
    });
});