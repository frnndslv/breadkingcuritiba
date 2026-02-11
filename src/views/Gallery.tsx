import { useState } from 'react'
import { Row, Col, Typography, Card } from 'antd'

const { Title, Paragraph } = Typography

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)

  const images = [
    { src: '/src/assets/optimized/BOLO DE POTE 2 AMORES.webp', alt: 'Bolo de Pote - Promoção' },
    { src: '/src/assets/optimized/Bread King Café Julho 2025 Ebraim Martini-747.webp', alt: 'Donuts - Oferta Especial' },
    { src: '/src/assets/optimized/Bread King Julho 2025 Ebraim Martini-392.webp', alt: 'Pães Artesanais - Promoção' },
    { src: '/src/assets/optimized/calabresa (16).webp', alt: 'Pizza - Oferta' },
    { src: '/src/assets/optimized/Bread King Agosto 2025 Ebraim Martini-363.webp', alt: 'Salgados - Combo Promoção' },
    { src: '/src/assets/optimized/Bread King Setembro 2025 Ebraim Martini-497.webp', alt: 'Tortas - Desconto Especial' },
    { src: '/src/assets/optimized/Bread King maio 2025 Ebraim Martini-232.webp', alt: 'Sopas - Promoção de Inverno' },
    { src: '/src/assets/optimized/Bread King Setembro 2025 Ebraim Martini-483.webp', alt: 'Mousse - Oferta' },
  ]

  const activeItem = images[activeIndex] ?? images[0]

  return (
    <section
      id="gallery"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff7eb' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Title
          level={2}
          style={{ color: '#B8172E', marginBottom: 30, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}
        >
          Novidades
        </Title>
        <Paragraph
          style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 40, color: '#5c5858' }}
        >
          Conheça algumas das nossas novidades e ofertas especiais.
        </Paragraph>

        <Row gutter={[18, 18]} style={{ marginTop: 30 }}>
          {images.map((image, index) => (
            <Col xs={12} sm={8} md={6} key={`promo-${index}`}>
              <Card
                hoverable
                style={{
                  borderRadius: 18,
                  overflow: 'hidden',
                  border: '1px solid rgba(184, 23, 46, 0.12)',
                }}
                bodyStyle={{ padding: 0 }}
                cover={
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      backgroundImage: `url('${image.src}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={image.alt}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsFullscreenOpen(true)
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setActiveIndex(index)
                        setIsFullscreenOpen(true)
                      }
                    }}
                  />
                }
              />
            </Col>
          ))}
        </Row>

        {isFullscreenOpen && activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de imagem"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0, 0, 0, 0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(16px, 4vw, 40px)',
            }}
            onClick={() => setIsFullscreenOpen(false)}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setIsFullscreenOpen(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(0, 0, 0, 0.4)',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 22,
                lineHeight: '44px',
              }}
            >
              ×
            </button>
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={(event) => {
                event.stopPropagation()
                setActiveIndex((index) => (index - 1 + images.length) % images.length)
              }}
              style={{
                position: 'absolute',
                left: 18,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(0, 0, 0, 0.4)',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 28,
                lineHeight: '52px',
              }}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Proxima imagem"
              onClick={(event) => {
                event.stopPropagation()
                setActiveIndex((index) => (index + 1) % images.length)
              }}
              style={{
                position: 'absolute',
                right: 18,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(0, 0, 0, 0.4)',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 28,
                lineHeight: '52px',
              }}
            >
              ›
            </button>
            <div
              style={{
                maxWidth: 'min(1200px, 92vw)',
                maxHeight: 'min(820px, 80vh)',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
