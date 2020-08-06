import React, {useState} from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { 
    Wrapper, 
    Header, 
    BalanceContainer, 
    BalanceTitle, 
    Balance, 
    Container, 
    CameraOpen,
} from './styles'

import CameraDevice from '../../components/CameraDevice'

import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

export default function Home(){
    const [camera,setCamera] = useState(false)

    function openCamera(){
        setCamera(true)
    }
    function closeCamera(){
        setCamera(false)
    }

    return(
        <Wrapper>
        {camera        
        ? 
                <CameraDevice isCamera={closeCamera}/> 
        :
            <Container>
            <Header>
            <CameraOpen 
                onPress={openCamera}>
                <MaterialCommunityIcons 
                    name="qrcode-scan" 
                    size={30} 
                    color="#10c86e" />
            </CameraOpen>
            
            <BalanceContainer>
                <BalanceTitle>Meu saldo</BalanceTitle>
                <Balance>R$ 0,00</Balance>
            </BalanceContainer>

            <AntDesign name="gift" size={30} color="#10c86e"/>
            </Header>

            <Suggestions/>
            <Activities/>
            <Tips/>
            <Banner/>
            </Container>
        }
        </Wrapper>
    )
}