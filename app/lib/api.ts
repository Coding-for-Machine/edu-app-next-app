export async function fetchFeaturedCourses() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "1",
      title: "Web Dasturlash Asoslari",
      shortDescription: "HTML, CSS va JavaScript asoslarini o'rganing va zamonaviy veb-saytlar yarating",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dasturlash",
      level: "Boshlang'ich",
      duration: "8 hafta",
      studentsCount: 1245,
      rating: 4.8,
      reviewsCount: 156,
      featured: true,
    },
    {
      id: "2",
      title: "Python dasturlash tili",
      shortDescription: "Python dasturlash tilini o'rganing va data science, AI va veb-dasturlash sohasida ishlang",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dasturlash",
      level: "Boshlang'ich",
      duration: "10 hafta",
      studentsCount: 980,
      rating: 4.7,
      reviewsCount: 124,
      featured: true,
    },
    {
      id: "3",
      title: "UI/UX Dizayn asoslari",
      shortDescription: "Zamonaviy interfeys dizaynini o'rganing va foydalanuvchi tajribasini yaxshilang",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dizayn",
      level: "O'rta",
      duration: "6 hafta",
      studentsCount: 750,
      rating: 4.9,
      reviewsCount: 98,
      featured: true,
    },
  ]
}

export async function fetchCourseStructure() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    chapters: [
      {
        id: "1",
        title: "HTML asoslari",
        lessons: [
          { id: "1", title: "HTML haqida umumiy ma'lumot", completed: true },
          { id: "2", title: "HTML teglar va elementlar", completed: true },
          { id: "3", title: "HTML formalar", completed: false },
        ],
        tests: [{ id: "1", title: "HTML asoslari testi", completed: false }],
        assignments: [{ id: "1", title: "Oddiy veb-sahifa yaratish", completed: false }],
      },
      {
        id: "2",
        title: "CSS asoslari",
        lessons: [
          { id: "4", title: "CSS haqida umumiy ma'lumot", completed: false },
          { id: "5", title: "CSS selektorlar", completed: false },
          { id: "6", title: "CSS box model", completed: false },
        ],
        tests: [{ id: "2", title: "CSS asoslari testi", completed: false }],
        assignments: [{ id: "2", title: "Veb-sahifani stilizatsiya qilish", completed: false }],
      },
      {
        id: "3",
        title: "JavaScript asoslari",
        lessons: [
          { id: "7", title: "JavaScript haqida umumiy ma'lumot", completed: false },
          { id: "8", title: "O'zgaruvchilar va ma'lumot turlari", completed: false },
          { id: "9", title: "Funksiyalar va hodisalar", completed: false },
        ],
        tests: [{ id: "3", title: "JavaScript asoslari testi", completed: false }],
        assignments: [{ id: "3", title: "Interaktiv veb-sahifa yaratish", completed: false }],
      },
    ],
  }
}

export async function fetchAllCourses() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 700))

  return [
    {
      id: "1",
      title: "Web Dasturlash Asoslari",
      shortDescription: "HTML, CSS va JavaScript asoslarini o'rganing va zamonaviy veb-saytlar yarating",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dasturlash",
      level: "Boshlang'ich",
      duration: "8 hafta",
      studentsCount: 1245,
      rating: 4.8,
      reviewsCount: 156,
      featured: true,
    },
    {
      id: "2",
      title: "Python dasturlash tili",
      shortDescription: "Python dasturlash tilini o'rganing va data science, AI va veb-dasturlash sohasida ishlang",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dasturlash",
      level: "Boshlang'ich",
      duration: "10 hafta",
      studentsCount: 980,
      rating: 4.7,
      reviewsCount: 124,
      featured: true,
    },
    {
      id: "3",
      title: "UI/UX Dizayn asoslari",
      shortDescription: "Zamonaviy interfeys dizaynini o'rganing va foydalanuvchi tajribasini yaxshilang",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dizayn",
      level: "O'rta",
      duration: "6 hafta",
      studentsCount: 750,
      rating: 4.9,
      reviewsCount: 98,
      featured: true,
    },
    {
      id: "4",
      title: "Mobile dasturlash: React Native",
      shortDescription: "React Native yordamida iOS va Android uchun mobil ilovalar yarating",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dasturlash",
      level: "O'rta",
      duration: "12 hafta",
      studentsCount: 620,
      rating: 4.6,
      reviewsCount: 85,
      featured: false,
    },
    {
      id: "5",
      title: "Digital Marketing",
      shortDescription: "Zamonaviy raqamli marketing strategiyalarini o'rganing va biznesni rivojlantiring",
      image: "/placeholder.svg?height=200&width=400",
      category: "Marketing",
      level: "Boshlang'ich",
      duration: "6 hafta",
      studentsCount: 890,
      rating: 4.5,
      reviewsCount: 110,
      featured: false,
    },
    {
      id: "6",
      title: "Grafik dizayn asoslari",
      shortDescription: "Adobe Photoshop va Illustrator dasturlarida ishlashni o'rganing",
      image: "/placeholder.svg?height=200&width=400",
      category: "Dizayn",
      level: "Boshlang'ich",
      duration: "8 hafta",
      studentsCount: 720,
      rating: 4.7,
      reviewsCount: 95,
      featured: false,
    },
  ]
}

