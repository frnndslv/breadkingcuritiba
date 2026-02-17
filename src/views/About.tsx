import { Typography, Divider } from 'antd'
import breadKing from '../assets/cosmetics/breadKing.png'

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(36px, 8vw, 72px) 20px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)), url('${breadKing}')`,
        backgroundRepeat: 'repeat, repeat',
        backgroundPosition: 'center, top left',
        backgroundSize: 'auto, clamp(220px, 20vw, 360px) auto',
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          textAlign: 'center',
          background: '#b70000',
          borderRadius: 28,
          borderBottom: '12px solid #e5a327',
          padding: 'clamp(28px, 6vw, 52px) clamp(18px, 5vw, 52px)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.32)',
        }}
      >
        <Title
          level={2}
          style={{ color: '#ffffff', marginBottom: 24, fontSize: 'clamp(1.6rem, 4.5vw, 3rem)', lineHeight: 1.1 }}
        >
          Sobre a
          <br />
          Bread King Curitiba
        </Title>
        <Divider style={{ borderColor: '#e5a327', margin: '0 0 28px' }} />
        <Paragraph style={{ fontSize: 'clamp(15px, 2.2vw, 24px)', lineHeight: 1.45, color: '#ffffff', marginBottom: 14, fontWeight: 400 }}>
          Com alimentos ultracongelados de alto padrão, a Bread King oferece o verdadeiro sabor artesanal para a sua casa ou para o seu negócio. A Bread King Curitiba faz parte da rede oficial de Lojas de Fábrica Bread King, que conta com mais de 40 unidades espalhadas pelo Brasil e possui mais de quatro décadas de tradição no mercado.
        </Paragraph>
        <Paragraph style={{ fontSize: 'clamp(15px, 2.2vw, 24px)', lineHeight: 1.45, color: '#ffffff', marginBottom: 0, fontWeight: 400 }}>
          Proporcionando a praticidade para o seu dia a dia com qualidade artesanal que remete à sensação de produtos da padaria fresquinhos em sua casa ou estabelecimento.
          Contamos com mais de 200 opções, incluindo pães, bolos, tortas, salgados, croissants e diversas outras especialidades. 
        </Paragraph>
        <Paragraph style={{ fontSize: 'clamp(15px, 2.2vw, 24px)', lineHeight: 1.45, color: '#ffffff', marginBottom: 14, fontWeight: 400 }}>
          Atendemos cafeterias, hotéis, supermercados, buffets, restaurantes e empresas em geral, com foco no mercado B2B e uma logística ágil e eficiente.
        </Paragraph>
      </div>
    </section>
  )
}
