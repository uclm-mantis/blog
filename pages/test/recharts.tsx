import ChartComponent from '@/components/ChartComponent';

export default function ChartTest() {
  return (
    <div>
      <h1>Prueba de ChartComponent</h1>

      <ChartComponent
        type="line"
        data={[
          { name: 'Enero', uv: 4000, pv: 2400 },
          { name: 'Febrero', uv: 3000, pv: 1398 },
          { name: 'Marzo', uv: 2000, pv: 9800 },
        ]}
        config={[
          { dataKey: 'uv', color: '#8884d8' },
          { dataKey: 'pv', color: '#82ca9d' },
        ]}
      />
    </div>
  );
}
