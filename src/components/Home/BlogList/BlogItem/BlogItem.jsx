import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../common/Chip/Chip'
import './blogitem.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const BlogItem = ({ blog: { id, description, title, createdAt, authourName, authorAvatar, category, cover } }) => {
    return (
        <div className='blogItem-wrap'>
            <img src={cover} alt='cover' className='blogItem-cover'/>
            <Chip label={category} />
            <h3>{title}</h3>
            <p className='blogItem-desc'>{description}</p>
            <footer>
                <div className='blogItem-author'>
                    <img src={authorAvatar} alt='avatar' />
                    <div>
                        <h6>{authourName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className='blogItem-link' to={`/blog/${id}`}><HiOutlineArrowNarrowRight /></Link>
            </footer>
        </div>
    )
}

export default BlogItem