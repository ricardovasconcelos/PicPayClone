import React from 'react';

import imgPlace from '../../../../assets/images/08.png'

import {
    ContainerPlace,
    PlaceField,
    Img,
    PlaceLabel,
    PlaceText,
    PlaceButton,
    PlaceButtonText
} from './styles'

export default function Place(){
    return (
        <ContainerPlace>
            <PlaceField>
                <Img source={imgPlace}/>
                <PlaceLabel>Descubra estabelecimentos perto de você</PlaceLabel>
                <PlaceText>
                    Temos estabelecimentos próximos de você que aceitam PicPay,
                    para saber quais é só autorizar acesso à sua localização.
                </PlaceText>
                <PlaceButton>
                    <PlaceButtonText>
                        Autorizar agora
                    </PlaceButtonText>
                </PlaceButton>
            </PlaceField>
        </ContainerPlace>
    )
}