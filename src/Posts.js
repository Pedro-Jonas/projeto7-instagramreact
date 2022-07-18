import React from "react";
function Topo(props){
    return(
    <div className="topo">
        <div className="usuario">
            <img src={props.img} />
            {props.name}
        </div>
        <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>)
}

function Conteudo(props){
    const[NameIcon, SetNameIcon] = React.useState("heart-outline");

    function Like(){
        if (NameIcon === "heart"){
            SetNameIcon("heart-outline");
        } else {
            SetNameIcon("heart");
        }
    }
    return(
    <div className="conteudo">
        <img onClick={Like} src={props.img} />
        <div className="fundo">
            <div className="acoes">
            <div>
            <ion-icon onClick={Like} name={NameIcon}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
            <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
        <div className="curtidas">
            <img src="/img/respondeai.svg" />
            <div className="texto">
                Curtido por <strong>{props.strong1}</strong> e <strong>{props.strong2}</strong>
            </div>
        </div>  
        </div>
    </div>
    )
}

function Post(props){
    return(
    <div className="post">
        <Topo img= {props.imgtopo} name= {props.nameusertopo}/>
        <Conteudo img= {props.imgconteudo} strong1= {props.strong1} strong2= {props.strong2}/>
    </div>)
}

function Posts(){
    let InfoPosts = [
        {imgtopo: "/img/meowed.svg", nameusertopo: "meowed", imgconteudo:"/img/gato-telefone.svg", strong1: "respondeai", strong2: "outras 101.523 pessoas"},
        {imgtopo: "/img/barked.svg", nameusertopo: "barked", imgconteudo:"img/dog.svg", strong1: "adorable_animals", strong2: "outras 99.159 pessoas"},
    ]
    
    return(
        <div className="posts">
            {InfoPosts.map((item)=> <Post imgtopo= {item.imgtopo} nameusertopo={item.nameusertopo} imgconteudo={item.imgconteudo} strong1={item.strong1} strong2={item.strong2}/>)}
        </div>
    )
}

export default Posts