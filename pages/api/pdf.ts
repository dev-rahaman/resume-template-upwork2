// api/generate-pdf.ts
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const saveAsPdf = async () => {
  const browser = await puppeteer.launch();
  const device_width = 1920;
  const device_height = 1080;
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setViewport({ width: device_width, height: device_height })
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

  const url = `http://localhost:4000`; // Update with your actual URL

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    format: "a4",
    printBackground: true,
    margin: {
      top: "10mm",
      right: "10mm",
      bottom: "10mm",
      left: "10mm",
    },
    scale: 1.3,
  });

  await browser.close();
  return result;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pdf = await saveAsPdf();

  res.setHeader("Content-Disposition", `attachment; filename="resume.pdf"`);
  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
};
