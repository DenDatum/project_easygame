const story = {
    "start":{
        txt: " ",
        img:"",
        bg:"",
        next: "platform1"
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
