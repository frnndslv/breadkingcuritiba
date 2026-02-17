import { Typography } from 'antd'
import bakeryBg from '../assets/cosmetics/bakery_no_background.png'
import videoUltra from '../assets/videopqbread/video_tenologiaultra.mp4'

const { Title } = Typography

export default function InfoUltra() {
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
        <div
          style={{
            maxWidth: 1040,
            margin: '0 auto',
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
              Como garantimos
              <br />
              a qualidade, textura e sabor
              <br />
              do produto fresco
              <br />
              na sua casa ?
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
              Tecnologia de Ultracongelamento
            </Title>
            {/* <div
              style={{
                background: '#e5a327',
                borderRadius: 18,
                padding: 'clamp(14px, 3vw, 20px)',
              }}
            >
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 0,
                  listStyle: 'none',
                  display: 'grid',
                  gap: 10,
                }}
              >
                {[
                  'Praticidade da padaria na sua casa ou no seu negócio.',
                  'Produtos com textura e sabor de feitos na hora.',
                  'Estoque otimizado com zero desperdício.',
                  'Mais agilidade no atendimento ao cliente final.',
                  'Variedade de itens doces e salgados.',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: '#b70000',
                      fontSize: 'clamp(13px, 1.4vw, 18px)',
                      lineHeight: 1.25,
                      fontWeight: 600,
                      fontFamily: 'Montserrat, Sans-serif',
                    }}
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          <div
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.22)',
              minHeight: 0,
              background: '#ffffff',
              display: 'flex',
              width: '100%',
              maxWidth: 430,
              justifySelf: 'center',
            }}
          >
            <video
              src={videoUltra}
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                aspectRatio: '9 / 16',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
