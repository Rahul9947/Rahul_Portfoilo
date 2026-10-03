import fs from 'fs';
import path from 'path';
import { generateResumePDF } from '../src/utils/pdfResume';

try {
  const doc = generateResumePDF();
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  const targetDir = path.resolve(process.cwd(), 'public/resume');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'Rahul_Sharma_Resume.pdf');
  fs.writeFileSync(targetFile, pdfBuffer);
  console.log('Successfully generated Rahul_Sharma_Resume.pdf at:', targetFile);
} catch (err) {
  console.error('Error generating PDF:', err);
}

