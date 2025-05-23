"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface ParallaxBackgroundProps {
  imageUrl: string
  children: React.ReactNode
  className?: string
  opacity?: number
  height?: string
  disableOnMobile?: boolean
}

export default function ParallaxBackground({
  imageUrl,
  children,
  className,
  opacity = 0.15,
  height = "500px",
  disableOnMobile = true,
}: ParallaxBackgroundProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (disableOnMobile && isMobile) return

    const handleScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect()
        const isVisible = top < window.innerHeight && bottom > 0

        if (isVisible) {
          setScrollPosition(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [disableOnMobile, isMobile])

  const parallaxStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: disableOnMobile && isMobile ? "scroll" : "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    opacity: opacity,
    transform: disableOnMobile && isMobile ? "none" : `translateY(${scrollPosition * 0.1}px)`,
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)} style={{ height }}>
      <div className="absolute inset-0 transition-transform duration-300 ease-out" style={parallaxStyle} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#102A4399] to-[#102A43cc]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
