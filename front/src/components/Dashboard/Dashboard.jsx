import { Card, Title, Text, Metric, BarChart } from "@tremor/react";

const data = [
  { category: "Categoría 1", value: 50 },
  { category: "Categoría 2", value: 75 },
  { category: "Categoría 3", value: 100 },
];

const Dashboard = () => (
  <div className="p-6">
    <Card>
      <Title>Mi Dashboard</Title>
      <Text>Este es un ejemplo de un dashboard usando Tremor.</Text>
      <Metric>KPI: 100</Metric>
      <BarChart
        data={data}
        category="category"
        dataKey="value"
        colors={["blue"]}
      />
    </Card>
  </div>
);

export default Dashboard;
