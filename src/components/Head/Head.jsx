import { useState } from "react";
import logoImg from "../../assets/images/logo.png";
import "./Head.css";

export function Head() {
    return (
      <div className="row">
        <div className="col-md-8 d-flex justify-content-between">
            <Logo />
            <Title className="text-center" />
        </div>
    </div>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo" />
    </div>
  )
}

export function Title() {
  return (
    <div className="title">
      <h1 className="text-uppercase">tune weight</h1>
    </div>
  )
}

