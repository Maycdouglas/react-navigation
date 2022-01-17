import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {

    const numero = props.route
                && props.route.params
                && props.route.params.numero ? props.route.params.numero : 0
    
    return (
        <TextoCentral corFundo='pink'>
            Tela D - {numero}
        </TextoCentral>
    )
}