import React, {Component} from 'react'
import Letter from './Letter'

class Solution extends Component{
    generateLetterWord(word){
        const lettersArray = []
        for(let i in word){
            if(this.props.letterStatus[word[i]]){
                lettersArray.push(<Letter letter={word[i]} key={i} />)
            }else{
                lettersArray.push(<Letter letter={'_'} key={i} />)
            }
        }
        return lettersArray
    }
    render(){
        return (
            <div>
            {this.generateLetterWord(this.props.solution.word)}
            <p>{this.props.solution.hint}</p>
            </div>
        )
    }
}

export default Solution;