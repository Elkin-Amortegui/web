
import { FileText, Gavel, FileCheck, FileSignature, Files, BadgeCheck, FileClock } from 'lucide-react';

export interface NormativaItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  pdfPath?: string; // Path inside /public folder. E.g., '/docs/normativa/normativa/resolucion-0659.pdf'
  linkUrl?: string; // For external links like SIG
  linkLabel?: string; // Text for the external link
  isGroup?: boolean;
  subItems?: { title: string; description: string }[];
}

export const normativaData: NormativaItem[] = [
  {
    id: 'res-0659-2025',
    title: 'Resolución No. 0659 de 2025',
    description: '"Por lo cual se autoriza modificar la resolución 1500-67.10/1616 del 22 de septiembre de 2021, artículo primero, por el cambio de Dirección a la Institución de Educación para el Trabajo y el Desarrollo Humano denominada: CENTRO DE IDIOMAS DE LA UNIVERSIDAD DE LOS LLANOS, en el Municipio de Villavicencio"',
    category: "Resolución",
    icon: FileText,
    pdfPath: '/docs/normativa/res-0659-2025.pdf'
  },
  {
    id: 'res-2337-2023',
    title: 'Resolución 1500 - 67.10/2337 del 25 de octubre de 2023',
    description: '"Por lo cual se concede el registro de seis (6) Programas de Formación Académica a la Institución de Educación para el Trabajo y el Desarrollo Humano denominada: CENTRO DE IDIOMAS DE LA UNIVERSIDAD DE LOS LLANOS, en el municipio de Villavicencio."',
    category: "Resolución",
    icon: FileText,
    pdfPath: '/docs/normativa/res-2337-2023.pdf'
  },
  {
    id: 'res-2338-2023',
    title: 'Resolución 1500 - 67.10/2338 del 25 de octubre de 2023',
    description: '"Por la cual se concede la Renovación de treinta y siete (37) Programas de Formación Académica a la Institución de Educación para el Trabajo y el Desarrollo Humano denominada: CENTRO DE IDIOMAS DE LA UNIVERSIDAD DE LOS LLANOS, en el municipio de Villavicencio."',
    category: "Resolución",
    icon: FileText,
    pdfPath: '/docs/normativa/res-2338-2023.pdf'
  },
  {
    id: 'res-3584-2019',
    title: 'Resolución 3584 del 2019',
    description: '"Por medio del cual se autoriza el registro de unos programas de formación académica al Centro de Idiomas de la Universidad de Los Llanos - Sede Granada - Meta"',
    category: "Resolución",
    icon: FileText,
    pdfPath: '/docs/normativa/res-3584-2019.pdf'
  },
  {
    id: 'res-3585-2019',
    title: 'Resolución 3585 del 2019',
    description: '"Por medio del cual se autoriza la renovación de unos programas de formación académica al Centro de Idiomas de la Universidad de Los Llanos - Sede Granada - Meta"',
    category: "Resolución",
    icon: FileText,
    pdfPath: '/docs/normativa/res-3585-2019.pdf'
  },
  {
    id: 'res-3586-2019',
    title: 'Resolución 3586 del 2019',
    description: '"Por medio del cual se autoriza el registro de unos programas de formación académica al Centro de Idiomas de la Universidad de Los Llanos - Sede San Martín - Meta"',
    category: "Resolución",
    icon: FileText,
    pdfPath: '/docs/normativa/res-3586-2019.pdf'
  },
  {
    id: 'res-aclaratorias-2024',
    title: 'Resoluciones Aclaratorias de Fechas (2024)',
    description: 'Aclaraciones a resoluciones anteriores.',
    category: "Aclaración",
    icon: FileClock,
    isGroup: true,
    pdfPath: '/docs/normativa/res-aclaratorias-2024.pdf', 
    subItems: [
      { title: 'RESOLUCIÓN N° 5412 DE 2024', description: '"Por la cual se aclara la Resolución 3585 de 2024"' },
      { title: 'RESOLUCIÓN N° 5413 DE 2024', description: '"Por la cual se aclara la Resolución 3586 de 2024"' },
      { title: 'RESOLUCIÓN N° 5411 DE 2024', description: '"Por la cual se aclara la Resolución 3584 de 2024"' }
    ]
  },
  {
    id: 'acuerdo-008-2023',
    title: 'ACUERDO SUPERIOR No. 008 DE 2023',
    description: '"Por medio de la cual se reglamenta la reserva y devolución de dineros por concepto de matrículas del Centro de Idiomas de la Universidad de los Llanos, bajo la modalidad del servicio público de educación para el trabajo y desarrollo humano"',
    category: "Acuerdo",
    icon: Gavel,
    pdfPath: '/docs/normativa/acuerdo-008-2023.pdf'
  },
  {
    id: 'acuerdo-003-2023',
    title: 'ACUERDO SUPERIOR N° 003 DE 2023',
    description: '"Por el cual se establecen las estrategias para el desarrollo de competencias comunicativas en un segundo idioma en estudiantes - Plan de Bilingüismo Universidad de los Llanos BULL"',
    category: "Acuerdo",
    icon: Gavel,
    pdfPath: '/docs/normativa/acuerdo-003-2023.pdf'
  },
   {
    id: 'acuerdo-011-2025',
    title: 'ACUERDO ACADEMICO N° 011 DE 2025',
    description: '“Por el cual se establecen las estrategias para acreditar la suficiencia y el desarrollo de competencias comunicativas en un segundo idiomas en estudiantes de posgrado de la Universidad de los Llanos”',
    category: "Acuerdo",
    icon: Gavel,
    pdfPath: '/docs/normativa/acuerdo-011-2025.pdf'
  },
  {
    id: 'acuerdo-015-2025',
    title: 'ACUERDO ACADEMICO N° 015 DE 2025',
    description: '“Por el cual se adiciona el parágrafo 3 al artículo 8 del Acuerdo Académico No. 003 de 2023”',
    category: "Acuerdo",
    icon: Gavel,
    pdfPath: '/docs/normativa/acuerdo-015-2025.pdf'
  },
  {
    id: 'acta-sanitaria-0497-2025',
    title: 'Acta Sanitaria N°0497 de 2025',
    description: '"Acta de inspección, vigencia y control sanitario establecimientos educativos N°0497 del 07 de Abril de 2025"',
    category: "Acta",
    icon: FileSignature,
    pdfPath: '/docs/normativa/acta-sanitaria-0497-2025.pdf'
  },
  {
    id: 'proc-desarrollo-cursos',
    title: 'Procedimiento para el Desarrollo de Cursos',
    description: 'Establecer las actividades necesarias para el desarrollo de los cursos de idiomas para docentes del Centro de Idiomas.',
    category: "Procedimiento",
    icon: Files,
    linkUrl: 'https://sig.unillanos.edu.co/', // Example link
    linkLabel: 'Sistema Integrado de Gestión de la Universidad'
  },
  {
    id: 'proc-inscripcion-matricula',
    title: 'Procedimiento de Inscripción y Matrícula',
    description: 'Establecer las actividades para garantizar el respaldo y restauración de la información procedente de la gestión del Sistema de Información del Centro de Idiomas.',
    category: "Procedimiento",
    icon: Files,
    linkUrl: 'https://sig.unillanos.edu.co/',
    linkLabel: 'Sistema Integrado de Gestión de la Universidad'
  },
  {
    id: 'proto-respaldo-info',
    title: 'Protocolo de Respaldo y Restauración de Información',
    description: 'Describir el procedimiento para la inscripción, admisión de aspirantes y posteriormente proceso de matrícula para estudiantes del Centro de idiomas nuevos y antiguos a los cursos de inglés, francés, portugués y alemán.',
    category: "Procedimiento",
    icon: Files,
    linkUrl: 'https://sig.unillanos.edu.co/',
    linkLabel: 'Sistema Integrado de Gestión de la Universidad'
  },
  {
    id: 'peci',
    title: 'Programa Educativo del Centro de Idiomas (PECI)',
    description: 'El PECI ha sido actualizado y aprobado de acuerdo a los requisitos aplicables y la normativa vigente. Su aprobación se realizó mediante el Acta de Comité de Centro N°21 el 6 de diciembre de 2023.',
    category: "Programa",
    icon: BadgeCheck,
    linkUrl: 'https://sig.unillanos.edu.co/',
    linkLabel: 'Sistema Integrado de Gestión de la Universidad'
  }
];
