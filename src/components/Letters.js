import React, {Component} from 'react'
import Letter from './Letter'

class Letters extends Component{

    generateLetterWord(letters){
        const lettersArray = []
        for(let i in letters){
            // console.log(this.props.letterStatus[i]);
            if(this.props.letterStatus[i]){
                lettersArray.push(<Letter letter={i} key={i} className='selected'  />)
            }else{
                lettersArray.push(<Letter letter={i} key={i} className='non-selected'  />)
            }
        }
        return lettersArray
    }
    render(){
        return (
            <div>
            <div>Availabe letters</div>
            {this.generateLetterWord(this.props.letterStatus)}
            </div>
        )
    }

}

export default Letters;