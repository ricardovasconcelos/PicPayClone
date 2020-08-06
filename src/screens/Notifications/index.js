import React from 'react';

import { notifications } from './mock'
import { FontAwesome5 } from '@expo/vector-icons'
import { 
    ContainerNotification, 
    Header, 
    NotificationText, 
    ConfigurationText,
    ContainerMessages,
    MessageField,
    MessageText,
} from './styles'

export default function Notification(){
    return (
        <ContainerNotification>
            <Header>
                <NotificationText>Notificações</NotificationText>
                <ConfigurationText>Configurar</ConfigurationText>
            </Header>

            <ContainerMessages>
                {notifications.map(notification => (
                <MessageField key={notification.key}>
                    <MessageText>{notification.text}
                    <FontAwesome5 name={notification.icon} size={20} color={notification.color}/>
                    </MessageText>
                </MessageField>
                ))}
            </ContainerMessages>
            
        </ContainerNotification>
    )
} 