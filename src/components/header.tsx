"use client";
import { useState, useEffect } from "react";
import { isLoggedIn, logout } from "../utils/auth";

export default function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Check login status on component mount
    setUserLoggedIn(isLoggedIn());
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <div className="gradient-block"></div>

      <div className="row header-content">
        <div className="logo">
          <a href="/">Author</a>
        </div>

        <nav id="main-nav-wrap">
          <ul className="main-navigation sf-menu">
            <li>
              <a href="/" title="">
                Home
              </a>
            </li>
            <li className="has-children">
              <a href="/category" title="">
                Categories
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="/category?slug=wordpress">Wordpress</a>
                </li>
                <li>
                  <a href="/category?slug=html">HTML</a>
                </li>
                <li>
                  <a href="/category?slug=photography">Photography</a>
                </li>
                <li>
                  <a href="/category?slug=ui">UI</a>
                </li>
                <li>
                  <a href="/category?slug=mockups">Mockups</a>
                </li>
                <li>
                  <a href="/category?slug=branding">Branding</a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="/blog" title="">
                Blog
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="/blog?id=10">Video Post</a>
                </li>
                <li>
                  <a href="/blog?id=3">Audio Post</a>
                </li>
                <li>
                  <a href="/blog?id=7">Gallery Post</a>
                </li>
                <li>
                  <a href="/blog?id=1">Standard Post</a>
                </li>
              </ul>
            </li>
            
            <li className="">
              <a href="/about" title="">
                About
              </a>
            </li>
            <li>
              <a href="/contact" title="">
                Contact
              </a>
            </li>
            {userLoggedIn ? (
              <li>
                <a href="#" onClick={handleLogout} title="">
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a href="/login" title="">
                  Login
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div className="search-wrap">
          <form role="search" method="get" className="search-form" onSubmit={handleSearchSubmit}>
            <label>
              <span className="hide-content">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Type Your Keywords"
                value={searchQuery}
                onChange={handleSearchChange}
                name="s"
                title="Search for:"
              />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </form>

          <a href="#" id="close-search" className="close-btn">
            Close
          </a>
        </div>

        <div className="triggers">
          <a className="search-trigger" href="#">
            <i className="fa fa-search"></i>
          </a>
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>
        </div>
      </div>
    </header>
  );
}
