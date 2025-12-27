import React, { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode[];
  topOffset?: number;
};

export default function GhostScroller({ children, topOffset = 0 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const vh = window.innerHeight;
      const panels = Array.from(containerRef.current.querySelectorAll('.ghost-panel')) as HTMLElement[];

      panels.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // progress when element's top moves through viewport
        const progress = 1 - Math.min(Math.max((rect.top - topOffset) / vh, -1), 1);
        // map progress to 0..1 crossfade where panel is fully visible when progress ~ 1
        const vis = Math.max(0, Math.min(1, progress));
        el.style.setProperty('--vis', String(vis));
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
  }, [topOffset]);

  return (
    <div
      ref={containerRef}
      className="ghost-container"
      style={{ ['--top' as any]: `${topOffset}px` }}
    >
      {React.Children.map(children, (child, i) => (
        <div className="ghost-panel" aria-hidden={false} key={i}>
          {child}
        </div>
      ))}
    </div>
  );
}