export async function fetchCourseDetails(courseId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Sample course details
  return {
    id: courseId,
    title: "Web Dasturlash Asoslari",
    description:
      "Bu kursda siz HTML, CSS va JavaScript asoslarini o'rganasiz. Kurs davomida zamonaviy veb-saytlar yaratish uchun zarur bo'lgan barcha ko'nikmalarni egallaysiz. Amaliy mashg'ulotlar orqali o'z bilimlaringizni mustahkamlaysiz va portfolio uchun loyihalar yaratishni o'rganasiz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Dasturlash",
    level: "Boshlang'ich",
    language: "O'zbek",
    duration: "8 hafta",
    studentsCount: 1245,
    rating: 4.8,
    reviewsCount: 156,
    modulesCount: 5,
    certificate: true,
    updatedAt: "2023-12-15",
    instructor: {
      id: "1",
      name: "Alisher Isaev",
      title: "Senior Web Developer",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "10 yillik tajribaga ega web dasturchi. 100+ loyihalarni muvaffaqiyatli amalga oshirgan. 1000+ o'quvchilarga ta'lim bergan.",
    },
    modules: [
      {
        id: "1",
        title: "HTML asoslari",
        description: "HTML tili asoslari, teglar, atributlar va veb-sahifa strukturasi",
        completed: true,
        lessons: [
          { id: "1", title: "HTML haqida umumiy ma'lumot", completed: true },
          { id: "2", title: "HTML teglar va elementlar", completed: true },
          { id: "3", title: "HTML formalar", completed: false },
        ],
        tests: [{ id: "1", title: "HTML asoslari testi", completed: false }],
        tasks: [{ id: "1", title: "Oddiy veb-sahifa yaratish", completed: false }],
      },
      {
        id: "2",
        title: "CSS asoslari",
        description: "CSS yordamida veb-sahifalarni stilizatsiya qilish",
        completed: false,
        lessons: [
          { id: "4", title: "CSS haqida umumiy ma'lumot", completed: false },
          { id: "5", title: "CSS selektorlar", completed: false },
          { id: "6", title: "CSS box model", completed: false },
        ],
        tests: [{ id: "2", title: "CSS asoslari testi", completed: false }],
        tasks: [{ id: "2", title: "Veb-sahifani stilizatsiya qilish", completed: false }],
      },
      {
        id: "3",
        title: "JavaScript asoslari",
        description: "JavaScript dasturlash tili asoslari va DOM bilan ishlash",
        completed: false,
        lessons: [
          { id: "7", title: "JavaScript haqida umumiy ma'lumot", completed: false },
          { id: "8", title: "O'zgaruvchilar va ma'lumot turlari", completed: false },
          { id: "9", title: "Funksiyalar va hodisalar", completed: false },
        ],
        tests: [{ id: "3", title: "JavaScript asoslari testi", completed: false }],
        tasks: [{ id: "3", title: "Interaktiv veb-sahifa yaratish", completed: false }],
      },
    ],
  }
}

