import React from 'react';

import { Container, Details, Img, Title, Description} from './styles'
import img13 from '../../../assets/images/13.png'

export default function Banner(){
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo!</Title>

                <Description>
                    Mantenha suas parcelas em dia, use o PicPay para fazer seus pagamentos.
                </Description>
                
            </Details>
                <Img source={img13}/>
        </Container>
    )
}