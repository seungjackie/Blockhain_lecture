import React from 'react'

const Slider = () => {
    type SliderProps = {
        translateValue: number;
        images: { pic: string; id: number }[];
        moveRight: () => void;
        moveLeft: () => void;
      };
      
      const Slider: React.FC<SliderProps> = {
        translateValue,
        images,
        moveRight,
        moveLeft,
      }) => {
        const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
          moveRight();
        };
      
        const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
          moveLeft();
        };
      
  return (
    <div>Slider</div>
  )
}

export default Slider