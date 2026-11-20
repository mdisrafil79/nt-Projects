import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    const {id , title , description} = post;
    return (
        <div className="card card-border bg-base-100 w-96">
            <figure>
                <img src={post.image} alt={post.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;