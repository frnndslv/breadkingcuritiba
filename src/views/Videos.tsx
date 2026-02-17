import { useEffect, useMemo, useState } from 'react'
import { Row, Col, Card, Typography, Button } from 'antd'
import bakeryBg from '../assets/cosmetics/bakery_no_background.png'

const { Title, Paragraph } = Typography

type VideoModule = {
  default: string
}

type VideoItem = {
  title: string
  src: string
}

const videoModules = import.meta.glob<VideoModule>('../assets/videoPrepareEmCasa/*.{mp4,webm,mov,m4v}', {
  eager: true,
})

const videos = Object.entries(videoModules)
  .map(([, videoModule], index) => {
    switch (index) {
      case 0:
        return {
          title: 'Mini Croissant Chocolate Preto',
          src: videoModule.default,
        }
      case 1:
        return {
          title: 'Mini Pão Francês Pré Assado',
          src: videoModule.default,
        }
      case 2:
        return {
          title: 'Mini Pasteis de Nata',
          src: videoModule.default,
        }
      case 3:
        return {
          title: 'Pão Francês Pré Assado',
          src: videoModule.default,
        }
      case 4:
        return {
          title: 'Pão de Queijo',
          src: videoModule.default,
        }
      case 5:
        return {
          title: 'Pão Mini Sovadinho',
          src: videoModule.default,
        }
      default:
        return {
          title: `Título placeholder ${index + 1}`,
          src: videoModule.default,
        }
    }
  })
  .sort((left, right) => left.title.localeCompare(right.title))

function chunkVideos(list: VideoItem[], chunkSize: number) {
  const chunks: VideoItem[][] = []

  for (let index = 0; index < list.length; index += chunkSize) {
    chunks.push(list.slice(index, index + chunkSize))
  }

  return chunks
}

export default function Videos() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1)
        return
      }

      if (window.innerWidth < 1100) {
        setItemsPerSlide(2)
        return
      }

      setItemsPerSlide(3)
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)

    return () => {
      window.removeEventListener('resize', updateItemsPerSlide)
    }
  }, [])

  const activeVideo = videos[activeVideoIndex] ?? videos[0]
  const videoSlides = useMemo(() => chunkVideos(videos, itemsPerSlide), [itemsPerSlide])
  const totalSlides = videoSlides.length
  const visibleSlide = videoSlides[currentSlide] ?? []

  return (
    <section
      id="videos"
      style={{
        padding: 'clamp(40px, 10vw, 80px) 20px',
        backgroundColor: '#fffdf7',
        backgroundImage: `linear-gradient(rgba(255, 253, 247, 0.9), rgba(255, 253, 247, 0.9)), url('${bakeryBg}')`,
        backgroundRepeat: 'repeat, repeat',
        backgroundPosition: 'center, top left',
        backgroundSize: 'auto, clamp(220px, 18vw, 320px) auto',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title
          level={2}
          style={{ textAlign: 'center', fontSize: '60px', marginBottom: 'clamp(16px, 4vw, 28px)', color: '#b70000' }}
        >
          Métodos de preparo em casa
        </Title>
        <Paragraph
          style={{
            textAlign: 'center',
            color: '#b70000',
            maxWidth: 820,
            margin: '0 auto 26px',
            fontSize: '20px'
          }}
        >
          Assista agora alguns dos nossos vídeos exclusivos com dicas de preparo para você aproveitar ao máximo nossos produtos
        </Paragraph>

        {activeVideo ? (
          <Card
            style={{
              borderRadius: 16,
              border: '1px solid rgba(162, 1, 0, 0.2)',
              marginBottom: 28,
              overflow: 'hidden',
            }}
            bodyStyle={{ padding: 0 }}
          >
            <video
              key={activeVideo.src}
              src={activeVideo.src}
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                maxHeight: 'min(72vh, 680px)',
                display: 'block',
                background: '#000',
              }}
            />
          </Card>
        ) : (
          <Paragraph style={{ textAlign: 'center', color: '#b70000' }}>
            Nenhum vídeo encontrado em `assets/videoPrepareEmCasa`.
          </Paragraph>
        )}

        {videos.length > 0 && (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <Button
                onClick={() => setCurrentSlide((previous) => Math.max(0, previous - 1))}
                disabled={currentSlide === 0}
              >
                Anterior
              </Button>
              <span style={{ color: '#b70000', fontWeight: 700 }}>
                {totalSlides === 0 ? 0 : currentSlide + 1} / {totalSlides}
              </span>
              <Button
                onClick={() => setCurrentSlide((previous) => Math.min(totalSlides - 1, previous + 1))}
                disabled={currentSlide >= totalSlides - 1}
              >
                Próximo
              </Button>
            </div>

            <Row gutter={[16, 16]}>
              {visibleSlide.map((videoItem) => {
                const currentIndex = videos.findIndex((entry) => entry.src === videoItem.src)
                const isSelected = currentIndex === activeVideoIndex

                return (
                  <Col key={videoItem.src} xs={24} sm={12} md={itemsPerSlide === 3 ? 8 : 12}>
                    <Card
                      hoverable
                      style={{
                        borderRadius: 14,
                        border: isSelected
                          ? '2px solid #A20100'
                          : '1px solid rgba(162, 1, 0, 0.15)',
                      }}
                      bodyStyle={{ padding: 12 }}
                      onClick={() => setActiveVideoIndex(currentIndex)}
                    >
                      <video
                        src={videoItem.src}
                        muted
                        playsInline
                        preload="metadata"
                        style={{
                          width: '100%',
                          aspectRatio: '16 / 9',
                          objectFit: 'cover',
                          borderRadius: 10,
                          background: '#111',
                        }}
                      />
                      <Paragraph
                        style={{
                          margin: '10px 0 0',
                          color: '#7d1a1a',
                          textAlign: 'center',
                          fontWeight: 700,
                        }}
                      >
                        {videoItem.title}
                      </Paragraph>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </>
        )}
      </div>
    </section>
  )
}
