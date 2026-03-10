import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Droplets, Sparkles, Phone, Mail, MapPin, ChevronRight, Menu, X, Instagram, Facebook, Linkedin, ArrowRight, CheckCircle2, Send, Play } from 'lucide-react';

const Navbar = ({ onTestDriveClick }: { onTestDriveClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <motion.span 
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`font-display text-2xl font-light tracking-[0.2em] ${!isScrolled ? 'text-white' : 'text-black'}`}
          >
            ВОЗ<span className="font-serif italic lowercase font-extralight opacity-40">духъ</span>
          </motion.span>
        </div>

        <div className={`hidden md:flex items-center gap-12 text-[9px] font-bold uppercase tracking-[0.4em] ${!isScrolled ? 'text-white/60' : 'text-black/60'}`}>
          <a href="#ideology" className="hover:text-white transition-colors">Идентичность</a>
          <a href="#equipment" className="hover:text-white transition-colors">Системы</a>
          <a href="#scents" className="hover:text-white transition-colors">Ароматы</a>
          <a href="#solutions" className="hover:text-white transition-colors">Решения</a>
          <button 
            onClick={onTestDriveClick}
            className={`btn-primary !px-8 !py-3 ${!isScrolled ? '!bg-white !text-black' : ''}`}
          >
            Тест-драйв
          </button>
        </div>

        <button className={`md:hidden ${!isScrolled ? 'text-white' : 'text-black'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <a href="#ideology" className="text-sm font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Идеология</a>
            <a href="#equipment" className="text-sm font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Оборудование</a>
            <a href="#scents" className="text-sm font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Ароматы</a>
            <a href="#solutions" className="text-sm font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Решения</a>
            <a href="tel:+79832852477" className="text-sm font-bold uppercase tracking-widest flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <Phone className="w-4 h-4" /> 8 983 285 24 77
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onTestDriveClick();
              }}
              className="btn-primary text-center"
            >
              Тест-драйв
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onTestDriveClick }: { onTestDriveClick: () => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background with subtle motion */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2000&auto=format&fit=crop"
          alt="Atmospheric background"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-white/40 mb-12 block">
            Архитектура аромата
          </span>
          
          <h1 className="font-display text-6xl md:text-[120px] font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase">
            ВОЗ<span className="text-white/20 italic font-serif lowercase tracking-normal">духъ</span>
          </h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white/60 mb-16 leading-relaxed font-light tracking-wide">
              Интеллектуальные системы ароматизации. <br />
              <span className="text-white">Управляем эмоциями через премиальный ольфакторный дизайн.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary !bg-white !text-black hover:!bg-neutral-200 !px-12">
                Получить расчет
              </button>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+79832852477" className="btn-primary !bg-black !text-white hover:!bg-neutral-900 !px-6 flex items-center gap-2 text-xs border border-white/10">
                  <Phone className="w-4 h-4" /> 8 983 285 24 77
                </a>
                <a href="https://t.me/vozduh_aroma" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-black !text-white hover:!bg-neutral-900 !px-6 flex items-center gap-2 text-xs border border-white/10">
                  <Send className="w-4 h-4" /> Telegram
                </a>
                <a href="https://t.me/max_vozduh" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-black !text-white hover:!bg-neutral-900 !px-6 flex items-center gap-2 text-xs border border-white/10">
                  Макс
                </a>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.4em] font-bold transition-colors flex items-center gap-4 group mx-auto">
                Смотреть кейсы <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <div className="flex items-center gap-6 text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold">
          <span className="rotate-90 origin-left">Осн. 2024</span>
          <div className="w-px h-12 bg-white/10" />
          <span>Красноярск</span>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

const EquipmentCard = ({ title, text, image }: { title: string, text: string, image: string }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white p-16 border border-black/5 flex flex-col group transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]"
  >
    <div className="w-full h-80 bg-neutral-50 mb-12 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
        referrerPolicy="no-referrer" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
    <div className="flex-grow">
      <h4 className="text-3xl font-display font-black uppercase tracking-tighter mb-6">{title}</h4>
      <p className="text-neutral-400 text-sm leading-relaxed font-light mb-12">{text}</p>
    </div>
    <div className="pt-10 border-t border-black/5 flex justify-between items-center">
      <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 group-hover:text-black transition-colors">Характеристики</span>
      <ArrowRight className="w-4 h-4 text-black/0 group-hover:text-black group-hover:translate-x-2 transition-all" />
    </div>
  </motion.div>
);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });

  const handleTestDriveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const response = await fetch('/api/test-drive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus('idle');
          setFormData({ name: '', phone: '', company: '' });
        }, 2000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar onTestDriveClick={() => setIsModalOpen(true)} />
      <Hero onTestDriveClick={() => setIsModalOpen(true)} />

      {/* Блок 2: Идеология */}
      <section id="ideology" className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">Философия</span>
              <h2 className="font-display text-5xl md:text-7xl mb-12 leading-[0.9] uppercase font-black tracking-tighter">
                Искусство <br />
                <span className="font-serif italic lowercase font-normal text-neutral-300">невидимого</span> <br />
                влияния
              </h2>
              <div className="space-y-8 text-neutral-500 font-light leading-relaxed text-lg">
                <p>
                  Мы не просто подбираем парфюм. Мы создаем эмоцию и якорь памяти для вашего бренда. 
                </p>
                <p>
                  Ольфакторный маркетинг действует напрямую на восприятие, минуя рациональные барьеры. Правильный аромат заставляет клиентов возвращаться, задерживаться дольше и доверять больше.
                </p>
              </div>
              <div className="mt-16">
                <button className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold">
                  Узнать больше <div className="w-12 h-px bg-black/10 group-hover:w-20 transition-all" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 relative group">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 overflow-hidden cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
                  alt="Ольфакторный дизайн"
                  className="w-full h-[700px] object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-black/5 hidden xl:block group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Блок 3: Ароматы */}
      <section id="scents" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">Коллекция</span>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter">Библиотека <br /> ароматов</h2>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed font-light">
              Более 500 селективных композиций из Граса. От свежего хлопка до глубокого уда и кожи.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Белый чай", type: "Свежий", notes: "Бергамот, Жасмин, Мускус", img: "https://images.unsplash.com/photo-1544787210-2827443cb39b?q=80&w=800&auto=format&fit=crop" },
              { name: "Санторини", type: "Морской", notes: "Морская соль, Инжир, Шалфей", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" },
              { name: "Кожа и Уд", type: "Древесный", notes: "Черная кожа, Шафран, Уд", img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=800&auto=format&fit=crop" },
              { name: "Свежий хлопок", type: "Чистота", notes: "Белый мускус, Лён, Озон", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop" }
            ].map((scent, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden mb-6 bg-neutral-100">
                  <img 
                    src={scent.img} 
                    alt={scent.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{scent.name}</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-black/40 font-bold">{scent.type}</span>
                  <span className="text-[10px] italic text-neutral-400 font-serif">{scent.notes}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-2 hover:border-black transition-all">
              Посмотреть всю коллекцию
            </button>
          </div>
        </div>
      </section>

      {/* Блок 4: Передовое оборудование */}
      <section id="equipment" className="py-40 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">Инженерия</span>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter">Системы <br /> распыления</h2>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed font-light">
              Голландские технологии, разработанные для бесшовной интеграции и бескомпромиссной производительности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <EquipmentCard
              title="S-100"
              text="Компактное решение для бутиков и офисов. Покрытие до 100 м³. Изящный алюминиевый корпус и бесшумная работа."
              image="https://images.unsplash.com/photo-1588600036348-818a158395c6?q=80&w=800&auto=format&fit=crop"
            />
            <EquipmentCard
              title="S-500"
              text="Универсальная система для средних пространств до 500 м³. Интеллектуальное управление через Bluetooth и точная настройка."
              image="https://images.unsplash.com/photo-1615485240384-552e40079c44?q=80&w=800&auto=format&fit=crop"
            />
            <EquipmentCard
              title="S-1000"
              text="Мощный диффузор для больших залов и лобби до 1000 м³. Высокая производительность и равномерное насыщение."
              image="https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop"
            />
            <EquipmentCard
              title="HVAC-PRO"
              text="Интегрируемая система для вентиляции. Покрытие до 5000 м³. Профессиональное решение для торговых центров и отелей."
              image="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Блок 4: Комплексные решения */}
      <section id="solutions" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">Услуги</span>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter mb-16">
                Адаптируем <br />
                <span className="font-serif italic lowercase font-normal text-neutral-300">технологию</span> <br />
                под бизнес
              </h2>
              <div className="space-y-4">
                {[
                  "Аренда оборудования «под ключ»",
                  "Продажа систем ароматизации",
                  "Разработка индивидуального арома-бренда",
                  "Полное сервисное обслуживание"
                ].map((item, i) => (
                  <div key={i} className="group flex items-center justify-between py-8 border-b border-black/5 hover:border-black transition-colors cursor-pointer">
                    <span className="text-xl font-light text-neutral-500 group-hover:text-black transition-colors">{item}</span>
                    <ChevronRight className="w-5 h-5 text-black/0 group-hover:text-black group-hover:translate-x-2 transition-all" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black flex items-center justify-center p-8 hidden md:flex">
                <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold leading-relaxed text-center">
                  Комплексные <br /> решения
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 5: СМИ о нас */}
      <section className="py-40 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">Пресса</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter">
              СМИ <br />
              <span className="font-serif italic lowercase font-normal text-neutral-300">о нас</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[1, 2].map((i) => (
              <div key={i} className="group relative aspect-video bg-black overflow-hidden cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1200&auto=format&fit=crop&sig=${i}`} 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <Play className="w-6 h-6 text-white group-hover:text-black fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40 block mb-2">Репортаж #{i}</span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Сюжет о развитии аромамаркетинга</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 6: Главный оффер */}
      <section id="test-drive" className="py-40 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-white/30 mb-12 block">Эксклюзивный доступ</span>
            <h2 className="font-display text-6xl md:text-[100px] mb-16 leading-[0.85] uppercase font-black tracking-tighter">
              Оцените <br />
              <span className="font-serif italic lowercase font-normal text-white/20 tracking-normal">эффект</span> <br />
              лично
            </h2>
            <p className="text-xl text-white/40 mb-20 leading-relaxed font-light max-w-2xl">
              Закажите ольфакторный тест-драйв. Мы приедем к вам на объект в Красноярске, продемонстрируем оборудование в действии и подберем 5 премиальных ароматов специально под задачи вашего бизнеса.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary !bg-white !text-black hover:!bg-neutral-200 !px-16 !py-6"
            >
              Заказать тест-драйв
            </button>
          </div>
        </div>
      </section>

      {/* Test Drive Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white p-8 sm:p-12 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-black/20 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block mb-4">Заявка</span>
                <h2 className="text-3xl font-bold uppercase tracking-tight">Тест-драйв системы</h2>
                <p className="text-sm text-black/40 mt-4">Оставьте ваши контакты, и мы свяжемся с вами для организации бесплатного тест-драйва в вашем пространстве.</p>
              </div>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Заявка отправлена</h3>
                  <p className="text-sm text-black/40">Макс свяжется с вами в ближайшее время.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleTestDriveSubmit} className="space-y-6">
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-2">Ваше имя</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="Александр"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-2">Телефон</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-2">Компания</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="Название заведения"
                    />
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    type="submit" 
                    className="btn-primary w-full !py-5 mt-4 disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-xs text-red-500 text-center">Произошла ошибка. Попробуйте позже или напишите нам в Telegram.</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-xs">
              <span className="font-display text-2xl font-light tracking-[0.2em] block mb-8 uppercase">
                ВОЗ<span className="font-serif italic lowercase font-extralight opacity-30">духъ</span>
              </span>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                Инновационный аромамаркетинг. <br />
                Создаем атмосферу, которая работает на ваш бизнес.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block">Контакты</span>
                <a href="tel:+79832852477" className="text-xs font-medium block hover:text-neutral-400 transition-colors">8 983 285 24 77</a>
                <a href="mailto:info@vozduh.ru" className="text-xs font-medium block hover:text-neutral-400 transition-colors">info@vozduh.ru</a>
                <span className="text-xs font-medium block">Красноярск, РФ</span>
              </div>
              <div className="space-y-6">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block">Соцсети</span>
                <div className="flex gap-6">
                  <a href="https://t.me/vozduh_aroma" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-black transition-colors"><Send className="w-4 h-4" /></a>
                  <a href="#" className="text-neutral-400 hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="text-neutral-400 hover:text-black transition-colors"><Facebook className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-bold text-black/20">
            <p>© 2024 VOZDUH. Все права защищены.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-black transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-black transition-colors">Условия</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
