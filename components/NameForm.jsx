"use client";
import { useState } from "react";

export default function NameForm() {
    const [name, setName] = useState("");
    return (
        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 16 }}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                style={{ padding: 8, marinRight: 8}}
            />
            <span>{name ? `Hello, ${name}!` : "Type your name above"}</span>
        </form>
    )
}