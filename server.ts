import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Test Drive
  app.post("/api/test-drive", async (req, res) => {
    const { name, phone, company, message } = req.body;

    console.log("Received Test Drive request:", { name, phone, company, message });

    // Configure your email transport here
    // You should set these in your environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "al.akvila@gmail.com", // User's email from context
      subject: `Новая заявка на Тест-драйв: ${name}`,
      text: `
        Имя: ${name}
        Телефон: ${phone}
        Компания: ${company || "Не указана"}
        Сообщение: ${message || "Нет сообщения"}
      `,
    };

    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Заявка отправлена!" });
      } else {
        console.warn("Email credentials not provided. Logging to console instead.");
        res.status(200).json({ 
          success: true, 
          message: "Заявка принята (режим отладки: настройте EMAIL_USER и EMAIL_PASS для реальной отправки)" 
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Ошибка при отправке заявки." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
