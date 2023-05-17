import {useState, useEffect} from "react"

//Função Pai Questao01X
function Questao01X(){

    const alunos = [
        { nome: "Sicrano", notas : {ap1 : 8.0, ap2 : 5.4} },
        { nome: "Beltrano", notas : {ap1 : 6.5, ap2 : 3.5} },
        { nome: "Fulano", notas : {ap1 : 7.3, ap2 : 9.2} }
    ]

    //Variáveis de estado das médias
    //O valor de cada média que será recebido aqui após o filho
    //retornar o vetor de médias
    const [media0, setMedia0] = useState(0)
    const [media1, setMedia1] = useState(0)
    const [media2, setMedia2] = useState(0)

    //A função a ser repassada para Questao01Y.
    //media_alunos é o vetor com as médias calculadas
    //vindo de Questao01y
    const medias = (media_alunos) => {

        setMedia0((prev)=>media_alunos[0])
        setMedia1((prev)=>media_alunos[1])
        setMedia2((prev)=>media_alunos[2])
    }

    //Variável de estado que armazena os nomes dos alunos abaixo da média
    const [menores, setMenores] = useState("")

    useEffect (
        () => {
            let mediaAlunos = [media0, media1, media2]
            let nomes = ["Sicrano", "Beltrano", "Fulano"]

            setMenores("")
            for(let i = 0; i < mediaAlunos.length; i++){
                if(mediaAlunos[i] <= 5.0) setMenores((prev)=>prev+" "+nomes[i])
            }
        }
        ,
        [media0, media1, media2]
    )

    return (
        <>
            <Questao01Y alunos = {alunos} medias = {medias}/>
            <h3>{menores}</h3>
        </>
    )
}



//Função filha Questao01Y
const Questao01Y = ({alunos, medias}) => {

    //Variáveis de estado para as médias
    const [media0, setMedia0] = useState(0)
    const [media1, setMedia1] = useState(0)
    const [media2, setMedia2] = useState(0)

    //O vetor das médias que será retornado para Questao01X
    let medias2 = [media0, media1, media2]

    //Cálculo das médias e return para Questao01X
    useEffect (
        () => {
            setMedia0((ant) => ((alunos[0].notas.ap1 + alunos[0].notas.ap2)/2) )
            setMedia1((ant) => ((alunos[1].notas.ap1 + alunos[1].notas.ap2)/2) )
            setMedia2((ant) => ((alunos[2].notas.ap1 + alunos[2].notas.ap2)/2) )
        }
        ,
        [alunos]
    )

    return (
        <>
            <h1>Alunos com média abaixo de 5.0: </h1>
            <h1>{medias(medias2)}</h1>
        </>
    )
}

export default Questao01X