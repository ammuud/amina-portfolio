
import React from 'react';

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Car {
  image: string;
  name: string;
  year: number;
  price: string;
}
