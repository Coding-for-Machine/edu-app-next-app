"use client"

export const courses = [
  {
    id: 1,
    title: "Node.js va Express orqali backend dasturlash",
    instructor: "Azimjon Po'latov",
    category: "Backend",
    level: "O'rta",
    students: 1250,
    duration: "12 hafta",
    price: "Bepul",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "React va Next.js asoslari",
    instructor: "Dilshod Tursunov",
    category: "Frontend",
    level: "Boshlang'ich",
    students: 980,
    duration: "10 hafta",
    price: "Bepul",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Flutter orqali mobil ilovalar yaratish",
    instructor: "Bobur Aliyev",
    category: "Mobile",
    level: "O'rta",
    students: 750,
    duration: "14 hafta",
    price: "Bepul",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "UX/UI dizayn asoslari",
    instructor: "Malika Karimova",
    category: "UX/UI",
    level: "Boshlang'ich",
    students: 620,
    duration: "8 hafta",
    price: "Bepul",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "PostgreSQL va MongoDB ma'lumotlar bazalari",
    instructor: "Azimjon Po'latov",
    category: "Backend",
    level: "Yuqori",
    students: 480,
    duration: "10 hafta",
    price: "Bepul",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Vue.js va Nuxt.js asoslari",
    instructor: "Dilshod Tursunov",
    category: "Frontend",
    level: "O'rta",
    students: 520,
    duration: "9 hafta",
    price: "Bepul",
    image: "/placeholder.svg?height=200&width=400",
  },
]

