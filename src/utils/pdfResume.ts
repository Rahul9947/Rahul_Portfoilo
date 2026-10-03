import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EDUCATION_LIST, SKILL_CATEGORIES, PROJECTS, EXPERIENCE_LIST } from '../data/portfolioData';

export function generateResumePDF(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  // Header - Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(PERSONAL_INFO.name, margin, y);
  y += 6;

  // Role & Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text(PERSONAL_INFO.role, margin, y);
  y += 5;

  // Contact line
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139); // slate-500
  const contactText = `${PERSONAL_INFO.location}  |  Email: ${PERSONAL_INFO.email}  |  GitHub: github.com/rahulsharma-dev`;
  doc.text(contactText, margin, y);
  y += 7;

  // Divider line
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.5);
  doc.line(margin, y, margin + contentWidth, y);
  y += 6;

  const renderSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.7);
    doc.line(margin, y, margin + 25, y);
    y += 4.5;
  };

  // Professional Summary
  renderSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85); // slate-700
  const summaryLines = doc.splitTextToSize(
    "MCA student at Srinath University, Jamshedpur, passionate about software development, cybersecurity, programming, and building practical technology applications. Experienced in Python, Flask, Java, C/C++, and Linux systems, with an emphasis on disciplined problem solving, device automation (ADB), and hands-on security laboratories.",
    contentWidth
  );
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 4;

  // Education
  renderSectionHeader('Education');
  EDUCATION_LIST.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(37, 99, 235);
    const statusText = edu.status === 'Currently pursuing' ? 'Currently Pursuing' : 'Completed';
    doc.text(statusText, margin + contentWidth - doc.getTextWidth(statusText), y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    const instText = edu.affiliation
      ? `${edu.institution} (${edu.affiliation}), ${edu.location}`
      : `${edu.institution}, ${edu.location}`;
    doc.text(instText, margin, y);
    y += 4.5;
  });
  y += 2;

  // Technical Skills
  renderSectionHeader('Technical Skills');
  SKILL_CATEGORIES.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    const catLabel = `${cat.title}: `;
    doc.text(catLabel, margin, y);

    const labelWidth = doc.getTextWidth(catLabel);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const skillList = cat.skills.map((s) => s.name).join(', ');
    const wrappedSkills = doc.splitTextToSize(skillList, contentWidth - labelWidth);
    doc.text(wrappedSkills, margin + labelWidth, y);
    y += wrappedSkills.length * 4 + 1.5;
  });
  y += 3;

  // Selected Projects
  renderSectionHeader('Technical Projects');
  PROJECTS.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const techStr = proj.technologies.join(' · ');
    doc.text(techStr, margin + contentWidth - doc.getTextWidth(techStr), y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.8 + 1;

    // Bullet features
    proj.features.slice(0, 3).forEach((feat) => {
      doc.setTextColor(37, 99, 235);
      doc.text('•', margin + 2, y);
      doc.setTextColor(71, 85, 105);
      doc.text(feat, margin + 6, y);
      y += 3.8;
    });
    y += 2.5;
  });

  // Experience
  renderSectionHeader('Professional Experience');
  EXPERIENCE_LIST.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(exp.period, margin + contentWidth - doc.getTextWidth(exp.period), y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.company}, ${exp.location}`, margin, y);
    y += 4;

    const expLines = doc.splitTextToSize(exp.overview, contentWidth);
    doc.setFontSize(8.5);
    doc.text(expLines, margin, y);
    y += expLines.length * 3.8 + 2;
  });

  return doc;
}

export function downloadResumePDF() {
  const doc = generateResumePDF();
  doc.save(PERSONAL_INFO.resumeFileName);
}
