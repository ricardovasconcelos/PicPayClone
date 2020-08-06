import styled from 'styled-components/native';


export const ContainerPlace = styled.View`
    background: #000;
    flex: 1;
    align-items: center;
`;

export const PlaceField = styled.View`
    justify-content: center;
    align-items: center;
    height: 400px;
`;

export const Img = styled.Image`
    width: 100px;
    height: 100px;
`;

export const PlaceLabel = styled.Text`
    margin: 20px 0;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;

export const PlaceText = styled.Text`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
`;

export const PlaceButton = styled.TouchableOpacity`
    margin-top: 20px;
    width: 300px;
    height: 35px;
    background: #10c86e;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const PlaceButtonText = styled.Text`
    color: #fff;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
`;