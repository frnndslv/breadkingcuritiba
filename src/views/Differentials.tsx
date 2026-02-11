import { Row, Col, Card, Typography } from 'antd'

const { Title } = Typography

export default function Differentials() {
  return (
    <section
      id="differentials"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#ffffff' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#B8172E' }}
        >
          Diferenciais
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>B2C</Title>
              <ul style={{ marginLeft: 18, color: '#5c5858', lineHeight: 1.9 }}>
                <li>Produtos frescos</li>
                <li>Atendimento rapido</li>
                <li>Preco acessivel</li>
                <li>Unidades bem localizadas</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ borderRadius: 12, height: '100%' }}>
              <Title level={4}>B2B</Title>
              <ul style={{ marginLeft: 18, color: '#5c5858', lineHeight: 1.9 }}>
                <li>Producao em escala</li>
                <li>Padronizacao</li>
                <li>Logistica organizada</li>
                <li>Marca consolidada</li>
                <li>Suporte comercial</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
