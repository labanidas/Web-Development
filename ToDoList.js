document.addEventListener('DOMContentLoaded', getlist);
const t = document.querySelector('#main2');
t.addEventListener('click', deleteThis);

let c=0;
function clicked(){
    i=document.querySelector("input");
    if(i.value.length==0) alert("Please add a task!")
    else{
        c++;
        document.querySelector('#main2').innerHTML +=`
        
        <div class="task">   
        <span class ="span">${i.value}</span>
        <button type="button" class="thistask">Delete</button>
        </div>

        `;
        additem(i.value);

        
       
        // let del = document.querySelectorAll(".deleteb");
        // for(let i=0; i<del.length; i++){
        //     del[i].onclick = function(){
        //         this.parentNode.remove();
        //         removetask(this.parentNode);
        //     }
        //     }

        // let t=document.querySelectorAll("span")  ;
        // for(let i=0;i<t.length;i++){
        //     t[i].onclick=function(){
        //             this.classList.toggle('did');
        //     }
        // }  
        
    }
    i.value="";

}


function additem(item){
    let todolist;
    if(localStorage.getItem("todolist")==null)
     todolist = [];
    else{
        todolist= JSON.parse(localStorage.getItem("todolist"));
        }
        todolist.push(item);
        localStorage.setItem("todolist", JSON.stringify(todolist));
}



function getlist(){
    let todolist;
    if(localStorage.getItem("todolist")==null)
     todolist = [];
    else{
        todolist= JSON.parse(localStorage.getItem("todolist"));
        }
        todolist.forEach(function(item){

            document.querySelector('#main2').innerHTML +=`
        
            <div class="task">   
            <span class ="span">${item}</span>
            <button type="button" class="thistask">Delete</button>
            </div>
    
            `;

        })


}

function deleteThis(e){

    let item = e.target;
    if(item.classList[0]=="thistask"){
        // console.log(e.target.parentNode.parentNode);
        removetask(item.parentNode.parentNode);
        item.parentNode.remove();
    }

    if(item.classList[0] =="span"){
        item.classList.toggle('did');
    }
}

function removetask(item){
    let todolist;
    if(localStorage.getItem("todolist")==null)
     todolist = [];
    else{
        todolist= JSON.parse(localStorage.getItem("todolist"));
        }

    let str =  item.children[0].innerText;
    todolist.splice(todolist.indexOf(str),1);
    localStorage.setItem("todolist", JSON.stringify(todolist));

}