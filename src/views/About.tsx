import { Typography, Divider } from 'antd'

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#ffffff' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <Title
          level={2}
          style={{ color: '#B8172E', marginBottom: 30, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}
        >
          Sobre Nos
        </Title>
        <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8 }}>
          A Bread King Curitiba faz parte da maior rede de padaria congelada do Brasil.
          Levamos sabor artesanal e praticidade para consumidores e empresas.
        </Paragraph>
        <Divider />
        <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8 }}>
          Nossa operacao garante padrao, variedade e suporte comercial para revendas,
          cafeterias e empresas em Curitiba e regiao.
        </Paragraph>
      </div>
    </section>
  )
}
