import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)
    const moleBopped = (mole) => {
        if (displayMole) {
            props.setScore(props.score + 1)
            setDisplayMole(false)
        }
    }
    let showMole=displayMole?<Mole setScore={props.setScore} toggle={setDisplayMole} moleBopped={moleBopped}/>:<EmptySlot toggle={setDisplayMole}/>

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {showMole}
        </div>
    )
}

export default MoleContainer