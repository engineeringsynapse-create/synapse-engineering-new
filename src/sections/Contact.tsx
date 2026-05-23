import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-black px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8 tracking-tighter">¿LISTO PARA <br/><span className="text-primary">CONECTAR?</span></h2>
          <p className="text-gray-400 mb-12 text-lg">Inicia tu proyecto de automatización con los expertos en ingeniería eléctrica.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/5 rounded-full text-primary"><Phone /></div>
              <div><p className="text-xs text-gray-500 uppercase font-bold">Llámanos</p><p className="font-bold">+51 999 888 777</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/5 rounded-full text-primary"><Mail /></div>
              <div><p className="text-xs text-gray-500 uppercase font-bold">Email</p><p className="font-bold">proyectos@synapse.eng</p></div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nombre" className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors w-full" />
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors w-full" />
          </div>
          <input type="text" placeholder="Asunto" className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors w-full" />
          <textarea placeholder="Mensaje" rows={4} className="bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors w-full"></textarea>
          <button className="w-full bg-primary text-black font-black p-4 flex items-center justify-center gap-3 hover:bg-cyan-400 transition-colors uppercase tracking-widest">
            Enviar Solicitud <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}