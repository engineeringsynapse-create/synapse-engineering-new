import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Shield, Factory, Workflow } from 'lucide-react';

const services = [
  {
    title: "Ingeniería de Tableros",
    description: "Diseño conceptual y detallado bajo normativas IEC/NEMA.",
    icon: <Zap className="w-6 h-6" />,
    size: "md"
  },
  {
    title: "Automatización & PLC",
    description: "Programación avanzada de sistemas Siemens, ABB y Schneider.",
    icon: <Cpu className="w-6 h-6" />,
    size: "lg"
  },
  {
    title: "Fabricación de Potencia",
    description: "Centros de Control de Motores (CCM) y celdas de media tensión.",
    icon: <Factory className="w-6 h-6" />,
    size: "md"
  },
  {
    title: "Mantenimiento 4.0",
    description: "Diagnóstico predictivo y retrofit de sistemas existentes.",
    icon: <Activity className="w-6 h-6" />,
    size: "md"
  }
];

export default function BentoServices() {
  return (
    <section className="py-32 bg-[#030303] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col mb-20">
          <span className="text-primary font-mono text-sm tracking-[0.3em] mb-4 uppercase">Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SOLUCIONES DE ÉLITE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card p-10 flex flex-col justify-between group transition-all duration-500 hover:border-primary/40 ${
                item.size === 'lg' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="text-primary mb-12 p-3 bg-primary/5 w-fit rounded-lg group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}