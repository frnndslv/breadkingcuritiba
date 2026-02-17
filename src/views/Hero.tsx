import { useEffect, useState } from 'react'
import { Typography, Space, Button } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface HeroProps {
  onReserveClick: () => void
}

const HERO_IMAGES = [
  '/images/BOLO DE POTE 2 AMORES.webp',
  '/images/DONUTS (2).webp',
  '/images/Bread King Setembro 2025 Ebraim Martini-505.webp',
  '/images/Bread King Julho 2025 Ebraim Martini-392.webp',
  '/images/Bread King Setembro 2025 Ebraim Martini-033.webp',
  '/images/Bread King Setembro 2025 Ebraim Martini-061.webp',
  '/images/Bread King Agosto 2025 Ebraim Martini-363.webp',
  '/images/Bread King Julho 2025 Ebraim Martini-142.webp',
  '/images/Bread King Setembro 2025 Ebraim Martini-438.webp',
]

export default function Hero({ onReserveClick }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const b2bMessage = 'Olá, desejo conhecer mais sobre os produtos da bread king (B2B)'
  const b2bWhatsappUrl = `https://wa.me/5541985268755?text=${encodeURIComponent(b2bMessage)}`

  const currentImage = HERO_IMAGES[currentImageIndex] ?? HERO_IMAGES[0]

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) {
      return
    }

    let swapTimeout: number | undefined

    const intervalId = window.setInterval(() => {
      setIsVisible(false)

      swapTimeout = window.setTimeout(() => {
        setCurrentImageIndex((previousIndex) => (previousIndex + 1) % HERO_IMAGES.length)
        setIsVisible(true)
      }, 250)
    }, 3500)

    return () => {
      window.clearInterval(intervalId)

      if (swapTimeout) {
        window.clearTimeout(swapTimeout)
      }
    }
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        padding: '80px 20px 60px',
        textAlign: 'center',
        color: '#fff',
        marginTop: '30px',
        overflow: 'hidden',
        minHeight: '520px',
        backgroundColor: '#2f2f2f',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${currentImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(33, 58, 54, 0.6)',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Title
          style={{
            color: '#ffffff',
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          A primeira padaria congelada do Brasil!
        </Title>
        <Paragraph
          style={{
            color: '#ffffff',
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            marginBottom: 40,
            maxWidth: 800,
            margin: '0 auto 40px',
            padding: '0 10px',
          }}
        >
          
        </Paragraph>
        <Space size="large" wrap style={{ justifyContent: 'center' }}>
          <Button
            type="primary"
            size="large"
            icon={<CalendarOutlined />}
            style={{
              background: '#A20100',
              color: '#ffffff',
              borderColor: '#A20100',
              height: 'auto',
              fontSize: 'clamp(14px, 3vw, 18px)',
              padding: '12px 24px',
            }}
            onClick={onReserveClick}
          >
            Quero pedir agora
          </Button>
          <Button
            size="large"
            ghost
            style={{
              height: 'auto',
              fontSize: 'clamp(14px, 3vw, 18px)',
              padding: '12px 24px',
              borderColor: '#D69A2D',
              color: '#D69A2D',
            }}
            href={b2bWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sou empresa / Revenda
          </Button>
        </Space>
      </div>
    </section>
  )
}
