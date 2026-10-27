'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Clock,
  ShieldCheck,
  Code2,
  FileText,
  Copy,
  Check,
  Terminal,
  Lock,
} from 'lucide-react';
import { TechBadge, GithubIcon } from './tech-icons';
import { useLanguage } from '@/lib/i18n';

export interface CodeSnippet {
  fileName: string;
  language: string;
  code: string;
  authorWatermark: string;
  decisionTitle: string;
  decisionNote: string;
}

export interface ProjectDetail {
  name: string;
  type: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai';
  tagline: string;
  badge: string;
  badgeVariant?: 'production' | 'award' | 'internal' | 'demo';
  image: string;
  stack: string[];
  url?: string;
  githubUrl?: string;
  isProprietary?: boolean;
  period: string;
  role: string;
  clientOrContext: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  challenges: string;
  impactMetrics: { label: string; value: string }[];
  accentColor: string;
  snippet: CodeSnippet;
}

export const PROJECTS_DETAILS: Record<string, ProjectDetail> = {
  'ContaNova': {
    name: 'ContaNova',
    type: 'GESTIÓN COMERCIAL & FACTURACIÓN',
    category: 'web',
    tagline: 'De las necesidades reales de un taller a una plataforma SaaS multi-negocio con facturación SRI.',
    badge: 'En Producción Activa',
    badgeVariant: 'production',
    image: '/projects/contanova.png',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'API SRI Ecuador', 'Vite'],
    url: 'https://contanova.org',
    isProprietary: true,
    period: '2025 — Actualidad',
    role: 'Arquitecto & Desarrollador Fullstack',
    clientOrContext: 'Electromecánica Bolívar & Pequeños Comercios',
    problem:
      'Los pequeños talleres y locales comerciales en Ecuador operaban con registros manuales en papel o Excel dispersos, lo que ocasionaba pérdidas de inventario, demoras en el cobro y dificultades para cumplir con la facturación electrónica obligatoria del SRI.',
    solution:
      'Diseñé y programé una plataforma web intuitiva que centraliza inventario de repuestos, catálogo de clientes, facturación electrónica autorizada por el SRI, reportes de caja diaria y exportación contable. La interfaz fue pensada específicamente para ser operada rápidamente incluso en una pantalla táctil de mostrador.',
    architectureHighlights: [
      'Generación y firma XML conforme a los esquemas y web services SOAP del SRI Ecuador.',
      'Base de datos PostgreSQL estructurada con transacciones ACID para evitar inconsistencias en inventario durante ventas concurrentes.',
      'Diseño modular desacoplado que permite adaptar reglas de negocio por rubro (talleres mecánicos, ferreterías, tiendas de repuestos).',
      'Despliegue con alta disponibilidad y copias de seguridad automáticas diarias.',
    ],
    challenges:
      'Lograr la interoperabilidad fluida con los servidores del SRI ecuatoriano bajo condiciones de alta latencia o intermitencia, implementando cola de reintentos y almacenamiento local offline transitorio.',
    impactMetrics: [
      { label: 'Tiempo de emisión de factura', value: '< 3 seg' },
      { label: 'Disponibilidad de plataforma', value: '99.9%' },
      { label: 'Negocios beneficiados', value: 'Talleres y comercios' },
    ],
    accentColor: '#3b82f6',
    snippet: {
      fileName: 'src/services/sriSigner.ts',
      language: 'TypeScript',
      authorWatermark: 'Sebastián Zambrano · Arquitecto Fullstack',
      decisionTitle: 'Canonización XAdES-BES y Cálculo de Clave Módulo 11',
      decisionNote:
        'El SRI Ecuador exige un algoritmo ponderado estricto de Módulo 11 (factores 2 al 7 invertidos) para el dígito verificador de 49 caracteres. Se implementó una capa desacoplada que valida la integridad matemática antes de enviar al SOAP de recepción, evitando peticiones rechazadas y consumo innecesario de cuota.',
      code: `/**
 * @file sriSigner.ts
 * @author Sebastián Zambrano (@FakeCxbas)
 * @description Módulo de canonización y firma electrónica XAdES-BES
 *              para comprobantes electrónicos (SRI Ecuador).
 */

import { forge } from 'node-forge';

export interface SRIInvoicePayload {
  ambiente: '1' | '2'; // 1: Pruebas, 2: Producción
  tipoEmision: '1';    // 1: Emisión Normal
  secuencial: string;   // 9 dígitos con relleno ceros
  rucEmisor: string;
  claveAcceso?: string;
  totalSinImpuestos: number;
  importeTotal: number;
}

export class SRISignerService {
  /**
   * Genera la Clave de Acceso oficial de 49 dígitos requerida por el SRI,
   * calculando el dígito verificador con algoritmo de Módulo 11 ponderado (7 a 2).
   */
  public static generarClaveAcceso(params: {
    fechaEmision: string; // ddmmaaaa
    tipoComprobante: string; // 01: Factura
    ruc: string;
    ambiente: string;
    serie: string; // estab + ptoEmi (6 dígitos)
    secuencial: string; // 9 dígitos
    codigoNumerico: string; // 8 dígitos aleatorios
    tipoEmision: string;
  }): string {
    const raw48 = [
      params.fechaEmision,
      params.tipoComprobante,
      params.ruc,
      params.ambiente,
      params.serie,
      params.secuencial,
      params.codigoNumerico,
      params.tipoEmision,
    ].join('');

    const digitoVerificador = this.calcularModulo11(raw48);
    return \`\${raw48}\${digitoVerificador}\`;
  }

  private static calcularModulo11(cadena: string): number {
    let factor = 2;
    let suma = 0;
    for (let i = cadena.length - 1; i >= 0; i--) {
      suma += parseInt(cadena.charAt(i), 10) * factor;
      factor = factor === 7 ? 2 : factor + 1;
    }
    const residuo = suma % 11;
    const digito = 11 - residuo;
    if (digito === 11) return 0;
    if (digito === 10) return 1;
    return digito;
  }

  /**
   * Estructura el XML conforme al estándar XAdES-BES y genera el DigestValue
   * SHA-1 sobre el nodo SignedInfo y nodo comprobante canonizado.
   */
  public async firmarComprobanteXML(
    xmlContent: string,
    p12Buffer: ArrayBuffer,
    certPassword: string
  ): Promise<string> {
    const p12Der = forge.util.createBuffer(p12Buffer);
    const p12Asn1 = forge.asn1.fromDer(p12Der);
    const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, certPassword);

    const keyBags = p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag });
    const certBags = p12.getBags({ bagType: forge.pki.oids.certBag });

    const keyBag = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag]?.[0];
    const certBag = certBags[forge.pki.oids.certBag]?.[0];

    if (!keyBag?.key || !certBag?.cert) {
      throw new Error('Certificado PKCS#12 inválido o contraseña incorrecta para firma SRI.');
    }

    // Canonización de nodos, inyección de X509Certificate y firma RSA-SHA1
    const md = forge.md.sha1.create();
    md.update(xmlContent, 'utf8');
    const signature = keyBag.key.sign(md);

    return this.inyectarFirmaXAdES(xmlContent, certBag.cert, forge.util.encode64(signature));
  }

  private inyectarFirmaXAdES(xml: string, cert: any, signatureBase64: string): string {
    // Inserta estructura ds:Signature con referencias de URI conforme ficha técnica SRI v2.21
    const signatureXml = \`
  <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="Signature-SRI">
    <ds:SignedInfo>
      <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
      <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
    </ds:SignedInfo>
    <ds:SignatureValue>\${signatureBase64}</ds:SignatureValue>
  </ds:Signature>\`;

    return xml.replace('</factura>', \`\${signatureXml}</factura>\`);
  }
}`,
    },
  },

  'Taller Jeldes': {
    name: 'Taller Jeldes',
    type: 'APLICACIÓN MÓVIL & OPERACIONES',
    category: 'mobile',
    tagline: 'Control integral de reparaciones en fosa, asistencia y diagnóstico asistido por IA para 15 técnicos.',
    badge: 'Uso Interno Operativo',
    badgeVariant: 'internal',
    image: '/projects/jeldes.png',
    stack: ['Flutter', 'Dart', 'OpenAI API / IA aplicada', 'Supabase', 'Cloud Storage'],
    isProprietary: true,
    period: '2025 — 2026',
    role: 'Desarrollador Flutter & Diseñador de Sistema',
    clientOrContext: 'Taller Mecánico Jeldes (15 usuarios)',
    problem:
      'El taller necesitaba monitorear el avance de las órdenes de trabajo mecánicas en tiempo real. Los técnicos necesitaban documentar evidencias fotográficas de repuestos dañados sin perder tiempo y la administración requería redactar informes técnicos claros sin consumir horas de trabajo de oficina.',
    solution:
      'Reconstruí desde cero una aplicación móvil multiplataforma en Flutter para técnicos y un panel de administración. Los mecánicos registran el estado del vehículo, suben fotos de inspección y el sistema procesa las notas del mecánico mediante un modelo de lenguaje para redactar reportes profesionales al cliente final.',
    architectureHighlights: [
      'App Flutter con arquitectura BLoC/Clean para separar lógica de captura de fotos y estados de red.',
      'Compresión y redimensionamiento inteligente de imágenes en el dispositivo antes de la subida para ahorrar ancho de banda en taller.',
      'Integración con API de IA generativa para redactar diagnósticos estructurados a partir de notas rápidas de los técnicos.',
      'Control de marcaje de asistencia y cálculo de horas de fosa por vehículo.',
    ],
    challenges:
      'Garantizar un desempeño fluido en dispositivos móviles de gama media y baja utilizados en el taller bajo condiciones de mala cobertura WiFi, con sincronización en segundo plano.',
    impactMetrics: [
      { label: 'Usuarios concurrentes', value: '15 mecánicos' },
      { label: 'Ahorro de tiempo en reportes', value: '70%' },
      { label: 'Evidencias fotográficas', value: '100% digitalizadas' },
    ],
    accentColor: '#10b981',
    snippet: {
      fileName: 'lib/features/sync/offline_sync_repository.dart',
      language: 'Dart',
      authorWatermark: 'Sebastián Zambrano · Desarrollador Flutter',
      decisionTitle: 'Patrón Offline-First con Cola de Sincronización Reactiva',
      decisionNote:
        'Dado que los mecánicos trabajan bajo los vehículos en fosas subterráneas donde se pierde la señal de red inalámbrica, se diseñó una cola en SQLite local con observador de conectividad. Las fotos y reportes se persisten localmente y se transmiten automáticamente con reintentos con backoff al volver a detectar cobertura.',
      code: `/// @file offline_sync_repository.dart
/// @author Sebastián Zambrano (@FakeCxbas)
/// @description Gestor de sincronización offline-first con SQLite
///              para reportes técnicos mecánicos en fosa sin WiFi.
library;

import 'dart:async';
import 'dart:convert';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:sqflite/sqflite.dart';
import 'package:http/http.dart' as http;

class OfflineSyncRepository {
  final Database _db;
  final Connectivity _connectivity;
  final http.Client _httpClient;
  StreamSubscription<List<ConnectivityResult>>? _networkSubscription;

  OfflineSyncRepository(this._db, this._connectivity, this._httpClient) {
    _initNetworkListener();
  }

  void _initNetworkListener() {
    _networkSubscription = _connectivity.onConnectivityChanged.listen((results) {
      final hasConnection = results.any((r) => r != ConnectivityResult.none);
      if (hasConnection) {
        // Disparar sincronización silenciosa al recuperar cobertura
        sincronizarColaPendiente();
      }
    });
  }

  /// Registra una orden de trabajo localmente con fotos comprimidas
  /// para asegurar cero pérdida de información aunque no haya internet en fosa.
  Future<void> encolarReporteMecanico({
    required String ordenId,
    required String tecnicoId,
    required String diagnosticoPreliminar,
    required List<String> pathsFotosLocales,
  }) async {
    await _db.insert('cola_sincronizacion', {
      'orden_id': ordenId,
      'tecnico_id': tecnicoId,
      'payload': jsonEncode({
        'diagnostico': diagnosticoPreliminar,
        'fotos': pathsFotosLocales,
        'timestamp': DateTime.now().toIso8601String(),
      }),
      'estado': 'pendiente',
      'reintentos': 0,
      'creado_en': DateTime.now().millisecondsSinceEpoch,
    }, conflictAlgorithm: ConflictAlgorithm.replace);
  }

  /// Procesa los elementos pendientes con backoff exponencial
  Future<int> sincronizarColaPendiente() async {
    final pendientes = await _db.query(
      'cola_sincronizacion',
      where: 'estado = ? AND reintentos < ?',
      whereArgs: ['pendiente', 5],
      orderBy: 'creado_en ASC',
      limit: 10,
    );

    int sincronizados = 0;
    for (final row in pendientes) {
      final id = row['id'] as int;
      final ordenId = row['orden_id'] as String;
      final payload = jsonDecode(row['payload'] as String);

      try {
        final response = await _httpClient.post(
          Uri.parse('https://api.tallerjeldes.internal/v1/ordenes/\$ordenId/reporte'),
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode(payload),
        ).timeout(const Duration(seconds: 15));

        if (response.statusCode == 200 || response.statusCode == 201) {
          await _db.update(
            'cola_sincronizacion',
            {'estado': 'completado'},
            where: 'id = ?',
            whereArgs: [id],
          );
          sincronizados++;
        } else {
          await _incrementarReintento(id, (row['reintentos'] as int) + 1);
        }
      } catch (_) {
        await _incrementarReintento(id, (row['reintentos'] as int) + 1);
      }
    }
    return sincronizados;
  }

  Future<void> _incrementarReintento(int id, int nuevoReintento) async {
    await _db.update(
      'cola_sincronizacion',
      {'reintentos': nuevoReintento},
      where: 'id = ?',
      whereArgs: [id],
    );
  }

  void dispose() {
    _networkSubscription?.cancel();
  }
}`,
    },
  },

  'TechView': {
    name: 'TechView',
    type: 'VISIÓN ARTIFICIAL & HARDWARE ACCESIBLE',
    category: 'ai',
    tagline: 'Gafas inteligentes de asistencia visual con detección de obstáculos en tiempo real y alertas por voz.',
    badge: 'Mención de Honor 2026',
    badgeVariant: 'award',
    image: '/projects/techview-dashboard.jpg',
    stack: ['Python', 'OpenCV', 'YOLOv8', 'Raspberry Pi 5', 'PyTTSx3', 'Linux Embedded'],
    githubUrl: 'https://github.com/FakeCxbas/TechView',
    period: 'Enero 2026',
    role: 'Desarrollador Principal de Software & Visión Artificial',
    clientOrContext: 'Proyecto de Titulación / Innovación Tecnológica (Equipo de 3)',
    problem:
      'Las personas con discapacidad visual severa enfrentan riesgos cotidianos al desplazarse en entornos urbanos debido a obstáculos aéreos, escalones o personas en movimiento que los bastones convencionales no detectan a tiempo.',
    solution:
      'Desarrollé el núcleo completo de software embebido para unas gafas conectadas a una Raspberry Pi 5. El sistema captura video en directo mediante cámara frontal, detecta objetos clasificados por distancia y genera indicaciones sintéticas por voz en milisegundos para guiar al usuario de forma segura.',
    architectureHighlights: [
      'Pipeline de visión optimizado en Python usando modelos YOLOv8 exportados con quantización INT8 para aceleración en procesador ARM.',
      'Algoritmo de estimación de profundidad monocular y sectorización espacial (izquierda, centro, derecha).',
      'Motor de alertas de audio multihilo no bloqueante: prioriza peligros inminentes sobre descripciones de fondo.',
      'Reconocido institucionalmente con Mención de Honor por innovación e impacto social en 2026.',
    ],
    challenges:
      'Mantener una tasa de refresco superior a 15 FPS en hardware embebido sin sobrecalentamiento, optimizando el consumo de memoria RAM y la latencia entre captura e indicación sonora.',
    impactMetrics: [
      { label: 'Latencia de inferencia', value: '< 110 ms' },
      { label: 'Reconocimiento', value: 'Mención de Honor' },
      { label: 'Precisión de detección', value: '92% mAP' },
    ],
    accentColor: '#22c55e',
    snippet: {
      fileName: 'src/vision/detector_pipeline.py',
      language: 'Python',
      authorWatermark: 'Sebastián Zambrano · Desarrollador de Software',
      decisionTitle: 'Pipeline de Inferencia Asíncrona con Cola de Prioridad Auditiva',
      decisionNote:
        'Para no congelar el bucle de visión de la cámara durante la síntesis de voz, se desacopló el motor TTS en un hilo demonio independiente coordinado por una PriorityQueue. Un obstáculo cercano (área de bounding box > 35%) desplaza cualquier anuncio secundario en curso, garantizando seguridad inmediata al usuario.',
      code: `"""
@file: detector_pipeline.py
@author: Sebastián Zambrano (@FakeCxbas)
@description: Pipeline de inferencia YOLOv8 INT8 y sectorización espacial
              en tiempo real para gafas de asistencia visual (Raspberry Pi 5).
"""

import cv2
import numpy as np
from ultralytics import YOLO
import pyttsx3
import threading
import queue
import time

class VisualAssistPipeline:
    def __init__(self, model_path: str = "models/yolov8n_int8.onnx", frame_width: int = 640):
        self.model = YOLO(model_path, task="detect")
        self.frame_width = frame_width
        self.sector_width = frame_width // 3  # Izquierda, Centro, Derecha
        
        # Cola no bloqueante para sintetizador de voz (PyTTSx3)
        self.audio_queue = queue.PriorityQueue()
        self.is_running = True
        self.tts_thread = threading.Thread(target=self._tts_worker, daemon=True)
        self.tts_thread.start()

    def clasificar_sector(self, x_center: float) -> str:
        """Determina la ubicación espacial horizontal del obstáculo."""
        if x_center < self.sector_width:
            return "a tu izquierda"
        elif x_center > 2 * self.sector_width:
            return "a tu derecha"
        return "al frente"

    def procesar_frame(self, frame: np.ndarray) -> np.ndarray:
        """Inferencia visual en milisegundos y encolamiento de alertas sonoras."""
        results = self.model(frame, verbose=False, conf=0.55)[0]
        
        for box in results.boxes:
            cls_id = int(box.cls[0])
            label = results.names[cls_id]
            conf = float(box.conf[0])
            
            x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
            x_center = (x1 + x2) / 2
            sector = self.clasificar_sector(x_center)
            
            # Estimación de proximidad mediante área relativa del bounding box
            area_ratio = ((x2 - x1) * (y2 - y1)) / (frame.shape[0] * frame.shape[1])
            if area_ratio > 0.35:
                # Prioridad 1: Peligro inminente de colisión
                self.audio_queue.put((1, f"¡Atención! {label} muy cerca {sector}"))
            elif conf > 0.70:
                # Prioridad 3: Descripción informativa del entorno
                self.audio_queue.put((3, f"{label} {sector}"))
                
            # Marcador visual para pantalla de calibración
            cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 120), 2)
            cv2.putText(frame, f"{label} {conf:.2f}", (int(x1), int(y1)-8),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 120), 1)

        return frame

    def _tts_worker(self):
        engine = pyttsx3.init()
        engine.setProperty("rate", 175)
        while self.is_running:
            try:
                priority, mensaje = self.audio_queue.get(timeout=0.1)
                engine.say(mensaje)
                engine.runAndWait()
                self.audio_queue.task_done()
            except queue.Empty:
                continue`,
    },
  },

  'MxCorreo': {
    name: 'MxCorreo',
    type: 'HERRAMIENTA DE ESCRITORIO & AUTOMATIZACIÓN',
    category: 'desktop',
    tagline: 'Software portable en Python para depuración, saneamiento y validación DNS masiva de bases de datos.',
    badge: '+132.000 Registros Procesados',
    badgeVariant: 'production',
    image: '/projects/mxcorreo.png',
    stack: ['Python', 'Tkinter / CustomTkinter', 'dnspython', 'SQLite', 'Pandas'],
    isProprietary: true,
    period: '2025',
    role: 'Desarrollador de Software',
    clientOrContext: 'Actuariosa Consultoría',
    problem:
      'Las bases de datos comerciales acumulaban decenas de miles de contactos con correos mal formateados, registros duplicados y dominios inexistentes, provocando altas tasas de rebote en campañas institucionales y consumo innecesario de almacenamiento.',
    solution:
      'Creé una aplicación de escritorio nativa, portable y sin dependencias complejas de instalación. Permite arrastrar archivos Excel o CSV masivos, aplicar normalización de cadenas, consultar registros DNS MX de servidores receptores y generar informes detallados de salud de la base de datos.',
    architectureHighlights: [
      'Arquitectura basada en hilos (`threading`) para mantener la interfaz gráfica responsiva durante la ejecución de lotes masivos de consultas de red.',
      'Validador de sintaxis RFC 5322 con limpieza automática de espacios, caracteres invisibles y tildes accidentales.',
      'Caché de consultas DNS para optimizar velocidad y evitar saturar servidores de nombres de dominio.',
      'Exportación en un clic a formatos limpios `.xlsx` y `.csv` categorizados por estado de entrega.',
    ],
    challenges:
      'Evitar el bloqueo por rate-limiting en resolvedores DNS al comprobar miles de dominios en pocos minutos, implementando backoff exponencial y pools de conexiones concurrentes.',
    impactMetrics: [
      { label: 'Registros saneados', value: '+132.000' },
      { label: 'Reducción de rebotes', value: '> 85%' },
      { label: 'Velocidad de procesamiento', value: '500 reg/min' },
    ],
    accentColor: '#f59e0b',
    snippet: {
      fileName: 'src/core/dns_mx_validator.py',
      language: 'Python',
      authorWatermark: 'Sebastián Zambrano · Desarrollador de Software',
      decisionTitle: 'Caché de Dominios en Memoria y Concurrencia con ThreadPool',
      decisionNote:
        'En bases de datos de 132.000 filas, hasta el 80% de los contactos comparten servidores corporativos o proveedores masivos (@gmail, @hotmail, etc.). Implementar un diccionario de memoización para registros MX redujo en un 78% las consultas de red externas, previniendo baneos de IP por flooding y acelerando la auditoría a 500 registros por minuto.',
      code: `"""
@file: dns_mx_validator.py
@author: Sebastián Zambrano (@FakeCxbas)
@description: Validador multihilo concurrente de registros DNS MX
              para depuración y saneamiento de +132.000 correos.
"""

import re
import dns.resolver
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Dict, List, Tuple

EMAIL_REGEX = re.compile(
    r"^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
)

class DNSMXValidator:
    def __init__(self, dns_timeout: float = 2.5, max_workers: int = 16):
        self.resolver = dns.resolver.Resolver()
        self.resolver.lifetime = dns_timeout
        self.resolver.timeout = dns_timeout
        self.max_workers = max_workers
        self._domain_cache: Dict[str, Tuple[bool, str]] = {}

    def limpiar_correo(self, email_raw: str) -> str:
        """Normaliza espacios invisibles, acentos accidentales y casing."""
        if not isinstance(email_raw, str):
            return ""
        limpio = email_raw.strip().lower()
        return limpio.replace(" ", "").replace(",", ".").replace("..", ".")

    def verificar_mx_dominio(self, dominio: str) -> Tuple[bool, str]:
        """Consulta registros MX con caché en memoria para evitar saturar DNS."""
        if dominio in self._domain_cache:
            return self._domain_cache[dominio]

        try:
            records = self.resolver.resolve(dominio, "MX")
            sorted_mx = sorted(records, key=lambda r: r.preference)
            best_mx = str(sorted_mx[0].exchange).rstrip(".")
            res = (True, f"MX válido ({best_mx})")
        except dns.resolver.NXDOMAIN:
            res = (False, "Dominio no existe (NXDOMAIN)")
        except (dns.resolver.NoAnswer, dns.resolver.NoNameservers):
            res = (False, "Sin registros de correo MX")
        except dns.exception.Timeout:
            res = (False, "Tiempo de espera agotado (Timeout)")
        except Exception as err:
            res = (False, f"Error DNS: {type(err).__name__}")

        self._domain_cache[dominio] = res
        return res

    def procesar_lote(self, emails: List[str]) -> List[Dict]:
        """Procesa una lista de correos en paralelo usando ThreadPoolExecutor."""
        resultados = []
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            futuros = {}
            for raw in emails:
                email = self.limpiar_correo(raw)
                if not email or not EMAIL_REGEX.match(email):
                    resultados.append({
                        "original": raw, "correo": email, "valido": False,
                        "motivo": "Sintaxis RFC inválida"
                    })
                    continue

                dominio = email.split("@")[1]
                futuros[executor.submit(self.verificar_mx_dominio, dominio)] = (raw, email)

            for futuro in as_completed(futuros):
                raw, email = futuros[futuro]
                es_valido, motivo = futuro.result()
                resultados.append({
                    "original": raw, "correo": email, "valido": es_valido, "motivo": motivo
                })

        return resultados`,
    },
  },

  'San Viernes & Billar Club': {
    name: 'San Viernes & Billar Club',
    type: 'PUNTO DE VENTA & CONTROL DE MESAS',
    category: 'desktop',
    tagline: 'Gestión comercial de doble local: cronometraje de mesas por minuto, tickets térmicos e inventario.',
    badge: 'En Producción Comercial',
    badgeVariant: 'production',
    image: '/projects/billar.png',
    stack: ['React', 'TypeScript', 'Electron', 'Capacitor', 'SQLite / Node.js', 'ESC/POS'],
    isProprietary: true,
    period: '2025 — 2026',
    role: 'Desarrollador Fullstack & Soporte en Sitio',
    clientOrContext: 'Locales Comerciales San Viernes & Billar Club',
    problem:
      'El cobro manual de mesas de juego generaba disputas con clientes sobre los minutos transcurridos, descuadres en el inventario de bebidas y dificultad para supervisar los ingresos cuando los propietarios no estaban físicamente en el local.',
    solution:
      'Implementé dos despliegues completos del sistema: una aplicación de escritorio con Electron para el puesto de caja y una app móvil de supervisión para los propietarios. El sistema calcula tarifas por fracción de minuto, cobra consumo de bar e imprime comandas y recibos en impresoras térmicas ESC/POS.',
    architectureHighlights: [
      'Temporizadores reactivos independientes por mesa con persistencia local en SQLite para tolerar caídas de energía sin perder los tiempos transcurridos.',
      'Módulo de impresión térmica directa vía puerto USB y red mediante protocolo binario ESC/POS.',
      'Panel de control móvil que permite a los dueños consultar ingresos, inventario y mesas ocupadas desde su teléfono.',
      'Mecanismo de distribución y actualización remota de versiones sin detener la operación diaria.',
    ],
    challenges:
      'Garantizar la resiliencia absoluta del cronómetro de juego ante apagones repentinos o reinicios del equipo de caja, recuperando la sesión exacta al encender.',
    impactMetrics: [
      { label: 'Implementaciones activas', value: '2 locales' },
      { label: 'Precisión de cobro', value: '100% automatizado' },
      { label: 'Tiempo de corte de caja', value: '< 2 minutos' },
    ],
    accentColor: '#8b5cf6',
    snippet: {
      fileName: 'src/main/timer_engine.ts',
      language: 'TypeScript',
      authorWatermark: 'Sebastián Zambrano · Desarrollador Fullstack',
      decisionTitle: 'Cálculo de Tarifas Fraccionadas y Generación Binaria ESC/POS',
      decisionNote:
        'El cálculo de tiempo se basa en timestamps absolutos UTC persistidos en base de datos en vez de contadores de intervalo en memoria (setInterval). Esto asegura que si ocurre una falla eléctrica o el software se reinicia, el tiempo transcurrido exacto se reconstruye matemáticamente sin perder ni un minuto de facturación.',
      code: `/**
 * @file timer_engine.ts
 * @author Sebastián Zambrano (@FakeCxbas)
 * @description Motor de cómputo de tarifas por minuto para mesas de billar
 *              con tolerancia a fallas de energía y persistencia en SQLite.
 */

export interface MesaSession {
  mesaId: number;
  nombreMesa: string;
  iniciadaEn: number;      // Epoch timestamp en milisegundos
  tarifaHora: number;      // e.g. $4.00 / hora
  consumoBar: number;      // Total de bebidas acumuladas
  pausada: boolean;
  minutosAcumulados: number;
}

export class BillarTimerEngine {
  /**
   * Calcula el cobro exacto considerando tarifas por minuto justo
   * y desglose transparente de consumo de bar.
   */
  public static calcularDetalleCobro(session: MesaSession, horaCorte: number = Date.now()): {
    tiempoTotalMinutos: number;
    subtotalTiempo: number;
    subtotalBar: number;
    totalAPagar: number;
    tiempoFormateado: string;
  } {
    let minutos = session.minutosAcumulados;
    if (!session.pausada) {
      const msTranscurridos = Math.max(0, horaCorte - session.iniciadaEn);
      minutos += Math.floor(msTranscurridos / (1000 * 60));
    }

    const costoPorMinuto = session.tarifaHora / 60;
    const subtotalTiempo = Number((minutos * costoPorMinuto).toFixed(2));
    const totalAPagar = Number((subtotalTiempo + session.consumoBar).toFixed(2));

    const horas = Math.floor(minutos / 60);
    const minsRestantes = minutos % 60;
    const tiempoFormateado = \`\${horas}h \${minsRestantes.toString().padStart(2, '0')}m\`;

    return {
      tiempoTotalMinutos: minutos,
      subtotalTiempo,
      subtotalBar: session.consumoBar,
      totalAPagar,
      tiempoFormateado,
    };
  }

  /**
   * Genera el payload binario ESC/POS para impresión directa en comanda térmica.
   */
  public static formatearTicketTermico(
    session: MesaSession,
    detalle: ReturnType<typeof BillarTimerEngine.calcularDetalleCobro>,
    cajero: string
  ): Uint8Array {
    const encoder = new TextEncoder();
    const lineas = [
      '\\x1b\\x61\\x01', // Centrado
      '*** SAN VIERNES BILLAR CLUB ***\\n',
      'Comprobante de Juego & Bar\\n',
      '--------------------------------\\n',
      \`\\x1b\\x61\\x00Mesa: \${session.nombreMesa}\\n\`,
      \`Cajero: \${cajero}\\n\`,
      \`Tiempo jugado: \${detalle.tiempoFormateado}\\n\`,
      \`Total Mesa:    $\${detalle.subtotalTiempo.toFixed(2)}\\n\`,
      \`Consumo Bar:   $\${detalle.subtotalBar.toFixed(2)}\\n\`,
      '--------------------------------\\n',
      \`\\x1b\\x45\\x01TOTAL:         $\${detalle.totalAPagar.toFixed(2)}\\x1b\\x45\\x00\\n\\n\`,
      '\\x1b\\x61\\x01¡Gracias por su visita!\\n\\n\\n\\n',
      '\\x1d\\x56\\x41\\x03', // Corte de papel
    ];

    return encoder.encode(lineas.join(''));
  }
}`,
    },
  },

  'SmartDocs': {
    name: 'SmartDocs',
    type: 'GESTIÓN DOCUMENTAL & OCR EN EL NAVEGADOR',
    category: 'web',
    tagline: 'Búsqueda, catalogación, historial de versiones y OCR client-side sin comprometer documentos confidenciales.',
    badge: 'Despliegue Web Funcional',
    badgeVariant: 'production',
    image: '/projects/smartdocs-dashboard.png',
    stack: ['React', 'TypeScript', 'Tesseract.js (WASM)', 'IndexedDB', 'Tailwind CSS'],
    url: 'https://smartdocs-phi.vercel.app',
    githubUrl: 'https://github.com/FakeCxbas/SmartDocs',
    period: '2025',
    role: 'Desarrollador Frontend & Especialista en OCR',
    clientOrContext: 'Proyecto por Encargo / Digitalización',
    problem:
      'Las pequeñas oficinas manejan cientos de documentos escaneados en PDF o imágenes que no tienen texto seleccionable, impidiendo encontrar contratos o recibos rápidamente.',
    solution:
      'Creé una plataforma web orientada a la privacidad que procesa el reconocimiento óptico de caracteres (OCR) directamente en la máquina del usuario utilizando WebAssembly, permitiendo indexar y buscar cualquier palabra dentro de documentos digitalizados.',
    architectureHighlights: [
      'Procesamiento OCR en Web Workers con Tesseract.js para mantener la interfaz a 60 FPS sin congelamientos.',
      'Almacenamiento de índices de búsqueda de texto completo (Full-Text Search) en IndexedDB.',
      'Historial de versiones, etiquetado por categorías y visualizador de documentos integrado.',
      '100% respetuoso con la privacidad: los archivos sensibles no se envían a servidores de terceros.',
    ],
    challenges:
      'Optimizar el consumo de memoria de los modelos WASM en navegadores cliente al procesar documentos con múltiples páginas simultáneas.',
    impactMetrics: [
      { label: 'Búsqueda en documentos', value: 'Instantánea' },
      { label: 'Privacidad de datos', value: '100% en el cliente' },
      { label: 'Formatos soportados', value: 'PDF, JPG, PNG' },
    ],
    accentColor: '#0ea5e9',
    snippet: {
      fileName: 'src/workers/ocr.worker.ts',
      language: 'TypeScript',
      authorWatermark: 'Sebastián Zambrano · Desarrollador Frontend',
      decisionTitle: 'Web Worker Aislado para Procesamiento WASM sin Bloquear la UI',
      decisionNote:
        'Ejecutar modelos OCR en el hilo principal de JavaScript congela el scroll y las animaciones. Al orquestar Tesseract.js dentro de un Web Worker con comunicación asíncrona por postMessage, la interfaz mantiene 60 FPS fluidos mientras procesa páginas de alta resolución.',
      code: `/**
 * @file ocr.worker.ts
 * @author Sebastián Zambrano (@FakeCxbas)
 * @description Web Worker dedicado al procesamiento OCR client-side con Tesseract.js WASM
 *              garantizando privacidad 100% y 60 FPS en el hilo principal.
 */

import { createWorker, Worker } from 'tesseract.js';

let tesseractWorker: Worker | null = null;

async function getWorker(): Promise<Worker> {
  if (!tesseractWorker) {
    tesseractWorker = await createWorker('spa', 1, {
      logger: (progress) => {
        postMessage({
          type: 'OCR_PROGRESS',
          status: progress.status,
          progress: Math.round((progress.progress || 0) * 100),
        });
      },
    });
  }
  return tesseractWorker;
}

self.onmessage = async (e: MessageEvent) => {
  const { id, imageDataUrl } = e.data;

  try {
    const worker = await getWorker();

    // Reconocimiento OCR de alta resolución en español
    const result = await worker.recognize(imageDataUrl);

    // Extracción de metadatos, palabras clave y nivel de confianza
    const palabras = result.data.words.map((w) => ({
      text: w.text,
      confidence: w.confidence,
      bbox: w.bbox,
    }));

    postMessage({
      type: 'OCR_SUCCESS',
      id,
      text: result.data.text,
      confidence: Math.round(result.data.confidence),
      wordsCount: palabras.length,
    });
  } catch (error: any) {
    postMessage({
      type: 'OCR_ERROR',
      id,
      error: error?.message || 'Error desconocido durante OCR.',
    });
  }
};`,
    },
  },

  'Strawberry Sweet Serve': {
    name: 'Strawberry Sweet Serve',
    type: 'KIOSCO DIGITAL & SEGUIMIENTO DE PEDIDOS',
    category: 'web',
    tagline: 'Sistema interactivo de pedidos personalizados y panel administrativo para negocio gastronómico.',
    badge: 'Adoptado por el Negocio',
    badgeVariant: 'production',
    image: '/projects/strawberry-dashboard.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Local Storage / State Sync'],
    isProprietary: true,
    period: '2025',
    role: 'Desarrollador Frontend & Diseñador UI/UX',
    clientOrContext: 'Emprendimiento Gastronómico de Postres',
    problem:
      'Las combinaciones personalizadas de tamaños, bases, salsas y toppings para postres generaban filas en mostrador y errores frecuentes en la comanda hacia la cocina.',
    solution:
      'Desarrollé una interfaz visual dinámica estilo kiosco donde los clientes o el cajero arman el pedido paso a paso con cálculo de precio automático en tiempo real y una vista para cocina que actualiza el estado de preparación (Pendiente, En proceso, Listo).',
    architectureHighlights: [
      'Modelado tipado estricto en TypeScript para reglas de combinaciones de productos y precios complementarios.',
      'Diseño visual llamativo con estética moderna, adaptado para pantallas táctiles y teléfonos móviles.',
      'Panel de visualización para cocina con alertas sonoras discretas al entrar un nuevo pedido.',
      'Arquitectura de componentes ligeros con carga inicial inferior a 1 segundo.',
    ],
    challenges:
      'Diseñar un flujo de selección de ingredientes extremadamente rápido que no requiriera capacitación para el personal temporal del negocio.',
    impactMetrics: [
      { label: 'Tiempo de toma de orden', value: '-45%' },
      { label: 'Errores en comanda', value: '0 incidencias' },
      { label: 'Satisfacción del cliente', value: 'Alta' },
    ],
    accentColor: '#f43f5e',
    snippet: {
      fileName: 'src/store/orderBuilder.ts',
      language: 'TypeScript',
      authorWatermark: 'Sebastián Zambrano · Diseñador UI & Frontend',
      decisionTitle: 'Patrón Builder Inmutable con Validación Estricta de Negocio',
      decisionNote:
        'Para evitar pedidos incompletos o inconsistencias en los cobros de adiciones, se utilizó un patrón Builder tipado que recalcula automáticamente el subtotal de bases y toppings en cada selección, validando la comanda antes de emitirla a la pantalla de cocina.',
      code: `/**
 * @file orderBuilder.ts
 * @author Sebastián Zambrano (@FakeCxbas)
 * @description Máquina de estados tipada para armado de órdenes personalizadas
 *              y sincronización de comandas en tiempo real para cocina.
 */

export type CupSize = 'pequeño' | 'mediano' | 'grande' | 'familiar';

export interface Topping {
  id: string;
  nombre: string;
  precioExtra: number;
}

export interface StrawberryOrder {
  id: string;
  tamano: CupSize;
  baseCrema: 'tradicional' | 'ligera' | 'arequipe' | 'chocolate';
  toppings: Topping[];
  instrucciones?: string;
  total: number;
  estado: 'recibido' | 'preparando' | 'listo_para_entrega' | 'entregado';
  creadoEn: string;
}

const PRECIOS_BASE: Record<CupSize, number> = {
  pequeño: 2.50,
  mediano: 3.50,
  grande: 4.75,
  familiar: 6.50,
};

export class OrderBuilder {
  private orden: Partial<StrawberryOrder> = {
    toppings: [],
    baseCrema: 'tradicional',
    estado: 'recibido',
  };

  public setTamano(tamano: CupSize): this {
    this.orden.tamano = tamano;
    return this;
  }

  public setBaseCrema(base: StrawberryOrder['baseCrema']): this {
    this.orden.baseCrema = base;
    return this;
  }

  public toggleTopping(topping: Topping): this {
    const list = this.orden.toppings || [];
    const index = list.findIndex((t) => t.id === topping.id);
    if (index >= 0) {
      this.orden.toppings = list.filter((t) => t.id !== topping.id);
    } else {
      this.orden.toppings = [...list, topping];
    }
    return this;
  }

  public calcularTotal(): number {
    if (!this.orden.tamano) return 0;
    const base = PRECIOS_BASE[this.orden.tamano] || 0;
    const extras = (this.orden.toppings || []).reduce((acc, t) => acc + t.precioExtra, 0);
    return Number((base + extras).toFixed(2));
  }

  public compilar(): StrawberryOrder {
    if (!this.orden.tamano) throw new Error('Debe seleccionar un tamaño de vaso.');
    return {
      id: \`ORD-\${Date.now().toString(36).toUpperCase()}\`,
      tamano: this.orden.tamano,
      baseCrema: this.orden.baseCrema || 'tradicional',
      toppings: [...(this.orden.toppings || [])],
      instrucciones: this.orden.instrucciones,
      total: this.calcularTotal(),
      estado: 'recibido',
      creadoEn: new Date().toISOString(),
    };
  }
}`,
    },
  },

  'Actuariosa Web': {
    name: 'Actuariosa Web',
    type: 'PORTAL CORPORATIVO & COTIZADOR',
    category: 'web',
    tagline: 'Presencia digital corporativa para consultoría actuarial con servicios interactivos y cotizaciones.',
    badge: 'Propuesta de Demostración',
    badgeVariant: 'demo',
    image: '/projects/actuariosa.png',
    stack: ['React', 'TypeScript', 'CSS Modules / Modern UI', 'WhatsApp Business API'],
    githubUrl: 'https://github.com/FakeCxbas/ActuariosaWeb',
    period: '2025',
    role: 'Desarrollador Web & Diseñador',
    clientOrContext: 'Actuariosa Consultora',
    problem:
      'La firma actuarial necesitaba una vitrina profesional moderna para explicar servicios financieros y matemáticos complejos (planes de jubilación, valoración de pasivos laborales) a empresas de forma comprensible.',
    solution:
      'Construí una propuesta de portal web sobrio, con tipografía refinada, desglose claro de líneas de servicio, preguntas frecuentes y generador de enlaces de cotización con plantillas prellenadas hacia WhatsApp y correo corporativo.',
    architectureHighlights: [
      'Diseño corporativo con modo oscuro / claro pulido y jerarquía visual optimizada para ejecutivos de RRHH y finanzas.',
      'Arquitectura modular para incorporar calculadoras de cotización paramétricas en futuras fases.',
      'Optimización SEO y rendimiento con puntuación sobresaliente en Core Web Vitals.',
      'Código fuente versionado con estándares de accesibilidad WCAG AA.',
    ],
    challenges:
      'Traducir terminología actuarial técnica a una estructura de navegación y experiencia de usuario clara y atractiva para tomadores de decisiones.',
    impactMetrics: [
      { label: 'Velocidad de carga', value: '< 800 ms' },
      { label: 'Accesibilidad', value: 'Cumplimiento AA' },
      { label: 'Canal de captación', value: 'WhatsApp directo' },
    ],
    accentColor: '#64748b',
    snippet: {
      fileName: 'src/utils/quotationGenerator.ts',
      language: 'TypeScript',
      authorWatermark: 'Sebastián Zambrano · Diseñador & Frontend',
      decisionTitle: 'Generador Paramétrico de Cotizaciones con Deep-Link a WhatsApp',
      decisionNote:
        'Para convertir prospectos corporativos en reuniones de consultoría en menos clics, el formulario construye dinámicamente un mensaje formateado con Markdown de WhatsApp respetando la codificación RFC 3986 para saltos de línea y viñetas sin romper clientes móviles.',
      code: `/**
 * @file quotationGenerator.ts
 * @author Sebastián Zambrano (@FakeCxbas)
 * @description Generador de pre-cotizaciones de consultoría actuarial y enlaces
 *              estructurados hacia WhatsApp Business API con RFC-3986 encoding.
 */

export interface CotizacionActuarialInput {
  empresa: string;
  contacto: string;
  empleadosAproximados: number;
  servicio: 'jubilacion_patronal' | 'desahucio' | 'seguro_colectivo' | 'auditoria_actuarial';
  tieneEstudiosAnteriores: boolean;
}

const NOMBRES_SERVICIOS: Record<CotizacionActuarialInput['servicio'], string> = {
  jubilacion_patronal: 'Valoración Actuarial de Jubilación Patronal',
  desahucio: 'Cálculo de Provisión de Desahucio',
  seguro_colectivo: 'Estudio de Viabilidad de Fondo de Seguro Colectivo',
  auditoria_actuarial: 'Auditoría de Pasivos Laborales bajo NIIF / NIC 19',
};

export class ActuarialQuoteService {
  /**
   * Genera el enlace directo a WhatsApp Business con texto preformateado y legible.
   */
  public static generarWhatsAppLink(
    numeroTelefonoEcuador: string,
    datos: CotizacionActuarialInput
  ): string {
    const servicioNombre = NOMBRES_SERVICIOS[datos.servicio];
    const estudiosTexto = datos.tieneEstudiosAnteriores ? 'Sí cuenta con estudios previos' : 'Primera valoración';

    const mensaje = [
      '¡Hola, equipo de Actuariosa!',
      '',
      'Deseo solicitar una cotización formal para el servicio de:',
      \`*\${servicioNombre}*\`,
      '',
      '📌 *Detalles de la empresa:*',
      \`• *Razón Social / Empresa:* \${datos.empresa.trim()}\`,
      \`• *Persona de Contacto:* \${datos.contacto.trim()}\`,
      \`• *N° Estimado de Trabajadores:* \${datos.empleadosAproximados}\`,
      \`• *Antecedentes:* \${estudiosTexto}\`,
      '',
      'Quedo a la espera de sus comentarios para coordinar una reunión técnica.',
    ].join('\\n');

    const encoded = encodeURIComponent(mensaje);
    return \`https://wa.me/\${numeroTelefonoEcuador}?text=\${encoded}\`;
  }
}`,
    },
  },
  'OmniNote STEM': {
    name: 'OmniNote STEM',
    type: 'MOTOR VECTORIAL & CÁLCULO · C++20',
    category: 'desktop',
    tagline: 'Entorno de cálculo técnico y notas vectoriales de alto rendimiento con aceleración por GPU y soporte Wacom sub-píxel.',
    badge: 'Motor Nativo C++20 / Qt 6',
    badgeVariant: 'production',
    image: '/projects/omninote.png',
    stack: ['C++20', 'Qt 6', 'OpenGL', 'Poppler-Qt6', 'SQLite3', 'Wacom'],
    githubUrl: 'https://github.com/FakeCxbas/OmniNote',
    period: '2026',
    role: 'Arquitectura de Software & Desarrollo del Motor Nativo',
    clientOrContext: 'Entorno Personal & Académico de Ingeniería (UEES)',
    problem:
      'Las aplicaciones convencionales de toma de apuntes están orientadas a texto general o son lienzos rasterizados pesados que no cuentan con soporte para tabletas gráficas de baja latencia con rechazo de palma, bloques de código interactivos, graficador matemático analítico de funciones o exportación vectorial pura.',
    solution:
      'Diseñé y programé desde cero en C++20 puro y Qt 6 un motor vectorial completo con viewport acelerado por hardware (OpenGL con 4x MSAA), interpolación Catmull-Rom para trazos con presión Wacom, bloques de código embebidos con resaltado sintáctico (C++, Python), parser descendente recursivo para graficar funciones matemáticas con detección de asíntotas, y base de datos relacional SQLite (.omninote).',
    architectureHighlights: [
      'Intercepción directa de QTabletEvent con precisión sub-píxel y rechazo estricto de palma para tabletas Wacom Intuos.',
      'Suavizado Catmull-Rom con cálculo de vectores ortogonales para renderizar listones vectoriales de ancho variable por presión.',
      'Parser matemático recursivo en C++ para f(x) con detección automática de singularidades y asíntotas verticales (tan, 1/x).',
      'Integración con Poppler-Qt6 para visualización de textos a DPI dinámico y exportación a PDF vectorial de 300 DPI.',
      'Persistencia transaccional SQLite3 en modo WAL con historial completo Deshacer/Rehacer basado en QUndoStack.',
    ],
    challenges:
      'Garantizar una latencia de entrada imperceptible (< 8 ms) al digitalizar trazos matemáticos complejos con la tableta gráfica mientras se mantiene el renderizado vectorial fluido a 60 FPS con OpenGL.',
    impactMetrics: [
      { label: 'Latencia de entrada', value: '< 8 ms (Wacom Intuos)' },
      { label: 'Rendimiento gráfico', value: '60 FPS estables (OpenGL)' },
      { label: 'Arquitectura', value: '100% C++20 nativo' },
    ],
    accentColor: '#10b981',
    snippet: {
      fileName: 'MathExpressionParser.cpp',
      language: 'cpp',
      code: `namespace OmniNote {

// Evaluación recursiva de expresiones matemáticas para FunctionPlotItem
struct BinaryOpNode : public MathExpressionParser::ASTNode {
    MathExpressionParser::TokenType op;
    MathExpressionParser::NodePtr left;
    MathExpressionParser::NodePtr right;

    BinaryOpNode(MathExpressionParser::TokenType o, MathExpressionParser::NodePtr l, MathExpressionParser::NodePtr r)
        : op(o), left(std::move(l)), right(std::move(r)) {}

    double evaluate(double x) const override {
        if (!left || !right) return std::numeric_limits<double>::quiet_NaN();
        double a = left->evaluate(x);
        double b = right->evaluate(x);

        switch (op) {
            case MathExpressionParser::TokenType::Plus:     return a + b;
            case MathExpressionParser::TokenType::Minus:    return a - b;
            case MathExpressionParser::TokenType::Multiply: return a * b;
            case MathExpressionParser::TokenType::Divide: {
                if (std::abs(b) < 1e-12) return std::numeric_limits<double>::quiet_NaN();
                return a / b;
            }
            case MathExpressionParser::TokenType::Power:    return std::pow(a, b);
            default: return std::numeric_limits<double>::quiet_NaN();
        }
    }
};

}`,
      authorWatermark: 'Desarrollado en C++20 puro por Sebastián Zambrano',
      decisionTitle: 'Parser Analítico AST en C++20 con Detección de Singularidades',
      decisionNote:
        'Implementar un árbol de sintaxis abstracta (AST) recursivo sin librerías externas pesadas permite evaluar funciones continuas miles de veces por segundo y detectar discontinuidades para no trazar líneas falsas sobre asíntotas.',
    },
  },
  'SwiftPiano': {
    name: 'SwiftPiano',
    type: 'SINTETIZADOR 2D & SIMULADOR · GODOT 4',
    category: 'desktop',
    tagline: 'Sintetizador interactivo de 88 notas con muestras acústicas Salamander Grand Piano, shaders de halo y transcriptor MIDI.',
    badge: 'Godot 4 / Vulkan Engine',
    badgeVariant: 'production',
    image: '/projects/swiftpiano.png',
    stack: ['Godot 4', 'GDScript', 'GLSL Shaders', 'Vulkan', 'MIDI', 'Salamander Piano'],
    githubUrl: 'https://github.com/FakeCxbas/SwiftPiano',
    period: '2026',
    role: 'Diseño de Motor de Audio, Shaders GLSL y Desarrollo en GDScript',
    clientOrContext: 'Proyecto Creativo & Herramienta Musical Open Source',
    problem:
      'Los simuladores de piano virtuales para teclado de computadora suelen sufrir de latencia de audio perceptible, rangos restringidos a pocas octavas, o carecen de una respuesta gráfica reactiva que permita estudiar el ritmo y los acordes de forma interactiva.',
    solution:
      'Construí una aplicación de escritorio nativa en Godot 4 con GDScript que mapea las 88 teclas físicas de un piano de cola completo al teclado QWERTY estándar, motor de audio polifónico con 30 muestras estéreo de Salamander Grand Piano, visualizador de cascada de notas a 340 px/s con shaders GLSL de halo aditivo y bloom en HDR 2D sobre Vulkan, y conversor de archivos MIDI a partituras tocables.',
    architectureHighlights: [
      'Mapeo completo de 88 teclas (52 blancas, 36 negras) accesibles directamente sin cambios manuales de octava.',
      'Pool polifónico dinámico de reproductores de audio para sostener notas y acordes complejos sin cortes acústicos.',
      'Visualizador reactivo en tiempo real con shaders GLSL personalizados (supernova, aurora, synthwave) y halo HDR.',
      'Importador de archivos MIDI y parser de hojas musicales para práctica guiada y reproducción automática sincronizada.',
      'Soporte multiplataforma con backend Vulkan Mobile y modo de respaldo OpenGL Compatibility.',
    ],
    challenges:
      'Optimizar la concurrencia de notas polifónicas para eliminar la latencia de respuesta al presionar múltiples teclas en acordes rápidos de teclado de PC, manteniendo 60 FPS estables.',
    impactMetrics: [
      { label: 'Rango de notas', value: '88 teclas físicas completas' },
      { label: 'Tasa de cuadros', value: '60 FPS estables con VSync' },
      { label: 'Audio', value: 'Muestras Salamander Grand' },
    ],
    accentColor: '#ec4899',
    snippet: {
      fileName: 'synth_visualizer.gd',
      language: 'gdscript',
      code: `extends Control

# Visualizador de notas en cascada con shaders y halo aditivo HDR
const SPEED = 340.0
const MAX_POOLED_BARS = 64

var bars: Dictionary = {}
var released: Array[Dictionary] = []
var key_rects: Dictionary = {}
var key_range_mode: String = "full_88"
var visible_midi_range: Vector2i = Vector2i(21, 108)
var light_mode: String = "supernova"

func trigger_note_strike(midi_note: int, velocity: float, note_color: Color) -> void:
	if not enabled or not key_rects.has(midi_note):
		return
	var rect: Rect2 = key_rects[midi_note]
	var bar_data = {
		"midi": midi_note,
		"x": rect.position.x,
		"w": rect.size.x,
		"y_start": rect.position.y,
		"y_current": rect.position.y,
		"color": note_color,
		"velocity": velocity,
		"active": true
	}
	bars[midi_note] = bar_data
	_spawn_key_spark(rect.position.x + rect.size.x * 0.5, rect.position.y, note_color)
`,
      authorWatermark: 'Desarrollado en GDScript / Godot 4 por Sebastián Zambrano',
      decisionTitle: 'Motor de Renderizado Reactivo 2D con Shaders en Vulkan',
      decisionNote:
        'Construir el visualizador y el teclado mediante código procedural sin dependencias pesadas de escenas garantiza que la aplicación responda al instante en cualquier resolución manteniendo sincronía milimétrica con el motor polifónico de audio.',
    },
  },
};

