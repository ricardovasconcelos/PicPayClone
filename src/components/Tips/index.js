import React from 'react';

import { Container, Option, Title, Img } from './styles';

import { items } from './mock'

export default function Tips(){

    return(
        <Container>
            {items.map((item) => (
            <Option key={item.key} bgColor={item.bgColor}> 
                <Title>{item.title}</Title>
                <Img source={item.img}/>
            </Option>
            ))}
        </Container>
    )
}