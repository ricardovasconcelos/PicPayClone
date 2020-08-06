import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Description, 
    Bold, 
    Avatar,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Values,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles'
import avatar from '../../../assets/images/avatar.png'
export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar}/>
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@Ricardovasconcelos</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Ricardo Vasconcelos</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Values>
                                R$ 15,00
                        </Values>
                        <Divider/>

                        <Feather name="lock" color="#fff" size={14}/>
                        <Date>há 20 minutos</Date>                      
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14}/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14}/>
                        </Option>
                    </Actions>
                </CardFooter>

            </Card>
        </Container>
    )
}