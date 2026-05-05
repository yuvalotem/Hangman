import React, {Component} from 'react'

class Score extends Component{

    getClass = () => {
        if(this.props.score >= 80){
            return 'high-score'
        }else if(this.props.score >= 50){
            return 'medium-score'
        }else{
            return 'low-score'
        }
    }
    render(){
        const finished = this.props.EndGame()
        if(finished){
            return  (<div>{finished} <button onClick={this.props.newGame}>Start again</button></div>)
        }
        return <div className={this.getClass()}>score: {this.props.score}</div>
    }
}

export default Score;