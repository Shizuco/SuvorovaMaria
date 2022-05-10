import { useState, useEffect, Children, cloneElement } from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import './Carousel.css';

export const Carousel = ({children}) =>{

    const [pages,setPages] = useState([])
    const [offset, setOffset] = useState(0)
    const PAGEWIDTH = 300;
    const handleLeftArrowClick =() =>{
        setOffset((currentOffset) =>{
            const newOffset = currentOffset + PAGEWIDTH;
            return Math.min(newOffset, 0);
        })
    }
    const handleRightArrowClick =() =>{
        setOffset((currentOffset) =>{
            const newOffset = currentOffset - PAGEWIDTH;
            const maxOffset = -PAGEWIDTH * (pages.length - 1);
            return Math.max(newOffset,maxOffset);
        })
    }
    useEffect(()=>{
        setPages(
            Children.map(children, child =>{
                return cloneElement(child, {
                    style:{
                        height: '100%',
                        minWidth: `${PAGEWIDTH}px`,
                        maxWidth: `${PAGEWIDTH}px`
                    }
                })
            })
        )
    },[])
    return(
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
            <div className="window">
                <div className="all-pages-container"
                style={{
                    transform: `translateX(${offset}px)`
                }}>

                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
        </div>
    )
}