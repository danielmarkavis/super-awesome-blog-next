"use client"

import {Post} from "@/types/Post";
import { useState, useTransition, FormEvent, ChangeEvent } from 'react'

type Props = {
    promise: Promise<Post>
}

const initState: Partial<Post> = {
    userId: 1,
    title: "",
    body: "",
}

export default async function Edit({promise}: Props) {
    const post = await promise

    const [form, setForm] = useState(initState)
    const [editing, setEditing] = useState(false);

    setForm(post);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="max-w-xl mx-auto">
            {/*<template v-if="(record && editing) || !editing">*/}
            <div
                className="text-primary dark:bg-level-1 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="articleTitle">
                        Title
                    </label>
                    <input
                        id="articleTitle"
                        type="text"
                        name="articleTitle"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-primary dark:bg-level-2 leading-tight focus:outline-none focus:shadow-outline"
                        value={form.title}
                    />
                    {/*<span>{{errors.articleTitle}}</span>*/}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="articleBody">
                        Body
                    </label>
                    <textarea
                        id="articleBody"
                        rows={10}
                        name="articleBody"
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-primary dark:bg-level-2 leading-tight focus:outline-none focus:shadow-outline"
                        value={form.body}
                    />
                    {/*<span>{{errors.articleBody}}</span>*/}
                </div>

                <div className="flex items-center justify-end gap-2">
                    {/*<button*/}
                    {/*    // v-if="editing"*/}
                    {/*    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"*/}
                    {/*    onClick={(event)=> { setShowModal(true) }}*/}
                    {/*>*/}
                    {/*    Delete*/}
                    {/*</button>*/}
                    <button
                        className="text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        {editing ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    )
}