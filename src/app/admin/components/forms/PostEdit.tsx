"use client"

import {Post} from "@/types/Post";
import {useState, useTransition, FormEvent, ChangeEvent, MouseEvent} from 'react'
import {useFormik} from "formik";
import createArticle from "@/repositories/createArticle";
import deleteArticle from "@/repositories/deleteArticle";
import * as yup from "yup";

type Props = {
    post: Post
}

export default function PostEdit({post}: Props) {
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const formik= useFormik({
        initialValues: {
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,
        },
        onSubmit: (values) => {
            setMessage('Form submitted');
            setSubmitted(true);
            const res = createArticle(values);
        },
        validationSchema: yup.object({
            title: yup
                .string()
                .trim()
                .max(100)
                .required('Title is required'),
            body: yup
                .string()
                .trim()
                .required('Body is required'),
        }),
    });

    const handleDelete = () => {
        const res= deleteArticle(post.id);
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="text-primary dark:bg-level-1 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div hidden={!submitted} className="alert alert-primary" role="alert">
                    {message}
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-primary dark:bg-level-2 leading-tight focus:outline-none focus:shadow-outline"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.title && (
                            <div className="text-danger">{formik.errors.title}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="body">
                            Body
                        </label>
                        <textarea
                            id="body"
                            rows={10}
                            name="body"
                            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-primary dark:bg-level-2 leading-tight focus:outline-none focus:shadow-outline"
                            value={formik.values.body}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <button
                            className="text-white font-bold py-2 px-4 rounded"
                            onClick={handleDelete}
                            disabled={formik.isSubmitting}
                        >
                            Delete
                        </button>
                        <button
                            className="text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}
                        >
                           Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}