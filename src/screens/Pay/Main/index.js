import React from 'react';

import { services } from './mock'

import {
    ContainerMain,
    ServiceContent,
    ServiceText,
    MainServices,
    ServicesContainer,
    LogoService,
    ServicesTextContainer,
    LabelService,
    TextService,
} from './styles'

export default function Main(){
    return (
        <ContainerMain>
            <ServiceContent>
                <ServiceText>Serviços</ServiceText>
            </ServiceContent>

            <MainServices>
                {services.map(service => (
                <ServicesContainer key={service.key}>
                    <LogoService source={service.img}/>
                    <ServicesTextContainer>
                        <LabelService>{service.label}</LabelService>
                        <TextService>{service.title}</TextService>
                    </ServicesTextContainer>
                </ServicesContainer>
                ))}
            </MainServices>
        </ContainerMain>
    )
}