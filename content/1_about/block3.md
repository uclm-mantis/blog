---
title: "Manage your data"
section: About
type: block
style: bg-gray-800 text-black p-5
---


<div className="flex flex-wrap">
  <div className="w-1/2 p-4 text-gray-200">
## <span className="text-white">Manage your data</span>

You have full control of changes using GitHub.
  </div>

  <div className="w-1/2 p-4 text-white">

    <ResponsiveContainer width={450} height={300}>

      <LineChart className="text-md w-full"
        width={450}
        height={300}
        data={[
          { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
          { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
          { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
          { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
          { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
          { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
          { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
        ]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

    </ResponsiveContainer>

  </div>
</div>
