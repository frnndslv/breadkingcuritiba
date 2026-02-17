import { ConfigProvider, Layout, Menu, Typography } from 'antd'
import { FacebookOutlined, InstagramOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import './App.css'
import Hero from './views/Hero.tsx'
import Services from './views/Services.tsx'
import Stores from './views/Stores.tsx'
import About from './views/About.tsx'
import WaveDivider from './components/WaveDivider.tsx'
import InfoSeller from './views/InfoSeller.tsx'
import InfoUltra from './views/InfoUltra.tsx'
import Contact2 from './views/Contact2.tsx'
import Videos from './views/Videos.tsx'

const { Header, Content, Footer } = Layout
const { Text } = Typography

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#B8172E',
          colorText: '#1f1b1b',
          fontFamily: "'PT Sans', Tahoma, sans-serif",
        },
        components: {
          Button: {
            colorPrimary: '#A20100',
            colorPrimaryHover: '#A20100',
            colorPrimaryActive: '#A20100',
          },
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 99,
            width: '100%',
            background: '#A20100',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '0 16px',
            height: '120px',
          }}
        >
          <div className="bk-header">
            <div className="bk-brand">
              <img src="/images/logomarcaSemFundo.webp" alt="Bread King" style={{ height: '100px' }} />
            </div>
            <Menu
              mode="horizontal"
              className="bk-menu"
              style={{ 
                border: 'none', 
                background: 'transparent', 
                minWidth: 'auto',
                flex: 1,
                justifyContent: 'center',
                display: 'flex',
                marginRight: "100px",
                fontSize: '21px',
              }}
              selectedKeys={[]}
            >
              <Menu.Item key="home" onClick={() => scrollToSection('home')}>
                Inicio
              </Menu.Item>
              <Menu.Item key="about" onClick={() => scrollToSection('about')}>
                Sobre
              </Menu.Item>
              <Menu.Item key="services" onClick={() => scrollToSection('services')}>
                Produtos
              </Menu.Item>
              <Menu.Item key="videos" onClick={() => scrollToSection('videos')}>
                Videos
              </Menu.Item>
              <Menu.Item key="stores" onClick={() => scrollToSection('stores')}>
                Lojas
              </Menu.Item>
              <Menu.Item key="contact" onClick={() => scrollToSection('contact2')}>
                Contato
              </Menu.Item>
            </Menu>
          </div>
        </Header>

        <Content style={{ marginTop: 90 }}>
          <Hero
            onReserveClick={() => scrollToSection('contact2')}
          />
          <InfoSeller/>
          <About />
          <InfoUltra/>
          <Services />
          <Videos />
          <WaveDivider color="#ffffff" backgroundColor="#fffdf7" flip />
          <Stores />
          <WaveDivider color="#fffdf7" backgroundColor="#ffffff" />
          <Contact2 />
        </Content>

        <Footer className="bk-footer">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '20px',
            marginLeft: '220px'
          }}>
            <Text className="bk-footer-text" style={{ flex: 1, textAlign: 'center' }}>
              Bread King Curitiba © {new Date().getFullYear()} - Todos os direitos reservados
            </Text>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a 
                  href="https://www.facebook.com/profile.php?id=61572708503959" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#EBA82C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '20px',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <FacebookOutlined />
                </a>
                <a 
                  href="https://www.instagram.com/breadkingcuritiba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: '#EBA82C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '20px',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <InstagramOutlined />
                </a>
              </div>
              <a 
                href="tel:+5541985268755" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#EBA82C',
                  textDecoration: 'none',
                  fontSize: 'clamp(12px, 3vw, 14px)'
                }}
              >
                <PhoneOutlined /> 41 98526-8755
              </a>
              <a 
                href="mailto:comercial@breadkingcuritiba" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#EBA82C',
                  textDecoration: 'none',
                  fontSize: 'clamp(12px, 3vw, 14px)'
                }}
              >
                <MailOutlined /> comercial@breadkingcuritiba
              </a>
            </div>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
