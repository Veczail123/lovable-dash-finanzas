
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  colorClass: string;
};

const StatCard = ({ title, value, icon, colorClass }: StatCardProps) => {
  return (
    <Card className="bg-dashboard-card-bg border-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <h3 className={cn("text-2xl font-bold", colorClass)}>{value}</h3>
          </div>
          <div className={cn("text-xl p-3 rounded-full", `bg-opacity-20 ${colorClass}`)}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
