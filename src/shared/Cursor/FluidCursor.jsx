'use client';
import { useEffect } from 'react';
import fluidCursor from '../../hooks/use-FluidCursor';
const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div className="fixed top-0 left-0 z-2 w-full h-full">
      <canvas id="fluid" className="w-full h-full z-10" />
    </div>
  );
};
export default FluidCursor;
