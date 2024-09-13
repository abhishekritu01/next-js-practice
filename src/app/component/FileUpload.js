'use client'
import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const fileURL = URL.createObjectURL(selectedFile);
        setPreview(fileURL);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append("file", file);
        console.log(file);
    
        axios
            .post("http://localhost:3000/api/file", formData)
            .then((res) => {
                console.log(res.data);
                // Clear the file and preview after upload
                setFile(null);
                setPreview(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <input 
                type="file" 
                onChange={handleFileChange} 
                className="mb-4 cursor-pointer bg-gray-200 text-gray-700 rounded-md p-2 w-full"
            />
            {preview && (
                <div className="mb-4">
                    <img 
                        src={preview} 
                        alt="Preview" 
                        className="w-48 h-48 object-contain border-2 border-dashed border-gray-300 rounded-lg"
                    />
                </div>
            )}
            <button 
                onClick={handleFileUpload} 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
            >
                Upload
            </button>
        </div>
    );
}

export default FileUpload;
