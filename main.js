var player = true;
var turn = 'new';
Draw();

// Start();

function Draw(){
    let tbody = document.getElementsByTagName('tbody')[0];
    for(let i = 0; i <= 80; i++){
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        for(let j = 0; j <= 80; j++){
            let td = document.createElement('td');
            td.id = z(i) + z(j)
            // td.innerHTML = td.id;
            td.innerHTML = '';
            td.setAttribute('onclick', 'create(this.id)');
            document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].appendChild(td);
        }
    }
}

function create(id){
    document.getElementById(id).setAttribute('class', 'new');
    document.getElementById(id).innerHTML = '@';
}

function z(o){
    if (o < 10){
        o = '0' + o.toString()
        return o;
    }
    return o.toString();
}

function Start(){
    // let no = 800;
    let no = parseInt(document.getElementById('no').value)
    for(let c = 0; c < no; c++){
        let i = Math.floor(Math.random() * 81);
        let j = Math.floor(Math.random() * 81);
        let gid = z(i) + z(j)
        // console.log(gid);
        document.getElementById(gid).innerHTML = '@';
        document.getElementById(gid).setAttribute('class', 'new');
    }
}

function nextGen(){
    let po = new Array(90)
    for(let i = 0; i <= 90; i++){
        po[i] = new Array(90);
    }
    let count = 0;
    for(let i = 0; i <= 80; i++){
        for(let j = 0; j <= 80; j++){
            po[i][j] = '';
            let live = 0;
            for(let k = i-1; k <= i+1; k++){
                for(let l = j-1; l <= j+1; l++){
                    if (l < 0 || k < 0){}else{
                        if(ret(k, l) == '@'){
                            live++;
                        } 
                    }
                }
            }
            if(ret(i, j) == '@'){
                count ++;
            }
            if(ret(i, j) == '@' && (live == 3 || live == 4)){
                // document.getElementById(i.toString() + j.toString()).setAttribute('class', 'pink');
                // sleep(20);
                // set(i, j, '@');
                po[i][j] = '@';
            }
            if(ret(i, j) == '@' && (live < 3 || live > 4)){
                // pink(i, j);
                // set(i, j, '');
                po[i][j] = '';
            }
            if(ret(i, j) == '' && live == 3){
                // set(i, j, '@');
                
                po[i][j] = '@';
            }
        }
    }
    for(let i = 0; i <= 80; i++){
        for(let j = 0; j <= 80; j++){
            set(i, j, po[i][j]);
        }
    }
    document.getElementById('count').innerHTML = count.toString();
}

function ret(i, j){
    try{
        return document.getElementById(z(i) + z(j)).innerHTML;
    }catch{}
    
}

function set(i, j, v){
    // if (turn == 'new'){
    //     turn = 'pink';
    // }else{
    //     turn = 'new';
    // }

    if(v == '@'){
        document.getElementById(z(i) + z(j)).setAttribute('class', turn);
    }else{
        document.getElementById(z(i) + z(j)).removeAttribute('class');
    }
    document.getElementById(z(i) + z(j)).innerHTML = v;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    while (player) {
        // let no = 60;
        let no = parseInt(document.getElementById('speed').value)
        // console.log(`Waiting ${i} seconds...`);
        await sleep(no);
        nextGen();
    }

}

async function pink(i, j){
    document.getElementById(z(i) + z(j)).setAttribute('class', 'pink');
    await sleep(30);
}
