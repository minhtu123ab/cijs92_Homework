import React, { useState, useEffect } from 'react';
import { FaRegComments } from "react-icons/fa";
import axios from 'axios';

const Comment = ({ item }) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const URL = axios.create({
        baseURL: "http://localhost:3000"
    });

    const [register, setRegister] = useState(null);

    useEffect(() => {
        const getDataUser = async () => {
            try {
                const response = await URL.get(`/user/${user[0].id}`);
                setRegister(response.data);
            } catch (error) {
                console.error("Failed to fetch user data", error);
            }
        };
        if (user && user[0] && user[0].id) {
            getDataUser();
        }
    }, [user]);

    useEffect(() => {
        if (register && register.cmt) {
            setCommentsUser(register.cmt);
        }
    }, [register]);

    const [comments, setComments] = useState(item[0].comment);
    const [commentsUser, setCommentsUser] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        setComments(item[0].comment);
    }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) {
            alert("Bình luận không được để trống!");
            return;
        }

        const movieId = item[0].id;
        const nameComment = user[0].name;
        const newComment = {
            id: Date.now(),
            name: nameComment,
            content: comment,
        };
        const newCommentUser = {
            id: Date.now(),
            movieName: item[0].movieName,
            content: comment,
        };

        try {
            const response = await fetch(`http://localhost:3000/data/${movieId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: [...comments, newComment]
                }),
            });
            const responseUser = await fetch(`http://localhost:3000/user/${user[0].id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cmt: [...commentsUser, newCommentUser]
                }),
            });

            if (response.ok && responseUser.ok) {
                setComments([...comments, newComment]);
                setComment("");
            } else {
                console.error("Lỗi khi thêm bình luận");
            }
        } catch (error) {
            console.error("Có lỗi xảy ra:", error);
        }
    };

    return (
        <div className='comment-all'>
            <div className='title-comment-all'>
                <FaRegComments size={30} />
                <span>Bình luận phim</span>
            </div>
            <form className='content-comment-all' onSubmit={handleSubmit}>
                <div className='content-comment'>
                    {comments.map((comment) => (
                        <div key={comment.id} className='name-content-comment'>
                            <p className='name-comment'>{comment.name}</p>
                            <p className='content-comment-child'>{comment.content}</p>
                        </div>
                    ))}
                </div>
                <div className='input-btn-comment'>
                    <input
                        className='input-comment'
                        placeholder='Nhập bình luận...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className='btn-comment' type="submit">Gửi</button>
                </div>
            </form>
        </div>
    );
};

export default Comment;
