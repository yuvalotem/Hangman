import React, {Component} from 'react'

class Solution extends Component{
    render(){
        let underScoreArray = ['_','_','_','_']
        underScoreArray = underScoreArray.map(u => <span>{u}  </span>)
        return (
            <div>
            {underScoreArray}
            <p>Your ideal mode when coding</p>
            </div>
        )
    }
}

export default Solution;