import { useEffect, useRef, useState } from 'react'
import { Card, Typography } from 'antd'
import bakeryBg from '../assets/cosmetics/bakery_no_background.png'

const { Title, Paragraph } = Typography

type VideoModule = {
  default: string
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

export default function Videos() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [isCompactLayout, setIsCompactLayout] = useState(false)
  const [playerHeight, setPlayerHeight] = useState(0)
  const playerWrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const syncLayout = () => {
      setIsCompactLayout(window.innerWidth < 1100)
    }

    syncLayout()
    window.addEventListener('resize', syncLayout)

    return () => {
      window.removeEventListener('resize', syncLayout)
    }
  }, [])

  useEffect(() => {
    const wrapperElement = playerWrapperRef.current

    if (!wrapperElement) {
      return
    }

    const updateHeight = () => {
      setPlayerHeight(wrapperElement.offsetHeight)
    }

    updateHeight()

    const observer = new ResizeObserver(() => {
      updateHeight()
    })

    observer.observe(wrapperElement)

    return () => {
      observer.disconnect()
    }
  }, [activeVideoIndex, isCompactLayout])

  const activeVideo = videos[activeVideoIndex] ?? videos[0]

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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isCompactLayout ? 'minmax(0, 1fr)' : 'minmax(0, 2fr) minmax(280px, 1fr)',
              gap: 18,
              alignItems: 'start',
            }}
          >
            <div ref={playerWrapperRef}>
              <Card
                style={{
                  borderRadius: 16,
                  border: '1px solid rgba(162, 1, 0, 0.2)',
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
                    aspectRatio: '16 / 9',
                    display: 'block',
                    background: '#000',
                  }}
                />
                <div style={{ padding: '14px 16px' }}>
                  <Title level={4} style={{ margin: 0, color: '#7d1a1a' }}>
                    {activeVideo.title}
                  </Title>
                </div>
              </Card>
            </div>

            <Card
              style={{
                borderRadius: 16,
                border: '1px solid rgba(162, 1, 0, 0.2)',
                overflow: 'hidden',
                height: !isCompactLayout && playerHeight > 0 ? playerHeight : 'auto',
              }}
              bodyStyle={{ padding: 10, height: '100%', display: 'flex' }}
            >
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: 'auto',
                  paddingRight: 4,
                }}
              >
                {videos.map((videoItem, index) => {
                  const isSelected = index === activeVideoIndex

                  return (
                    <button
                      key={videoItem.src}
                      type="button"
                      onClick={() => setActiveVideoIndex(index)}
                      style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '124px minmax(0, 1fr)',
                        gap: 10,
                        border: isSelected ? '2px solid #A20100' : '1px solid rgba(162, 1, 0, 0.15)',
                        borderRadius: 12,
                        background: isSelected ? 'rgba(162, 1, 0, 0.08)' : '#fff',
                        padding: 8,
                        marginBottom: 10,
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
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
                          borderRadius: 8,
                          background: '#111',
                        }}
                      />
                      <div
                        style={{
                          color: '#7d1a1a',
                          fontWeight: 700,
                          lineHeight: 1.3,
                          alignSelf: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {videoItem.title}
                      </div>
                    </button>
                  )
                })}
              </div>
            </Card>
          </div>
        ) : (
          <Paragraph style={{ textAlign: 'center', color: '#b70000' }}>
            Nenhum vídeo encontrado em `assets/videoPrepareEmCasa`.
          </Paragraph>
        )}
      </div>
    </section>
  )
}
