import { data } from 'autoprefixer';

import { useLoaderData } from 'react-router-dom';
import { Pie, PieChart } from 'recharts';




const Dashboard = () => {
  data = useLoaderData()

 
    return (
        <div className='flex justify-center items-center h-96 mt-24'> 
           <PieChart className='mx-0 px-0' width={320} height={250}>
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
        </div>
    );
};

export default Dashboard;