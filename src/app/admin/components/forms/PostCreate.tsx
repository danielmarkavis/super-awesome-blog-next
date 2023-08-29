"use client"

import {useState, useTransition, FormEvent, ChangeEvent} from 'react'
import createArticle from "@/repositories/createArticle";
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function PostCreate() {
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            userId: 1,
            title: '',
            body: '',
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
                .required('Title is required'),
            body: yup
                .string()
                .trim()
                .required('Body is required'),
        }),
    });

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
                        {formik.errors.body && (
                            <div className="text-danger">{formik.errors.body}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-end gap-2">
                        <button
                            className="text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}