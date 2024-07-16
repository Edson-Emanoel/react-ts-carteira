import React from "react";

import {
    PieChart,
    Pie,
    Cell
    // PieResponsiveContainer,
} from "recharts";

import {
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight
} from "./styles";

export const PieChartComp: React.FC = () => {
    return(
        <Container>
            <SideLeft>
                <h2>Relação </h2>
                <LegendContainer>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                    <Legend color="#F7931B">
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color="#E44C4E">
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </SideLeft>

            <SideRight>
                
            </SideRight>
        </Container>
    )
}

export default PieChartComp