// Course lessons data
const lessonsData = {
  1: [
    {
      id: 1,
      title: "Node.js ga kirish",
      content: `
        <h2>Node.js nima?</h2>
        <p>Node.js - bu Chrome V8 JavaScript engine asosida qurilgan server tomonidagi platforma. U event-driven, non-blocking I/O modelidan foydalanadi, bu esa uni yengil va samarali qiladi.</p>
        
        <h3>Node.js ning afzalliklari:</h3>
        <ul>
          <li>Asynchronous va Event Driven</li>
          <li>Juda tez</li>
          <li>Single Threaded lekin yuqori darajada scalable</li>
          <li>Buffersiz</li>
          <li>Litsenziya</li>
        </ul>
        
        <h3>Node.js qachon ishlatiladi?</h3>
        <p>Node.js quyidagi hollarda ishlatiladi:</p>
        <ul>
          <li>I/O bound Applications</li>
          <li>Data Streaming Applications</li>
          <li>Data Intensive Real-time Applications (DIRT)</li>
          <li>JSON APIs based Applications</li>
          <li>Single Page Applications</li>
        </ul>
      `,
      type: "video",
      duration: "45 daqiqa",
      hasTest: true,
      hasTask: false,
      completed: false,
    },
    {
      id: 2,
      title: "Node.js ni o'rnatish va sozlash",
      content: `
        <h2>Node.js ni o'rnatish</h2>
        <p>Node.js ni o'rnatish uchun quyidagi qadamlarni bajarish kerak:</p>
        
        <h3>Windows uchun:</h3>
        <ol>
          <li>Node.js rasmiy saytiga tashrif buyuring: <a href="https://nodejs.org" target="_blank">https://nodejs.org</a></li>
          <li>LTS (Long Term Support) versiyasini yuklab oling</li>
          <li>Yuklab olingan faylni ishga tushiring va o'rnatish jarayonini boshlang</li>
          <li>O'rnatish jarayonida barcha standart sozlamalarni qabul qiling</li>
          <li>O'rnatish tugagandan so'ng, Command Prompt ochib, quyidagi buyruqni kiriting: <code>node -v</code></li>
          <li>Agar o'rnatish muvaffaqiyatli bo'lsa, Node.js versiyasi ko'rsatiladi</li>
        </ol>
        
        <h3>Mac uchun:</h3>
        <ol>
          <li>Node.js rasmiy saytiga tashrif buyuring: <a href="https://nodejs.org" target="_blank">https://nodejs.org</a></li>
          <li>LTS (Long Term Support) versiyasini yuklab oling</li>
          <li>Yuklab olingan faylni ishga tushiring va o'rnatish jarayonini boshlang</li>
          <li>O'rnatish tugagandan so'ng, Terminal ochib, quyidagi buyruqni kiriting: <code>node -v</code></li>
          <li>Agar o'rnatish muvaffaqiyatli bo'lsa, Node.js versiyasi ko'rsatiladi</li>
        </ol>
        
        <h3>Linux uchun:</h3>
        <p>Ubuntu/Debian:</p>
        <pre><code>
        sudo apt update
        sudo apt install nodejs npm
        node -v
        </code></pre>
        
        <p>Fedora:</p>
        <pre><code>
        sudo dnf install nodejs
        node -v
        </code></pre>
      `,
      type: "video",
      duration: "30 daqiqa",
      hasTest: false,
      hasTask: true,
      completed: false,
    },
    {
      id: 3,
      title: "Node.js da birinchi dastur",
      content: `
        <h2>Node.js da "Hello World" dasturi</h2>
        <p>Node.js da birinchi dasturni yaratish uchun quyidagi qadamlarni bajarish kerak:</p>
        
        <h3>1. Yangi fayl yaratish</h3>
        <p>Kompyuteringizda yangi papka yarating va uni "node-tutorial" deb nomlang. Keyin shu papka ichida "app.js" nomli fayl yarating.</p>
        
        <h3>2. Kodni yozish</h3>
        <p>app.js fayliga quyidagi kodni yozing:</p>
        
        <pre><code>
        console.log("Hello, World!");
        </code></pre>
        
        <h3>3. Dasturni ishga tushirish</h3>
        <p>Terminal yoki Command Prompt ochib, "node-tutorial" papkasiga o'ting va quyidagi buyruqni kiriting:</p>
        
        <pre><code>
        node app.js
        </code></pre>
        
        <p>Natijada, "Hello, World!" xabari konsolda ko'rsatiladi.</p>
        
        <h3>4. HTTP server yaratish</h3>
        <p>Endi oddiy HTTP server yaratamiz. app.js faylini quyidagi kod bilan yangilang:</p>
        
        <pre><code>
        const http = require('http');

        const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Hello, World!\\n');
        });

        server.listen(port, hostname, () => {
          console.log(\`Server http://\${hostname}:\${port}/ manzilida ishga tushdi\`);
        });
        </code></pre>
        
        <h3>5. Serverni ishga tushirish</h3>
        <p>Terminal yoki Command Prompt da quyidagi buyruqni kiriting:</p>
        
        <pre><code>
        node app.js
        </code></pre>
        
        <p>Brauzeringizni oching va http://127.0.0.1:3000/ manziliga o'ting. "Hello, World!" xabari ko'rsatiladi.</p>
      `,
      type: "video",
      duration: "60 daqiqa",
      hasTest: true,
      hasTask: true,
      completed: false,
    },
    {
      id: 4,
      title: "Node.js da modullar",
      content: `
        <h2>Node.js modullar tizimi</h2>
        <p>Node.js da modullar tizimi CommonJS standartiga asoslangan. Bu tizim orqali kod mantiqiy qismlarga bo'linadi va qayta ishlatilishi mumkin.</p>
        
        <h3>1. O'rnatilgan modullar</h3>
        <p>Node.js bir nechta o'rnatilgan modullarni o'z ichiga oladi:</p>
        <ul>
          <li><strong>http</strong>: HTTP server yaratish uchun</li>
          <li><strong>fs</strong>: Fayl tizimi bilan ishlash uchun</li>
          <li><strong>path</strong>: Fayl yo'llarini boshqarish uchun</li>
          <li><strong>os</strong>: Operatsion tizim ma'lumotlarini olish uchun</li>
          <li><strong>events</strong>: Event-driven dasturlash uchun</li>
        </ul>
        
        <h3>2. Modulni import qilish</h3>
        <p>Modulni import qilish uchun <code>require()</code> funksiyasidan foydalaniladi:</p>
        
        <pre><code>
        const fs = require('fs');
        </code></pre>
        
        <h3>3. O'z modullaringizni yaratish</h3>
        <p>O'z modullaringizni yaratish uchun <code>module.exports</code> dan foydalanasiz:</p>
        
        <p>Misol uchun, <code>utils.js</code> nomli fayl yarating:</p>
        
        <pre><code>
        function add(a, b) {
          return a + b;
        }

        function subtract(a, b) {
          return a - b;
        }

        module.exports = {
          add,
          subtract
        };
        </code></pre>
        
        <p>Keyin bu modulni boshqa faylda ishlatish uchun:</p>
        
        <pre><code>
        const utils = require('./utils');

        console.log(utils.add(5, 3));      // 8
        console.log(utils.subtract(5, 3)); // 2
        </code></pre>
        
        <h3>4. ES Modules</h3>
        <p>Node.js 14+ versiyalarida ES Modules ham qo'llab-quvvatlanadi. Buning uchun fayl kengaytmasi <code>.mjs</code> bo'lishi kerak yoki <code>package.json</code> faylida <code>"type": "module"</code> ko'rsatilishi kerak.</p>
        
        <pre><code>
        // math.mjs
        export function add(a, b) {
          return a + b;
        }

        export function subtract(a, b) {
          return a - b;
        }

        // app.mjs
        import { add, subtract } from './math.mjs';

        console.log(add(5, 3));      // 8
        console.log(subtract(5, 3)); // 2
        </code></pre>
      `,
      type: "video",
      duration: "50 daqiqa",
      hasTest: true,
      hasTask: false,
      completed: false,
    },
    {
      id: 5,
      title: "Node.js da test",
      content: `
        <h2>Node.js bilimlarini tekshirish</h2>
        <p>Ushbu testda Node.js haqidagi bilimlaringizni tekshirasiz.</p>
        <p>Test 10 ta savoldan iborat. Har bir savol uchun to'g'ri javobni tanlang.</p>
        <p>Testni muvaffaqiyatli topshirish uchun kamida 70% to'g'ri javob berishingiz kerak.</p>
      `,
      type: "test",
      duration: "20 daqiqa",
      hasTest: true,
      hasTask: false,
      completed: false,
    },
    {
      id: 6,
      title: "Express.js ga kirish",
      content: `
        <h2>Express.js nima?</h2>
        <p>Express.js - bu Node.js uchun minimal va moslashuvchan web framework. U web ilovalar va API lar yaratish uchun ko'plab imkoniyatlarni taqdim etadi.</p>
        
        <h3>Express.js ning afzalliklari:</h3>
        <ul>
          <li>Minimal va moslashuvchan</li>
          <li>Tez va oson API yaratish imkoniyati</li>
          <li>Middleware arxitekturasi</li>
          <li>Routing imkoniyatlari</li>
          <li>Template engine integratsiyasi</li>
        </ul>
        
        <h3>Express.js ni o'rnatish</h3>
        <p>Express.js ni o'rnatish uchun quyidagi buyruqni kiriting:</p>
        
        <pre><code>
        npm init -y
        npm install express
        </code></pre>
        
        <h3>Oddiy Express.js ilovasi</h3>
        <p>Quyida oddiy Express.js ilovasi misoli keltirilgan:</p>
        
        <pre><code>
        const express = require('express');
        const app = express();
        const port = 3000;

        app.get('/', (req, res) => {
          res.send('Hello, Express!');
        });

        app.listen(port, () => {
          console.log(\`Server http://localhost:\${port} manzilida ishga tushdi\`);
        });
        </code></pre>
        
        <h3>Routing</h3>
        <p>Express.js da routing quyidagicha amalga oshiriladi:</p>
        
        <pre><code>
        app.get('/', (req, res) => {
          res.send('Bosh sahifa');
        });

        app.get('/about', (req, res) => {
          res.send('Biz haqimizda');
        });

        app.post('/users', (req, res) => {
          res.send('Foydalanuvchi yaratildi');
        });
        </code></pre>
        
        <h3>Middleware</h3>
        <p>Middleware - bu so'rov-javob sikli davomida bajariluvchi funksiyalar. Ular so'rovni qayta ishlash, javobni o'zgartirish yoki boshqa amallarni bajarish uchun ishlatiladi.</p>
        
        <pre><code>
        app.use((req, res, next) => {
          console.log(\`\${req.method} \${req.url}\`);
          next();
        });
        </code></pre>
      `,
      type: "video",
      duration: "55 daqiqa",
      hasTest: false,
      hasTask: true,
      completed: false,
    },
  ],
  2: [
    {
      id: 1,
      title: "React asoslari",
      content: `
        <h2>React nima?</h2>
        <p>React - bu Facebook tomonidan yaratilgan JavaScript kutubxonasi bo'lib, foydalanuvchi interfeyslarini yaratish uchun ishlatiladi. U komponentlarga asoslangan yondashuv orqali ishlab chiqarishni osonlashtiradi.</p>
        
        <h3>React ning afzalliklari:</h3>
        <ul>
          <li>Virtual DOM</li>
          <li>Komponentlarga asoslangan arxitektura</li>
          <li>Bir yo'nalishli ma'lumotlar oqimi</li>
          <li>JSX sintaksisi</li>
          <li>Katta hamjamiyat va ekotizim</li>
        </ul>
        
        <h3>React ni o'rnatish</h3>
        <p>React ni o'rnatish uchun quyidagi buyruqni kiriting:</p>
        
        <pre><code>
        npx create-react-app my-app
        cd my-app
        npm start
        </code></pre>
        
        <h3>JSX nima?</h3>
        <p>JSX - bu JavaScript uchun sintaksis kengaytmasi bo'lib, HTML ga o'xshash sintaksis bilan React elementlarini yaratish imkonini beradi.</p>
        
        <pre><code>
        const element = <h1>Hello, world!</h1>;
        </code></pre>
        
        <h3>Komponentlar</h3>
        <p>React ilovasi komponentlardan tashkil topgan. Komponentlar ikki xil bo'lishi mumkin: funksional va klass komponentlari.</p>
        
        <p>Funksional komponent:</p>
        <pre><code>
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
        </code></pre>
        
        <p>Klass komponent:</p>
        <pre><code>
        class Welcome extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
        }
        </code></pre>
      `,
      type: "video",
      duration: "60 daqiqa",
      hasTest: true,
      hasTask: false,
      completed: false,
    },
    {
      id: 2,
      title: "React komponentlari",
      content: `
        <h2>React komponentlari</h2>
        <p>React komponentlari - bu ilovaning qayta ishlatiluvchi qismlari. Ular o'z holatini boshqarishi va foydalanuvchi interfeysining bir qismini render qilishi mumkin.</p>
        
        <h3>Props</h3>
        <p>Props (properties) - bu komponentga tashqaridan uzatiladigan ma'lumotlar. Ular faqat o'qish uchun va o'zgartirilmaydi.</p>
        
        <pre><code>
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }

        // Ishlatish
        <Welcome name="Sara" />
        </code></pre>
        
        <h3>State</h3>
        <p>State - bu komponent ichida saqlanadigan va o'zgartirilishi mumkin bo'lgan ma'lumotlar.</p>
        
        <pre><code>
        import React, { useState } from 'react';

        function Counter() {
          const [count, setCount] = useState(0);

          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        </code></pre>
        
        <h3>Lifecycle Methods</h3>
        <p>Klass komponentlarida hayot sikli metodlari mavjud. Ular komponent yaratilganda, yangilanganda va o'chirilganda chaqiriladi.</p>
        
        <pre><code>
        class Clock extends React.Component {
          constructor(props) {
            super(props);
            this.state = {date: new Date()};
          }

          componentDidMount() {
            this.timerID = setInterval(
              () => this.tick(),
              1000
            );
          }

          componentWillUnmount() {
            clearInterval(this.timerID);
          }

          tick() {
            this.setState({
              date: new Date()
            });
          }

          render() {
            return (
              <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
              </div>
            );
          }
        }
        </code></pre>
        
        <h3>Hooks</h3>
        <p>Hooks - bu React 16.8 da qo'shilgan yangi xususiyat. Ular funksional komponentlarda state va boshqa React xususiyatlaridan foydalanish imkonini beradi.</p>
        
        <pre><code>
        import React, { useState, useEffect } from 'react';

        function Example() {
          const [count, setCount] = useState(0);

          useEffect(() => {
            document.title = \`You clicked ${count} times\`;
          });

          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        </code></pre>
      `,
      type: "video",
      duration: "55 daqiqa",
      hasTest: true,
      hasTask: true,
      completed: false,
    },
  ],
}

