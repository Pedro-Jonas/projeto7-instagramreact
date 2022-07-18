function Icons(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    );
}

function FundoMobile(){
    let IconsInfo = [
        {name:"home"},
        {name:"search-outline"},
        {name:"add-circle-outline"},
        {name:"heart-outline"},
        {name:"person-outline"},
    ]
    return(
    <div class="fundo-mobile">
        {IconsInfo.map((itens) => <Icons name={itens.name}/>)}
    </div>
    );
}

export default FundoMobile;
