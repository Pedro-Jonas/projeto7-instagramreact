function Topo(props){
    return(
    <div class="topo">
        <div class="usuario">
            <img src={props.img} />
            {props.name}
        </div>
        <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>)
}

function Conteudo(props){
    return(
    <div class="conteudo">
        <img src={props.img} />
    </div>)
}

function Fundo(props){
    return(
    <div class="fundo">
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
        <div class="curtidas">
            <img src="/img/respondeai.svg" />
            <div class="texto">
                Curtido por <strong>{props.strong1}</strong> e <strong>{props.strong2}</strong>
            </div>
        </div>  
    </div>)
}

function Post(props){
    return(
    <div class="post">
        <Topo img= {props.imgtopo} name= {props.nameusertopo}/>
        <Conteudo img= {props.imgconteudo}/>
        <Fundo strong1= {props.strong1} strong2= {props.strong2}/>
    </div>)
}

function Posts(){
    let InfoPosts = [
        {imgtopo: "/img/meowed.svg", nameusertopo: "meowed", imgconteudo:"/img/gato-telefone.svg", strong1: "respondeai", strong2: "outras 101.523 pessoas"},
        {imgtopo: "/img/barked.svg", nameusertopo: "barked", imgconteudo:"img/dog.svg", strong1: "adorable_animals", strong2: "outras 99.159 pessoas"},
    ]
    
    return(
        <div class="posts">
            {InfoPosts.map((item)=> <Post imgtopo= {item.imgtopo} nameusertopo={item.nameusertopo} imgconteudo={item.imgconteudo} strong1={item.strong1} strong2={item.strong2}/>)}
        </div>
    )
}

export default Posts