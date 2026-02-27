const story = {
    "start":{
        txt: "На улице ранее утро. Кругом темень, но видно как небо слегка светелеет. Возможно, так кажется из-за ярких звёз, что освещали небо, когда я ехал. Ветер дует холодным ветром, который слегка приподнимает мои светлые волосы. Рядом потрёпанный дорожный чемодан, который со мной уже очень давно. Я вглядываюсь в лесную дорогу ведущую к платформею Тишина здесь стоит пости абсолютная, что позволяет услышать насколько живой лес. ",
        img:"",
        bg:"",
        next: "peron1"
    },
    "peron1":{
        txt: "Достаю телефон. Яркий свет при включении ослепляет меня, заставля закрыть глаза, а после проморгаться. Я смотрю в телефон, экран всё такой же яркий. На экране наконец-то разглядел время 4:06. Мой новый знакомый, по совместительству будущий сосед, уже должен был подойти. Кроме меня на перрне ни души, что в совокупности с темным лесом и опоздание соседа заставляет мозг рисовать самые страшные и ужастный картины. ",
        img:"",
        bg:"",
        next: ""
    }

};

let cur = "start";

const txt = document.querySelector('.di-text');
const face = document.querySelector('.face');
const back = document.querySelector('.back');
const opt = document.querySelector('.optional');
const wi = document.querySelector('.di-wi');

function render(key){
    const s = story[key];
    if(!s)return;
    cur = key;
    txt.textContent = s.txt;
    face.src = s.img;
    back.src = s.bg;
    opt.innerHTML="";

    if(s.btns){
        s.btns.forEach(element => {
            const el = document.createElement('button');
            el.className = 'option';
            el.textContent=b.text;
            el.onclick = (e) => {
                e.stopPropagation();
                render(b.to);
            };
            opt.appendChild(el);
        });
    }
    wi.onclick = () => {
        if(!story[cur].btns && story[cur].next)
        render(story[cur].next)
    }
};
render("start");
