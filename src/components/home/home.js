import React from "react";
import {useEffect, useState} from "react";

import "./home.css"

import PostPreview from "./postPreview/postPreview";
import Banner from "../banner/banner";

import postService from '../../services/posts'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAll()
            .then(initialPosts => setPosts(initialPosts))
    })

    return (
        <div className={`container`}>
            <Banner />
            {posts.map(post => <PostPreview key={post.id} post={post} />)}
        </div>
    )
}

export default Home;
