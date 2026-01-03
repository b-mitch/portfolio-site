import React, { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode[];
  topOffset?: number;
};

export default function GhostScroller({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const vh = window.innerHeight;
      const scrollY = window.scrollY - containerRef.current.offsetTop;
      const panels = Array.from(containerRef.current.querySelectorAll('.ghost-panel')) as HTMLElement[];
      const progress = scrollY / vh;
      panels.forEach((el, i) => {
        let vis = 0;
        if (progress >= i - 1 && progress < i) {
          // fading in
          vis = progress - (i - .3);
        } else if (progress >= i && progress < i + 1) {
          // fading out
          vis = 1.4 - (progress - i);
        }
        vis = Math.max(0, Math.min(1, vis));
        el.style.setProperty('--vis', vis.toFixed(3));
      });
    };

    const loop = () => {
      onScroll();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // initial update
    onScroll();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="ghost-container"
      style={{ '--panels-count': children.length } as React.CSSProperties}
    >
      {React.Children.map(children, (child, i) => (
        <div className="ghost-panel" aria-hidden={false} key={i}>
          {child}
        </div>
      ))}
    </div>
  );
}
