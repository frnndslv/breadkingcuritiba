import { WhatsAppOutlined } from '@ant-design/icons'
import { Row, Col, Card, Typography, Button, Space } from 'antd'
import bakeryBg from '../assets/cosmetics/bakery_no_background.png'

const { Title, Text } = Typography

export default function Contact() {
  const b2bMessage = 'Olá, desejo conhecer mais sobre os produtos da bread king (B2B)'
  const b2bWhatsappUrl = `https://wa.me/5541985268755?text=${encodeURIComponent(b2bMessage)}`

  return (
    <section
      id="contact"
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
        <Title
          level={2}
          style={{ textAlign: 'center', fontSize:'40px', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#B8172E' }}
        >
          Como se tornar um dos nossos parceiros
        </Title>
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 32 }}>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>Quer se tornar um parceiro?</Title>
              <Text>Entre em contato com nosso time B2B e conheça todos os produtos da nossa linha</Text>
              <Space style={{ marginTop: 16 }}>
                <Button
                  type="primary"
                  icon={<WhatsAppOutlined />}
                  href={b2bWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com o comercial
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