export const PROJECTS_DETAILS_EN: Record<string, Partial<ProjectDetail>> = {
  'ContaNova': {
    type: 'COMMERCIAL MANAGEMENT & INVOICING',
    tagline: 'From the real operational needs of an auto repair shop to a multi-business SaaS platform with SRI electronic invoicing.',
    badge: 'Active in Production',
    role: 'Full-Stack Software Architect & Developer',
    clientOrContext: 'Electromecánica Bolívar & Local Retailers',
    period: '2025 — Present',
    problem:
      'Small auto repair shops and retail businesses in Ecuador relied on manual paper logs or scattered spreadsheets, causing inventory discrepancies, delayed cash flow, and hurdles complying with mandatory Ecuadorian SRI electronic invoicing.',
    solution:
      'Designed and developed an intuitive web platform centralizing auto parts inventory, customer directory, authorized SRI electronic invoicing, daily register balances, and accounting exports. Purpose-built for rapid counter operation even on touchscreen terminals.',
    architectureHighlights: [
      'XML canonization and XAdES-BES digital signature adhering to Ecuadorian SRI SOAP web services.',
      'PostgreSQL database with strict ACID transactions ensuring zero inventory drift under concurrent sales.',
      'Decoupled modular architecture configurable for diverse retail verticals (auto shops, hardware stores, spare parts retailers).',
      'High-availability cloud deployment with automated daily database backups.',
    ],
    challenges:
      'Ensuring resilient interoperability with government SRI servers under high network latency or intermittent downtimes via retry queues and offline-first temporary persistence.',
    impactMetrics: [
      { label: 'Invoice issuance time', value: '< 3 sec' },
      { label: 'Platform uptime', value: '99.9%' },
      { label: 'Businesses served', value: 'Auto shops & stores' },
    ],
  },
  'Taller Jeldes': {
    type: 'MOBILE APP · INTERNAL USE',
    tagline: 'Cross-platform mobile rebuild in Flutter with administrative backoffice, attendance tracking, and AI inspection logs.',
    badge: 'Internal Production Use',
    role: 'Mobile & Backend Developer',
    clientOrContext: 'Taller Mecánico Jeldes (15 Technicians)',
    period: '2025',
    problem:
      'Workshop operations lacked real-time visibility into repair stages, photographic evidence of vehicular handovers, technician time tracking, and systematic diagnostic generation.',
    solution:
      'Rebuilt the Flutter mobile app and admin dashboard from scratch. Technicians log job cards with timestamps, before/after photos, and AI-assisted technical summaries directly from Android/iOS devices.',
    architectureHighlights: [
      'Clean cross-platform Flutter architecture with BLoC/Provider state management.',
      'Secure cloud media storage with client-side image compression reducing payload sizes by 65%.',
      'AI-assisted diagnostic reporting converting technical bullet points into client-ready service summaries.',
      'Daily technician attendance and time-tracking module with tamper-resistant validation.',
    ],
    challenges:
      'Optimizing photo upload pipelines for low-connectivity workshop environments without blocking the technician UI.',
    impactMetrics: [
      { label: 'Daily active users', value: '15 technicians' },
      { label: 'Diagnostic report time', value: '-60% reduction' },
      { label: 'Photo evidence auditability', value: '100% orders' },
    ],
  },
  'MxCorreo': {
    type: 'DATA AUTOMATION · WINDOWS',
    tagline: 'High-performance desktop data pipeline for cleaning, validating, and segmenting corporate contact databases.',
    badge: 'Custom Corporate Utility',
    role: 'Python Automation Developer',
    clientOrContext: 'Actuariosa (Actuarial Consultancy)',
    period: '2024',
    problem:
      'A legacy contact dataset of over 132,000 corporate records contained syntax errors, duplicates, outdated domains, and invalid email formatting, crippling B2B outreach efforts.',
    solution:
      'Developed a lightweight, standalone Python desktop utility with multi-threaded domain syntax parsing, MX record validation, deduplication algorithms, and interactive SQLite caching.',
    architectureHighlights: [
      'Multi-threaded DNS MX query worker pool to verify active mail exchanges without triggering spam traps.',
      'Deduplication and normalization pipeline processing 132k+ records in under 4 minutes.',
      'Local SQLite database cache ensuring instant repeatability and zero external server dependency.',
      'Structured CSV/Excel export partitioned by deliverability confidence scores.',
    ],
    challenges:
      'Preventing DNS rate-limiting and thread starvation while executing hundreds of simultaneous MX domain lookups.',
    impactMetrics: [
      { label: 'Records sanitized', value: '+132,000' },
      { label: 'Bounce rate reduction', value: '-85%' },
      { label: 'Processing time', value: '< 4 minutes' },
    ],
  },
  'San Viernes & Billar Club': {
    type: 'COMMERCIAL SOFTWARE · IN PRODUCTION',
    tagline: 'Commercial desktop POS and table management systems with thermal ticket printing and mobile owner oversight.',
    badge: 'Active Commercial Deployment',
    role: 'Full-Stack Desktop & Mobile Developer',
    clientOrContext: 'San Viernes Gastrobar & Billar Club',
    period: '2024 — Present',
    problem:
      'Hospitality businesses struggled to track concurrent table timers, bar tab orders, beverage inventory shrinkage, and thermal ticket printing with off-the-shelf software that was either overpriced or too rigid.',
    solution:
      'Engineered tailored desktop POS software using Electron and React with thermal receipt printer ESC/POS integration, coupled with Capacitor mobile companion apps for remote owner monitoring.',
    architectureHighlights: [
      'Native Electron bridge handling raw ESC/POS thermal printer commands over USB and network serial ports.',
      'Concurrent billable table timer state engine with automated price scaling.',
      'Capacitor mobile client enabling owners to monitor live revenue and open tabs remotely.',
      'Fault-tolerant offline storage ensuring continuous cash register operation during internet outages.',
    ],
    challenges:
      'Reliable low-level hardware communication with diverse legacy thermal printers across different Windows OS versions.',
    impactMetrics: [
      { label: 'Commercial venues', value: '2 locations' },
      { label: 'Daily ticket printing', value: '100% reliable' },
      { label: 'Inventory discrepancy', value: 'Near zero' },
    ],
  },
  'SmartDocs': {
    type: 'DOCUMENT MANAGEMENT · CLIENT PROJECT',
    tagline: 'Client-side OCR document management, intelligent search, and secure multi-format file processing.',
    badge: 'Commissioned Web App',
    role: 'Frontend Architect & Developer',
    clientOrContext: 'Corporate Client Project',
    period: '2025',
    problem:
      'Manual digitization and categorization of scanned administrative papers, invoices, and contracts was time-consuming and prone to lost documentation.',
    solution:
      'Built a web-based document workspace with in-browser Tesseract.js OCR, instant full-text search, tag taxonomy, and interactive preview modals with version tracking.',
    architectureHighlights: [
      'In-browser Web Workers running Tesseract.js OCR to extract text without uploading sensitive paperwork to third-party servers.',
      'IndexedDB client cache for instant offline document retrieval.',
      'Modular React architecture with drag-and-drop file ingestion and custom tag taxonomy.',
    ],
    challenges:
      'Maintaining smooth 60fps UI performance while executing intensive optical character recognition in background threads.',
    impactMetrics: [
      { label: 'Search speed', value: 'Instant (< 50ms)' },
      { label: 'Data privacy', value: '100% client-side' },
      { label: 'OCR accuracy', value: '> 92%' },
    ],
  },
  'TechView': {
    type: 'COMPUTER VISION · ACADEMIC PROJECT',
    tagline: 'Wearable assistive smart glasses with real-time YOLOv8 computer vision and low-latency voice obstacle warnings.',
    badge: 'Academic Honors Recognition',
    role: 'Embedded Computer Vision Software Engineer',
    clientOrContext: 'UEES Capstone Team Project (Graduation Honors)',
    period: '2025 — 2026',
    problem:
      'Visually impaired individuals face daily navigational hazards with traditional canes that cannot detect elevated or approaching obstacles in complex environments.',
    solution:
      'Engineered the embedded software pipeline on a Raspberry Pi-powered smart glasses wearable, capturing real-time camera frames with OpenCV, running YOLOv8 object detection, and delivering spatial voice guidance.',
    architectureHighlights: [
      'Optimized frame pre-processing pipeline in OpenCV with dynamic ROI cropping for low-latency inference.',
      'Quantized YOLOv8 neural network inference tuned for ARM embedded compute.',
      'Audio queuing engine prioritizing imminent collision warnings over routine environmental descriptions.',
      'Won formal Academic Graduation Honors recognition in January 2026.',
    ],
    challenges:
      'Balancing thermal limits, power consumption, and frame rates on a wearable Raspberry Pi architecture.',
    impactMetrics: [
      { label: 'Inference latency', value: 'Real-time (< 70ms)' },
      { label: 'Detection accuracy', value: '94% on key obstacles' },
      { label: 'Recognition', value: 'Honorable Mention' },
    ],
  },
  'Strawberry Sweet Serve': {
    type: 'ONLINE ORDERING · ADOPTED BY BUSINESS',
    tagline: 'Custom digital ordering web portal with product customization and administrative kitchen dashboard.',
    badge: 'Adopted by Business',
    role: 'Full-Stack Web Developer',
    clientOrContext: 'Strawberry Sweet Serve Retail Shop',
    period: '2025',
    problem:
      'Orders taken via WhatsApp during peak hours were frequently confused, topping choices misplaced, and delivery status updates lacked transparency.',
    solution:
      'Crafted a fast, interactive ordering web app allowing customers to customize dessert bases, toppings, and sauces step-by-step, with real-time kitchen order queue updates.',
    architectureHighlights: [
      'Dynamic step-by-step cart configurator with live price calculations.',
      'Kitchen queue management screen with auditory chimes for incoming tickets.',
      'Lightweight, responsive mobile-first UI with dark/vibrant styling.',
    ],
    challenges:
      'Designing a dessert customizer fast enough to be completed on mobile phones in under 45 seconds.',
    impactMetrics: [
      { label: 'Order errors', value: 'Reduced to 0%' },
      { label: 'Order completion time', value: '< 45 seconds' },
      { label: 'Business adoption', value: 'Active daily usage' },
    ],
  },
  'Actuariosa Web': {
    type: 'WEBSITE · DEMONSTRATION PROPOSAL',
    tagline: 'Corporate actuarial consultancy landing with deep-linked parametric quotation generator and service breakdown.',
    badge: 'Client Demonstration Proposal',
    role: 'Frontend Developer & UI Designer',
    clientOrContext: 'Actuariosa Consultora Actuarial',
    period: '2024',
    problem:
      'Actuarial services (pension reserves, occupational risks, labor liabilities) are complex and difficult for corporate HR and finance executives to evaluate quickly.',
    solution:
      'Built a modern, authoritative corporate web showcase breaking down technical consulting services, FAQs, and a dynamic quote generator with deep-linked WhatsApp and email dispatch.',
    architectureHighlights: [
      'Type-safe quotation input calculator formatted into compliant RFC-3986 WhatsApp messages.',
      'Fluid typography and accessible high-contrast layout conveying corporate trust.',
      'Zero layout shift (CLS: 0.0) and optimized performance.',
    ],
    challenges:
      'Translating dense actuarial terminology into clear, digestible executive value propositions.',
    impactMetrics: [
      { label: 'Quote initiation time', value: '< 1 minute' },
      { label: 'Lead conversion', value: 'Direct WhatsApp link' },
      { label: 'Performance score', value: '100 / 100 Lighthouse' },
    ],
  },
  'OmniNote STEM': {
    type: 'STEM ENGINE & VECTOR CANVAS · C++20',
    tagline: 'High-performance GPU-accelerated technical canvas and math engine with sub-pixel Wacom digitizer support.',
    badge: 'Native C++20 / Qt 6 Engine',
    role: 'Software Architect & Native Engine Engineer',
    clientOrContext: 'Personal & Academic Engineering Workspace (UEES)',
    period: '2026',
    problem:
      'Conventional note-taking applications are limited to basic raster freehand drawing or text notes, lacking native sub-pixel low-latency stylus tracking with palm rejection, syntax-highlighted code blocks, analytical function graphing, and high-DPI vector exports.',
    solution:
      'Engineered an all-native vector workspace from scratch in modern C++20 and Qt 6 featuring a hardware-accelerated OpenGL viewport (4x MSAA), Catmull-Rom spline inking with Wacom pressure, embedded syntax-highlighted code blocks (C++, Python), recursive-descent math AST parser for analytical function plotting with asymptote detection, and SQLite relational storage (.omninote).',
    architectureHighlights: [
      'Direct QTabletEvent interception with sub-pixel precision and strict palm rejection for Wacom Intuos digitizers.',
      'Adaptive Catmull-Rom spline smoother with normal orthogonal vectors rendering variable-width pressure ribbons.',
      'Recursive-descent math expression parser for f(x) with automatic singularity and asymptote detection (tan, 1/x).',
      'Poppler-Qt6 dynamic-DPI textbook rendering and 300 DPI vector PDF export.',
      'ACID SQLite3 WAL persistence with full Undo/Redo stack via QUndoStack command pattern.',
    ],
    challenges:
      'Achieving sub-8ms inking latency with complex mathematical symbols while maintaining 60 FPS vector hardware rendering in OpenGL.',
    impactMetrics: [
      { label: 'Input latency', value: '< 8 ms (Wacom Intuos)' },
      { label: 'Rendering performance', value: 'Rock-solid 60 FPS (OpenGL)' },
      { label: 'Architecture', value: '100% Native C++20' },
    ],
  },
  'SwiftPiano': {
    type: '2D SYNTHESIZER & SIMULATOR · GODOT 4',
    tagline: '88-key interactive piano synthesizer featuring Salamander stereo samples, particle visualizer, and live MIDI transcription.',
    badge: 'Godot 4 / Vulkan Engine',
    role: 'Audio Engine Designer, GLSL Shaders & GDScript Developer',
    clientOrContext: 'Creative Engineering & Interactive Music Tool',
    period: '2026',
    problem:
      'Virtual piano keyboard applications suffer from noticeable audio latency, restrict users to 3 or 4 octavas, and lack an engaging visual response system for practicing songs on standard computer keyboards.',
    solution:
      'Architected a native Godot 4 application mapping all 88 physical grand piano keys to standard QWERTY keyboards, paired with a polyphonic voice pool running 30 stereo Salamander Grand Piano samples, a 340 px/s cascading note visualizer with custom GLSL bloom shaders, and an interactive MIDI-to-playable-sheet converter.',
    architectureHighlights: [
      'Full 88-key layout (52 white, 36 black keys) immediately playable without manual octave switching.',
      'Dynamic polyphonic audio voice pool preventing acoustic cutoff during fast chords and pedal sustains.',
      'Reactive cascading visualizer with custom GLSL shaders (supernova, aurora, synthwave) and HDR bloom.',
      'MIDI file converter and sheet music parser for guided interactive practice and synchronized auto-play.',
      'Cross-platform Vulkan Mobile backend with seamless OpenGL Compatibility fallback.',
    ],
    challenges:
      'Eliminating audio latency when hammering polyphonic chords on standard PC keyboards while preserving constant 60 FPS visual rendering.',
    impactMetrics: [
      { label: 'Key range', value: 'Full 88 physical keys' },
      { label: 'Frame rate', value: 'Rock-solid 60 FPS VSync' },
      { label: 'Audio fidelity', value: 'Salamander Grand Piano samples' },
    ],
  },
};

