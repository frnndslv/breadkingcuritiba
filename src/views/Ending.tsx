import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import endingBg from '../assets/fotoEnding/endingfoto.jpg'

const { Title } = Typography

export default function Ending() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const syncScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }

    syncScreen()
    window.addEventListener('resize', syncScreen)

    return () => {
      window.removeEventListener('resize', syncScreen)
    }
  }, [])

  return (
    <section
      id="ending"
      style={{
        padding: '100px',
        backgroundColor: '#fffdf7',
        backgroundImage: `linear-gradient(rgba(255, 253, 247, 0.65), rgba(255, 253, 247, 0.65)), url('${endingBg}')`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center, center',
        backgroundSize: 'cover, cover',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title
          level={2}
          style={{
            textAlign: 'center',
            fontSize: isMobile ? 'clamp(34px, 9vw, 52px)' : '80px',
            marginBottom: 0,
            color: '#8b141f',
          }}
        >
          Vem para a Bread King você também!
        </Title>
      </div>
    </section>
  )
}