export async function fetchModuleDetails(courseId: string, moduleId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 600))

  // Sample module details
  const modules = {
    "1": {
      id: "1",
      title: "HTML asoslari",
      description: "HTML tili asoslari, teglar, atributlar va veb-sahifa strukturasi",
      completed: true,
      lessons: [
        { id: "1", title: "HTML haqida umumiy ma'lumot", completed: true },
        { id: "2", title: "HTML teglar va elementlar", completed: true },
        { id: "3", title: "HTML formalar", completed: false },
      ],
      tests: [{ id: "1", title: "HTML asoslari testi", completed: false }],
      tasks: [{ id: "1", title: "Oddiy veb-sahifa yaratish", completed: false }],
    },
    "2": {
      id: "2",
      title: "CSS asoslari",
      description: "CSS yordamida veb-sahifalarni stilizatsiya qilish",
      completed: false,
      lessons: [
        { id: "4", title: "CSS haqida umumiy ma'lumot", completed: false },
        { id: "5", title: "CSS selektorlar", completed: false },
        { id: "6", title: "CSS box model", completed: false },
      ],
      tests: [{ id: "2", title: "CSS asoslari testi", completed: false }],
      tasks: [{ id: "2", title: "Veb-sahifani stilizatsiya qilish", completed: false }],
    },
    "3": {
      id: "3",
      title: "JavaScript asoslari",
      description: "JavaScript dasturlash tili asoslari va DOM bilan ishlash",
      completed: false,
      lessons: [
        { id: "7", title: "JavaScript haqida umumiy ma'lumot", completed: false },
        { id: "8", title: "O'zgaruvchilar va ma'lumot turlari", completed: false },
        { id: "9", title: "Funksiyalar va hodisalar", completed: false },
      ],
      tests: [{ id: "3", title: "JavaScript asoslari testi", completed: false }],
      tasks: [{ id: "3", title: "Interaktiv veb-sahifa yaratish", completed: false }],
    },
  }

  return (
    modules[moduleId as keyof typeof modules] || {
      id: moduleId,
      title: "Module not found",
      description: "",
      completed: false,
      lessons: [],
      tests: [],
      tasks: [],
    }
  )
}

export async function fetchLessonContent(courseId: string, moduleId: string, lessonId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 700))

  // Sample lesson content
  const lessons = {
    "1": {
      id: "1",
      title: "HTML haqida umumiy ma'lumot",
      content: `
        <h2>HTML nima?</h2>
        <p>HTML (HyperText Markup Language) - veb-sahifalarni yaratish uchun ishlatiladigan standart belgilash tili hisoblanadi. HTML yordamida veb-sahifaning tuzilishi va mazmunini belgilash mumkin.</p>
        
        <h3>HTML tarixi</h3>
        <p>HTML 1990-yilda Tim Berners-Lee tomonidan yaratilgan va vaqt o'tishi bilan rivojlanib borgan. Hozirgi kunda HTML5 versiyasi keng qo'llaniladi.</p>
        
        <h3>HTML hujjat tuzilishi</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Sahifa sarlavhasi&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Salom, dunyo!&lt;/h1&gt;
    &lt;p&gt;Bu mening birinchi veb-sahifam.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      `,
      completed: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      images: [
        {
          url: "/placeholder.svg?height=300&width=500",
          caption: "HTML hujjat tuzilishi",
        },
        {
          url: "/placeholder.svg?height=300&width=500",
          caption: "HTML elementlar",
        },
      ],
      attachments: [
        {
          title: "HTML qo'llanma",
          url: "#",
          type: "PDF",
          size: "2.5 MB",
        },
        {
          title: "HTML misollar",
          url: "#",
          type: "ZIP",
          size: "1.2 MB",
        },
      ],
    },
    "2": {
      id: "2",
      title: "HTML teglar va elementlar",
      content: `
        <h2>HTML teglar</h2>
        <p>HTML teglari veb-sahifaning turli elementlarini belgilash uchun ishlatiladi. Teglar &lt; va &gt; belgilari orasida yoziladi.</p>
        
        <h3>Eng ko'p ishlatiladigan HTML teglar</h3>
        <ul>
          <li><strong>&lt;h1&gt; - &lt;h6&gt;</strong>: Sarlavhalar</li>
          <li><strong>&lt;p&gt;</strong>: Paragraf</li>
          <li><strong>&lt;a&gt;</strong>: Havola</li>
          <li><strong>&lt;img&gt;</strong>: Rasm</li>
          <li><strong>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</strong>: Ro'yxatlar</li>
          <li><strong>&lt;div&gt;</strong>: Konteyner</li>
          <li><strong>&lt;span&gt;</strong>: Inline konteyner</li>
        </ul>
        
        <h3>HTML atributlari</h3>
        <p>HTML teglari atributlar bilan kengaytirilishi mumkin. Atributlar qo'shimcha ma'lumotlarni belgilaydi.</p>
        <pre><code>&lt;a href="https://example.com"&gt;Havola&lt;/a&gt;
&lt;img src="rasm.jpg" alt="Rasm tavsifi" width="300" height="200"&gt;</code></pre>
      `,
      completed: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      images: [
        {
          url: "/placeholder.svg?height=300&width=500",
          caption: "HTML teglar",
        },
      ],
      attachments: [
        {
          title: "HTML teglar ro'yxati",
          url: "#",
          type: "PDF",
          size: "1.8 MB",
        },
      ],
    },
    "3": {
      id: "3",
      title: "HTML formalar",
      content: `
        <h2>HTML formalar</h2>
        <p>HTML formalar foydalanuvchilardan ma'lumot yig'ish uchun ishlatiladi. Formalar &lt;form&gt; tegi ichida yaratiladi va turli kiritish elementlarini o'z ichiga oladi.</p>
        
        <h3>Form elementlari</h3>
        <ul>
          <li><strong>&lt;input&gt;</strong>: Kiritish maydoni (matn, parol, checkbox, radio va boshqalar)</li>
          <li><strong>&lt;textarea&gt;</strong>: Ko'p qatorli matn maydoni</li>
          <li><strong>&lt;select&gt; va &lt;option&gt;</strong>: Tanlash ro'yxati</li>
          <li><strong>&lt;button&gt;</strong>: Tugma</li>
          <li><strong>&lt;label&gt;</strong>: Yorliq</li>
        </ul>
        
        <h3>Form misoli</h3>
        <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Ism:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;label for="message"&gt;Xabar:&lt;/label&gt;
  &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
  
  &lt;button type="submit"&gt;Yuborish&lt;/button&gt;
&lt;/form&gt;</code></pre>
      `,
      completed: false,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      images: [
        {
          url: "/placeholder.svg?height=300&width=500",
          caption: "HTML forma elementlari",
        },
      ],
      attachments: [
        {
          title: "HTML formalar bo'yicha qo'llanma",
          url: "#",
          type: "PDF",
          size: "3.2 MB",
        },
      ],
    },
  }

  return (
    lessons[lessonId as keyof typeof lessons] || {
      id: lessonId,
      title: "Lesson not found",
      content: "<p>Lesson content not found.</p>",
      completed: false,
    }
  )
}

