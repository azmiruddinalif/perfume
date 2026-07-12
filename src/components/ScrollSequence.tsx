"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollSequence({ 
  children,
  folders = ["/frames"]
}: { 
  children: React.ReactNode;
  folders?: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 40; 
  const totalFrames = folders.length * frameCount;

  useEffect(() => {
    // Preload all images across all sequences
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    for (let f = 0; f < folders.length; f++) {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `${folders[f]}/ezgif-frame-${paddedIndex}.jpg`;
        
        // Retain original order
        const globalIndex = f * frameCount + (i - 1);
        
        img.onload = () => {
          loadedImages[globalIndex] = img;
          loadedCount++;
          if (loadedCount === totalFrames) {
            setImages([...loadedImages]);
          }
        };
      }
    }
  }, [folders, totalFrames]);

  useEffect(() => {
    if (images.length !== totalFrames || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate how far we've scrolled inside the sticky container
      let scrollFraction = 0;
      
      if (rect.top <= 0) {
        const scrollDistance = -rect.top;
        const maxScroll = container.offsetHeight - window.innerHeight;
        scrollFraction = Math.max(0, Math.min(1, maxScroll > 0 ? scrollDistance / maxScroll : 0));
      }

      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(scrollFraction * totalFrames)
      );

      animationFrameId = requestAnimationFrame(() => {
        const img = images[frameIndex];
        // Ensure image is fully loaded before drawing
        if (img && img.complete && context) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = img.width / img.height;
          
          let drawWidth = canvas.width;
          let drawHeight = canvas.height;
          let offsetX = 0;
          let offsetY = 0;

          if (imgRatio > canvasRatio) {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
          } else {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
          }

          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [images, totalFrames]);

  // Adjust container height based on number of sequences (400vh per sequence)
  const containerHeight = `${folders.length * 400}vh`;

  return (
    <div ref={containerRef} className="relative w-full bg-[#0e1520]" style={{ height: containerHeight }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1520]/70 via-transparent to-[#0e1520]/90 z-0 pointer-events-none" />

        {images.length !== totalFrames && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#0e1520] z-0">
            <div className="text-center font-light tracking-widest">
              LOADING ASSETS
            </div>
          </div>
        )}

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
