import { useEffect, useState } from 'react'
import { Row, Col, Card, Typography, Button, Tabs } from 'antd'

const { Title } = Typography

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('Confeitaria')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<Record<string, number>>({
    Confeitaria: 1,
    Padaria: 1,
    Pizza: 1,
    Salgados: 1,
    'Sem Gluten': 1,
    Sopas: 1,
  })

  const itemsPerPage = 8

  const categories = {
    Confeitaria: [
      // Bolo de Pote
      {
        title: 'Bolo de Pote 2 Amores',
        image: '/images/BOLO DE POTE 2 AMORES.webp',
      },
      {
        title: 'Bolo de Pote Bombom',
        image: '/images/BOLO DE POTE BOMBOM 180G.webp',
      },
      // Docinhos
      {
        title: 'Docinhos Variados',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-516.webp',
      },
      {
        title: 'Docinhos Gourmet',
        image: '/images/DOCINHOS (11).webp',
      },
      // Donuts
      {
        title: 'Donuts Coloridos',
        image: '/images/Bread King Café Julho 2025 Ebraim Martini-747.webp',
      },
      {
        title: 'Donuts Clássicos',
        image: '/images/DONUTS (2).webp',
      },
      // Mousse
      {
        title: 'Mousse de Chocolate',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-483.webp',
      },
      {
        title: 'Mousse Especial',
        image: '/images/MOUSSE (14).webp',
      },
      // Muffins
      {
        title: 'Muffins Artesanais',
        image: '/images/Bread King 2024 Ebraim Martini-260.webp',
      },
      {
        title: 'Muffins Premium',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-540.webp',
      },
      // Pavê
      {
        title: 'Pavê Especial',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-505.webp',
      },
      // Petit Gateau
      {
        title: 'Petit Gateau',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-618 MANIPULADA.webp',
      },
      // Pudim
      {
        title: 'Pudim Tradicional',
        image: '/images/Bread King Maio 2025 Ebraim Martini-158.webp',
      },
      {
        title: 'Pudim Gourmet',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-512.webp',
      },
      // Torta Alemã
      {
        title: 'Torta Alemã',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-615.webp',
      },
      // Torta de Bolacha
      {
        title: 'Torta de Bolacha',
        image: '/images/LDI_9150.webp',
      },
      // Torta Limão e Chocolate
      {
        title: 'Torta de Limão',
        image: '/images/Bread King maio 2025 Ebraim Martini-020.webp',
      },
      {
        title: 'Torta de Chocolate',
        image: '/images/Bread King maio 2025 Ebraim Martini-052.webp',
      },
      // Tortas Tradicionais
      {
        title: 'Torta Tradicional',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-497.webp',
      },
      {
        title: 'Torta Premium',
        image: '/images/Bread King Setembro 2025 Ebraim Martini-583.webp',
      },
    ],
    Padaria: [
      { title: 'Pães Artesanais', image: '/images/Bread King Julho 2025 Ebraim Martini-392.webp' },
      { title: 'Pão Especial', image: '/images/Bread King maio 2025 Ebraim Martini-179.webp' },
      { title: 'Croissant', image: '/images/Bread King maio 2025 Ebraim Martini-382.webp' },
      { title: 'Pão Francês', image: '/images/Bread King maio 2025 Ebraim Martini-445.webp' },
      { title: 'Pão Integral', image: '/images/Bread King maio 2025 Ebraim Martini-447.webp' },
      { title: 'Pão Caseiro', image: '/images/Bread King maio 2025 Ebraim Martini-457.webp' },
      { title: 'Pão de Forma', image: '/images/Bread King Setembro 2025 Ebraim Martini-030.webp' },
      { title: 'Baguete', image: '/images/Bread King Setembro 2025 Ebraim Martini-033.webp' },
      { title: 'Pão Rústico', image: '/images/Bread King Setembro 2025 Ebraim Martini-035.webp' },
      { title: 'Pão Tradicional', image: '/images/Bread King Setembro 2025 Ebraim Martini-044.webp' },
      { title: 'Ciabatta', image: '/images/Bread King Setembro 2025 Ebraim Martini-053.webp' },
      { title: 'Pão Multigrãos', image: '/images/Bread King Setembro 2025 Ebraim Martini-055.webp' },
      { title: 'Focaccia', image: '/images/Bread King Setembro 2025 Ebraim Martini-061.webp' },
      { title: 'Pão Italiano', image: '/images/Bread King Setembro 2025 Ebraim Martini-067.webp' },
      { title: 'Pão de Leite', image: '/images/Bread King Setembro 2025 Ebraim Martini-069.webp' },
      { title: 'Baguete Integral', image: '/images/Bread King Setembro 2025 Ebraim Martini-076.webp' },
      { title: 'Pão Australiano', image: '/images/Bread King Setembro 2025 Ebraim Martini-083.webp' },
      { title: 'Pão de Centeio', image: '/images/Bread King Setembro 2025 Ebraim Martini-090.webp' },
      { title: 'Brioche', image: '/images/Bread King Setembro 2025 Ebraim Martini-091.webp' },
      { title: 'Pão Campanha', image: '/images/Bread King Setembro 2025 Ebraim Martini-096.webp' },
      { title: 'Pão Massa Madre', image: '/images/Bread King Setembro 2025 Ebraim Martini-104.webp' },
      { title: 'Pão Doce', image: '/images/Bread King Setembro 2025 Ebraim Martini-106.webp' },
      { title: 'Pão de Hambúrguer', image: '/images/Bread King Setembro 2025 Ebraim Martini-109.webp' },
      { title: 'Pão de Hot Dog', image: '/images/Bread King Setembro 2025 Ebraim Martini-112.webp' },
      { title: 'Pão Sírio', image: '/images/Bread King Setembro 2025 Ebraim Martini-114.webp' },
      { title: 'Pão Naan', image: '/images/Bread King Setembro 2025 Ebraim Martini-121.webp' },
      { title: 'Pão de Alho', image: '/images/Bread King Setembro 2025 Ebraim Martini-134.webp' },
      { title: 'Pão Sovado', image: '/images/Bread King Setembro 2025 Ebraim Martini-136.webp' },
      { title: 'Pão de Queijo', image: '/images/Bread King Setembro 2025 Ebraim Martini-140.webp' },
      { title: 'Pão Francês Integral', image: '/images/Bread King Setembro 2025 Ebraim Martini-151.webp' },
      { title: 'Pão de Batata', image: '/images/Bread King Setembro 2025 Ebraim Martini-152.webp' },
      { title: 'Pão Especial Mix', image: '/images/Bread King Setembro 2025 Ebraim Martini-160.webp' },
      { title: 'Pão com Sementes', image: '/images/Bread King Setembro 2025 Ebraim Martini-165.webp' },
      { title: 'Pão de Fermentação Natural', image: '/images/Bread King Setembro 2025 Ebraim Martini-173.webp' },
      { title: 'Pão Artesanal Premium', image: '/images/Bread King Setembro 2025 Ebraim Martini-194.webp' },
      { title: 'Pão Francês Premium', image: '/images/Bread King Setembro 2025 Ebraim Martini-200.webp' },
      { title: 'Pão Caseiro Tradicional', image: '/images/Bread King Setembro 2025 Ebraim Martini-210.webp' },
      { title: 'Pão Colonial', image: '/images/Bread King Setembro 2025 Ebraim Martini-213.webp' },
      { title: 'Pão de Mel', image: '/images/Bread King Setembro 2025 Ebraim Martini-217.webp' },
      { title: 'Pão Tipo Pullman', image: '/images/Bread King Setembro 2025 Ebraim Martini-225.webp' },
      { title: 'Pão de Cereais', image: '/images/Bread King Setembro 2025 Ebraim Martini-231.webp' },
      { title: 'Pão de Aveia', image: '/images/Bread King Setembro 2025 Ebraim Martini-247.webp' },
      { title: 'Pão Fitness', image: '/images/Bread King Setembro 2025 Ebraim Martini-294.webp' },
      { title: 'Pão Low Carb', image: '/images/Bread King Setembro 2025 Ebraim Martini-299.webp' },
      { title: 'Pão Proteico', image: '/images/Bread King Setembro 2025 Ebraim Martini-319.webp' },
    ],
    Pizza: [
      {
        title: 'Pizza Calabresa',
        image: '/images/calabresa (16).webp',
      },
      {
        title: 'Pizza Margherita',
        image: '/images/Cópia de marguerita (11).webp',
      },
      {
        title: 'Pizza Margherita Especial',
        image: '/images/Cópia de marguerita (6).webp',
      },
      {
        title: 'Pizza Pepperoni',
        image: '/images/Cópia de peperoni (2).webp',
      },
      {
        title: 'Pizza Queijo',
        image: '/images/Cópia de queijo (8).webp',
      },
      {
        title: 'Pizza Pepperoni Premium',
        image: '/images/peperoni (7).webp',
      },
    ],
    Salgados: [
      { title: 'Salgado Especial', image: '/images/Bread King Agosto 2025 Ebraim Martini-343.webp' },
      { title: 'Coxinha', image: '/images/Bread King Agosto 2025 Ebraim Martini-363.webp' },
      { title: 'Empadão', image: '/images/Bread King Agosto 2025 Ebraim Martini-373.webp' },
      { title: 'Risoles', image: '/images/Bread King Agosto 2025 Ebraim Martini-390.webp' },
      { title: 'Esfirra', image: '/images/Bread King Agosto 2025 Ebraim Martini-401.webp' },
      { title: 'Kibe', image: '/images/Bread King Agosto 2025 Ebraim Martini-409.webp' },
      { title: 'Pastel', image: '/images/Bread King Julho 2025 Ebraim Martini-096.webp' },
      { title: 'Enroladinho', image: '/images/Bread King Julho 2025 Ebraim Martini-142.webp' },
      { title: 'Croquete', image: '/images/Bread King Julho 2025 Ebraim Martini-145.webp' },
      { title: 'Salgado Assado', image: '/images/Bread King Setembro 2025 Ebraim Martini-351.webp' },
      { title: 'Mini Quiche', image: '/images/Bread King Setembro 2025 Ebraim Martini-358.webp' },
      { title: 'Empada Frango', image: '/images/Bread King Setembro 2025 Ebraim Martini-368.webp' },
      { title: 'Empada Camarão', image: '/images/Bread King Setembro 2025 Ebraim Martini-372.webp' },
      { title: 'Folhado', image: '/images/Bread King Setembro 2025 Ebraim Martini-378.webp' },
      { title: 'Carolinas', image: '/images/Bread King Setembro 2025 Ebraim Martini-385.webp' },
      { title: 'Torta Salgada', image: '/images/Bread King Setembro 2025 Ebraim Martini-396.webp' },
      { title: 'Pastel de Forno', image: '/images/Bread King Setembro 2025 Ebraim Martini-401.webp' },
      { title: 'Mini Pizza', image: '/images/Bread King Setembro 2025 Ebraim Martini-432.webp' },
      { title: 'Bolo Salgado', image: '/images/Bread King Setembro 2025 Ebraim Martini-434 (1).webp' },
      { title: 'Bolinha de Queijo', image: '/images/Bread King Setembro 2025 Ebraim Martini-438.webp' },
      { title: 'Salgado Frito Mix', image: '/images/Bread King Setembro 2025 Ebraim Martini-439.webp' },
      { title: 'Coxinha Catupiry', image: '/images/Bread King Setembro 2025 Ebraim Martini-449.webp' },
      { title: 'Enroladinho de Salsicha', image: '/images/Bread King Setembro 2025 Ebraim Martini-451.webp' },
      { title: 'Mini Cachorro Quente', image: '/images/Bread King Setembro 2025 Ebraim Martini-452.webp' },
      { title: 'Croquete de Carne', image: '/images/Bread King Setembro 2025 Ebraim Martini-624.webp' },
      { title: 'Bolinho de Bacalhau', image: '/images/Bread King Setembro 2025 Ebraim Martini-625.webp' },
      { title: 'Pastel Assado', image: '/images/Bread King Setembro 2025 Ebraim Martini-634.webp' },
      { title: 'Risoles de Camarão', image: '/images/Bread King Setembro 2025 Ebraim Martini-639.webp' },
      { title: 'Esfirra Aberta', image: '/images/Bread King Setembro 2025 Ebraim Martini-641.webp' },
      { title: 'Esfirra Fechada', image: '/images/Bread King Setembro 2025 Ebraim Martini-647.webp' },
      { title: 'Quibe Assado', image: '/images/Bread King Setembro 2025 Ebraim Martini-649.webp' },
      { title: 'Mini Sanduíche', image: '/images/Bread King Setembro 2025 Ebraim Martini-659.webp' },
      { title: 'Mix de Salgados', image: '/images/Bread King Setembro 2025 Ebraim Martini-665.webp' },
    ],
    'Sem Gluten': [
      { title: 'Pão Sem Glúten', image: '/images/20210426_105020.webp' },
      { title: 'Bolo Sem Glúten', image: '/images/20210426_112457.webp' },
      { title: 'Assado Grande', image: '/images/assado-grande2.webp' },
      { title: 'Assado Especial', image: '/images/assado-grande4.webp' },
      { title: 'Assado Grande Premium', image: '/images/assado-grande5.webp' },
      { title: 'Assado Grande Tradicional', image: '/images/assado-grande6.webp' },
      { title: 'Assado Triangular', image: '/images/assado-triangular.webp' },
      { title: 'Assados Pequenos', image: '/images/assados-pequenos.webp' },
      { title: 'Assados Pequenos Mix', image: '/images/assados-pequenos2.webp' },
      { title: 'Assados Pequenos Variados', image: '/images/assados-pequenos3.webp' },
      { title: 'Doguinho', image: '/images/doguinho.webp' },
      { title: 'Salgado Premium', image: '/images/IMG_9610.webp' },
      { title: 'Salgado Especial SG', image: '/images/IMG_9766.webp' },
      { title: 'Rondeli', image: '/images/rondeli2.webp' },
    ],
    Sopas: [
      { title: 'Sopa Especial', image: '/images/Bread King maio 2025 Ebraim Martini-232.webp' },
      { title: 'Sopa Cremosa', image: '/images/Bread King maio 2025 Ebraim Martini-238.webp' },
      { title: 'Creme de Legumes', image: '/images/Bread King maio 2025 Ebraim Martini-257.webp' },
      { title: 'Sopa Caseira', image: '/images/Bread King maio 2025 Ebraim Martini-270.webp' },
      { title: 'Caldeirada', image: '/images/Bread King maio 2025 Ebraim Martini-277.webp' },
      { title: 'Sopa Tradicional', image: '/images/Bread King maio 2025 Ebraim Martini-278.webp' },
      { title: 'Creme Especial', image: '/images/Bread King maio 2025 Ebraim Martini-284.webp' },
      { title: 'Sopa Gourmet', image: '/images/Bread King maio 2025 Ebraim Martini-289.webp' },
      { title: 'Creme de Abóbora', image: '/images/Bread King maio 2025 Ebraim Martini-293.webp' },
      { title: 'Sopa de Legumes', image: '/images/Bread King maio 2025 Ebraim Martini-304.webp' },
      { title: 'Caldo Verde', image: '/images/Bread King maio 2025 Ebraim Martini-309.webp' },
    ],
  }

  const activeItems = categories[activeCategory as keyof typeof categories] ?? []
  const activeItem = activeItems[activeIndex] ?? activeItems[0]
  const currentPageNum = currentPage[activeCategory] || 1
  const totalPages = Math.ceil(activeItems.length / itemsPerPage)
  const startIndex = (currentPageNum - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedItems = activeItems.slice(startIndex, endIndex)

  useEffect(() => {
    if (!isFullscreenOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreenOpen(false)
        return
      }
      if (event.key === 'ArrowLeft') {
        if (!activeItems.length) return
        setActiveIndex((index) => (index - 1 + activeItems.length) % activeItems.length)
      }
      if (event.key === 'ArrowRight') {
        if (!activeItems.length) return
        setActiveIndex((index) => (index + 1) % activeItems.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [activeItems.length, isFullscreenOpen])

  return (
    <section
      id="services"
      style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: 'clamp(16px, 4vw, 28px)', color: '#8b141f' }}
        >
          Produtos
        </Title>
        <div
          style={{
            width: 'min(720px, 90%)',
            height: 1,
            background: 'rgba(184, 23, 46, 0.4)',
            margin: '0 auto clamp(20px, 4vw, 32px)',
          }}
        />
        <Tabs
          centered
          defaultActiveKey="Confeitaria"
          onChange={(key) => {
            setActiveCategory(key)
            setActiveIndex(0)
            setCurrentPage(prev => ({ ...prev, [key]: 1 }))
          }}
          items={Object.entries(categories).map(([category]) => ({
            key: category,
            label: category,
            children: (
              <>
                <Row gutter={[18, 18]}>
                  {paginatedItems.map((item, index) => (
                    <Col key={`${category}-${item.title}`} xs={12} sm={8} md={6}>
                      <Card
                        hoverable
                        style={{
                          borderRadius: 18,
                          overflow: 'hidden',
                          border:
                            activeItem?.title === item.title
                              ? '2px solid #b8172e'
                              : '1px solid rgba(184, 23, 46, 0.12)',
                        }}
                        bodyStyle={{ padding: 0 }}
                        cover={
                          <div
                            style={{
                              width: '100%',
                              aspectRatio: '1 / 1',
                              backgroundImage: `url('${item.image}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              cursor: 'pointer',
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={item.title}
                            onClick={() => {
                              setActiveCategory(category)
                              setActiveIndex(startIndex + index)
                              setIsFullscreenOpen(true)
                            }}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                setActiveCategory(category)
                                setActiveIndex(startIndex + index)
                                setIsFullscreenOpen(true)
                              }
                            }}
                          />
                        }
                      />
                    </Col>
                  ))}
                </Row>
                {totalPages > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32, gap: 16 }}>
                    <Button
                      onClick={() => {
                        setCurrentPage(prev => ({
                          ...prev,
                          [category]: Math.max(1, currentPageNum - 1)
                        }))
                      }}
                      disabled={currentPageNum === 1}
                      size="large"
                    >
                      Anterior
                    </Button>
                    <span style={{ fontSize: 16, fontWeight: 500 }}>
                      Página {currentPageNum} de {totalPages}
                    </span>
                    <Button
                      onClick={() => {
                        setCurrentPage(prev => ({
                          ...prev,
                          [category]: Math.min(totalPages, currentPageNum + 1)
                        }))
                      }}
                      disabled={currentPageNum === totalPages}
                      size="large"
                    >
                      Próxima
                    </Button>
                  </div>
                )}
              </>
            ),
          }))}
        />
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
                if (!activeItems.length) return
                setActiveIndex((index) => (index - 1 + activeItems.length) % activeItems.length)
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
                if (!activeItems.length) return
                setActiveIndex((index) => (index + 1) % activeItems.length)
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
                src={activeItem.image}
                alt={activeItem.title}
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
