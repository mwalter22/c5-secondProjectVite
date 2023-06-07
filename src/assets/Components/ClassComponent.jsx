// eslint-disable-next-line no-unused-vars
import React, { Component} from 'react'

export default class ClassComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'Mariano',
            edad: 33
        }
        console.log('Class: Se renderiza el constructor')
    }

    componentDidMount(){
        console.log('Class: Se montó el componente');
    }

    componentDidUpdate(){
        console.log('Class: Se actualiza el componente');
    }

    componentWillUnmount(){
        console.log('Class: Se desmontó el componente');
    }

    render() {
        console.log('Class: Se ejecuta el render')
        return (
            <div>
                <h1>Componente de clase</h1>

                <h2>{this.state.name}</h2>
                <button
                    onClick={() => this.setState({name: 'Lionel'})}
                >Cambiar el nombre</button>

                
            </div>
        )
    }
}