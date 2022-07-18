function Usuario(){
    return(
    <div class="usuario">
        <img src="/img/catanacomics.svg" />
        <div class="texto">
            <strong>catanacomics</strong>
            Catana
        </div>
    </div>)
}

function Sugestoes(props){
    return(
    <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>

        <div class="sugestao">
            <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <div class="nome">{props.nameuser}</div>
                <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    </div>
    )
}

function Links(){
    return(
    <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>);
}

function Copyrigth(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}

function Sidebar(){
    let InfoSidebar = [
        {img: "/img/bad.vibes.memes.svg", nameuser: "bad.vibes.memes", razao: "Segue você"},
        {img: "/img/chibirdart.svg", nameuser: "chibirdart", razao: "Segue você"},
        {img: "/img/razoesparaacreditar.svg", nameuser: "razoesparaacreditar", razao: "Novo no Instagram"},
        {img: "/img/adorable_animals.svg", nameuser: "adorable_animals", razao: "Segue você"},
        {img: "/img/smallcutecats.svg", nameuser: "smallcutecats", razao: "Segue você"},

    ]
    return(
    <div class="sidebar">
        <Usuario/>
        {InfoSidebar.map((item) => <Sugestoes  img={item.img} nameuser={item.nameuser} razao={item.razao}/>)}
        <Links/>
        <Copyrigth/>
    </div>
    )
}

export default Sidebar;