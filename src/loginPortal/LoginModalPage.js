import React, { useState } from "react"
import LoginModal from "./LoginModal";

export default function LoginModalPage() {
    const [showModal, setShowModal] = useState(true);

    function handleClose() {
        setShowModal(false);
    }

    return (
        <>
            {showModal && <LoginModal onClose={handleClose} />}
        </>
    )
}
