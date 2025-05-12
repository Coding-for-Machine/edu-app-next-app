"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CourseFiltersProps {
  onFilterChange: (filters: any) => void
  activeFilters: any
}

export default function CourseFilters({ onFilterChange, activeFilters }: CourseFiltersProps) {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    levels: [] as string[],
    priceRange: [0, 100] as [number, number],
    ratings: [] as number[],
    languages: [] as string[],
    freeOnly: false,
  })

  useEffect(() => {
    if (activeFilters) {
      setFilters((prev) => ({
        ...prev,
        ...activeFilters,
      }))
    }
  }, [activeFilters])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setFilters((prev) => {
      const newCategories = checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter((id) => id !== categoryId)

      return {
        ...prev,
        categories: newCategories,
      }
    })
  }

  const handleLevelChange = (levelId: string, checked: boolean) => {
    setFilters((prev) => {
      const newLevels = checked ? [...prev.levels, levelId] : prev.levels.filter((id) => id !== levelId)

      return {
        ...prev,
        levels: newLevels,
      }
    })
  }

  const handleRatingChange = (rating: number, checked: boolean) => {
    setFilters((prev) => {
      const newRatings = checked ? [...prev.ratings, rating] : prev.ratings.filter((r) => r !== rating)

      return {
        ...prev,
        ratings: newRatings,
      }
    })
  }

  const handleLanguageChange = (languageId: string, checked: boolean) => {
    setFilters((prev) => {
      const newLanguages = checked ? [...prev.languages, languageId] : prev.languages.filter((id) => id !== languageId)

      return {
        ...prev,
        languages: newLanguages,
      }
    })
  }

  const handleFreeOnlyChange = (checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      freeOnly: checked,
      priceRange: checked ? [0, 0] : [0, 100],
    }))
  }

  const handleApplyFilters = () => {
    onFilterChange(filters)
  }

  const handleClearFilters = () => {
    const resetFilters = {
      categories: [],
      levels: [],
      priceRange: [0, 100],
      ratings: [],
      languages: [],
      freeOnly: false,
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-lg shadow-sm p-6"
    >
      <motion.h2 variants={itemVariants} className="text-xl font-bold mb-6">
        Filtrlar
      </motion.h2>

      <Accordion type="multiple" defaultValue={["category", "level", "price", "rating"]}>
        <motion.div variants={itemVariants}>
          <AccordionItem value="category">
            <AccordionTrigger className="text-lg font-medium">Kategoriya</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={filters.categories.includes(category.id)}
                      onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                    />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem value="level">
            <AccordionTrigger className="text-lg font-medium">Daraja</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {levels.map((level) => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`level-${level.id}`}
                      checked={filters.levels.includes(level.id)}
                      onCheckedChange={(checked) => handleLevelChange(level.id, checked as boolean)}
                    />
                    <Label htmlFor={`level-${level.id}`}>{level.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem value="price">
            <AccordionTrigger className="text-lg font-medium">Narx</AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 px-2">
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value as [number, number] }))}
                  disabled={filters.freeOnly}
                  className="mb-6"
                />
                <div className="flex justify-between text-sm">
                  <span>{filters.priceRange[0]} USD</span>
                  <span>{filters.priceRange[1]} USD</span>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox
                    id="free-courses"
                    checked={filters.freeOnly}
                    onCheckedChange={(checked) => handleFreeOnlyChange(checked as boolean)}
                  />
                  <Label htmlFor="free-courses">Faqat bepul kurslar</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem value="rating">
            <AccordionTrigger className="text-lg font-medium">Reyting</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {ratings.map((rating) => (
                  <div key={rating.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rating-${rating.value}`}
                      checked={filters.ratings.includes(rating.value)}
                      onCheckedChange={(checked) => handleRatingChange(rating.value, checked as boolean)}
                    />
                    <Label htmlFor={`rating-${rating.value}`}>{rating.label}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem value="language">
            <AccordionTrigger className="text-lg font-medium">Til</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {languages.map((language) => (
                  <div key={language.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language.id}`}
                      checked={filters.languages.includes(language.id)}
                      onCheckedChange={(checked) => handleLanguageChange(language.id, checked as boolean)}
                    />
                    <Label htmlFor={`language-${language.id}`}>{language.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      </Accordion>

      <motion.div variants={itemVariants} className="mt-8 space-y-4">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button className="w-full" onClick={handleApplyFilters}>
            Qo'llash
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button variant="outline" className="w-full" onClick={handleClearFilters}>
            Tozalash
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Sample data
const categories = [
  { id: "programming", name: "Dasturlash" },
  { id: "design", name: "Dizayn" },
  { id: "business", name: "Biznes" },
  { id: "marketing", name: "Marketing" },
  { id: "language", name: "Tillar" },
]

const levels = [
  { id: "beginner", name: "Boshlang'ich" },
  { id: "intermediate", name: "O'rta" },
  { id: "advanced", name: "Yuqori" },
]

const ratings = [
  { value: 4.5, label: "4.5 & undan yuqori" },
  { value: 4.0, label: "4.0 & undan yuqori" },
  { value: 3.5, label: "3.5 & undan yuqori" },
  { value: 3.0, label: "3.0 & undan yuqori" },
]

const languages = [
  { id: "uz", name: "O'zbek" },
  { id: "ru", name: "Rus" },
  { id: "en", name: "Ingliz" },
  { id: "tr", name: "Turk" },
]
