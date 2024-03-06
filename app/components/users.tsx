import {useState} from "react";

const Users = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
        await fetch("/api/todo", {
            method: "POST",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        setFormData({
            name: "",
            email: "",
            password: "",
        });
    } catch (error) {
        console.log(error);
    }
};
return (
    <div>
        <h1>Here is a List of our Users</h1>
        <form action="" onsubmit="{onSubmit}">
            <input type="text" name="name" value="{formData.name}" placeholder="name" onchange="{onChange}"/>
                <input type="email" name="email" value="{formData.email}" placeholder="email" onchange="{onChange}"/>
                    <input type="password" name="password" placeholder="password" value="{formData.password}" onchange="{onChange}"/>

                        <button type="submit">Submit</button>
        </form>
    </div>
);
};

