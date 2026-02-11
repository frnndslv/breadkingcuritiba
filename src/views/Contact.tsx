import { WhatsAppOutlined } from '@ant-design/icons'
import { Row, Col, Card, Typography, Button, Space, Select } from 'antd'

const { Title, Text } = Typography

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#ffffff', color: '#1f1b1b' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#B8172E', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}
        >
          Entre em Contato
        </Title>
        <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>Contato para Pedidos</Title>
              <Text>Duvidas sobre pedidos, produtos e unidades.</Text>
               <Select
                placeholder="Selecione a filial"
                style={{ width: '100%', marginTop: 12 }}
                options={[
                  { value: 'batel', label: 'Loja Batel' },
                  { value: 'jardim-social', label: 'Loja Jardim Social' },
                  { value: 'bom-retiro', label: 'Loja Bom Retiro' },
                ]}
              />
              <Space style={{ marginTop: 16 }}>
                <Button type="primary" icon={<WhatsAppOutlined />}>Quero pedir agora</Button>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>Contato Comercial</Title>
              <Text>Solicite proposta para revenda, cafeterias e empresas.</Text>
              <Select
                placeholder="Selecione a filial"
                style={{ width: '100%', marginTop: 12 }}
                options={[
                  { value: 'batel', label: 'Loja Batel' },
                  { value: 'jardim-social', label: 'Loja Jardim Social' },
                  { value: 'bom-retiro', label: 'Loja Bom Retiro' },
                ]}
              />
              <Space style={{ marginTop: 16 }}>
                <Button type="primary" icon={<WhatsAppOutlined />}>Falar com o comercial</Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