export async function fetchTestContent(courseId: string, moduleId: string, testId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 600))

  // Sample test content
  const tests = {
    "1": {
      id: "1",
      title: "HTML asoslari testi",
      description: "Bu test HTML asoslari bo'yicha bilimlaringizni tekshirish uchun mo'ljallangan.",
      questions: [
        {
          id: "q1",
          text: "HTML qisqartmasining to'liq ma'nosi nima?",
          type: "single-choice",
          options: [
            { id: "a", text: "Hyper Text Markup Language" },
            { id: "b", text: "High Tech Modern Language" },
            { id: "c", text: "Hyper Transfer Markup Language" },
            { id: "d", text: "Home Tool Markup Language" },
          ],
          correctAnswer: "a",
        },
        {
          id: "q2",
          text: "Qaysi teg veb-sahifaning asosiy mazmunini o'z ichiga oladi?",
          type: "single-choice",
          options: [
            { id: "a", text: "<head>" },
            { id: "b", text: "<title>" },
            { id: "c", text: "<body>" },
            { id: "d", text: "<html>" },
          ],
          correctAnswer: "c",
        },
        {
          id: "q3",
          text: "Quyidagi teglardan qaysilari to'g'ri yopilishi kerak? (Barcha to'g'ri javoblarni tanlang)",
          type: "multi-choice",
          options: [
            { id: "a", text: "<p>" },
            { id: "b", text: "<img>" },
            { id: "c", text: "<div>" },
            { id: "d", text: "<br>" },
          ],
          correctAnswer: ["a", "c"],
        },
        {
          id: "q4",
          text: "HTML5 doctype deklaratsiyasini yozing:",
          type: "text-input",
          correctAnswer: "<!DOCTYPE html>",
        },
      ],
    },
    "2": {
      id: "2",
      title: "CSS asoslari testi",
      description: "Bu test CSS asoslari bo'yicha bilimlaringizni tekshirish uchun mo'ljallangan.",
      questions: [
        {
          id: "q1",
          text: "CSS qisqartmasining to'liq ma'nosi nima?",
          type: "single-choice",
          options: [
            { id: "a", text: "Creative Style Sheets" },
            { id: "b", text: "Cascading Style Sheets" },
            { id: "c", text: "Computer Style Sheets" },
            { id: "d", text: "Colorful Style Sheets" },
          ],
          correctAnswer: "b",
        },
        {
          id: "q2",
          text: "CSS-da fon rangini o'zgartirish uchun qaysi xususiyat ishlatiladi?",
          type: "single-choice",
          options: [
            { id: "a", text: "color" },
            { id: "b", text: "bgcolor" },
            { id: "c", text: "background-color" },
            { id: "d", text: "font-color" },
          ],
          correctAnswer: "c",
        },
      ],
    },
  }

  return (
    tests[testId as keyof typeof tests] || {
      id: testId,
      title: "Test not found",
      description: "",
      questions: [],
    }
  )
}

