'use client';
import { ArrowUpRight, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const previews = [
  { name:'ContaNova', image:'/projects/contanova-dashboard.png', kind:'Captura real · Dashboard', short:'Facturación electrónica', text:'Dashboard real de ContaNova. La captura fue recortada para excluir los datos de clientes y de la cuenta. Las cifras corresponden al momento de la captura.', color:'#91aefe' },
  { name:'Taller Jeldes', image:'/projects/jeldes-dashboard.png', kind:'Captura real · Panel administrativo', short:'Trabajo de campo, conectado.', text:'Panel administrativo real de Taller Jeldes. Se ocultaron el nombre y la empresa asociados a la cuenta, sin recrear la interfaz.', color:'#e7c663', logo:false },
  { name:'MxCorreo', image:'/projects/mxcorreo.png', kind:'Captura real · Aplicación Windows', short:'Del correo al dato limpio.', text:'Interfaz real de MxCorreo, con importación de archivos, revisión de dominios y exportación de listas. La captura no contiene contactos ni credenciales.', color:'#92c1cf' },
  { name:'San Viernes & Billar Club', image:'/projects/billar.png', kind:'Captura archivada · Billar Club', short:'Control comercial', text:'Captura existente del dashboard de Billar Club recuperada del proyecto. Corresponde a una versión anterior; las cifras visibles pertenecen a esa captura y no representan resultados actuales ni logros del portafolio.', color:'#d8b38c' },
  { name:'SmartDocs', image:'/projects/smartdocs-dashboard.png', kind:'Captura real · Gestión documental', short:'Documentos en su lugar.', text:'Interfaz real de SmartDocs: carga de archivos, categorías y búsqueda. El correo de la cuenta fue ocultado. La aplicación está disponible en su nuevo enlace.', color:'#b7a3e7' },
  { name:'TechView', kind:'Visión por computadora', short:'Ver. Detectar. Orientar.', text:'Software de asistencia visual con detección de objetos y alertas por voz. El repositorio público no incluye capturas en su presentación; no se ha recreado una interfaz ficticia.', color:'#8cb8aa' },
  { name:'Strawberry Sweet Serve', kind:'Gestión de pedidos', short:'Cada pedido, a su ritmo.', text:'Personalización de pedidos y seguimiento de preparación. Pendiente una captura del proyecto original; esta tarjeta presenta únicamente el nombre del proyecto.', color:'#d99bab' },
  { name:'Actuariosa Web', image:'/projects/actuariosa.png', kind:'Captura real · Propuesta web', short:'Consultoría actuarial', text:'Captura de la propuesta original ejecutada localmente. Es una demostración de diseño y desarrollo web, no una afirmación de adopción como sitio corporativo.', color:'#88acd2' },
];
export function ProjectPreview({index}:{index:number}) {
  const p=previews[index];
  return <Dialog>
    <DialogTrigger className={`project-cover ${p.image?'has-image':'identity-cover'} ${p.logo?'logo-cover':''}`} style={{'--cover-accent':p.color} as React.CSSProperties} aria-label={`Ver proyecto: ${p.name}`}>
      {p.image ? <img src={p.image} alt={p.kind+' de '+p.name} loading="lazy" width={1280} height={720}/> : <span className="cover-identity"><span className="identity-category">{p.kind}</span><strong>{p.name}</strong><span>{p.short}</span></span>}
      <span className="cover-label">{p.kind}</span><span className="cover-action">Ver proyecto <ArrowUpRight size={19} aria-hidden="true"/></span>
    </DialogTrigger>
    <DialogContent className="project-lightbox" showCloseButton={false}>
      <div className="lightbox-header"><div><span className="lightbox-kind">{p.kind}</span><DialogTitle>{p.name}</DialogTitle></div><DialogClose className="lightbox-close" aria-label="Cerrar vista del proyecto"><X size={22}/></DialogClose></div>
      {p.image ? <div className={`lightbox-image ${p.logo?'is-logo':''}`}><img src={p.image} alt={p.kind+' de '+p.name}/></div> : <div className="lightbox-identity" style={{color:p.color}}><strong>{p.name}</strong><span>Captura no disponible todavía</span></div>}
      <DialogDescription className="lightbox-description">{p.text}</DialogDescription>
    </DialogContent>
  </Dialog>;
}
