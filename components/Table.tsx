import React from 'react';

export const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">{children}</table>
  </div>
);