export async function fetchTaskContent(courseId: string, moduleId: string, taskId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Sample task content
  const tasks = {
    "1": {
      id: "1",
      title: "Oddiy veb-sahifa yaratish",
      description: `
        <h2>Vazifa tavsifi</h2>
        <p>Ushbu vazifada siz HTML asoslaridan foydalanib oddiy veb-sahifa yaratishingiz kerak.</p>
        
        <h3>Talablar:</h3>
        <ul>
          <li>HTML5 doctype deklaratsiyasidan foydalaning</li>
          <li>Sahifada sarlavha, paragraflar, ro'yxatlar va kamida bitta rasm bo'lishi kerak</li>
          <li>Kamida ikkita havola qo'shing (ichki va tashqi)</li>
          <li>Sahifani mantiqiy bo'limlarga ajrating</li>
        </ul>
        
        <h3>Baholash mezonlari:</h3>
        <ol>
          <li>HTML kodining to'g'riligi va tozaligi</li>
          <li>Barcha talablarning bajarilishi</li>
          <li>Sahifa tuzilishining mantiqiyligi</li>
        </ol>
        
        <h3>Topshirish tartibi:</h3>
        <p>HTML faylni yuklang yoki kodingizni pastdagi maydonchaga joylashtiring.</p>
      `,
      dueDate: "2025-06-15T23:59:59Z",
      completed: false,
    },
    "2": {
      id: "2",
      title: "Veb-sahifani stilizatsiya qilish",
      description: `
        <h2>Vazifa tavsifi</h2>
        <p>Ushbu vazifada siz avvalgi vazifada yaratgan HTML sahifangizni CSS yordamida stilizatsiya qilishingiz kerak.</p>
        
        <h3>Talablar:</h3>
        <ul>
          <li>Tashqi CSS faylidan foydalaning</li>
          <li>Kamida 5 ta turli CSS selektorlardan foydalaning</li>
          <li>Sahifani responsive (moslashuvchan) qiling</li>
          <li>Ranglar, shriftlar va joylashuvni o'zgartiring</li>
        </ul>
        
        <h3>Baholash mezonlari:</h3>
        <ol>
          <li>CSS kodining to'g'riligi va tozaligi</li>
          <li>Dizayn sifati va foydalanuvchi tajribasi</li>
          <li>Responsivlik</li>
        </ol>
        
        <h3>Topshirish tartibi:</h3>
        <p>HTML va CSS fayllarini yuklang yoki kodingizni pastdagi maydonchaga joylashtiring.</p>
      `,
      dueDate: "2025-06-30T23:59:59Z",
      completed: false,
    },
  }

  return (
    tasks[taskId as keyof typeof tasks] || {
      id: taskId,
      title: "Task not found",
      description: "<p>Task description not found.</p>",
      dueDate: null,
      completed: false,
    }
  )
}

