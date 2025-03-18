import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Video, ArrowRight, Check } from 'lucide-react'
import './App.css'

// Import UI components
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const registerSectionRef = useRef<HTMLElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this email to your backend
    console.log('Email enviado:', email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setEmail('')
  }

  const scrollToRegister = () => {
    registerSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-2xl text-blue-600"
        >
          Connecta<span className="text-slate-900">Summit</span>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Onde Líderes de Negócios <span className="text-blue-600">Conectam</span> e <span className="text-blue-600">Inovam</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Participe do principal evento de networking para executivos, empreendedores e líderes do setor. Estabeleça conexões significativas e descubra novas oportunidades de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg" onClick={scrollToRegister}>
              Inscreva-se agora
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Saiba Mais
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>15-17 de Junho, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Centro Empresarial, São Paulo</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-blue-600" />
              <span>Acesso Virtual Disponível</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <img 
            src="/imgs/hero.webp" 
            alt="Profissionais de negócios em networking no Connecta Summit" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que Participar do Connecta Summit?</h2>
            <p className="text-lg text-slate-600">
              O Connecta Summit reúne as mentes mais brilhantes do mundo dos negócios para compartilhar insights, estabelecer parcerias e impulsionar a inovação. Se você está procurando expandir sua rede, encontrar investidores ou se manter à frente das tendências do setor, este é o evento que você não pode perder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Oportunidades de Networking",
                description: "Conecte-se com mais de 500+ líderes empresariais, investidores e especialistas do setor de todo o mundo.",
                icon: "🤝"
              },
              {
                title: "Palestrantes Especializados",
                description: "Aprenda com renomados líderes de pensamento e obtenha insights que transformarão sua abordagem de negócios.",
                icon: "🎤"
              },
              {
                title: "Matchmaking de Negócios",
                description: "Nossa plataforma com IA ajuda você a encontrar os parceiros, investidores ou clientes perfeitos para seu negócio.",
                icon: "🔍"
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Palestrantes em Destaque</h2>
            <p className="text-lg text-slate-600">
              Aprenda com líderes do setor que transformaram seus campos e estão prontos para compartilhar seu conhecimento com você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "CEO, TechInnovate",
                image: "/imgs/pale_1.png",
                topic: "Transformação Digital"
              },
              {
                name: "Carlos Mendes",
                role: "Fundador, GrowthVentures",
                image: "/imgs/pale_2.jpg",
                topic: "Escalando Startups"
              },
              {
                name: "Ana Rodrigues",
                role: "CIO, Global Finance",
                image: "/imgs/pale_3.jpg",
                topic: "Revolução FinTech"
              },
              {
                name: "Roberto Santos",
                role: "Diretor de Marketing, BrandMasters",
                image: "/imgs/pale_4.jpg",
                topic: "Estratégia de Marca"
              }
            ].map((speaker, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{speaker.name}</CardTitle>
                    <CardDescription>{speaker.role}</CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm text-blue-600 font-medium">
                    Palestra sobre: {speaker.topic}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="group">
              Ver Todos os Palestrantes
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que Dizem os Participantes</h2>
            <p className="text-lg text-slate-600">
              Não acredite apenas em nossa palavra. Ouça líderes empresariais que participaram de nossos eventos anteriores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "O Connecta Summit foi um divisor de águas para o meu negócio. As conexões que fiz levaram a três grandes parcerias em poucos meses.",
                author: "Eduardo Martins",
                company: "CEO, GrowFast Solutions"
              },
              {
                quote: "A qualidade dos palestrantes e participantes é incomparável. Já participei de muitas conferências de negócios, mas o Connecta Summit se destaca pelo foco em conexões significativas.",
                author: "Luisa Ferreira",
                company: "Fundadora, InnovateBrazil"
              },
              {
                quote: "O retorno sobre o investimento da participação no Connecta Summit foi incrível. Garantimos financiamento para nossa startup após conhecer investidores no evento do ano passado.",
                author: "Pedro Almeida",
                company: "CTO, FutureTech"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white">
                  <CardContent className="pt-6">
                    <div className="text-2xl text-blue-600 mb-4">❝</div>
                    <p className="italic text-slate-700 mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      {/* <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Nossos Parceiros</h2>
            <p className="text-slate-600">Orgulhosamente apoiado por líderes do setor</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <motion.div 
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: partner * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={`https://placehold.co/200x80/EEEEEE/666666.svg?text=Parceiro+${partner}`} 
                  alt={`Parceiro ${partner}`} 
                  className="h-12 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section ref={registerSectionRef} className="bg-blue-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Inscreva-se no evento aqui</h2>
            <p className="text-blue-100 mb-8">
              Participe do nosso exclusivo summit de negócios e faça networking com líderes do setor. Ingressos com desconto disponíveis agora!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  type="email" 
                  placeholder="Seu endereço de e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 h-12"
                />
              </div>
              <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50 h-12">
                {submitted ? (
                  <span className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Inscrito
                  </span>
                ) : (
                  'Inscrever-se'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Connecta<span className="text-blue-400">Summit</span></h3>
              <p className="text-sm">O principal evento de networking para líderes empresariais e inovadores.</p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Palestrantes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li>info@connectasummit.com</li>
                <li>+55 11 9999-8888</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
            <p> {new Date().getFullYear()} Connecta Summit. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
