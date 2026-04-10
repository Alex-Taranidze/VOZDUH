import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Wind,
  Droplets,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Send,
  Play,
  Plus,
} from "lucide-react";
import MDSProductCard from "./components/MDSProductCard";

const Navbar = ({ onTestDriveClick }: { onTestDriveClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "glass-nav py-4" : "bg-transparent py-10"}`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`font-display text-2xl font-light tracking-[0.2em] ${!isScrolled ? "text-white" : "text-black"}`}
          >
            ВОЗ
            <span className="font-serif italic lowercase font-extralight opacity-40">
              дух
            </span>
          </motion.span>
        </div>

        <div
          className={`hidden md:flex items-center gap-12 text-[9px] font-bold uppercase tracking-[0.4em] ${!isScrolled ? "text-white/60" : "text-black/60"}`}
        >
          <a href="#ideology" className="hover:text-white transition-colors">
            Идентичность
          </a>
          <a href="#mds" className="hover:text-white transition-colors">
            MDS
          </a>
          <a href="#equipment" className="hover:text-white transition-colors">
            Системы
          </a>
          <a href="#scents" className="hover:text-white transition-colors">
            Ароматы
          </a>
          <a href="#solutions" className="hover:text-white transition-colors">
            Решения
          </a>
          <button
            onClick={onTestDriveClick}
            className={`btn-primary !px-8 !py-3 ${!isScrolled ? "!bg-white !text-black" : ""}`}
          >
            Тест-драйв
          </button>
        </div>

        <button
          className={`md:hidden ${!isScrolled ? "text-white" : "text-black"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
            <a
              href="#ideology"
              className="text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Идеология
            </a>
            <a
              href="#mds"
              className="text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MDS
            </a>
            <a
              href="#equipment"
              className="text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Оборудование
            </a>
            <a
              href="#scents"
              className="text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ароматы
            </a>
            <a
              href="#solutions"
              className="text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Решения
            </a>
            <a
              href="tel:+79832852477"
              className="text-sm font-bold uppercase tracking-widest flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
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
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="Vidos.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-white/40 mb-12 block">
            Архитектура аромата
          </span>

          <h1 className="font-display text-6xl md:text-[120px] font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase">
            ВОЗ
            <span className="text-white/20 italic font-serif lowercase tracking-normal">
              дух
            </span>
          </h1>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white/60 mb-16 leading-relaxed font-light tracking-wide">
              Интеллектуальные системы ароматизации. <br />
              <span className="text-white">
                Управляем эмоциями через премиальный ольфакторный дизайн.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onTestDriveClick}
                className="btn-primary !bg-white !text-black hover:!bg-neutral-200 !px-12"
              >
                Получить расчет
              </button>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+79832852477"
                  className="btn-primary !bg-black !text-white hover:!bg-neutral-900 !px-6 flex items-center gap-2 text-xs border border-white/10"
                >
                  <Phone className="w-4 h-4" /> 8 983 285 24 77
                </a>
                <a
                  href="https://t.me/vozduh_aroma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !bg-black !text-white hover:!bg-neutral-900 !px-6 flex items-center gap-2 text-xs border border-white/10"
                >
                  <Send className="w-4 h-4" /> Telegram
                </a>
                <a
                  href="https://t.me/max_vozduh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !bg-black !text-white hover:!bg-neutral-900 !px-6 flex items-center gap-2 text-xs border border-white/10"
                >
                  Макс
                </a>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.4em] font-bold transition-colors flex items-center gap-4 group mx-auto">
                Смотреть кейсы{" "}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
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

