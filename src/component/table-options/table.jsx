import React, {Component} from 'react'

class Tablelist extends Component {
    render() {
        return (
            <li onClick={this.trigger.bind(this,this.props.id,this.props.path) }>
                {this.props.children}
            </li>
        )
    }
    trigger(id,path){
        this.props.history.push(`${path}/${id}`)
    }
}
export default Tablelist
