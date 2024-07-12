import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
    display: flex;
    align-content: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
    margin-top: 4px;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps> (
({ theme }) => ({
    onColor: theme.colors.primary,    
    offColor: theme.colors.info
}))<ReactSwitchProps>`
    margin: 0 7px;
`;
