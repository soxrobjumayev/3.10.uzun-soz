var pElement = document.createElement('p')
pElement.textContent = "Hurmatli 4-kurs sirtqi talabalari 2022-yil 23-maydan bahorgi semestr yakuniy nazoratlari boshlanadi, 1 hafta davom etadi. oflayn. bu haqida avvalroq guruh sardorlariga ma'lum qilingan edi. nazorat jadvallari guruh sardorlariga taqdim etiladi."
document.body.appendChild(pElement)

var btnEl = document.getElementById('btn')
var spanEl = document.getElementById('span')
var spapnEl = document.getElementById('span1')

btnEl.addEventListener('click', () => {
    spanEl.textContent = spapnEl.style.color = ('red')
})



