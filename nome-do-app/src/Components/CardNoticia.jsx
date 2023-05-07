export function CardNoticia(props) {
    return(
        <div>
        <h2>{props.titulo}</h2>
        <img src={props.imagem} />
        <p>{props.link}</p>
        </div>
    )
}