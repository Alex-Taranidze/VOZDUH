import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MDSProductCardProps {
  onTestDriveClick?: () => void;
}

const images = [
  "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/d64fd2de3a684b742e41c1551589153d19edb600/public/mds-1.jpg",
  "https://raw.githubusercontent.com/Alex-Taranidze/VOZDUH/d64fd2de3a684b742e41c1551589153d19edb600/public/mds-2.jpg"
];

const MDSProductCard: React.FC<MDSProductCardProps> = ({ onTestDriveClick }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="bg-white py-24 md:py-40 px-6 font-sans text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Image Section */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] bg-neutral-50 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={activeImage} 
                  alt="ВОЗДУХ MDS" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex gap-4"
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 aspect-square overflow-hidden border transition-all duration-300 ${
                    activeImage === img ? 'border-black' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:pt-0"
          >
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 block mb-4">
                MDS Series
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6">
                Профессиональная система ароматизации <br />
                <span className="font-medium">ВОЗДУХ MDS</span>
              </h2>
              <div className="text-2xl md:text-3xl font-light text-neutral-900">
                35 000 <span className="text-sm text-neutral-400 uppercase tracking-widest ml-2">руб.</span>
              </div>
            </div>

            <div className="mb-12 max-w-xl">
              <p className="text-lg text-neutral-600 leading-relaxed font-light italic">
                «В бизнесе премиум-сегмента детали решают всё. Управляйте восприятием ваших клиентов с помощью ВОЗДУХ MDS — напольной системы ароматизации экспертного уровня. Этот лаконичный черный матовый диффузор в форме колонны — не просто оборудование, это элемент статуса, создающий атмосферу роскоши, комфорта и безусловного доверия в пространствах до 200 м²».
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 pt-8 border-t border-neutral-100">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-300 block mb-2">Покрытие</span>
                <p className="text-sm text-neutral-800">до 200 м²</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-300 block mb-2">Технология</span>
                <p className="text-sm text-neutral-800">Небулизация</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-300 block mb-2">Управление</span>
                <p className="text-sm text-neutral-800">Wi-Fi / Bluetooth</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button 
                onClick={onTestDriveClick}
                className="bg-black text-white px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-bold transition-opacity duration-300 hover:opacity-70"
              >
                Заказать консультацию
              </button>
              <div className="text-[10px] text-neutral-400 leading-relaxed">
                App Store / Google Play <br />
                Управление через приложение
              </div>
            </div>

            {/* Legal Info */}
            <div className="mt-24 pt-8 border-t border-neutral-50">
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-300 font-medium">
                ИП Тараненко Александр Игоревич • ОГРНИП: 316246800135832
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MDSProductCard;
