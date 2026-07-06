

type CardProps = {
    texto: string,
    imagem: string,
    alt: string
}

export function Card({texto, imagem, alt}: CardProps){
    return (
        <div>
            <img src={imagem} alt={alt} />
            <p>{texto}</p>
            <button>Inscreva-se</button>
        </div>
    )
}