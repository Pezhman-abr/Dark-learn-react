import { useSearchParams } from 'react-router-dom'



import MainLayout from '../layouts/MainLayout'

import courseData from '../services/api'
import Card from '../components/Card'
import styles from './Courses.module.css'
import SearchBox from '../components/SearchBox'
import { useEffect, useState } from 'react'
import GlowBall from '../components/GlowBall'
import GoToUpBtn from '../components/GoToUpBtn'

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get("category") || ""
  const sortType = searchParams.get("sort") || 'default'
  const [selectCategorys, setSelectCategorys] = useState( category ? category.split(",") : [])
useEffect(() => {
  const urlCategory = searchParams.get("category")
  if (urlCategory) {
    setSelectCategorys(urlCategory.split(","))
  } else {
    setSelectCategorys([])
  }
}, [searchParams])
  
  const categoryChangeHandler = (cat) => {
    const updated = selectCategorys.includes(cat) ? selectCategorys.filter(c => c !== cat) : [...selectCategorys, cat]

    setSelectCategorys(updated)
    setSearchParams({category: updated.join(","), sort: sortType})
  }

  const filteredCourses = courseData.filter (course => {
    if(selectCategorys.length === 0) return true
    return selectCategorys.includes(course.category)
  })


  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch(sortType) {
      case "cheap":
        return a.price - b.price
      case "expensive" :
        return b.price - a.price
      case "popular" :
        return b.studentAll - a.studentAll
      case "default" :
        return a - b
      default: 
        return 0
    }
  })


  const courseCategory = [...new Set(courseData.map(course => course.category))]

  const filterBtn = (category) => {
    setSearchParams({ category: category})
  }

  const catecoryName = [
  { label: "پی اچ پی", category: "php" },
  { label: "ارتقای مهارت", category: "upgrate" },
  { label: "فرانت اند", category: "frontend" },
  { label: "مهارت های نرم", category: "sowtware" },
  { label: "پایتون", category: "python" },
  { label: "بک اند", category: "backend" },
  { label: "امنیت", category: "security" },
]

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.courses}>
          <h1>دوره ها</h1>

          <span>{sortedCourses.length} عنوان آموزشی</span>
        </div>
        <div className={styles.searchBoxAndFilters}>
          <div><SearchBox /></div>
          <div>
            <span>مرتب سازی بر اساس:</span>
            <button className={` ${sortType === "default" ? styles.active : ""}`} onClick={() => setSearchParams({ sort: "default" })}>پیش‌فرض</button>
            <button className={` ${sortType === "cheap" ? styles.active : ""}`} onClick={() => setSearchParams({ sort: "cheap", category: selectCategorys.join(",") })}>ارزان‌ترین</button>
            <button className={` ${sortType === "expensive" ? styles.active : ""}`} onClick={() => setSearchParams({sort: "expensive", category: selectCategorys.join(",")})}>گران‌ترین</button>
            <button className={` ${sortType === "popular" ? styles.active : ""}`} onClick={() => setSearchParams({ sort: "popular", category: selectCategorys.join(",") })}>پرمخاطب‌ ها</button>
          </div>
        </div>
        <div className={styles.checkBox}>
          <div className={styles.filtered}>
            <details>
              <summary>دسته بندی</summary>
              <div className={styles.filterCat}>
                {catecoryName.map((item) => (
                  <label className={styles.cat} key={item.category} >
                <input type='checkbox' name='category' value={item.category} checked={selectCategorys.includes(item.category)} onChange={() => categoryChangeHandler(item.category)} />
                {item.label}
              </label>
                ))}
                </div>
            </details>
            
            <GlowBall color="#50ff53" location="rigth"  value='0'/>
            <GoToUpBtn />
          </div>
          <div className={styles.coursesCard}>
            {sortedCourses.map(course => (
              <Card key={course.id} course={course} />
          ))}

        </div>
        </div>

      </div>
            <GlowBall color="#507fff" location="left"  value='0'/>
    </MainLayout>
  )
}

export default Courses
