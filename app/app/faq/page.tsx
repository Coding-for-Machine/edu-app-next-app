import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "FAQ | 42.uz Clone",
  description: "42.uz platformasi haqida tez-tez so'raladigan savollar",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tez-tez so&apos;raladigan savollar</h1>
            <p className="text-lg mb-6">42.uz platformasi haqida eng ko&apos;p so&apos;raladigan savollarga javoblar</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="general" className="space-y-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="general">Umumiy</TabsTrigger>
            <TabsTrigger value="courses">Kurslar</TabsTrigger>
            <TabsTrigger value="payment">To&apos;lov</TabsTrigger>
            <TabsTrigger value="technical">Texnik</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  42.uz platformasi nima?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  42.uz - bu zamonaviy kasblarni o&apos;rganish va IT sohasida o&apos;z o&apos;rnini topish uchun
                  mo&apos;ljallangan ta&apos;lim platformasi. Platformada dasturlash, dizayn, marketing va boshqa
                  sohalarga oid kurslar mavjud.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Platformadan qanday foydalanish mumkin?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Platformadan foydalanish uchun ro&apos;yxatdan o&apos;tishingiz kerak. Ro&apos;yxatdan o&apos;tgandan
                  so&apos;ng, siz kurslarni sotib olishingiz, jonli darslarda qatnashishingiz va musobaqalarda ishtirok
                  etishingiz mumkin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Platformada qanday kurslar mavjud?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Platformada backend va frontend dasturlash, mobil dasturlash, UX/UI dizayn, grafik dizayn va boshqa
                  ko&apos;plab sohalarga oid kurslar mavjud. Barcha kurslar tajribali mutaxassislar tomonidan
                  tayyorlangan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Platformada o&apos;qish uchun qanday talablar mavjud?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Platformada o&apos;qish uchun maxsus talablar yo&apos;q. Siz istalgan kursni tanlashingiz va
                  o&apos;rganishni boshlashingiz mumkin. Lekin ba&apos;zi kurslar uchun oldindan bilim talab qilinishi
                  mumkin, bu haqda kurs tavsifida ko&apos;rsatilgan bo&apos;ladi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslarni qanday sotib olish mumkin?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Kurslarni sotib olish uchun kurs sahifasiga o&apos;ting va &quot;Kursni sotib olish&quot; tugmasini
                  bosing. Keyin to&apos;lov ma&apos;lumotlarini kiriting va to&apos;lovni amalga oshiring.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslarni tugatgandan so&apos;ng sertifikat olish mumkinmi?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ha, barcha kurslarni muvaffaqiyatli tugatgandan so&apos;ng siz sertifikat olasiz. Sertifikatni yuklab
                  olishingiz va ijtimoiy tarmoqlarda ulashishingiz mumkin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslar qancha vaqt davom etadi?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Har bir kursning davomiyligi turlicha. Ba&apos;zi kurslar bir necha soat davom etsa, ba&apos;zilari
                  bir necha oy davom etishi mumkin. Kurs davomiyligi kurs tavsifida ko&apos;rsatilgan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslarni o&apos;rganish uchun qancha vaqt ajratishim kerak?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Bu sizning o&apos;rganish tezligingizga bog&apos;liq. Lekin har bir kurs uchun haftada kamida 5-10
                  soat vaqt ajratish tavsiya etiladi. Shunda siz kursni samarali o&apos;zlashtirasiz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4">
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Qanday to&apos;lov usullari mavjud?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Platformada bank kartalari, elektron hamyonlar va mobil to&apos;lov tizimlari orqali to&apos;lov
                  qilish mumkin. Barcha to&apos;lovlar xavfsiz va himoyalangan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslarni bo&apos;lib to&apos;lash mumkinmi?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ha, ba&apos;zi kurslarni bo&apos;lib to&apos;lash imkoniyati mavjud. Bu haqda kurs sahifasida
                  ma&apos;lumot berilgan bo&apos;ladi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kursni sotib olgandan so&apos;ng qaytarib olish mumkinmi?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ha, kursni sotib olgandan so&apos;ng 7 kun ichida qaytarib olish mumkin, agar siz kursning 30% dan
                  ko&apos;p qismini o&apos;rganmagan bo&apos;lsangiz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslar uchun chegirmalar mavjudmi?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ha, vaqti-vaqti bilan platformada turli aksiyalar va chegirmalar o&apos;tkaziladi. Bundan tashqari,
                  bir nechta kurslarni birga sotib olsangiz, chegirma olishingiz mumkin.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4">
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Platformadan qaysi qurilmalarda foydalanish mumkin?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Platformadan kompyuter, planshet va smartfonlar orqali foydalanish mumkin. Platforma barcha zamonaviy
                  brauzerlar bilan ishlaydi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Platformada texnik muammolar yuzaga kelsa, kimga murojaat qilish kerak?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Texnik muammolar yuzaga kelsa, support@42.uz elektron pochta manziliga murojaat qilishingiz yoki
                  platformadagi &quot;Yordam&quot; bo&apos;limiga o&apos;tishingiz mumkin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Kurslarni oflayn ko&apos;rish mumkinmi?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ha, ko&apos;pchilik kurslarni oflayn ko&apos;rish uchun yuklab olish imkoniyati mavjud. Lekin bu
                  imkoniyat barcha kurslarda ham bo&apos;lmasligi mumkin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Platformada qanday tezlikdagi internet kerak?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Platformadan foydalanish uchun o&apos;rtacha tezlikdagi internet yetarli. Video darslarni ko&apos;rish
                  uchun kamida 2 Mbps tezlikdagi internet tavsiya etiladi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Savolingizga javob topa olmadingizmi?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Bizga savolingizni yuboring va biz tez orada javob beramiz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-900 hover:bg-gray-800">Bizga yozing</Button>
            <Button variant="outline">Qo&apos;llab-quvvatlash xizmatiga murojaat qiling</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
