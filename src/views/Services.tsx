import { useEffect, useState } from 'react'
import { Row, Col, Card, Typography, Space, Button, Tabs } from 'antd'

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
        image: '/src/assets/img/comidas/confeitaria/bolodepote/BOLO DE POTE 2 AMORES.jpg',
      },
      {
        title: 'Bolo de Pote Bombom',
        image: '/src/assets/img/comidas/confeitaria/bolodepote/BOLO DE POTE BOMBOM 180G.jpg',
      },
      // Docinhos
      {
        title: 'Docinhos Variados',
        image: '/src/assets/img/comidas/confeitaria/docinhos/Bread King Setembro 2025 Ebraim Martini-516.jpg',
      },
      {
        title: 'Docinhos Gourmet',
        image: '/src/assets/img/comidas/confeitaria/docinhos/DOCINHOS (11).jpg',
      },
      // Donuts
      {
        title: 'Donuts Coloridos',
        image: '/src/assets/img/comidas/confeitaria/donuts/Bread King Café Julho 2025 Ebraim Martini-747.jpg',
      },
      {
        title: 'Donuts Clássicos',
        image: '/src/assets/optimized/donuts/DONUTS (2).webp',
      },
      // Mousse
      {
        title: 'Mousse de Chocolate',
        image: '/src/assets/img/comidas/confeitaria/mousse/Bread King Setembro 2025 Ebraim Martini-483.jpg',
      },
      {
        title: 'Mousse Especial',
        image: '/src/assets/img/comidas/confeitaria/mousse/MOUSSE (14).jpg',
      },
      // Muffins
      {
        title: 'Muffins Artesanais',
        image: '/src/assets/img/comidas/confeitaria/muffins/Bread King 2024 Ebraim Martini-260.jpg',
      },
      {
        title: 'Muffins Premium',
        image: '/src/assets/img/comidas/confeitaria/muffins/Bread King Setembro 2025 Ebraim Martini-540.jpg',
      },
      // Pavê
      {
        title: 'Pavê Especial',
        image: '/src/assets/img/comidas/confeitaria/pave/Bread King Setembro 2025 Ebraim Martini-505.jpg',
      },
      // Petit Gateau
      {
        title: 'Petit Gateau',
        image: '/src/assets/img/comidas/confeitaria/petitgateau/Bread King Setembro 2025 Ebraim Martini-618 MANIPULADA.jpg',
      },
      // Pudim
      {
        title: 'Pudim Tradicional',
        image: '/src/assets/img/comidas/confeitaria/pudim/Bread King Maio 2025 Ebraim Martini-158.jpg',
      },
      {
        title: 'Pudim Gourmet',
        image: '/src/assets/img/comidas/confeitaria/pudim/Bread King Setembro 2025 Ebraim Martini-512.jpg',
      },
      // Torta Alemã
      {
        title: 'Torta Alemã',
        image: '/src/assets/img/comidas/confeitaria/tortaalema/Bread King Setembro 2025 Ebraim Martini-615.jpg',
      },
      // Torta de Bolacha
      {
        title: 'Torta de Bolacha',
        image: '/src/assets/img/comidas/confeitaria/tortadebolacha/LDI_9150.jpg',
      },
      // Torta Limão e Chocolate
      {
        title: 'Torta de Limão',
        image: '/src/assets/img/comidas/confeitaria/tortalimaoelimaochoco/Bread King maio 2025 Ebraim Martini-020.jpg',
      },
      {
        title: 'Torta de Chocolate',
        image: '/src/assets/img/comidas/confeitaria/tortalimaoelimaochoco/Bread King maio 2025 Ebraim Martini-052.jpg',
      },
      // Tortas Tradicionais
      {
        title: 'Torta Tradicional',
        image: '/src/assets/img/comidas/confeitaria/tortastradicionais/Bread King Setembro 2025 Ebraim Martini-497.jpg',
      },
      {
        title: 'Torta Premium',
        image: '/src/assets/img/comidas/confeitaria/tortastradicionais/Bread King Setembro 2025 Ebraim Martini-583.jpg',
      },
    ],
    Padaria: [
      { title: 'Pães Artesanais', image: '/src/assets/img/comidas/padaria/Bread King Julho 2025 Ebraim Martini-392.jpg' },
      { title: 'Pão Especial', image: '/src/assets/img/comidas/padaria/Bread King maio 2025 Ebraim Martini-179.jpg' },
      { title: 'Croissant', image: '/src/assets/img/comidas/padaria/Bread King maio 2025 Ebraim Martini-382.jpg' },
      { title: 'Pão Francês', image: '/src/assets/img/comidas/padaria/Bread King maio 2025 Ebraim Martini-445.jpg' },
      { title: 'Pão Integral', image: '/src/assets/img/comidas/padaria/Bread King maio 2025 Ebraim Martini-447.jpg' },
      { title: 'Pão Caseiro', image: '/src/assets/img/comidas/padaria/Bread King maio 2025 Ebraim Martini-457.jpg' },
      { title: 'Pão de Forma', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-030.jpg' },
      { title: 'Baguete', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-033.jpg' },
      { title: 'Pão Rústico', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-035.jpg' },
      { title: 'Pão Tradicional', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-044.jpg' },
      { title: 'Ciabatta', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-053.jpg' },
      { title: 'Pão Multigrãos', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-055.jpg' },
      { title: 'Focaccia', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-061.jpg' },
      { title: 'Pão Italiano', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-067.jpg' },
      { title: 'Pão de Leite', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-069.jpg' },
      { title: 'Baguete Integral', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-076.jpg' },
      { title: 'Pão Australiano', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-083.jpg' },
      { title: 'Pão de Centeio', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-090.jpg' },
      { title: 'Brioche', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-091.jpg' },
      { title: 'Pão Campanha', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-096.jpg' },
      { title: 'Pão Massa Madre', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-104.jpg' },
      { title: 'Pão Doce', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-106.jpg' },
      { title: 'Pão de Hambúrguer', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-109.jpg' },
      { title: 'Pão de Hot Dog', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-112.jpg' },
      { title: 'Pão Sírio', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-114.jpg' },
      { title: 'Pão Naan', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-121.jpg' },
      { title: 'Pão de Alho', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-134.jpg' },
      { title: 'Pão Sovado', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-136.jpg' },
      { title: 'Pão de Queijo', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-140.jpg' },
      { title: 'Pão Francês Integral', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-151.jpg' },
      { title: 'Pão de Batata', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-152.jpg' },
      { title: 'Pão Especial Mix', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-160.jpg' },
      { title: 'Pão com Sementes', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-165.jpg' },
      { title: 'Pão de Fermentação Natural', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-173.jpg' },
      { title: 'Pão Artesanal Premium', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-194.jpg' },
      { title: 'Pão Francês Premium', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-200.jpg' },
      { title: 'Pão Caseiro Tradicional', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-210.jpg' },
      { title: 'Pão Colonial', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-213.jpg' },
      { title: 'Pão de Mel', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-217.jpg' },
      { title: 'Pão Tipo Pullman', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-225.jpg' },
      { title: 'Pão de Cereais', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-231.jpg' },
      { title: 'Pão de Aveia', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-247.jpg' },
      { title: 'Pão Fitness', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-294.jpg' },
      { title: 'Pão Low Carb', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-299.jpg' },
      { title: 'Pão Proteico', image: '/src/assets/img/comidas/padaria/Bread King Setembro 2025 Ebraim Martini-319.jpg' },
    ],
    Pizza: [
      {
        title: 'Pizza Calabresa',
        image: '/src/assets/img/comidas/pizza/calabresa (16).jpg',
      },
      {
        title: 'Pizza Margherita',
        image: '/src/assets/img/comidas/pizza/Cópia de marguerita (11).jpg',
      },
      {
        title: 'Pizza Margherita Especial',
        image: '/src/assets/img/comidas/pizza/Cópia de marguerita (6).jpg',
      },
      {
        title: 'Pizza Pepperoni',
        image: '/src/assets/img/comidas/pizza/Cópia de peperoni (2).jpg',
      },
      {
        title: 'Pizza Queijo',
        image: '/src/assets/img/comidas/pizza/Cópia de queijo (8).jpg',
      },
      {
        title: 'Pizza Pepperoni Premium',
        image: '/src/assets/img/comidas/pizza/peperoni (7).jpg',
      },
    ],
    Salgados: [
      { title: 'Salgado Especial', image: '/src/assets/img/comidas/salgados/Bread King Agosto 2025 Ebraim Martini-343.jpg' },
      { title: 'Coxinha', image: '/src/assets/img/comidas/salgados/Bread King Agosto 2025 Ebraim Martini-363.jpg' },
      { title: 'Empadão', image: '/src/assets/img/comidas/salgados/Bread King Agosto 2025 Ebraim Martini-373.jpg' },
      { title: 'Risoles', image: '/src/assets/img/comidas/salgados/Bread King Agosto 2025 Ebraim Martini-390.jpg' },
      { title: 'Esfirra', image: '/src/assets/img/comidas/salgados/Bread King Agosto 2025 Ebraim Martini-401.jpg' },
      { title: 'Kibe', image: '/src/assets/img/comidas/salgados/Bread King Agosto 2025 Ebraim Martini-409.jpg' },
      { title: 'Pastel', image: '/src/assets/img/comidas/salgados/Bread King Julho 2025 Ebraim Martini-096.jpg' },
      { title: 'Enroladinho', image: '/src/assets/img/comidas/salgados/Bread King Julho 2025 Ebraim Martini-142.jpg' },
      { title: 'Croquete', image: '/src/assets/img/comidas/salgados/Bread King Julho 2025 Ebraim Martini-145.jpg' },
      { title: 'Salgado Assado', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-351.jpg' },
      { title: 'Mini Quiche', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-358.jpg' },
      { title: 'Empada Frango', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-368.jpg' },
      { title: 'Empada Camarão', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-372.jpg' },
      { title: 'Folhado', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-378.jpg' },
      { title: 'Carolinas', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-385.jpg' },
      { title: 'Torta Salgada', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-396.jpg' },
      { title: 'Pastel de Forno', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-401.jpg' },
      { title: 'Mini Pizza', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-432.jpg' },
      { title: 'Bolo Salgado', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-434 (1).jpg' },
      { title: 'Bolinha de Queijo', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-438.jpg' },
      { title: 'Salgado Frito Mix', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-439.jpg' },
      { title: 'Coxinha Catupiry', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-449.jpg' },
      { title: 'Enroladinho de Salsicha', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-451.jpg' },
      { title: 'Mini Cachorro Quente', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-452.jpg' },
      { title: 'Croquete de Carne', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-624.jpg' },
      { title: 'Bolinho de Bacalhau', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-625.jpg' },
      { title: 'Pastel Assado', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-634.jpg' },
      { title: 'Risoles de Camarão', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-639.jpg' },
      { title: 'Esfirra Aberta', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-641.jpg' },
      { title: 'Esfirra Fechada', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-647.jpg' },
      { title: 'Quibe Assado', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-649.jpg' },
      { title: 'Mini Sanduíche', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-659.jpg' },
      { title: 'Mix de Salgados', image: '/src/assets/img/comidas/salgados/Bread King Setembro 2025 Ebraim Martini-665.jpg' },
    ],
    'Sem Gluten': [
      { title: 'Pão Sem Glúten', image: '/src/assets/img/comidas/semgluten/20210426_105020.jpg' },
      { title: 'Bolo Sem Glúten', image: '/src/assets/img/comidas/semgluten/20210426_112457.jpg' },
      { title: 'Assado Grande', image: '/src/assets/img/comidas/semgluten/assado-grande2.JPG' },
      { title: 'Assado Especial', image: '/src/assets/img/comidas/semgluten/assado-grande4.JPG' },
      { title: 'Assado Grande Premium', image: '/src/assets/img/comidas/semgluten/assado-grande5.JPG' },
      { title: 'Assado Grande Tradicional', image: '/src/assets/img/comidas/semgluten/assado-grande6.JPG' },
      { title: 'Assado Triangular', image: '/src/assets/img/comidas/semgluten/assado-triangular.JPG' },
      { title: 'Assados Pequenos', image: '/src/assets/img/comidas/semgluten/assados-pequenos.JPG' },
      { title: 'Assados Pequenos Mix', image: '/src/assets/img/comidas/semgluten/assados-pequenos2.JPG' },
      { title: 'Assados Pequenos Variados', image: '/src/assets/img/comidas/semgluten/assados-pequenos3.JPG' },
      { title: 'Doguinho', image: '/src/assets/img/comidas/semgluten/doguinho.JPG' },
      { title: 'Salgado Premium', image: '/src/assets/img/comidas/semgluten/IMG_9610.JPG' },
      { title: 'Salgado Especial SG', image: '/src/assets/img/comidas/semgluten/IMG_9766.JPG' },
      { title: 'Rondeli', image: '/src/assets/img/comidas/semgluten/rondeli2.JPG' },
    ],
    Sopas: [
      { title: 'Sopa Especial', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-232.jpg' },
      { title: 'Sopa Cremosa', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-238.jpg' },
      { title: 'Creme de Legumes', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-257.jpg' },
      { title: 'Sopa Caseira', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-270.jpg' },
      { title: 'Caldeirada', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-277.jpg' },
      { title: 'Sopa Tradicional', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-278.jpg' },
      { title: 'Creme Especial', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-284.jpg' },
      { title: 'Sopa Gourmet', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-289.jpg' },
      { title: 'Creme de Abóbora', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-293.jpg' },
      { title: 'Sopa de Legumes', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-304.jpg' },
      { title: 'Caldo Verde', image: '/src/assets/img/comidas/sopas/Bread King maio 2025 Ebraim Martini-309.jpg' },
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
          items={Object.entries(categories).map(([category, items]) => ({
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
