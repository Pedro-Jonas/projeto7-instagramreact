function Story(props){
    return(
    <div className="story">
        <div className="imagem">
            <img src= {props.src} />
        </div>
        <div className="usuario">
            {props.nameuser}
        </div>
    </div>);
};

function Stories(){
    let InfoStories = [
        {src: "/img/9gag.svg", nameuser: "9gag"},
        {src: "/img/meowed.svg", nameuser: "meowed"},
        {src: "/img/barked.svg", nameuser: "barked"},
        {src: "/img/nathanwpylestrangeplanet.svg", nameuser: "nathanwpylestrangeplanet"},
        {src: "/img/wawawicomics.svg", nameuser: "wawawicomics"},
        {src: "/img/respondeai.svg", nameuser: "respondeai"},
        {src: "/img/filomoderna.svg", nameuser: "filomoderna"},
        {src: "/img/memeriagourmet.svg", nameuser: "memeriagourmet"},
    ]
    return(
    <div className="stories">
        {InfoStories.map((item)=> <Story src= {item.src} nameuser={item.nameuser}/>)}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
};

export default Stories;