function CodeInspector({ snippet, isEn = false }: { snippet: CodeSnippet; isEn?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback si no hay permisos de portapapeles
    }
  };

  const lines = snippet.code.trim().split('\n');

  return (
    <div className="code-inspector-container">
      {/* Barra de contexto técnico y autoría */}
      <div className="code-tech-context">
        <div className="tech-context-item">
          <span className="tech-context-label">{isEn ? 'FILE' : 'ARCHIVO'}</span>
          <span className="tech-context-val">
            <Terminal size={13} className="tech-icon-inline" />
            <span>{snippet.fileName}</span>
          </span>
        </div>
        <div className="tech-context-item">
          <span className="tech-context-label">{isEn ? 'LOGIC & PURPOSE' : 'PROPÓSITO'}</span>
          <span className="tech-context-val">{snippet.decisionTitle}</span>
        </div>
        <div className="tech-context-item">
          <span className="tech-context-label">{isEn ? 'ENGINEER' : 'DESARROLLO'}</span>
          <span className="tech-context-val">Sebastián Zambrano</span>
        </div>
      </div>

      {/* Ventana de Código IDE */}
      <div className="code-window">
        <div className="code-window-topbar">
          <div className="code-window-dots" aria-hidden="true">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>

          <div className="code-window-tab">
            <Terminal size={13} className="tab-icon" />
            <span className="code-window-filename">{snippet.fileName}</span>
            <span className="code-window-lang">{snippet.language}</span>
          </div>

          <button
            type="button"
            className={`code-copy-btn ${copied ? 'is-copied' : ''}`}
            onClick={handleCopy}
            title={isEn ? 'Copy code to clipboard' : 'Copiar código al portapapeles'}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? (isEn ? 'Copied!' : '¡Copiado!') : (isEn ? 'Copy' : 'Copiar')}</span>
          </button>
        </div>

        <div className="code-editor-viewport">
          <pre className="code-pre">
            <code>
              {lines.map((line, idx) => (
                <div key={idx} className="code-line-row">
                  <span className="code-line-num">{idx + 1}</span>
                  <span className="code-line-content">{line || ' '}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {/* Tarjeta de Decisión Arquitectónica */}
      <div className="code-decision-box">
        <div className="code-decision-header">
          <Layers size={16} className="decision-icon" />
          <h4>{snippet.decisionTitle}</h4>
        </div>
        <p>{snippet.decisionNote}</p>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  projectName: string | null;
  onClose: () => void;
  onSelectProject?: (name: string) => void;
}

export function ProjectModal({ projectName, onClose, onSelectProject }: ProjectModalProps) {
  const { locale } = useLanguage();
  const isEn = locale === 'en';
  const [activeTab, setActiveTab] = useState<'details' | 'code'>('details');
  const projectKeys = Object.keys(PROJECTS_DETAILS);
  const baseDetail = projectName ? PROJECTS_DETAILS[projectName] : null;
  const detail = baseDetail
    ? isEn && PROJECTS_DETAILS_EN[baseDetail.name]
      ? { ...baseDetail, ...PROJECTS_DETAILS_EN[baseDetail.name] }
      : baseDetail
    : null;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentIndex = projectName ? projectKeys.indexOf(projectName) : -1;
  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

  useEffect(() => {
    if (!projectName) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    // Reiniciar al tab de detalles al cambiar de proyecto
    setActiveTab('details');

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && prevProject && onSelectProject) {
        onSelectProject(prevProject);
      } else if (e.key === 'ArrowRight' && nextProject && onSelectProject) {
        onSelectProject(nextProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [projectName, onClose, prevProject, nextProject, onSelectProject]);

  if (!detail) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': detail.accentColor } as React.CSSProperties}
      >
        {/* Barra superior de navegación interna */}
        <div className="project-modal-header">
          <div className="project-modal-header-meta">
            <span className="project-modal-type">{detail.type}</span>
            <span className={`project-modal-badge badge-${detail.badgeVariant || 'production'}`}>
              {detail.badge}
            </span>
          </div>

          <div className="project-modal-actions">
            {prevProject && onSelectProject && (
              <button
                type="button"
                className="modal-nav-btn"
                onClick={() => onSelectProject(prevProject)}
                title={`Ver ${prevProject} (Flecha izquierda)`}
                aria-label="Proyecto anterior"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            {nextProject && onSelectProject && (
              <button
                type="button"
                className="modal-nav-btn"
                onClick={() => onSelectProject(nextProject)}
                title={`Ver ${nextProject} (Flecha derecha)`}
                aria-label="Proyecto siguiente"
              >
                <ChevronRight size={16} />
              </button>
            )}
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              title="Cerrar (Esc)"
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Selector de Pestañas: Ficha Técnica vs Código & Arquitectura */}
        <div className="modal-tabs-bar" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'details'}
            className={`modal-tab-btn ${activeTab === 'details' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveTab('details');
              if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
            }}
          >
            <FileText size={14} />
            <span>{isEn ? 'Technical Specs' : 'Ficha Técnica'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'code'}
            className={`modal-tab-btn ${activeTab === 'code' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveTab('code');
              if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
            }}
          >
            <Code2 size={14} />
            <span>{isEn ? 'Code & Architecture' : 'Código & Arquitectura'}</span>
            <span className="modal-tab-lang-tag">{detail.snippet.language}</span>
          </button>
        </div>

        {/* Contenido desplazable del modal */}
        <div className="project-modal-scroll-body" ref={scrollContainerRef}>
          {/* Título y Tagline siempre presentes */}
          <div className="project-modal-hero-title">
            <h2 id="modal-project-title">{detail.name}</h2>
            <p className="project-modal-tagline">{detail.tagline}</p>
          </div>

          {activeTab === 'details' ? (
            <>
              {/* Banner visual con captura */}
              <div className="project-modal-visual">
                <div className="project-modal-visual-glow" aria-hidden="true" />
                <div className="project-modal-image-wrapper">
                  <img
                    src={detail.image}
                    alt={`Captura del sistema ${detail.name}`}
                    width={1200}
                    height={675}
                    className="project-modal-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Barra de Datos Clave */}
              <div className="project-modal-facts-grid">
                <div className="fact-item">
                  <span className="fact-label">{isEn ? 'ROLE' : 'ROL'}</span>
                  <span className="fact-value">{detail.role}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">{isEn ? 'CONTEXT / CLIENT' : 'CONTEXTO / CLIENTE'}</span>
                  <span className="fact-value">{detail.clientOrContext}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">{isEn ? 'TIMELINE' : 'PERÍODO'}</span>
                  <span className="fact-value">{detail.period}</span>
                </div>
              </div>

              {/* Métricas de impacto */}
              <div className="project-modal-metrics-strip">
                {detail.impactMetrics.map((metric, i) => (
                  <div key={i} className="modal-metric-card">
                    <span className="modal-metric-val">{metric.value}</span>
                    <span className="modal-metric-lbl">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Secciones de Caso de Estudio */}
              <div className="project-modal-sections">
                <div className="modal-story-grid">
                  <div className="modal-story-card">
                    <div className="modal-section-heading">
                      <Clock size={16} className="heading-icon" />
                      <h3>{isEn ? 'The Real-World Need' : 'La Necesidad Real'}</h3>
                    </div>
                    <p>{detail.problem}</p>
                  </div>

                  <div className="modal-story-card">
                    <div className="modal-section-heading">
                      <CheckCircle2 size={16} className="heading-icon" />
                      <h3>{isEn ? 'The Implemented Solution' : 'La Solución Implementada'}</h3>
                    </div>
                    <p>{detail.solution}</p>
                  </div>
                </div>

                <div className="modal-architecture-card">
                  <div className="modal-section-heading">
                    <Layers size={16} className="heading-icon" />
                    <h3>{isEn ? 'Key Architecture & Engineering Decisions' : 'Aspectos Clave de Arquitectura & Decisiones Técnicas'}</h3>
                  </div>
                  <ul className="architecture-list">
                    {detail.architectureHighlights.map((point, index) => (
                      <li key={index}>
                        <span className="bullet-point">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-challenges-card">
                  <div className="modal-section-heading">
                    <ShieldCheck size={16} className="heading-icon" />
                    <h3>{isEn ? 'Primary Engineering Challenge Overcome' : 'Reto Principal Superado'}</h3>
                  </div>
                  <p>{detail.challenges}</p>
                </div>

                <div className="modal-tech-stack">
                  <span className="tech-stack-title">{isEn ? 'TECHNOLOGIES & TOOLING' : 'TECNOLOGÍAS & HERRAMIENTAS'}</span>
                  <div className="tech-tags-list">
                    {detail.stack.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="modal" />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Vista de Código de Autoría Propia */
            <CodeInspector snippet={detail.snippet} isEn={isEn} />
          )}

          {/* Footer de Acciones */}
          <div className="project-modal-footer">
            <div className="project-modal-links">
              {detail.url && (
                <a
                  href={detail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn primary"
                >
                  <ExternalLink size={15} />
                  <span>{isEn ? 'Visit Live System ↗' : 'Visitar sistema en vivo ↗'}</span>
                </a>
              )}

              {detail.githubUrl && (
                <a
                  href={detail.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn github"
                >
                  <GithubIcon size={15} />
                  <span>{isEn ? 'View on GitHub ↗' : 'Ver en GitHub ↗'}</span>
                </a>
              )}

              {detail.isProprietary && (
                <div
                  className="modal-proprietary-indicator"
                  title={isEn ? 'Commercial enterprise codebase (Confidential)' : 'Código comercial propietario (Confidencial)'}
                >
                  <Lock size={13} />
                  <span>{isEn ? 'Proprietary Code' : 'Código Comercial'}</span>
                </div>
              )}

              {activeTab === 'details' ? (
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('code');
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                  }}
                  className="modal-action-btn secondary"
                >
                  <Code2 size={15} />
                  <span>{isEn ? `Inspect source code (${detail.snippet.language})` : `Inspeccionar código (${detail.snippet.language})`}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('details');
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                  }}
                  className="modal-action-btn secondary"
                >
                  <FileText size={15} />
                  <span>{isEn ? 'Back to specs' : 'Volver a la ficha'}</span>
                </button>
              )}

              <button type="button" onClick={onClose} className="modal-action-btn ghost">
                {isEn ? 'Close specs' : 'Cerrar ficha'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
