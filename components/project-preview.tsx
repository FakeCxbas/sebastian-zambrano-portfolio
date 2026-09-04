import { FileText, FolderOpen, MailCheck, ScanEye, ClipboardCheck, ShoppingBag, Receipt, ChartNoAxesCombined } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const demos = [
  { title: 'ContaNova', icon: Receipt, accent: '#90bfae', subtitle: 'Gestión comercial', stats: [['Ventas', '$ 840'], ['Comprobantes', '12'], ['Productos', '48']], rows: [['FAC-001', 'Cliente de ejemplo', '$ 120'], ['FAC-002', 'Consumidor final', '$ 65']], columns: ['Comprobante', 'Cliente', 'Total'] },
  { title: 'Taller Jeldes', icon: ClipboardCheck, accent: '#a5baf5', subtitle: 'Registro de actividades', stats: [['Actividades', '8'], ['En revisión', '2'], ['Informes', '3']], rows: [['Inspección', 'Equipo de muestra', 'Revisado'], ['Mantenimiento', 'Equipo de muestra', 'Borrador']], columns: ['Actividad', 'Equipo', 'Estado'] },
  { title: 'MxCorreo', icon: MailCheck, accent: '#9fc8ec', subtitle: 'Revisión de contactos', stats: [['Importados', '100'], ['Únicos', '92'], ['Duplicados', '8']], rows: [['contacto@example.com', 'Sintaxis', 'Correcta'], ['correo sin formato', 'Sintaxis', 'Revisar']], columns: ['Registro de ejemplo', 'Control', 'Resultado'] },
  { title: 'San Viernes / Billar Club', icon: ShoppingBag, accent: '#d8b38c', subtitle: 'Ventas e inventario', stats: [['Venta actual', '$ 18'], ['Artículos', '3'], ['Existencias', '72']], rows: [['Producto A', '2 unidades', '$ 12'], ['Producto B', '1 unidad', '$ 6']], columns: ['Producto', 'Cantidad', 'Subtotal'] },
  { title: 'SmartDocs', icon: FolderOpen, accent: '#b9a4ed', subtitle: 'Biblioteca documental', stats: [['Documentos', '24'], ['Carpetas', '4'], ['Versiones', '6']], rows: [['Informe-demo.pdf', 'Documento PDF', 'v2'], ['Contrato-ejemplo.pdf', 'Texto con OCR', 'v1']], columns: ['Archivo', 'Tipo', 'Versión'] },
  { title: 'TechView', icon: ScanEye, accent: '#97c8b6', subtitle: 'Asistencia visual', stats: [['Entrada', 'Cámara'], ['Proceso', 'Detección'], ['Salida', 'Voz']], rows: [['Objeto identificado', 'Silla', 'Izquierda'], ['Indicación espacial', 'Persona', 'Al frente']], columns: ['Evento simulado', 'Objeto', 'Ubicación'] },
  { title: 'Strawberry Sweet Serve', icon: ShoppingBag, accent: '#e9a9b7', subtitle: 'Seguimiento de pedidos', stats: [['Recibidos', '4'], ['Preparando', '2'], ['Listos', '1']], rows: [['Pedido #01', 'Fresas + crema', 'Preparando'], ['Pedido #02', 'Extra chocolate', 'Listo']], columns: ['Pedido', 'Personalización', 'Estado'] },
  { title: 'Actuariosa', icon: ChartNoAxesCombined, accent: '#b6c6da', subtitle: 'Consultoría actuarial', stats: [['Servicios', 'Consultoría'], ['Empresas', 'Asesoría'], ['Contacto', 'Cotización']], rows: [['Servicios profesionales', 'Conocer servicios', '→'], ['Consulta personalizada', 'Solicitar información', '→']], columns: ['Contenido', 'Acción', ''] },
];

export function ProjectPreview({index}: {index:number}) {
  const demo=demos[index]; const Icon=demo.icon;
  return <figure className="project-preview" style={{'--preview-accent':demo.accent} as React.CSSProperties} aria-label={`Vista conceptual de ${demo.title}`}>
    <div className="preview-top"><span><Icon size={18} aria-hidden="true"/>{demo.title}</span><FileText size={16} aria-hidden="true"/></div>
    <div className="preview-body"><p className="preview-heading">{demo.subtitle}</p><div className="preview-stats">{demo.stats.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
    <Table className="preview-table" aria-label={`Datos ficticios de ${demo.title}`}><TableHeader><TableRow>{demo.columns.map((label,i)=><TableHead key={i}>{label}</TableHead>)}</TableRow></TableHeader><TableBody>{demo.rows.map((row,i)=><TableRow key={i}>{row.map((cell,j)=><TableCell key={j}>{cell}</TableCell>)}</TableRow>)}</TableBody></Table></div>
    <figcaption>Vista conceptual · Datos ficticios · No es una captura del producto</figcaption>
  </figure>;
}
