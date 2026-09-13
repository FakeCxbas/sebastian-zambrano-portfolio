'use client';
import { ArrowUpRight, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const previews = [
  { name:'ContaNova', image:'/projects/contanova-dashboard.png', kind:'Captura real · Dashboard', short:'Facturación electrónica', text:'Dashboard real de ContaNova. La captura fue recortada para excluir los datos de clientes y de la cuenta. Plataforma con facturación electrónica SRI, clientes, productos, reportes y soporte continuo.', color:'#91aefe', url:'https://contanova.org' },
  { name:'Taller Jeldes', image:'/projects/jeldes-dashboard.png', kind:'Captura real · Panel administrativo', short:'Trabajo de campo, conectado.', text:'Panel administrativo real de Taller Jeldes. Reconstrucción en Flutter para 15 usuarios: actividades, fotografías de órdenes, asistencia e informes técnicos asistidos por IA.', color:'#e7c663', logo:false },
  { name:'MxCorreo', image:'/projects/mxcorreo.png', kind:'Captura real · Aplicación Windows', short:'Del correo al dato limpio.', text:'Interfaz real de MxCorreo para Windows: importación y depuración de más de 36.000 contactos para Actuariosa, con detección de duplicados, revisión de registros DNS y exportación.', color:'#92c1cf' },
  { name:'San Viernes & Billar Club', image:'/projects/billar.png', kind:'Captura archivada · Billar Club', short:'Control comercial', text:'Captura del dashboard de Billar Club. Dos implementaciones de gestión de ventas, tickets de consumo, compras e inventario, con supervisión remota de actualizaciones mediante Electron y Capacitor.', color:'#d8b38c' },
  { name:'SmartDocs', image:'/projects/smartdocs-dashboard.png', kind:'Captura real · Gestión documental', short:'Documentos en su lugar.', text:'Interfaz real de SmartDocs: carga de archivos, categorías, búsqueda avanzada, OCR con Tesseract.js, historial de versiones y uso compartido.', color:'#b7a3e7', url:'https://smartdocs-phi.vercel.app' },
  { name:'TechView', image:'/projects/techview-dashboard.jpg', kind:'Interfaz del sistema · Visión artificial', short:'Ver. Detectar. Orientar.', text:'Software de asistencia visual con detección de objetos en tiempo real (YOLOv8, OpenCV) y alertas por voz ejecutándose sobre Raspberry Pi 5. Proyecto en equipo premiado con mención de honor en 2026.', color:'#8cb8aa', url:'https://github.com/FakeCxbas/TechView' },
  { name:'Strawberry Sweet Serve', image:'/projects/strawberry-dashboard.jpg', kind:'Interfaz táctil · Punto de venta', short:'Cada pedido, a su ritmo.', text:'Terminal digital y panel administrativo para local de fresas con crema: personalización de porciones, capas de crema artesanal, adición de toppings y cola de preparación en vivo con estados de entrega.', color:'#d99bab' },
  { name:'Actuariosa Web', image:'/projects/actuariosa.png', kind:'Captura real · Propuesta web', short:'Consultoría actuarial', text:'Captura de la propuesta de diseño y desarrollo web para consultoría actuarial: catálogo de servicios, preguntas frecuentes y canales directos por WhatsApp y correo.', color:'#88acd2', url:'https://github.com/FakeCxbas/actuariosa-web' },
];

export function ProjectPreview({index}:{index:number}) {
  const p = previews[index];
  return <Dialog>
    <DialogTrigger className={`project-cover ${p.image?'has-image':'identity-cover'} ${p.logo?'logo-cover':''}`} style={{'--cover-accent':p.color} as React.CSSProperties} aria-label={`Ver proyecto: ${p.name}`}>
      {p.image ? (
        <img src={p.image} alt={p.kind+' de '+p.name} loading="lazy" width={1280} height={720}/>
      ) : (
        <span className="cover-identity">
          <span className="identity-category">{p.kind}</span>
          <strong>{p.name}</strong>
          <span>{p.short}</span>
        </span>
      )}
      <span className="cover-label">{p.kind}</span>
      <span className="cover-action">Ver proyecto <ArrowUpRight size={19} aria-hidden="true"/></span>
    </DialogTrigger>
    <DialogContent className="project-lightbox" showCloseButton={false}>
      <div className="lightbox-header">
        <div>
          <span className="lightbox-kind">{p.kind}</span>
          <DialogTitle>{p.name}</DialogTitle>
        </div>
        <DialogClose className="lightbox-close" aria-label="Cerrar vista del proyecto">
          <X size={22}/>
        </DialogClose>
      </div>
      {p.image ? (
        <div className={`lightbox-image ${p.logo?'is-logo':''}`}>
          <img src={p.image} alt={p.kind+' de '+p.name}/>
        </div>
      ) : (
        <div className="lightbox-identity" style={{color:p.color}}>
          <strong>{p.name}</strong>
          <span>Captura no disponible todavía</span>
        </div>
      )}
      <div className="lightbox-body">
        <DialogDescription className="lightbox-description">{p.text}</DialogDescription>
        {p.url && (
          <div className="lightbox-action-row">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="lightbox-link-btn">
              {p.url.includes('github.com') ? 'Explorar en GitHub' : 'Abrir aplicación en vivo'} ↗
            </a>
          </div>
        )}
      </div>
    </DialogContent>
  </Dialog>;
}
