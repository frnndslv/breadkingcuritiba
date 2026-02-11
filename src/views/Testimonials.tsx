import { Row, Col, Card, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff7eb' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#B8172E' }}
        >
          Depoimentos
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>Consumidores</Title>
              <Paragraph>
                "Produtos sempre frescos e atendimento rapido. Virou rotina aqui em casa."
              </Paragraph>
              <Text type="secondary">Cliente Bread King</Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>Empresas / Parceiros</Title>
              <Paragraph>
                "Padronizacao impecavel e entrega organizada. Facilita muito nossa operacao."
              </Paragraph>
              <Text type="secondary">Empresa parceira</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
