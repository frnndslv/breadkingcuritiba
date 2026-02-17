import { useEffect, useMemo, useState } from 'react'
import { Row, Col, Card, Typography, Button } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'
import ifoodIcon from '../assets/icon/fast-food-outline.svg'
import breadEsquerda from '../assets/cosmetics/bread-esquerda.png'
import breadDireita from '../assets/cosmetics/bread-direita.png'

const { Title, Paragraph, Text } = Typography

const storeImageModules = import.meta.glob<{ default: string }>(
  '../assets/fotoEstabelecimento/*/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
)

const storeImagesByFolder = Object.entries(storeImageModules).reduce<Record<string, string[]>>(
  (acc, [filePath, fileModule]) => {
    const folderMatch = filePath.match(/fotoEstabelecimento\/([^/]+)\//)

    if (!folderMatch) {
      return acc
    }

    const folder = folderMatch[1]

    if (!acc[folder]) {
      acc[folder] = []
    }

    acc[folder].push(fileModule.default)
    acc[folder].sort((a, b) => a.localeCompare(b))

    return acc
  },
  {},
)

type StoreImageCarouselProps = {
  images: string[]
  alt: string
}

function StoreImageCarousel({ images, alt }: StoreImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const currentImage = useMemo(() => images[currentIndex] ?? '/images/imgLoja1.webp', [images, currentIndex])

  useEffect(() => {
    if (images.length <= 1) {
      return
    }

    let swapTimeout: number | undefined

    const intervalId = window.setInterval(() => {
      setIsVisible(false)

      swapTimeout = window.setTimeout(() => {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length)
        setIsVisible(true)
      }, 250)
    }, 3500)

    return () => {
      window.clearInterval(intervalId)

      if (swapTimeout) {
        window.clearTimeout(swapTimeout)
      }
    }
  }, [images.length])

  return (
    <img
      src={currentImage}
      alt={alt}
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        border: '1px solid #000000',
        marginBottom: '16px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    />
  )
}

export default function Stores() {
  const stores = [
    { 
      name: 'Batel', 
      address: 'Rua Gonçalves Dias, 763',
      folder: 'batel',
      whatsapp: '5541991932266',
      ifood: 'https://www.ifood.com.br/delivery/curitiba-pr/bread-king---batel-batel/bfc92f45-f9d6-42f8-a702-d20b197bfe96'
    },
    { 
      name: 'Jardim Social', 
      address: 'Rua Fagundes Varela, 1487 ',
      folder: 'jardimsocial',
      whatsapp: '5541991657559',
      ifood: 'https://www.ifood.com.br/delivery/curitiba-pr/bread-king---jardim-social-bacacheri/7c7eef45-8ad2-48d1-9608-e20272efb990'
    },
    { 
      name: 'Bom Retiro', 
      address: 'Rua Carlos Pioli, 298',
      folder: 'bomretiro',
      whatsapp: '5541985403720',
      ifood: 'https://www.ifood.com.br/delivery/curitiba-pr/bread-king---bom-retiro-bom-retiro/67679071-5947-4342-b0b5-031b8c942d6e'
    },
  ]

  return (
    <section
      id="stores"
      style={{
        padding: 'clamp(40px, 10vw, 80px) clamp(20px, 6vw, 120px)',
        backgroundColor: '#ffffff',
        backgroundImage: `url('${breadEsquerda}'), url('${breadDireita}')`,
        backgroundPosition: 'left center, right center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'clamp(80px, 14vw, 220px) auto, clamp(80px, 14vw, 220px) auto',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
       
        <Title
          level={2}
          style={{ textAlign: 'center', fontSize:'60px', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#b70000' }}
        >
          Conheça nossas unidades
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '20px', maxWidth: '800px', margin: '0 auto 32px', color: '#b70000' }}>
          Fique à vontade para visitar ou entrar em contato com nossas unidades atendimento presencial ou online, de segunda a sábado das 8 da manhã às 20 da noite
        </Paragraph>
        <Row gutter={[24, 24]}>
          {stores.map((store) => (
            <Col key={store.name} xs={24} md={8}>
              {(() => {
                const message = `Olá, desejo conhecer mais sobre os produtos da Bread King ${store.name}`
                const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`
                const storeImages = storeImagesByFolder[store.folder] ?? []

                return (
              <Card style={{ borderRadius: 12, height: '100%', backgroundColor: '#e5a327', border: '3px solid #b70000' }}>
                <StoreImageCarousel images={storeImages} alt={store.name} />
                <Title level={4} style={{ color: '#b70000' }}>{store.name}</Title>
                <Text style={{ color: '#b70000' }}>{store.address}</Text>
                <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Button
                    type="primary"
                    icon={<WhatsAppOutlined />}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    type="primary"
                    icon={(
                      <img
                        src={ifoodIcon}
                        alt="iFood"
                        style={{ width: 14, height: 14, marginBottom: '5px', filter: 'brightness(0) saturate(100%) invert(100%)' }}
                      />
                    )}
                    href={store.ifood}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iFood
                  </Button>
                </div>
              </Card>
                )
              })()}
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