interface EquipmentCardProps {
  title: string;
  description: string;
  specs: string;
  image: string;
  price: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  title,
  description,
  specs,
  image,
  price,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-transparent p-6 flex flex-col group transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="w-full aspect-square mb-8 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>
      <div className="flex-grow">
        <div className="flex items-baseline gap-3 mb-4">
          <h4 className="text-2xl font-display font-black uppercase tracking-tighter">
            {title}
          </h4>
          <span className="text-neutral-500 text-[10px] font-light uppercase tracking-widest">
            {price}
          </span>
        </div>
        <p className="text-neutral-400 text-xs leading-relaxed font-light mb-4 whitespace-pre-line">
          {description}
        </p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="pt-6 space-y-2">
                {specs.split(" | ").map((spec, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-black/5 last:border-0">
                    <span className="text-black/40">{spec.split(":")[0]}:</span>
                    <span className="text-black font-medium">{spec.split(":")[1]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        className="pt-8 border-t border-black/5 flex justify-between items-center w-full text-left group/btn"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-black/20 group-hover:text-black transition-colors">
          {isExpanded ? "Скрыть" : "Подробнее"}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          className="group-hover:translate-x-2 transition-all"
        >
          <ArrowRight
            className={`w-3 h-3 ${isExpanded ? "text-black" : "text-black/0 group-hover:text-black"}`}
          />
        </motion.div>
      </button>
    </motion.div>
  );
};

const equipmentData = [
  {
    title: "R1",
    description: "Премиальная система ароматизации для малых пространств. Идеально для бутиков и офисов.",
    specs: "Площадь: до 100 м³ | Флакон: 100 мл | Шум: <30 дБ | Питание: Сеть.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/a34d1b0b09ffadf5f1e33a66b529377e51997f08/public/R1.jpg",
    price: "от 10 000 ₽"
  },
  {
    title: "S3",
    description: "Компактная и мощная система для средних помещений. Совершенство в каждой детали.",
    specs: "Площадь: до 500 м³ | Флакон: 100 мл | Шум: <38 дБ | Управление: Bluetooth/App.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/6658e2f29ba72a2b16d5964c2b892c027bf63c8a/public/S1.jpg",
    price: "от 10 000 ₽"
  },
  {
    title: "X 100",
    description: "Профессиональное решение для торговых залов. Высокая производительность и надежность.",
    specs: "Площадь: до 500 м³ | Флакон: 200 мл | Шум: <30 дБ | Монтаж: Напольный | Управление: Bluetooth/App.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/59da75b9e59108b1afa29892f48f08b526008b8a/public/x1.jpg",
    price: "от 20 000 ₽"
  },
  {
    title: "X150",
    description: "Искусство аромадизайна и высоких технологий. Симбиоз элегантного дизайна и передовых технологий.",
    specs: "Площадь: до 500 м³ | Флакон: 200 мл | Шум: <30 дБ | Монтаж: Напольный | Управление: Bluetooth/App.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/e4cfb936081431b113918b6d85c183f81279cfc9/public/X150.jpg",
    price: "от 23 000 ₽"
  },
  {
    title: "MX 150",
    description: "Система для больших площадей с возможностью подключения к вентиляции",
    specs: "Площадь: до 2000 м³ | Флакон: 800 мл | Шум: <48 дБ | Управление: Bluetooth/App | Особенность: Двойной соленоид.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/dcfc06ea69092bc7087a920d8288ef3ab6472100/public/MX150.jpg",
    price: "от 33 000 ₽"
  },
  {
    title: "MX200",
    description: "Флагманская модель для сверхкрупных объектов. Интеллектуальное управление и мощь.",
    specs: "Площадь: до 2500 м³ | Флакон: 1000 мл | Шум: <50 дБ | Монтаж: Напольный/Настенный | Управление: Bluetooth/App.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/6f7bb8f01f52381b42eb16b5f3b328e962e8160a/public/mx200-1.jpg",
    price: "от 44 000 ₽"
  },
  {
    title: "MDS",
    description: "Интеллектуальная система ароматизации с управлением через приложение.",
    specs: "Площадь: до 2000 м³ | Флакон: 800 мл | Монтаж: Напольный | Управление: Сенсор/App + Bluetooth/App.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/6f7bb8f01f52381b42eb16b5f3b328e962e8160a/public/mds-1.jpg",
    price: "от 35 000 ₽"
  },
  {
    title: "MDS PRO",
    description: "Профессиональная версия MDS для максимального контроля и площади покрытия.",
    specs: "Площадь: до 5000 м³ | Флакон: 1500 мл (внешний) | Монтаж: Напольный | Управление: Bluetooth/App.",
    image: "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/7bacee8f27adfce30574bba406090521a4e77570/public/202303301840262566.jpg",
    price: "от 53 000 ₽"
  }
];

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalDoc, setLegalDoc] = useState<
    "privacy" | "consent" | "agreement" | "cookies" | null
  >(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    consent: true,
  });

