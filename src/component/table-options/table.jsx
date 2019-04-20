import React, {Component} from 'react'

class Tablelist extends Component {
    render() {
        return (
            <li tabIndex={this.props.id}>
                <span onClick={this.trigger.bind(this, this.props.id, this.props.path)}>
                    {
                        this.props.name ?
                            <div>
                                {
                                    this.props.src ?
                                        <img src={this.props.src} alt=""/>
                                        :
                                        null

                                }
                                <p>{this.props.name}</p>
                            </div>
                            :
                            this.props.children

                    }
                </span>
                {
                    this.props.name ?
                        this.props.children
                        :
                        null

                }
            </li>
        )
    }

    trigger(id, path) {
        if (this.props.match.params.id === id) {
            return
        } else {
            this.props.history.push(`${path}/${id}`)
        }
    }
}

export default Tablelist
