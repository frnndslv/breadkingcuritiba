import { Row, Col, Card, Typography, Button } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

export default function Stores() {
  const stores = [
    { 
      name: 'Batel', 
      address: 'Rua exemplo, 1400',
      image: '/images/imgLoja1.webp'
    },
    { 
      name: 'Jardim Social', 
      address: 'Rua exemplo, 980',
      image: '/images/IMG-20260112-WA0110.webp'
    },
    { 
      name: 'Bom Retiro', 
      address: 'Rua exemplo, 340',
      image: '/images/imgLoja1.webp'
    },
  ]

  return (
    <section
      id="stores"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff7eb' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
       
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#B8172E' }}
        >
          Lojas / Unidades
        </Title>
        <Paragraph style={{ textAlign: 'center', color: '#5c5858', marginBottom: 32 }}>
          Conveniencia e localizacao estrategica, com informacao clara e objetiva.
        </Paragraph>
        <Row gutter={[24, 24]}>
          {stores.map((store) => (
            <Col key={store.name} xs={24} md={8}>
              <Card style={{ borderRadius: 12, height: '100%' }}>
                <img 
                  src={store.image} 
                  alt={store.name}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }} 
                />
                <Title level={4}>{store.name}</Title>
                <Text type="secondary">{store.address}</Text>
                <div style={{ marginTop: 16 }}>
                  <Button type="primary" icon={<WhatsAppOutlined />}>
                    Entre em contato
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
