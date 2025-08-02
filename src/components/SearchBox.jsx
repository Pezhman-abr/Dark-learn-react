import { useEffect, useRef, useState } from "react";
import styles from "./SearchBox.module.css";
import { FiSearch } from "react-icons/fi";
import courseData from "../services/api";
import { Link } from "react-router-dom";



function SearchBox() {
    
    const [text , setText] = useState("")
    const [search, setSearch] = useState([])
    const modalRef = useRef(null);

    useEffect(() => {

        setSearch([])
        if(!text.trim()) {
            setSearch([]);
            return
        }
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSearch([]);  // بستن modal
            }
        }
        
        
        const Filtered = courseData.filter(course =>
            course.name.toLowerCase().includes(text.toLowerCase())
        )
        setSearch(Filtered)

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        
        
    }, [text])
    
  return (
    <>
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="جستجوی دوره..."
        onChange={e => setText(e.target.value)}
        />
      <button className={styles.searchButton}>
        <FiSearch size={18} />
      </button>
    </div>
    {text && search.length > 0 && 


    <div ref={modalRef} className={styles.searchModal}>
        <ul>
            {search.map(course => (
                <li className={styles.listItem} key={course.id}><Link to={`/courseinfo?id=${course.id}`}>{course.name}</Link></li>
            ))}
        </ul>

    </div>}
     
        </>
  );
}

export default SearchBox