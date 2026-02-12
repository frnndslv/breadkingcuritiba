import { Typography, Space, Button } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface HeroProps {
  onReserveClick: () => void
}

export default function Hero({ onReserveClick }: HeroProps) {
  const b2bMessage = 'Olá, desejo conhecer mais sobre os produtos da bread king (B2B)'
  const b2bWhatsappUrl = `https://wa.me/5541985268755?text=${encodeURIComponent(b2bMessage)}`

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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
              background: '#B8172E',
              color: '#ffffff',
              borderColor: '#B8172E',
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
