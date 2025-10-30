import React from "react";



function Clipboard() {

    const constClipboard = () => {
        alert("You can't copy this text!");
    }
    return (
        <div>
            <h1>Clipboard Page</h1>
            <p onCopy={constClipboard}>This is the Clipboard page content.</p>
        </div>
    );
}

export default Clipboard;
