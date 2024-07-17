import React from "react";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts";

import {
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight
} from "./styles";

interface IPieChartProps {
    data: {
       name: string;
       value: number;
       percent: number;
       color: string;
    }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map((indicador) => (
                        <Legend color={indicador.color}>
                            <div>{indicador.percent} %</div>
                            <span>{indicador.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color}/>
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)

export default PieChartBox;