  const onTestDriveClick = () => setIsModalOpen(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  const handleTestDriveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const response = await fetch("/api/test-drive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus("idle");
          setFormData({ name: "", phone: "", company: "", consent: true });
        }, 2000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar onTestDriveClick={onTestDriveClick} />
      <Hero onTestDriveClick={onTestDriveClick} />
      {/* Блок 2: Идеология */}
      <section id="ideology" className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">
                Философия
              </span>
              <h2 className="font-display text-5xl md:text-7xl mb-12 leading-[0.9] uppercase font-black tracking-tighter">
                Искусство <br />
                <span className="font-serif italic lowercase font-normal text-neutral-300">
                  невидимого
                </span>{" "}
                <br />
                влияния
              </h2>
              <div className="space-y-8 text-neutral-500 font-light leading-relaxed text-lg">
                <p>
                  Мы не просто подбираем парфюм. Мы создаем эмоцию и якорь
                  памяти для вашего бренда.
                </p>
                <p>
                  Ольфакторный маркетинг действует напрямую на восприятие, минуя
                  рациональные барьеры. Правильный аромат заставляет клиентов
                  возвращаться, задерживаться дольше и доверять больше.
                </p>
              </div>
              <div className="mt-16">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold"
                >
                  Узнать больше{" "}
                  <div className="w-12 h-px bg-black/10 group-hover:w-20 transition-all" />
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[700px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                >
                  <source src="https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/main/public/Vidos.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-black/5 hidden xl:block group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
      {/* Блок 3: Ароматы */}
      <section id="scents" className="py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-32">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-white/20 mb-6 block">
              Библиотека
            </span>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9] uppercase font-black tracking-tighter">
              КОЛЛЕКЦИЯ <br /> АРОМАТОВ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "ПРЕМИУМ И БИЗНЕС",
                subtitle: "Статус и дерево",
                scents: [
                  { name: "Кожа и дерево", notes: "черная кожа, кедр, сандал, мускус" },
                  { name: "Красная секвойя", notes: "хвоя, древесная смола, мох, амбра" },
                  { name: "Махагони", notes: "дорогое дерево, специи, табачный лист" },
                  { name: "Уд", notes: "агаровое дерево, ладан, восточные пряности" },
                  { name: "Прогулка по лесу", notes: "влажная земля, сосна, папоротник" }
                ]
              },
              {
                title: "СВЕЖЕСТЬ И ЭНЕРГИЯ",
                subtitle: "Природа и чистота",
                scents: [
                  { name: "Озоновый слой", notes: "воздух после грозы, морская соль" },
                  { name: "Морское побережье", notes: "йод, водоросли, песок, цитрус" },
                  { name: "Свежескошенная трава", notes: "стебли клевера, роса, зеленый сок" },
                  { name: "Золотой бамбук", notes: "стебель бамбука, лотос, белый чай" },
                  { name: "Зеленый чай и лемонграсс", notes: "лимонная трава, мята, жасмин" }
                ]
              },
              {
                title: "УЮТ И ГУРМЭ",
                subtitle: "Тепло и аппетит",
                scents: [
                  { name: "Французская пекарня", notes: "свежий багет, тающее сливочное масло, поджаренная корочка, капля ванили" },
                  { name: "Свежесваренный кофе", notes: "арабика, темный шоколад, лесной орех" },
                  { name: "Корица и ваниль", notes: "палочки корицы, сахарная пудра, бурбонская ваниль" },
                  { name: "Розмариновая фокачча", notes: "печеное тесто, розмарин, оливковое масло" },
                  { name: "Цветок имбиря", notes: "корень имбиря, мед, лимонная цедра" }
                ]
              },
              {
                title: "ФРУКТЫ И ЭКЗОТИКА",
                subtitle: "Яркость и сочность",
                scents: [
                  { name: "Розовый грейпфрут", notes: "горькая цедра, сочная мякоть, ревень" },
                  { name: "Зеленый манго", notes: "недозрелый плод, персик, тропическая зелень" },
                  { name: "Инжир и кассис", notes: "лист инжира, черная смородина, кедр" },
                  { name: "Побережье Амальфи", notes: "апельсиновый цвет, нероли, морской бриз" },
                  { name: "Азиатский сад", notes: "орхидея, пион, розовый перец" }
                ]
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-zinc-800 p-10 group hover:border-zinc-600 transition-colors"
              >
                <div className="mb-10">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-4 block">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-black uppercase tracking-tighter">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.scents.map((scent, idx) => (
                    <details key={idx} className="group/item">
                      <summary className="list-none cursor-pointer hover:text-white transition-colors duration-200 text-zinc-400 text-[11px] uppercase tracking-widest font-medium [&::-webkit-details-marker]:hidden">
                        {scent.name}
                      </summary>
                      <p className="text-[10px] text-zinc-500 mt-1 ml-2 font-light lowercase leading-relaxed">
                        ноты: {scent.notes}
                      </p>
                    </details>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 4: Передовое оборудование */}
      <section id="equipment" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">
                Технологии
              </span>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter">
                Системы <br /> ароматизации
              </h2>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed font-light">
              От компактных решений для бутиков до мощных систем, интегрируемых в
              приточную вентиляцию.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentData.map((item, index) => (
              <EquipmentCard
                key={index}
                title={item.title}
                description={item.description}
                specs={item.specs}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Блок: Флагманская система MDS */}
      <div id="mds">
        <MDSProductCard onTestDriveClick={onTestDriveClick} />
      </div>

      {/* Блок 5: РЕШЕНИЯ ДЛЯ БИЗНЕСА */}
      <section id="solutions" className="py-40 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-white/20 mb-12 block">
              Экспертиза
            </span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter text-white">
              РЕШЕНИЯ <br /> ДЛЯ БИЗНЕСА
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
            {/* Левая колонка: Визуал */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative group rounded-[2rem] overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[700px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="Solutions Hero"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 block mb-4">
                  Комплексный подход
                </span>
                <p className="text-white text-lg font-light leading-relaxed">
                  Мы создаем атмосферу, которая работает на ваш статус и конверсию.
                </p>
              </div>
            </motion.div>

            {/* Правая колонка: Контент */}
            <div className="space-y-12">
              {[
                {
                  title: "Аренда «под ключ»",
                  price: "от 5 000 ₽ / мес",
                  description: "Вы платите только за результат — безупречный аромат в вашем пространстве. Мы берем на себя подбор оборудования, монтаж, регулярную замену картриджей и настройку расписания. Никаких капитальных вложений и расходов на амортизацию."
                },
                {
                  title: "Продажа систем ароматизации",
                  price: "от 10 000 ₽",
                  description: "Для тех, кто предпочитает полный контроль и владение оборудованием. Проводим профессиональный аудит помещения, подбираем оптимальные системы холодной диффузии и обучаем персонал. Надежное решение с долгосрочной гарантией."
                },
                {
                  title: "Полное сервисное обслуживание",
                  price: "от 3 000 ₽ / мес",
                  description: "Бесперебойная работа ваших систем — наша ответственность. Плановые выезды специалиста, чистка форсунок, калибровка интенсивности и своевременная доставка новых ароматов. Мы работаем незаметно, сохраняя идеальный фон вашего бизнеса."
                }
              ].map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-white/10 pb-8 group"
                >
                  <details className="group/details">
                    <summary className="list-none cursor-pointer flex items-center justify-between text-white transition-colors duration-300 hover:text-zinc-400 [&::-webkit-details-marker]:hidden">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                        <span className="text-xl md:text-2xl font-light uppercase tracking-tight">
                          {solution.title}
                        </span>
                        <span className="text-sm text-zinc-500 font-medium">
                          {solution.price}
                        </span>
                      </div>
                      <Plus className="w-6 h-6 text-zinc-600 group-open/details:rotate-45 transition-transform duration-500" />
                    </summary>
                    <div className="overflow-hidden">
                      <p className="text-[13px] text-zinc-500 mt-6 leading-relaxed font-light max-w-xl animate-in fade-in slide-in-from-top-4 duration-500">
                        {solution.description}
                      </p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Блок 5: СМИ о нас */}
      <section className="py-40 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-black/20 mb-12 block">
              Пресса
            </span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase font-black tracking-tighter">
              СМИ <br />
              <span className="font-serif italic lowercase font-normal text-neutral-300">
                о нас
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group relative aspect-video bg-black overflow-hidden cursor-pointer"
              >
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
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40 block mb-2">
                    Репортаж #{i}
                  </span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                    Сюжет о развитии аромамаркетинга
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Блок 6: Главный оффер */}
      <section
        id="test-drive"
        className="py-40 bg-[#0a0a0a] text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-white/30 mb-12 block">
              Эксклюзивный доступ
            </span>
            <h2 className="font-display text-6xl md:text-[100px] mb-16 leading-[0.85] uppercase font-black tracking-tighter">
              Оцените <br />
              <span className="font-serif italic lowercase font-normal text-white/20 tracking-normal">
                эффект
              </span>{" "}
              <br />
              лично
            </h2>
            <p className="text-xl text-white/40 mb-20 leading-relaxed font-light max-w-2xl">
              Закажите ольфакторный тест-драйв. Мы приедем к вам на объект в
              Красноярске, продемонстрируем оборудование в действии и подберем 5
              премиальных ароматов специально под задачи вашего бизнеса.
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
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block mb-4">
                  Заявка
                </span>
                <h2 className="text-3xl font-bold uppercase tracking-tight">
                  Тест-драйв системы
                </h2>
                <p className="text-sm text-black/40 mt-4">
                  Оставьте ваши контакты, и мы свяжемся с вами для организации
                  бесплатного тест-драйва в вашем пространстве.
                </p>
              </div>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">
                    Заявка отправлена
                  </h3>
                  <p className="text-sm text-black/40">
                    Макс свяжется с вами в ближайшее время.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleTestDriveSubmit} className="space-y-6">
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-2">
                      Ваше имя
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="Александр"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-2">
                      Телефон
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 block mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="Название заведения"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      required
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData({ ...formData, consent: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 border-black/10 rounded-none accent-black cursor-pointer"
                    />
                    <label
                      htmlFor="consent"
                      className="text-[10px] leading-relaxed text-black/40"
                    >
                      Настоящим я подтверждаю свой безусловный акцепт на{" "}
                      <button
                        type="button"
                        onClick={() => setLegalDoc("consent")}
                        className="text-black border-b border-black/20 hover:border-black transition-colors"
                      >
                        обработку персональных данных
                      </button>{" "}
                      и ознакомление с{" "}
                      <button
                        type="button"
                        onClick={() => setLegalDoc("privacy")}
                        className="text-black border-b border-black/20 hover:border-black transition-colors"
                      >
                        Политикой конфиденциальности
                      </button>
                    </label>
                  </div>

                  <button
                    disabled={formStatus === "loading"}
                    type="submit"
                    className="btn-primary w-full !py-5 mt-4 disabled:opacity-50"
                  >
                    {formStatus === "loading"
                      ? "Отправка..."
                      : "Отправить заявку"}
                  </button>
                  {formStatus === "error" && (
                    <p className="text-xs text-red-500 text-center">
                      Произошла ошибка. Попробуйте позже или напишите нам в
                      Telegram.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Legal Documents Modal */}
      <AnimatePresence>
        {legalDoc && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalDoc(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white p-8 sm:p-16 max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setLegalDoc(null)}
                className="absolute top-8 right-8 text-black/20 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="prose prose-sm max-w-none">
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block mb-6">
                  Юридическая информация
                </span>

                {legalDoc === "privacy" && (
                  <>
                    <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-12">
                      Политика в отношении обработки персональных данных
                    </h2>
                    <div className="space-y-12 text-neutral-600 font-light leading-relaxed text-justify">
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          1. Общие положения
                        </h3>
                        <p>
                          Настоящая Политика в отношении обработки персональных
                          данных (далее — «Политика») разработана Индивидуальным
                          предпринимателем Тараненко Александром Игоревичем (ИНН
                          245306537353 / ОГРНИП 319246800101312, далее —
                          «Оператор») в соответствии с требованиями Федерального
                          закона от 27.07.2006 № 152-ФЗ «О персональных данных».
                        </p>
                        <p>
                          Политика определяет порядок обработки персональных
                          данных и меры по обеспечению безопасности персональных
                          данных, предпринимаемые Оператором с целью защиты прав
                          и свобод человека и гражданина при обработке его
                          персональных данных, в том числе защиты прав на
                          неприкосновенность частной жизни, личную и семейную
                          тайну.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          2. Цели сбора персональных данных
                        </h3>
                        <p>
                          Обработка персональных данных ограничивается
                          достижением конкретных, заранее определенных и
                          законных целей. Оператор осуществляет обработку
                          персональных данных в следующих целях:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Предоставление консультаций по услугам
                            профессионального аромамаркетинга;
                          </li>
                          <li>
                            Заключение и исполнение договоров поставки
                            аромаоборудования и оказания услуг по ароматизации
                            помещений;
                          </li>
                          <li>
                            Расчет стоимости оборудования и подготовка
                            коммерческих предложений;
                          </li>
                          <li>
                            Направление маркетинговых и информационных рассылок
                            (при наличии согласия);
                          </li>
                          <li>
                            Обеспечение сервисного и технического обслуживания
                            оборудования.
                          </li>
                        </ul>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          3. Правовые основания обработки
                        </h3>
                        <p>
                          Правовым основанием обработки персональных данных
                          является совокупность нормативных правовых актов, во
                          исполнение которых и в соответствии с которыми
                          Оператор осуществляет обработку персональных данных, в
                          том числе: Гражданский кодекс РФ, Федеральный закон №
                          152-ФЗ «О персональных данных», а также согласие
                          Пользователя на обработку его персональных данных.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          4. Права субъектов персональных данных
                        </h3>
                        <p>
                          Субъект персональных данных имеет право на получение
                          информации, касающейся обработки его персональных
                          данных, требовать уточнения своих персональных данных,
                          их блокирования или уничтожения в случае, если
                          персональные данные являются неполными, устаревшими,
                          неточными, незаконно полученными или не являются
                          необходимыми для заявленной цели обработки.
                        </p>
                      </section>
                    </div>
                  </>
                )}

                {legalDoc === "consent" && (
                  <>
                    <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-12">
                      Согласие на обработку персональных данных
                    </h2>
                    <div className="space-y-12 text-neutral-600 font-light leading-relaxed text-justify">
                      <p>
                        Пользователь, заполняя любую форму обратной связи на
                        интернет-сайте https://vozduh-pi.vercel.app/,
                        подтверждает, что действует свободно, своей волей и в
                        своем интересе, а также подтверждает свою
                        дееспособность.
                      </p>
                      <p>
                        Настоящим Пользователь дает свое безусловное согласие ИП
                        Тараненко Александру Игоревичу (ИНН 245306537353 /
                        ОГРНИП 319246800101312, далее — «Оператор») на обработку
                        своих персональных данных (имя, номер телефона, адрес
                        электронной почты, название компании) на следующих
                        условиях:
                      </p>
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          Согласие дается на совершение следующих действий:
                          сбор, запись, систематизация, накопление, хранение,
                          уточнение (обновление, изменение), извлечение,
                          использование, передача (предоставление, доступ),
                          обезличивание, блокирование, удаление, уничтожение
                          персональных данных.
                        </li>
                        <li>
                          Цель обработки: консультирование по вопросам
                          аромамаркетинга, заключение договоров поставки и
                          обслуживания, направление информационных материалов.
                        </li>
                        <li>
                          Срок действия согласия: до момента его отзыва
                          Пользователем путем направления письменного
                          уведомления Оператору.
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {legalDoc === "agreement" && (
                  <>
                    <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-12">
                      Пользовательское соглашение
                    </h2>
                    <div className="space-y-12 text-neutral-600 font-light leading-relaxed text-justify">
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          1. Предмет соглашения
                        </h3>
                        <p>
                          Настоящее Соглашение определяет условия использования
                          материалов и сервисов Сайта Пользователями.
                          Использование Сайта означает безусловный акцепт
                          Пользователем условий настоящего Соглашения.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          2. Интеллектуальная собственность
                        </h3>
                        <p>
                          Все объекты, размещенные на Сайте, в том числе
                          элементы дизайна, текст, графические изображения,
                          иллюстрации, видео, скрипты, программы и другие
                          объекты (далее — «Контент»), являются объектами
                          исключительных прав Оператора. Любое использование
                          Контента без согласия Оператора запрещено.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          3. Ограничение ответственности
                        </h3>
                        <p>
                          Сайт и его сервисы предоставляются на условиях «как
                          есть». Оператор не гарантирует, что Сайт будет
                          соответствовать требованиям Пользователя, а также не
                          несет ответственности за перерывы в работе Сайта или
                          возможные технические ошибки.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          4. Разрешение споров
                        </h3>
                        <p>
                          Все споры, возникающие из настоящего Соглашения или
                          связанные с ним, подлежат разрешению путем
                          переговоров. При недостижении согласия спор подлежит
                          рассмотрению в суде по месту нахождения Оператора в
                          соответствии с законодательством РФ.
                        </p>
                      </section>
                    </div>
                  </>
                )}

                {legalDoc === "cookies" && (
                  <>
                    <h2 className="text-3xl font-display font-black uppercase tracking-tighter mb-12">
                      Политика использования файлов cookie
                    </h2>
                    <div className="space-y-12 text-neutral-600 font-light leading-relaxed text-justify">
                      <p>
                        Настоящая Политика объясняет, как Оператор использует
                        файлы cookie и аналогичные технологии для обеспечения
                        эффективной работы Сайта.
                      </p>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          1. Что такое файлы cookie
                        </h3>
                        <p>
                          Файлы cookie — это небольшие текстовые данные,
                          сохраняемые в браузере Пользователя. Они позволяют
                          Сайту «запоминать» действия или предпочтения
                          Пользователя в течение определенного времени.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
                          2. Цели использования
                        </h3>
                        <p>
                          Оператор использует cookie для следующих технических
                          целей:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Анализ поведения Пользователей для оптимизации
                            структуры Сайта;
                          </li>
                          <li>Сохранение настроек интерфейса;</li>
                          <li>
                            Обеспечение безопасности сессий Пользователей.
                          </li>
                        </ul>
                      </section>
                      <p>
                        Пользователь может в любой момент изменить настройки
                        своего браузера, чтобы заблокировать файлы cookie,
                        однако это может привести к некорректной работе
                        некоторых функций Сайта.
                      </p>
                    </div>
                  </>
                )}

                <div className="mt-16 pt-12 border-t border-black/5">
                  <button
                    onClick={() => setLegalDoc(null)}
                    className="w-full py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-800 transition-colors"
                  >
                    Ознакомлен и согласен
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 z-[90] bg-black text-white p-8 shadow-2xl border border-white/10"
          >
            <p className="text-[11px] leading-relaxed font-light text-white/60 mb-6 tracking-wide">
              Мы используем файлы cookie, чтобы сделать работу с сайтом
              максимально удобной. Оставаясь на сайте, вы соглашаетесь с нашей{" "}
              <button
                onClick={() => setLegalDoc("cookies")}
                className="text-white border-b border-white/20 hover:border-white transition-colors"
              >
                Политикой cookie
              </button>
              .
            </p>
            <button
              onClick={handleAcceptCookies}
              className="w-full py-3 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-colors"
            >
              Принимаю
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 md:col-span-2">
              <span className="font-display text-2xl font-light tracking-[0.2em] block mb-10 uppercase">
                ВОЗ
                <span className="font-serif italic lowercase font-extralight opacity-30">
                  дух
                </span>
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-sm">
                Инновационный аромамаркетинг и ольфакторный дизайн. <br />
                Создаем атмосферу, которая работает на ваш статус и конверсию.
              </p>
              <div className="flex gap-8 mt-12">
                <a
                  href="https://t.me/vozduh_aroma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-black transition-colors"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-black transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-black transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block">
                Навигация
              </span>
              <ul className="space-y-4 text-xs font-medium text-neutral-500">
                <li>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-black transition-colors"
                  >
                    Главная
                  </button>
                </li>
                <li>
                  <a
                    href="#ideology"
                    className="hover:text-black transition-colors"
                  >
                    Идентичность
                  </a>
                </li>
                <li>
                  <a href="#mds" className="hover:text-black transition-colors">
                    MDS Series
                  </a>
                </li>
                <li>
                  <a
                    href="#equipment"
                    className="hover:text-black transition-colors"
                  >
                    Оборудование
                  </a>
                </li>
                <li>
                  <a
                    href="#scents"
                    className="hover:text-black transition-colors"
                  >
                    Ароматы
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/20 block">
                Контакты
              </span>
              <ul className="space-y-4 text-xs font-medium text-neutral-500">
                <li>
                  <a
                    href="tel:+79832852477"
                    className="hover:text-black transition-colors"
                  >
                    8 983 285 24 77
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@vozduh-aroma.ru"
                    className="hover:text-black transition-colors"
                  >
                    info@vozduh-aroma.ru
                  </a>
                </li>
                <li className="pt-4">
                  <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-black/20 block mb-2">
                    Локация
                  </span>
                  <span className="text-black">Красноярск, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-black/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/20">
                © 2024 ВОЗДУХ. Все права защищены.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] uppercase tracking-[0.2em] font-bold text-black/10">
                <span>ИП Тараненко Александр Игоревич</span>
                <span>ОГРНИП: 316246800135832</span>
                <span>ИНН: 245306537353</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <button
                onClick={() => setLegalDoc("privacy")}
                className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/20 hover:text-black transition-colors"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => setLegalDoc("consent")}
                className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/20 hover:text-black transition-colors"
              >
                Согласие на обработку
              </button>
              <button
                onClick={() => setLegalDoc("agreement")}
                className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/20 hover:text-black transition-colors"
              >
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