// Get all lessons for a course
export function getCourseLessons(courseId: number) {
  return lessonsData[courseId as keyof typeof lessonsData] || []
}

// Get a specific lesson by ID
export function getLessonById(courseId: number, lessonId: number) {
  const lessons = getCourseLessons(courseId)
  return lessons.find((lesson) => lesson.id === lessonId)
}

// Tests data
const testsData = {
  1: {
    1: {
      id: 1,
      title: "Node.js asoslari testi",
      description: "Bu testda Node.js haqidagi asosiy bilimlaringizni tekshirasiz.",
      questions: [
        {
          id: 1,
          text: "Node.js nima?",
          answers: [
            { id: 1, text: "JavaScript kutubxonasi" },
            { id: 2, text: "Chrome V8 JavaScript engine asosida qurilgan server tomonidagi platforma" },
            { id: 3, text: "Frontend framework" },
            { id: 4, text: "Database management system" },
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: "Node.js qaysi pattern asosida ishlaydi?",
          answers: [
            { id: 1, text: "Model-View-Controller" },
            { id: 2, text: "Publish-Subscribe" },
            { id: 3, text: "Event-driven, non-blocking I/O" },
            { id: 4, text: "Request-Response" },
          ],
          correctAnswer: 3,
        },
        {
          id: 3,
          text: "Node.js da modulni import qilish uchun qaysi funksiya ishlatiladi?",
          answers: [
            { id: 1, text: "import()" },
            { id: 2, text: "require()" },
            { id: 3, text: "include()" },
            { id: 4, text: "export()" },
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: "Node.js da HTTP server yaratish uchun qaysi modul ishlatiladi?",
          answers: [
            { id: 1, text: "http" },
            { id: 2, text: "server" },
            { id: 3, text: "net" },
            { id: 4, text: "web" },
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          text: "Node.js da fayl tizimi bilan ishlash uchun qaysi modul ishlatiladi?",
          answers: [
            { id: 1, text: "file" },
            { id: 2, text: "fs" },
            { id: 3, text: "system" },
            { id: 4, text: "io" },
          ],
          correctAnswer: 2,
        },
      ],
    },
    3: {
      id: 2,
      title: "Node.js da birinchi dastur testi",
      description: "Bu testda Node.js da birinchi dastur yaratish haqidagi bilimlaringizni tekshirasiz.",
      questions: [
        {
          id: 1,
          text: "Node.js da 'Hello, World!' dasturini konsolga chiqarish uchun qaysi kod ishlatiladi?",
          answers: [
            { id: 1, text: "print('Hello, World!');" },
            { id: 2, text: "console.log('Hello, World!');" },
            { id: 3, text: "echo 'Hello, World!';" },
            { id: 4, text: "System.out.println('Hello, World!');" },
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: "Node.js da HTTP server yaratish uchun qaysi kod to'g'ri?",
          answers: [
            { id: 1, text: "const server = http.createServer();" },
            { id: 2, text: "const server = new Server();" },
            { id: 3, text: "const server = http.newServer();" },
            { id: 4, text: "const server = createServer();" },
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: "Node.js da server portini belgilash uchun qaysi metod ishlatiladi?",
          answers: [
            { id: 1, text: "server.port(3000);" },
            { id: 2, text: "server.listen(3000);" },
            { id: 3, text: "server.start(3000);" },
            { id: 4, text: "server.run(3000);" },
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: "Node.js da HTTP so'rovga javob berish uchun qaysi metod ishlatiladi?",
          answers: [
            { id: 1, text: "res.send();" },
            { id: 2, text: "res.write();" },
            { id: 3, text: "res.end();" },
            { id: 4, text: "res.return();" },
          ],
          correctAnswer: 3,
        },
        {
          id: 5,
          text: "Node.js da HTTP so'rov uchun status code ni belgilash uchun qaysi kod ishlatiladi?",
          answers: [
            { id: 1, text: "res.status = 200;" },
            { id: 2, text: "res.statusCode = 200;" },
            { id: 3, text: "res.setStatus(200);" },
            { id: 4, text: "res.code(200);" },
          ],
          correctAnswer: 2,
        },
      ],
    },
    4: {
      id: 3,
      title: "Node.js modullar testi",
      description: "Bu testda Node.js modullar tizimi haqidagi bilimlaringizni tekshirasiz.",
      questions: [
        {
          id: 1,
          text: "Node.js da modullar tizimi qaysi standartga asoslangan?",
          answers: [
            { id: 1, text: "AMD" },
            { id: 2, text: "UMD" },
            { id: 3, text: "CommonJS" },
            { id: 4, text: "ES Modules" },
          ],
          correctAnswer: 3,
        },
        {
          id: 2,
          text: "Node.js da o'z modulingizni eksport qilish uchun qaysi kod ishlatiladi?",
          answers: [
            { id: 1, text: "export default { ... };" },
            { id: 2, text: "module.exports = { ... };" },
            { id: 3, text: "exports = { ... };" },
            { id: 4, text: "export { ... };" },
          ],
          correctAnswer: 2,
        },
        {
          id: 3,
          text: "Node.js da ES Modules ni ishlatish uchun fayl kengaytmasi qanday bo'lishi kerak?",
          answers: [
            { id: 1, text: ".js" },
            { id: 2, text: ".es" },
            { id: 3, text: ".mjs" },
            { id: 4, text: ".esm" },
          ],
          correctAnswer: 3,
        },
        {
          id: 4,
          text: "Node.js da package.json faylida ES Modules ni ishlatish uchun qaysi kalit qo'shiladi?",
          answers: [
            { id: 1, text: '"module": true' },
            { id: 2, text: '"esmodules": true' },
            { id: 3, text: '"type": "module"' },
            { id: 4, text: '"modules": "es"' },
          ],
          correctAnswer: 3,
        },
        {
          id: 5,
          text: "Node.js da fayl tizimi bilan ishlash uchun qaysi modul ishlatiladi?",
          answers: [
            { id: 1, text: "file" },
            { id: 2, text: "fs" },
            { id: 3, text: "system" },
            { id: 4, text: "io" },
          ],
          correctAnswer: 2,
        },
      ],
    },
    5: {
      id: 4,
      title: "Node.js umumiy test",
      description: "Bu testda Node.js haqidagi umumiy bilimlaringizni tekshirasiz.",
      questions: [
        {
          id: 1,
          text: "Node.js qaysi tilda yozilgan?",
          answers: [
            { id: 1, text: "JavaScript" },
            { id: 2, text: "C++" },
            { id: 3, text: "Java" },
            { id: 4, text: "Python" },
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: "Node.js qaysi yilda yaratilgan?",
          answers: [
            { id: 1, text: "2005" },
            { id: 2, text: "2009" },
            { id: 3, text: "2011" },
            { id: 4, text: "2015" },
          ],
          correctAnswer: 2,
        },
        {
          id: 3,
          text: "Node.js ni kim yaratgan?",
          answers: [
            { id: 1, text: "Brendan Eich" },
            { id: 2, text: "Ryan Dahl" },
            { id: 3, text: "Mark Zuckerberg" },
            { id: 4, text: "Linus Torvalds" },
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: "Node.js da paketlarni boshqarish uchun qaysi dastur ishlatiladi?",
          answers: [
            { id: 1, text: "npm" },
            { id: 2, text: "pip" },
            { id: 3, text: "gem" },
            { id: 4, text: "composer" },
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          text: "Node.js da event loop nima?",
          answers: [
            { id: 1, text: "Dastur kodini takroriy ishga tushiruvchi mexanizm" },
            { id: 2, text: "Asynchronous operatsiyalarni boshqaruvchi mexanizm" },
            { id: 3, text: "Ma'lumotlar bazasi bilan bog'lanish mexanizmi" },
            { id: 4, text: "Xatoliklarni qayta ishlash mexanizmi" },
          ],
          correctAnswer: 2,
        },
        {
          id: 6,
          text: "Node.js da callback hell muammosini hal qilish uchun qaysi yondashuv ishlatiladi?",
          answers: [
            { id: 1, text: "Promises" },
            { id: 2, text: "Generators" },
            { id: 3, text: "Async/await" },
            { id: 4, text: "Barcha javoblar to'g'ri" },
          ],
          correctAnswer: 4,
        },
        {
          id: 7,
          text: "Node.js da global o'zgaruvchilar qayerda saqlanadi?",
          answers: [
            { id: 1, text: "global obyektida" },
            { id: 2, text: "window obyektida" },
            { id: 3, text: "process obyektida" },
            { id: 4, text: "module obyektida" },
          ],
          correctAnswer: 1,
        },
        {
          id: 8,
          text: "Node.js da process.env nima?",
          answers: [
            { id: 1, text: "Joriy fayl yo'li" },
            { id: 2, text: "Muhit o'zgaruvchilari" },
            { id: 3, text: "Dastur argumentlari" },
            { id: 4, text: "Tizim resurslari" },
          ],
          correctAnswer: 2,
        },
        {
          id: 9,
          text: "Node.js da cluster moduli nima uchun ishlatiladi?",
          answers: [
            { id: 1, text: "Ma'lumotlar bazasidagi ma'lumotlarni guruhlash uchun" },
            { id: 2, text: "Bir nechta CPU yadrolari bo'ylab yukni taqsimlash uchun" },
            { id: 3, text: "Fayllarni guruhlash uchun" },
            { id: 4, text: "Tarmoq so'rovlarini guruhlash uchun" },
          ],
          correctAnswer: 2,
        },
        {
          id: 10,
          text: "Node.js da debug qilish uchun qaysi buyruq ishlatiladi?",
          answers: [
            { id: 1, text: "node debug app.js" },
            { id: 2, text: "node --debug app.js" },
            { id: 3, text: "node --inspect app.js" },
            { id: 4, text: "node --trace app.js" },
          ],
          correctAnswer: 3,
        },
      ],
    },
  },
  2: {
    1: {
      id: 1,
      title: "React asoslari testi",
      description: "Bu testda React haqidagi asosiy bilimlaringizni tekshirasiz.",
      questions: [
        {
          id: 1,
          text: "React nima?",
          answers: [
            { id: 1, text: "JavaScript kutubxonasi" },
            { id: 2, text: "JavaScript frameworki" },
            { id: 3, text: "CSS preprocessori" },
            { id: 4, text: "Ma'lumotlar bazasi" },
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          text: "React qaysi kompaniya tomonidan yaratilgan?",
          answers: [
            { id: 1, text: "Google" },
            { id: 2, text: "Microsoft" },
            { id: 3, text: "Facebook" },
            { id: 4, text: "Amazon" },
          ],
          correctAnswer: 3,
        },
        {
          id: 3,
          text: "JSX nima?",
          answers: [
            { id: 1, text: "JavaScript XML" },
            { id: 2, text: "JavaScript Extension" },
            { id: 3, text: "JavaScript Syntax Extension" },
            { id: 4, text: "JavaScript eXtreme" },
          ],
          correctAnswer: 3,
        },
        {
          id: 4,
          text: "React da komponentlar nima?",
          answers: [
            { id: 1, text: "HTML elementlari" },
            { id: 2, text: "CSS stillari" },
            { id: 3, text: "JavaScript funksiyalari" },
            { id: 4, text: "Qayta ishlatiluvchi UI bloklari" },
          ],
          correctAnswer: 4,
        },
        {
          id: 5,
          text: "React da props nima?",
          answers: [
            { id: 1, text: "Komponentga tashqaridan uzatiladigan ma'lumotlar" },
            { id: 2, text: "Komponent ichida saqlanadigan ma'lumotlar" },
            { id: 3, text: "Komponent metodlari" },
            { id: 4, text: "Komponent stillar" },
          ],
          correctAnswer: 1,
        },
      ],
    },
    2: {
      id: 2,
      title: "React komponentlari testi",
      description: "Bu testda React komponentlari haqidagi bilimlaringizni tekshirasiz.",
      questions: [
        {
          id: 1,
          text: "React da state nima?",
          answers: [
            { id: 1, text: "Komponentga tashqaridan uzatiladigan ma'lumotlar" },
            { id: 2, text: "Komponent ichida saqlanadigan va o'zgartirilishi mumkin bo'lgan ma'lumotlar" },
            { id: 3, text: "Komponent metodlari" },
            { id: 4, text: "Komponent stillar" },
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: "React da state ni o'zgartirish uchun qaysi metod ishlatiladi?",
          answers: [
            { id: 1, text: "this.state = newState" },
            { id: 2, text: "this.setState()" },
            { id: 3, text: "this.changeState()" },
            { id: 4, text: "this.updateState()" },
          ],
          correctAnswer: 2,
        },
        {
          id: 3,
          text: "React Hooks nima?",
          answers: [
            { id: 1, text: "Klass komponentlari uchun yangi xususiyatlar" },
            {
              id: 2,
              text: "Funksional komponentlarda state va boshqa React xususiyatlaridan foydalanish imkonini beruvchi funksiyalar",
            },
            { id: 3, text: "React da stillarni qo'llash usuli" },
            { id: 4, text: "React da ma'lumotlarni saqlash usuli" },
          ],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: "useState hook nima uchun ishlatiladi?",
          answers: [
            { id: 1, text: "Funksional komponentda state ni boshqarish uchun" },
            { id: 2, text: "Komponentni qayta render qilish uchun" },
            { id: 3, text: "Komponentni o'chirish uchun" },
            { id: 4, text: "Komponentni yaratish uchun" },
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          text: "useEffect hook nima uchun ishlatiladi?",
          answers: [
            { id: 1, text: "Funksional komponentda state ni boshqarish uchun" },
            { id: 2, text: "Funksional komponentda side effect larni bajarish uchun" },
            { id: 3, text: "Komponentni o'chirish uchun" },
            { id: 4, text: "Komponentni yaratish uchun" },
          ],
          correctAnswer: 2,
        },
      ],
    },
  },
}

// Get a test by lesson ID
export function getTestByLessonId(courseId: number, lessonId: number) {
  const courseTests = testsData[courseId as keyof typeof testsData]
  if (!courseTests) return null

  return courseTests[lessonId as keyof typeof courseTests] || null
}

// Tasks data
const tasksData = {
  1: {
    2: {
      id: 1,
      title: "Node.js ni o'rnatish va sozlash",
      description: `
        <p>Ushbu vazifada siz Node.js ni o'rnatishingiz va sozlashingiz kerak bo'ladi.</p>
        <p>Quyidagi qadamlarni bajaring:</p>
        <ol>
          <li>Node.js ni o'z kompyuteringizga o'rnating</li>
          <li>Terminal yoki Command Prompt ochib, Node.js versiyasini tekshiring</li>
          <li>Yangi papka yarating va uni "node-task" deb nomlang</li>
          <li>Shu papka ichida "app.js" nomli fayl yarating</li>
          <li>app.js faylida quyidagi kodni yozing va ishga tushiring:</li>
        </ol>
        <pre><code>
        console.log("Node.js o'rnatildi va ishlayapti!");
        console.log(\`Node.js versiyasi: \${process.version}\`);
        console.log(\`Platform: \${process.platform}\`);
        </code></pre>
      `,
      requirements: [
        "Node.js ni o'rnatish",
        "app.js faylini yaratish va ishga tushirish",
        "Natijani screenshot qilib yuborish",
      ],
    },
    3: {
      id: 2,
      title: "Node.js da HTTP server yaratish",
      description: `
        <p>Ushbu vazifada siz Node.js da oddiy HTTP server yaratishingiz kerak bo'ladi.</p>
        <p>Quyidagi qadamlarni bajaring:</p>
        <ol>
          <li>Yangi papka yarating va uni "http-server" deb nomlang</li>
          <li>Shu papka ichida "server.js" nomli fayl yarating</li>
          <li>server.js faylida HTTP server yarating</li>
          <li>Server 3000 portda ishga tushsin</li>
          <li>Server quyidagi yo'nalishlarga javob bersin:</li>
          <ul>
            <li>/ - "Bosh sahifa"</li>
            <li>/about - "Biz haqimizda"</li>
            <li>/contact - "Bog'lanish"</li>
          </ul>
          <li>Serverni ishga tushiring va brauzerda tekshiring</li>
        </ol>
      `,
      requirements: [
        "HTTP server yaratish",
        "3 ta yo'nalish uchun handler yozish",
        "Serverni ishga tushirish va brauzerda tekshirish",
        "Kodni va natijani screenshot qilib yuborish",
      ],
    },
    6: {
      id: 3,
      title: "Express.js da oddiy API yaratish",
      description: `
        <p>Ushbu vazifada siz Express.js da oddiy API yaratishingiz kerak bo'ladi.</p>
        <p>Quyidagi qadamlarni bajaring:</p>
        <ol>
          <li>Yangi papka yarating va uni "express-api" deb nomlang</li>
          <li>Shu papka ichida npm init buyrug'i orqali package.json faylini yarating</li>
          <li>Express.js ni o'rnating</li>
          <li>app.js faylini yarating</li>
          <li>Express.js da API yarating quyidagi yo'nalishlarga javob bersin:</li>
          <ul>
            <li>GET /api/users - Foydalanuvchilar ro'yxatini qaytarsin (massiv)</li>
            <li>GET /api/users/:id - Berilgan ID ga mos foydalanuvchini qaytarsin</li>
            <li>POST /api/users - Yangi foydalanuvchi qo'shsin</li>
            <li>PUT /api/users/:id - Foydalanuvchi ma'lumotlarini yangilasin</li>
            <li>DELETE /api/users/:id - Foydalanuvchini o'chirsin</li>
          </ul>
          <li>API ni Postman yoki curl orqali tekshiring</li>
        </ol>
      `,
      requirements: [
        "Express.js ni o'rnatish",
        "API yaratish",
        "Barcha yo'nalishlar uchun handler yozish",
        "API ni tekshirish",
        "Kodni va natijani screenshot qilib yuborish",
      ],
    },
  },
  2: {
    2: {
      id: 1,
      title: "React da oddiy komponent yaratish",
      description: `
        <p>Ushbu vazifada siz React da oddiy komponent yaratishingiz kerak bo'ladi.</p>
        <p>Quyidagi qadamlarni bajaring:</p>
        <ol>
          <li>create-react-app orqali yangi React loyiha yarating</li>
          <li>src papkasida components papkasini yarating</li>
          <li>components papkasida Counter.js faylini yarating</li>
          <li>Counter komponentini yarating, u quyidagi xususiyatlarga ega bo'lishi kerak:</li>
          <ul>
            <li>Boshlang'ich qiymat 0 bo'lgan count state</li>
            <li>"+" tugmasi, bosilganda count 1 ga oshadi</li>
            <li>"-" tugmasi, bosilganda count 1 ga kamayadi</li>
            <li>"Reset" tugmasi, bosilganda count 0 ga qaytadi</li>
            <li>count qiymati ko'rsatilishi kerak</li>
          </ul>
          <li>App.js faylida Counter komponentini import qiling va ko'rsating</li>
          <li>Loyihani ishga tushiring va tekshiring</li>
        </ol>
      `,
      requirements: [
        "React loyiha yaratish",
        "Counter komponentini yaratish",
        "count state ni boshqarish",
        "3 ta tugma qo'shish",
        "Loyihani ishga tushirish va tekshirish",
        "Kodni va natijani screenshot qilib yuborish",
      ],
    },
  },
}

// Get a task by lesson ID
export function getTaskByLessonId(courseId: number, lessonId: number) {
  const courseTasks = tasksData[courseId as keyof typeof tasksData]
  if (!courseTasks) return null

  return courseTasks[lessonId as keyof typeof courseTasks] || null
}
