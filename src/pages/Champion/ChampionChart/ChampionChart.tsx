import {ChampionFullData} from "../../../types/ChampionFull.ts";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

type ChampionChartProps = {
    championData: ChampionFullData | undefined;
}

const ChampionChart = ({championData}: ChampionChartProps) => {
    if(championData == null) return null;

    const data = Object.entries(championData.info).map(([key, value]) => {
        return {
            subject: key,
            value: value
        }
    });

    return (
        <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data} >
                <PolarGrid  />
                <PolarAngleAxis dataKey="subject" />
                <Radar max={5} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default ChampionChart;