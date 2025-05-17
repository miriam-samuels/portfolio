"use client";
import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

const Tooltip = ({ 
  children, 
  content, 
  position = 'top', 
  delay = 300,
  className = '',
  arrowSize = 6
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  
  // Check if tooltip would go off-screen and adjust position if needed
  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      let newPosition = position;
      
      // Handle horizontal overflow
      if (position === 'left' && triggerRect.left < tooltipRect.width + 20) {
        newPosition = 'right';
      } else if (position === 'right' && triggerRect.right + tooltipRect.width + 20 > viewportWidth) {
        newPosition = 'left';
      }
      
      // Handle vertical overflow
      if (position === 'top' && triggerRect.top < tooltipRect.height + 20) {
        newPosition = 'bottom';
      } else if (position === 'bottom' && triggerRect.bottom + tooltipRect.height + 20 > viewportHeight) {
        newPosition = 'top';
      }
      
      setTooltipPosition(newPosition);
    }
  }, [isVisible, position]);
  
  let timer;
  
  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };
  
  const handleMouseLeave = () => {
    clearTimeout(timer);
    setIsVisible(false);
  };

  return (
    <div 
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      ref={triggerRef}
    >
      {children}
      {isVisible && (
        <div 
          className={`tooltip tooltip-${tooltipPosition} ${className}`}
          ref={tooltipRef}
        >
          {content}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;