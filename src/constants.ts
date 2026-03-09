import { Project, Publication, Experience, Award } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'upec',
    title: 'UPEC: Multi-Modal AI-Powered Cardiac Diagnostics',
    description: 'A portable cardiopulmonary diagnostic device integrating hybrid CNN-Transformer and CNN-LSTM architectures for ECG, PCG, and PPG analysis.',
    tags: ['AI', 'Deep Learning', 'ESP32', 'Healthcare'],
    image: 'projects/upec.png',
    details: 'Achieved 92.3% accuracy in ECG classification and 98.9% in blood pressure classification.'
  },
  {
    id: 'glucose',
    title: 'Non-Invasive Glucose Monitoring Device',
    description: 'IoT-enabled system using TGS822 gas sensor to measure breath acetone levels correlated with glucose concentration.',
    tags: ['IoT', 'Sensors', 'Arduino', 'Diabetes'],
    image: 'projects/glucose monitor.png'
  },
  {
    id: 'patient-monitor',
    title: 'Real-Time Patient Monitoring System',
    description: 'Custom PPG and SPO2 sensor integration with ESP32, featuring CO2 and temperature monitoring.',
    tags: ['ESP32', 'Real-time', 'Sensors'],
    image: 'projects/Real-Time Patient Monitoring System.png',
    details: 'Achieved 2nd runner-up at the national level.'
  },
  {
    id: 'alzheimers-vit',
    title: 'Alzheimer’s Detection using Vision Transformer (ViT)',
    description: 'Implemented a ViT-based deep learning model for early-stage Alzheimer’s detection using MRI images. Achieved high classification accuracy and validated results against standard clinical datasets. Optimized preprocessing pipelines and fine-tuned transformer layers for biomedical imaging tasks.',
    tags: ['Deep Learning', 'ViT', 'Medical Imaging', 'Alzheimer\'s'],
    image: 'projects/vision transformer alimer.PNG'
  },
  {
    id: 'ultrasound-gel',
    title: 'Development of Ultrasound Gel Patches',
    description: 'Innovation in ultrasound imaging through the development of specialized gel patches designed for enhanced coupling and superior image quality compared to traditional liquid gels.',
    tags: ['Medical Imaging', 'Materials Science', 'Ultrasound'],
    image: 'projects/gel pads.PNG'
  },
  {
    id: 'stroke-rehab',
    title: 'EEG-Driven Gamified Stroke Rehabilitation',
    description: 'Hybrid CNN-Transformer for 11-level intent classification from single-channel EEG. Features real-time gamified feedback (PyQt5/Pygame) with 78.33% accuracy, outperforming baselines for low-cost neurorehabilitation.',
    tags: ['EEG', 'CNN-Transformer', 'Neurorehab', 'Python'],
    image: 'projects/eeg driven.PNG'
  },
  {
    id: 'robotic-manipulator',
    title: 'Quad-Flex Robotic Manipulator',
    description: 'Precise movement control using inverse kinematics, servo motors, and microcontrollers.',
    tags: ['Robotics', 'Control Systems', 'Automation'],
    image: 'projects/QUAD FLEX.PNG'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Reshaping the Healthcare World by AI-Integrated Wearable Sensors Following COVID-19',
    authors: 'Bangul Khan, Rana Talha Khalid, Khair Ul Wara, et al.',
    journal: 'Chemical Engineering Journal',
    year: '2025',
    doi: '10.1016/j.cej.2025.159478'
  },
  {
    title: 'The Impact of BMI on Heart Rate and Blood Pressure: Unveiling the Cardiovascular Connection',
    authors: 'Muhammad Daniyal Maqsood Alvi, Khair Ul Wara, et al.',
    journal: 'Pakistan Journal of Biotechnology',
    year: '2024',
    doi: '10.34016/pjbt.2024.21.02.965'
  },
  {
    title: 'A Semi-Automated Framework for Standardized Vertebral Measurement in Lumbar Spine MRI Analysis',
    authors: 'Muhammad Hasan Masrur, Rana Talha Khalid, Khair Ul Wara, et al.',
    journal: 'Materials Proceedings',
    year: '2025',
    doi: '10.3390/materproc2025023005'
  },
  {
    title: 'Evaluating Machine Learning Classifiers for Automated Glaucoma Detection Using Fundus Images',
    authors: 'Muhammad Daniyal Maqsood Alvi, Dua Ubaid, Khair Ul Wara, et al.',
    journal: 'Biomedical Materials & Devices',
    year: '2025',
    doi: '10.1007/s44174-025-00569-x'
  },
  {
    title: 'IoT-enabled Non-invasive Glucose Monitoring and Heart Rate Detection: A Smart Solution for Diabetes Management',
    authors: 'Muhammad Daniyal Maqsood Alvi, Syed Muhammad Faizan Raza Shah Zaidi, Khair Ul Wara, et al.',
    journal: 'International Conference on Robotics (ICR)',
    year: '2024',
    doi: '6480' // Using the ID from the URL as a placeholder or just the link in the UI
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Research Assistant',
    company: 'BioEra Lab, Karachi',
    period: 'Nov 2023 - Jan 2024',
    description: [
      'Assisted in research projects focusing on non-invasive glucose monitoring.',
      'Participated in the design of experimental protocols for diagnostic tools.',
      'Engaged in collaborative discussions to refine research methodologies.'
    ]
  },
  {
    role: 'Intern, Critical Care Equipment',
    company: 'Vertex Medical Pvt, Lahore',
    period: 'Aug 2023 - Sep 2023',
    description: [
      'Worked with Dräger equipment in critical care settings.',
      'Installation and calibration of ventilators and anesthesia systems.',
      'Experience with real-time monitoring systems.'
    ]
  },
  {
    role: 'Intern, Biomedical Department',
    company: 'EndoKare Pakistan',
    period: 'Aug 2024 - Oct 2024',
    description: [
      'Focused on endoscopic equipment maintenance and calibration.',
      'Contributed to technical documentation including service reports.',
      'Presented learnings to potential clients.'
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: '2nd Runner-up, Microsoft Imagine Cup',
    organization: 'Microsoft Pakistan',
    year: '2021/2022',
    description: 'For leading a team that designed an innovative patient monitoring system.'
  },
  {
    title: 'Best Student Award (2021-2025)',
    organization: 'RCST / Riphah International University',
    year: '2025'
  },
  {
    title: 'Talent Scholarship',
    organization: 'Riphah International University',
    year: '2021'
  },
  {
    title: 'Mumtaz Scholarship',
    organization: 'Riphah International University',
    year: '2023, 2024',
    description: 'Outstanding academic performance based on semester results.'
  }
];