export async function fetchAssignmentContent(chapterId: string, assignmentId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Sample assignment content
  const assignments = {
    "1": {
      id: "1",
      title: "Oddiy veb-sahifa yaratish",
      description: `
        <h2>Vazifa tavsifi</h2>
        <p>Ushbu vazifada siz HTML asoslaridan foydalanib oddiy veb-sahifa yaratishingiz kerak.</p>
        
        <h3>Talablar:</h3>
        <ul>
          <li>HTML5 doctype deklaratsiyasidan foydalaning</li>
          <li>Sahifada sarlavha, paragraflar, ro'yxatlar va kamida bitta rasm bo'lishi kerak</li>
          <li>Kamida ikkita havola qo'shing (ichki va tashqi)</li>
          <li>Sahifani mantiqiy bo'limlarga ajrating</li>
        </ul>
        
        <h3>Baholash mezonlari:</h3>
        <ol>
          <li>HTML kodining to'g'riligi va tozaligi</li>
          <li>Barcha talablarning bajarilishi</li>
          <li>Sahifa tuzilishining mantiqiyligi</li>
        </ol>
        
        <h3>Topshirish tartibi:</h3>
        <p>HTML faylni yuklang yoki kodingizni pastdagi maydonchaga joylashtiring.</p>
      `,
      dueDate: "2025-06-15T23:59:59Z",
      completed: false,
    },
    "2": {
      id: "2",
      title: "Veb-sahifani stilizatsiya qilish",
      description: `
        <h2>Vazifa tavsifi</h2>
        <p>Ushbu vazifada siz avvalgi vazifada yaratgan HTML sahifangizni CSS yordamida stilizatsiya qilishingiz kerak.</p>
        
        <h3>Talablar:</h3>
        <ul>
          <li>Tashqi CSS faylidan foydalaning</li>
          <li>Kamida 5 ta turli CSS selektorlardan foydalaning</li>
          <li>Sahifani responsive (moslashuvchan) qiling</li>
          <li>Ranglar, shriftlar va joylashuvni o'zgartiring</li>
        </ul>
        
        <h3>Baholash mezonlari:</h3>
        <ol>
          <li>CSS kodining to'g'riligi va tozaligi</li>
          <li>Dizayn sifati va foydalanuvchi tajribasi</li>
          <li>Responsivlik</li>
        </ol>
        
        <h3>Topshirish tartibi:</h3>
        <p>HTML va CSS fayllarini yuklang yoki kodingizni pastdagi maydonchaga joylashtiring.</p>
      `,
      dueDate: "2025-06-30T23:59:59Z",
      completed: false,
    },
    "3": {
      id: "3",
      title: "Interaktiv veb-sahifa yaratish",
      description: `
        <h2>Vazifa tavsifi</h2>
        <p>Ushbu vazifada siz JavaScript yordamida interaktiv veb-sahifa yaratishingiz kerak.</p>
        
        <h3>Talablar:</h3>
        <ul>
          <li>HTML, CSS va JavaScript fayllaridan foydalaning</li>
          <li>Kamida 3 ta interaktiv element qo'shing (tugmalar, formalar, animatsiyalar)</li>
          <li>DOM manipulyatsiyasidan foydalaning</li>
          <li>Event listener'lardan foydalaning</li>
        </ul>
        
        <h3>Baholash mezonlari:</h3>
        <ol>
          <li>JavaScript kodining to'g'riligi va tozaligi</li>
          <li>Interaktivlik darajasi</li>
          <li>Foydalanuvchi tajribasi</li>
        </ol>
        
        <h3>Topshirish tartibi:</h3>
        <p>HTML, CSS va JavaScript fayllarini yuklang yoki kodingizni pastdagi maydonchaga joylashtiring.</p>
      `,
      dueDate: "2025-07-15T23:59:59Z",
      completed: false,
    },
  }

  return (
    assignments[assignmentId as keyof typeof assignments] || {
      id: assignmentId,
      title: "Assignment",
      description: "<p>Assignment details not found.</p>",
      dueDate: null,
      completed: false,
    }
  )
}

export async function markLessonComplete(lessonId: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 800))

  // In a real app, this would update the database
  return { success: true }
}

export async function submitTest(testId: string, answers: Record<string, any>) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // In a real app, this would validate answers against correct answers in the database
  // For demo purposes, we'll return a mock result
  return {
    score: 3,
    feedback: {
      q1: "To'g'ri! HTML - Hyper Text Markup Language.",
      q2: "To'g'ri! <body> tegi veb-sahifaning asosiy mazmunini o'z ichiga oladi.",
      q3: "Qisman to'g'ri. <p> va <div> teglari yopilishi kerak, <img> va <br> teglari o'z-o'zidan yopiladigan teglardir.",
      q4: "To'g'ri! HTML5 doctype deklaratsiyasi <!DOCTYPE html> ko'rinishida bo'ladi.",
    },
  }
}

export async function submitTask(taskId: string, formData: FormData) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, this would save the submission to the database
  return {
    success: true,
    feedback: "Vazifangiz qabul qilindi. Tez orada tekshirilib, natija e'lon qilinadi.",
  }
}

export async function submitAssignment(assignmentId: string, formData: FormData) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, this would save the submission to the database
  return {
    success: true,
    feedback: "Vazifangiz qabul qilindi. Tez orada tekshirilib, natija e'lon qilinadi.",
  }
}
