import { Row, Col, Typography, Button } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface EventsProps {
  onWhatsAppClick: () => void
}

export default function Events({ onWhatsAppClick }: EventsProps) {
  return (
    <section
      id="events"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#f9eac9' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <div
              style={{
                height: 'clamp(250px, 50vw, 400px)',
                background: 'linear-gradient(135deg, #c97338 0%, #a54d27 100%)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=1400&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Title
              level={2}
              style={{ color: '#213a36', marginBottom: 24, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}
            >
              Eventos e Empresas
            </Title>
            <Paragraph
              style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 24, color: '#213a36' }}
            >
              Atendimento completo para coffee breaks, eventos corporativos e revendas.
            </Paragraph>
            <ul style={{ fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 2, marginLeft: '18px' }}>
              <li style={{ color: '#213a36' }}>Cardapio personalizado</li>
              <li style={{ color: '#213a36' }}>Entrega programada</li>
              <li style={{ color: '#213a36' }}>Padronizacao e suporte comercial</li>
              <li style={{ color: '#213a36' }}>Atendimento para empresas e eventos</li>
            </ul>
            <Button
              type="primary"
              size="large"
              icon={<WhatsAppOutlined />}
              style={{
                marginTop: 24,
                background: '#213a36',
                borderColor: '#213a36',
                height: 'auto',
                padding: '12px 24px',
                fontSize: 'clamp(14px, 3vw, 16px)',
                color: '#f9eac9',
              }}
              onClick={onWhatsAppClick}
            >
              Fale com o Comercial
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  )
}
