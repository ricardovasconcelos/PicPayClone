import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CameraDevice from '../../components/CameraDevice'
import NavigationTab from './navigationTab'
import { 
    ContainerPayment, 
    Payment, 
    ContainerHeader,
    SearchInput,
    CameraOpen,
} from './styles';

export default function Pay(){
    const [camera,setCamera] = useState(false)

    function openCamera(){
        setCamera(true)
    }
    function closeCamera(){
        setCamera(false)
    }

    return(
        <ContainerPayment>
            { camera        
        ? 
                <CameraDevice isCamera={closeCamera}/> 
        :
            <Payment>
                <ContainerHeader>
                    <CameraOpen 
                    onPress={openCamera}>
                    <MaterialCommunityIcons 
                        name="qrcode-scan" 
                        size={30} 
                        color="#10c86e" />
                </CameraOpen>
                    <SearchInput placeholder="Quem você quer pagar?"/>
                </ContainerHeader>
                <NavigationTab/>
            </Payment>
        }
        </ContainerPayment>
    )
}