import React from 'react';

import { stores } from './mock'

import {
    ContainerStore,
    StoreContent,
    StoreText,
    StoreField,
    StoreContainer,
    LogoStore,
    StoreTextContainer,
    LabelStore,
    TextStore,
} from './styles'

export default function Store(){
    return (
        <ContainerStore>
            <StoreContent>
                <StoreText>Central de Doações</StoreText>
            </StoreContent>

            <StoreField>
                {stores.map(store => (
                <StoreContainer key={store.key}>
                    <LogoStore source={store.img}/>
                    <StoreTextContainer>
                        <LabelStore>{store.label}</LabelStore>
                        <TextStore>{store.title}</TextStore>
                    </StoreTextContainer>
                </StoreContainer>
                ))}
            </StoreField>
        </ContainerStore>
    )
}