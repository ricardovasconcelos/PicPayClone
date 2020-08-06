import styled from 'styled-components/native';


export const ContainerNotification = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export const NotificationText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight:bold;
`;

export const ConfigurationText = styled.Text`
    color: #0BB069;
    font-size: 15px;
    font-weight: bold;
`;

export const ContainerMessages = styled.ScrollView``;

export const MessageField = styled.TouchableOpacity`
    height: 66px;
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.2);
`;
export const MessageText = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
`;