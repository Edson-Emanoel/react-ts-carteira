import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;    
`;

export const Header = styled.header`
    width: 100%;
   
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }

`;

export const LegendContainer = styled.ul`
    list-style: none;
    
    display: flex;
    padding-right: 16px;
`;

export const Legend = styled.li`
    
`;