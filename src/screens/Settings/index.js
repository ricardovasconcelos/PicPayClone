import React from 'react';

import avatar from '../../../assets/images/avatar.png'
import { settings } from './mock'

import {
    Container,
    HeaderContainer,
    HelpContainer,
    HelpText,
    ProfileContent,
    Avatar,
    UserText,
    NameText,
    SeeMore,
    AccountContainer,
    Account,
    SettingContainer,
    LabelSetting,
    TextSetting,
} from './styles';

export default function Settings(){
    return (
        <Container>
                <HeaderContainer>
                    <HelpContainer>
                        <HelpText>Ajuda</HelpText>
                    </HelpContainer>

                    <ProfileContent>
                            <Avatar source={avatar}/>
                            <UserText>@ricardovasconceloss</UserText>
                            <NameText>Ricardo Vasconcelos</NameText>
                            <SeeMore>Ver meu perfil {'>'}</SeeMore>
                    </ProfileContent>

                    <AccountContainer>
                        <Account>Minha conta</Account>
                    </AccountContainer>
                </HeaderContainer>

                {settings.map(setting => (
                    <SettingContainer key={setting.key}>
                        <LabelSetting>{setting.label}</LabelSetting>
                        <TextSetting>{setting.text}</TextSetting>
                    </SettingContainer>
                ))}
            </Container>
    )
};