import { useEffect, useState } from 'react'
import { Button, Typography, Row, Col } from 'antd'
import bakeryBg from '../assets/cosmetics/bakery_no_background.png'
import { WhatsAppOutlined } from '@ant-design/icons'

const { Title } = Typography

export default function Contact2() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768)

  const b2bMessage = 'Olá, desejo conhecer mais sobre os produtos da bread king (B2B)'
  const b2bWhatsappUrl = `https://wa.me/5541985268755?text=${encodeURIComponent(b2bMessage)}`
  const stores = [
    { name: 'Batel', whatsapp: '5541991932266' },
    { name: 'Jardim Social', whatsapp: '5541991657559' },
    { name: 'Bom Retiro', whatsapp: '5541985403720' },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="contact2"
      style={{
        padding: 'clamp(40px, 10vw, 80px) 20px',
        backgroundColor: '#ffffff',
        color: '#1f1b1b',
        backgroundImage: `linear-gradient(rgba(255, 253, 247, 0.9), rgba(255, 253, 247, 0.9)), url('${bakeryBg}')`,
        backgroundRepeat: 'repeat, repeat',
        backgroundPosition: 'center, top left',
        backgroundSize: 'auto, clamp(220px, 18vw, 320px) auto',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            maxWidth: 1040,
            margin: '0 auto',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(18px, 4vw, 32px)',
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(20px, 4vw, 36px)',
              boxShadow: '0 8px 22px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: 0,
                marginBottom: 18,
                color: '#b70000',
                fontSize: 'clamp(1.7rem, 4.8vw, 3.5rem)',
                lineHeight: 1.08,
                fontWeight: 800,
                fontFamily: 'Montserrat, Sans-serif',
              }}
            >
              Gostaria de se tornar
              <br />
              um de nossos parceiros?
            </Title>
            <div
              style={{
                width: 'min(220px, 60%)',
                height: 2,
                background: '#e5a327',
                marginBottom: 20,
              }}
            />
            <Title
              level={3}
              style={{
                marginTop: 0,
                marginBottom: 14,
                color: '#e5a327',
                fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
                fontWeight: 700,
                fontFamily: 'Montserrat, Sans-serif',
              }}
            >
              Entre em contato agora através do nosso WhatsApp abaixo, e descubra como fazer parte da família Bread King!
            </Title>
            <Button
              type="primary"
              icon={<WhatsAppOutlined />}
              href={b2bWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{marginTop: "15px"}}
            >
              Comercial
            </Button>
          </div>

          <div
            style={{
              position: isMobile ? 'relative' : 'absolute',
              top: isMobile ? 'auto' : '50%',
              left: isMobile ? 'auto' : '50%',
              transform: isMobile ? 'none' : 'translate(-50%, -50%)',
              width: 'clamp(52px, 7vw, 72px)',
              height: 'clamp(52px, 7vw, 72px)',
              borderRadius: '50%',
              background: '#b70000',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontFamily: 'Montserrat, Sans-serif',
              border: '4px solid #ffffff',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              zIndex: 3,
              pointerEvents: 'none',
              margin: isMobile ? '-6px auto' : 0,
            }}
          >
            OU
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              padding: 'clamp(20px, 4vw, 36px)',
              boxShadow: '0 8px 22px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Title
              level={2}
              style={{
                marginTop: 0,
                marginBottom: 18,
                color: '#b70000',
                fontSize: 'clamp(1.7rem, 4.8vw, 3.5rem)',
                lineHeight: 1.08,
                fontWeight: 800,
                fontFamily: 'Montserrat, Sans-serif',
              }}
            >
              Gostaria de pedir agora
              <br />
              nossos produtos para a sua casa?
            </Title>
            <div
              style={{
                width: 'min(220px, 60%)',
                height: 2,
                background: '#e5a327',
                marginBottom: 20,
              }}
            />
            <Title
              level={3}
              style={{
                marginTop: 0,
                marginBottom: 14,
                color: '#e5a327',
                fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
                fontWeight: 700,
                fontFamily: 'Montserrat, Sans-serif',
              }}
            >
              Entre em contato com uma de nossas unidades abaixo e faça seu pedido agora mesmo!
            </Title>
            <Row gutter={[10, 10]} justify="center">
              {stores.map((store) => {
                const message = `Olá, desejo conhecer mais sobre os produtos da Bread King ${store.name}`
                const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`

                return (
                  <Col key={store.name}>
                    <Button
                      type="primary"
                      icon={<WhatsAppOutlined />}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {store.name}
                    </Button>
                  </Col>
                )
              })}
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}
