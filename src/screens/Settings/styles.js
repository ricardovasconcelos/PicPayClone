import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background: #000;
    flex: 1;
`;

export const HeaderContainer = styled.View`
    background: #1C1C1E;
    height: 300px;
`;


export const HelpContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`;

export const HelpText = styled.Text`
    color: #0BB069;
    font-size: 15px;
    font-weight: bold;
`;

export const ProfileContent = styled.View`
    justify-content: center;
    align-items: center;
    height: 200px;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
`;

export const UserText = styled.Text`
    color: #ffff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
`;

export const NameText = styled.Text`
    font-size: 16px;
    color: #B2B8B5;
`;

export const SeeMore = styled.Text`
    font-size: 13px;
    color: #0BB069;
`;

export const AccountContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 30px 0 0 10px;
`;

export const Account = styled.Text`
    color: #0BB069;
    font-size: 13px;
    font-weight: bold;
`;

export const SettingContainer = styled.View`
    height: 66px;
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.2);
`;
export const LabelSetting = styled.Text`
    color: #fff;
`;
export const TextSetting = styled.Text`
     color:  rgba(255, 255, 255, 0.5);
`;