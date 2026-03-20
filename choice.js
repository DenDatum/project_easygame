const story = {
    "start":{
        txt: "В небольшом городке на окраине жизнь как всегда была сонной и неторопливой. Погода будто бы повторяя образ жизни жителей города была туманной и без больших перепадов. Всё было обычным и предсказуемым. В городке всё как в дне сурка двигалось так же как и вчера. Казалось, единственным изменением были дни недели и даты в календаре, что почти всё там так дивигается и функционирует. Некоторые, могут видеть городок в черно-белой с отенками красного, как видел его Кадавер.  ",
        img:"",
        bg:"",
        next: "start1"
    },
    "start1":{
        txt: "Как вы считаете, сегодня хороший день?",
        img:"",
        bg:"",
        btns:[
            {text:"Хороший день",to:"good"},
            {text:"Плохой день",to:"bad"}
        ]
    },
    "good":{
        txt: "Действительно. Сегодня светило солнце, что было крайне необычно. Это радовало детей, что привыкли к другой погоде. Так что утро для Кадавер, было необычно радостным и теплым. Для подобного дня как сегодняшний это приятно. ",
        img:"",
        bg:"",
        next: ""
    },
    "bad":{
        txt: "Действительно. Сегодня лил дождь, что было крайне необычно. Он создавал крайне грустное и сонное настроение. Кадавер проснулся от громкого звука биения дождя по стеклу. Для подобного дня это было понятно. ",
        img:"",
        bg:"",
        next: ""
    },
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
        s.btns.forEach(b => {
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
};
    wi.onclick = () => {
        if(!story[cur].btns && story[cur].next)
        render(story[cur].next)
    }
render("start");
