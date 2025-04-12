
import React from 'react';
import StatCard from '@/components/StatCard';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import { Banknote, Wallet, BarChart2, Calendar } from 'lucide-react';

const Index = () => {
  // Mock data for the charts
  const monthlyData = [
    { month: 'Ene', ingresos: 220000, egresos: 180000 },
    { month: 'Feb', ingresos: 240000, egresos: 190000 },
    { month: 'Mar', ingresos: 280000, egresos: 210000 },
    { month: 'Abr', ingresos: 250000, egresos: 220000 },
    { month: 'May', ingresos: 240000, egresos: 240000 },
    { month: 'Jun', ingresos: 200000, egresos: 250000 },
    { month: 'Jul', ingresos: 180000, egresos: 270000 },
    { month: 'Ago', ingresos: 210000, egresos: 240000 },
    { month: 'Sep', ingresos: 250000, egresos: 220000 },
    { month: 'Oct', ingresos: 270000, egresos: 230000 },
    { month: 'Nov', ingresos: 290000, egresos: 240000 },
    { month: 'Dic', ingresos: 300000, egresos: 240000 },
  ];

  const comparativoUtilidad = [
    { month: 'Ene', meta: 30000, real: 25000 },
    { month: 'Feb', meta: 35000, real: 32000 },
    { month: 'Mar', meta: 40000, real: 45000 },
    { month: 'Abr', meta: 45000, real: 42000 },
    { month: 'May', meta: 50000, real: 40000 },
    { month: 'Jun', meta: 55000, real: 35000 },
    { month: 'Jul', meta: 60000, real: 30000 },
    { month: 'Ago', meta: 58000, real: 28000 },
    { month: 'Sep', meta: 55000, real: 35000 },
    { month: 'Oct', meta: 52000, real: 40000 },
    { month: 'Nov', meta: 50000, real: 45000 },
    { month: 'Dic', meta: 48000, real: 50000 },
  ];

  const gastosOperativos = [
    { name: 'Sueldos', valor: 85000 },
    { name: 'Alquileres', valor: 35000 },
    { name: 'Servicios', valor: 25000 },
    { name: 'Software', valor: 15000 },
    { name: 'Transporte', valor: 10000 },
  ];

  const cuentasPorCobrar = [
    { name: 'Cliente A', valor: 35000 },
    { name: 'Cliente B', valor: 25000 },
    { name: 'Cliente C', valor: 15000 },
    { name: 'Cliente D', valor: 10000 },
    { name: 'Cliente E', valor: 8000 },
  ];

  return (
    <div className="min-h-screen p-6 bg-dashboard-dark-bg">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard Finanzas Gerenciales</h1>
      </header>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Utilidad Neta" 
          value="S/. 35,000" 
          icon={<Banknote className="text-dashboard-positive" />} 
          colorClass="text-dashboard-positive"
        />
        <StatCard 
          title="Saldo en Cuentas" 
          value="S/. 58,000" 
          icon={<Wallet className="text-dashboard-neutral" />} 
          colorClass="text-dashboard-neutral"
        />
        <StatCard 
          title="Ratio de Liquidez Corriente" 
          value="1.68" 
          icon={<BarChart2 className="text-dashboard-warning" />} 
          colorClass="text-dashboard-warning"
        />
        <StatCard 
          title="DSO Promedio" 
          value="38 días" 
          icon={<Calendar className="text-dashboard-negative" />} 
          colorClass="text-dashboard-negative"
        />
      </div>
      
      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LineChart 
          title="Ingresos vs Egresos Mensuales" 
          data={monthlyData} 
          lines={[
            { dataKey: 'ingresos', color: '#4ade80', name: 'Ingresos' },
            { dataKey: 'egresos', color: '#fef08a', name: 'Egresos' }
          ]}
        />
        <BarChart 
          title="Comparativo de Utilidad Neta Mensual" 
          data={comparativoUtilidad} 
          bars={[
            { dataKey: 'meta', color: '#4ade80', name: 'Meta' },
            { dataKey: 'real', color: '#f97316', name: 'Real' }
          ]}
        />
      </div>
      
      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart 
          title="Top 5 Gastos Operativos" 
          data={gastosOperativos} 
          bars={[
            { dataKey: 'valor', color: '#f97316', name: 'Monto (S/.)' }
          ]}
          layout="vertical"
        />
        <BarChart 
          title="Cuentas por Cobrar Vencidas por Cliente" 
          data={cuentasPorCobrar} 
          bars={[
            { dataKey: 'valor', color: '#f97316', name: 'Monto (S/.)' }
          ]}
          layout="vertical"
        />
      </div>
    </div>
  );
};

export default Index;
