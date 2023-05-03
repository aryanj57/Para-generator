const input=document.getElementById("numOfwords");
const container=document.querySelector(".container");

const generateWord=(n)=>{

    const letters="abcdefghijklmnopqrstuvwxyz";
    let text="";

    for(let i=0;i<n;i++){
         text+=letters[ (Math.random()*25).toFixed(0) ];
    }

    return text;
};

let numOfwords;
const generatePara=()=>{
    numOfwords=Number(input.value);

    const para=document.createElement("p");

    let data="";
    for(let i=0;i<numOfwords;i++){

        data+=generateWord( (Math.random()*15).toFixed(0) );
        data+=" ";
    
    }
    
    para.innerText=data;

    para.setAttribute("class","paras");
    container.append(para);


};

