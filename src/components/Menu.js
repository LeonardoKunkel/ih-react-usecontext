import { useContext } from "react"
import DogsContext from "../context/dogs/DogsContext"

export default function Menu() {

    const ctxDog = useContext(DogsContext)

    const {
        getDog,
        currentDogPhoto
    } = ctxDog

    return (
        <div>
            Menú

            <h1>Perrito</h1>
            <button onClick={ ()=> { getDog() } }>
                Ver perro
            </button>

            <img src={currentDogPhoto} alt="" />
        </div>
    )
}
