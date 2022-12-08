import React from 'react';
import Image from 'next/image';
import Logo from '../public/img/header/logo.svg';

const Header = () => {
  return (
    <header className="py-6 fg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center  relative">
        <a href="#">
          <Image src={Logo} />
        </a>
        <nav className="text-xl flex gap-x-4 lg:gap-x-12">
          <a href="">Услуги</a>
          <a href="">О нас</a>
          <a href="">Блог</a>
          <a href="">Контакт</a>
        </nav>
        <button className="btn btn-primary lg:btn-outline">Зарегестрироваться </button>
      </div>
    </header>
  );
};

export default Header;
