interface WaveDividerProps {
  flip?: boolean
  color?: string
  backgroundColor?: string
}

export default function WaveDivider({ 
  flip = false, 
  color = '#fff', 
  backgroundColor = '#fff7eb' 
}: WaveDividerProps) {
  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden',
        lineHeight: 0,
        background: backgroundColor
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: 'clamp(40px, 8vw, 80px)',
          display: 'block'
        }}
      >
        <path
          d={flip 
            ? "M0,50 C150,0 350,100 600,50 C850,0 1050,100 1200,50 L1200,120 L0,120 Z"
            : "M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
          }
          fill={color}
        />
      </svg>
    </div>
  )
}
