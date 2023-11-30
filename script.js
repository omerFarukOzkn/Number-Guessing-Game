const input = document.getElementById('input')
const btn = document.querySelector('button')
const select = document.getElementById('zorluk')
const p = document.querySelector('p')


input.disabled = true
btn.disabled = true
btn.textContent = 'Bir zorluk seç'


let random
select.addEventListener('change', (e) => {
    let selectValue = Number(e.target.value)
    random = Math.floor(Math.random() * selectValue) + 1

    if(random != undefined){
        btn.disabled = false
        input.disabled = false
        btn.textContent = 'Tahmin Et!'
    }
    console.log(random)
})

input.addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
        tahminEt()
    }
})


let kacKere = 0
function tahminEt(){
    let value = Number(input.value)

    if(kacKere < 4){
        input.value = ''
        if(value == random){
            p.textContent = `Doğru bildin ${kacKere} kere denedin`
            p.classList.remove('text-danger')
            p.classList.add('text-success')
        }else if(value < random){
            kacKere++
            p.textContent = `Daha büyük bir sayı gir ${4 - kacKere - 1} hakkın kaldı`
            p.classList.add('text-danger')
            clearMessage()
        }else if(value > random){
            kacKere++
            p.textContent = `Daha küçük bir sayı gir ${4 - kacKere - 1} hakkın kaldı`
            p.classList.add('text-danger')
            clearMessage()
        }else{
            p.textContent = 'Hatalı bir tahminde bulundunuz'
            clearMessage()
        }
    }

    if(kacKere == 3){
        p.textContent = 'Oyunu kaybettin'
        input.disabled = true
        btn.disabled = true
    }
}


function clearMessage(){
    setTimeout(function(){
        p.textContent = ''
    }, 3000)
}


// setTimeout

// setTimeout(() => {
//     console.log('zaman ayarlı mesaj')
// },4000)

// const myTimer = setTimeout(timer, 4000)

// function timer(){
//     console.log('ben ikinci yöntemim')
// }

//setInterval

// const myTimer = setInterval(timer, 2000)
// function timer(){
//     console.log('setInterval fonksiyonu')
// }

// setInterval(() => console.log('merhaba'), 1000)

// let interval = setInterval(() => {
//     console.log('merhaba')
// }, 1000)


// setTimeout(() => {
//     clearInterval(interval)
//     console.log('interval durduruldu')
// }, 10000)