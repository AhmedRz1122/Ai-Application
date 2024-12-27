import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import reactLogo from './assets/react.svg';
import './App.css';
import { AppSidebar } from './components/AppSidebar';
import Home from "./components/Home";
import Imagegen from './components/Imagegen';
import Food_Classification from './components/Food_Classification';
import Text_generation from './Text_generation'

function App() {
    // Use only for the login page
    const [isLogin, setIsLogin] = useState(false);

    return (
        <BrowserRouter>
            <Routes>

                {/* Login/Register Page */}
                <Route
                    path="/"
                    element={
                        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#000428] to-[#004e92] text-white">
                            <img
                                src={reactLogo}
                                alt="React Logo"
                                className="w-20 h-20 mb-8 animate-spin-slow"
                            />
                            {isLogin ? <RegisterPage /> : <LoginPage />}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
                            >
                                {isLogin ? "Go to Login" : "Go to Register"}
                            </button>
                        </div>
                    }
                />

                {/* Home Route */}
                <Route path="/Home" element={<Home />} />

                {/* App Sidebar */}
                <Route
                    path="/AppSidebar"
                    element={
                        <div className="flex">
                            <AppSidebar />
                            {/* <div className='logodisplay'>
                                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                                    <img src={reactLogo} className="logo" alt="React logo" />
                                </a>
                            </div> */}
                        </div>
                    }
                />

                {/* Food Classification */}
                <Route path="/Food_Classification" element={<Food_Classification />} />

                {/* Image Generation */}
                <Route
                    path="/Imagegen"
                    element={
                        <div>
                            {/* <div className='logodisplay'>
                                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                                    <img src={reactLogo} className="logo" alt="React logo" />
                                </a>
                            </div> */}
                            <Imagegen />
                        </div>
                    }
                />
                <Route
                    path="/Text_generation"
                    element={
                        <Text_generation/>
                    }
                />


            </Routes>
        </BrowserRouter>
    




);



}

export default App;
