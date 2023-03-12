import {useEffect} from 'react'
import mole from './mole.png'

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={mole}
            alt="mole"
            onClick={props.moleBopped} />
        </div>
    )
}


export default Mole