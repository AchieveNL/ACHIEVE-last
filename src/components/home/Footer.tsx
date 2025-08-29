/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

const Footer = () => {
  return (
    <div className=" bg-achieve-purple">
      <AuroraBackground autoHeight>
        <footer className="FOOTER relative z-10">
          <div className="py-[70px] sm:py-[40px]">
            <div className="container mx-auto px-4 flex flex-col">
              <div className="flex flex-col">
                {/* Header Section */}
                <div className="lg:flex-row lg:gap-y-0 flex flex-col gap-y-8 justify-between border-b-[1px] border-[#e1e1f0] mb-[30px] pb-[20px] sm:pb-[15px] items-center">
                  {/* Logo */}
                  <div className="lg:basis-1/3 lg:justify-start lg:pl-6 flex justify-center items-center">
                    <a
                      className="inline-block w-[50%] lg:w-[50%] md:w-[40%] sm:w-[60%]"
                      href="/"
                    >
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/tretrak/image/upload/v1652851337/achieve/achieve-logo_njbari.svg"
                        alt="Achieve Logo"
                      />
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="lg:basis-1/3 flex gap-x-4 items-center justify-center">
                    <div className="flex justify-center items-center">
                      <a
                        className="flex justify-center items-center"
                        href="/contact"
                      >
                        <img
                          className="h-[50px] sm:h-[40px]"
                          src="https://storage.googleapis.com/achieve-bucket/72584110-3ccd-430f-86e1-2603d37b5474email.png"
                          alt="Email"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-y-1 text-white text-[18px] sm:text-[16px]">
                      <p className="!text-white">
                        <a href="tel: +31 (0) 85 4016590">+31 (0) 85 4016590</a>
                      </p>
                      <p className="!text-white">
                        <a href="mailto: info@achieve.nl">info@achieve.nl</a>
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="lg:basis-1/3 lg:justify-end lg:pr-5 flex justify-center gap-x-4 items-center">
                    <div className="flex justify-center items-center">
                      <a
                        className="flex justify-center items-center"
                        href="/contact"
                      >
                        <img
                          className="h-[50px] sm:h-[40px]"
                          src="https://storage.googleapis.com/achieve-bucket/d276071e-71e3-4fea-9602-77f707dde2e6homo.png"
                          alt="Location"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-y-1 text-white text-[18px] sm:text-[16px]">
                      <p className="!text-white">Rivium Boulevard 2</p>
                      <p className="!text-white text-[14px] sm:text-[13px]">
                        2909 LK, Capelle&nbsp;a/d&nbsp;IJssel
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Footer Content */}
                <div className="flex justify-between lg:flex-row flex-col">
                  {/* Quote and Social Media */}
                  <div className="lg:basis-1/5 mb-8 lg:mb-0">
                    <div className="text-center mb-[30px]">
                      <p className="mb-[20px] text-white leading-[24px] text-[16px] sm:text-[14px] px-4 lg:px-0">
                        &apos;&apos;What the mind can conceive and believe, it
                        can achieve.&apos;&apos; - Napoleon Hill
                      </p>
                      <div className="flex justify-center items-center">
                        <ul className="flex gap-x-3 sm:gap-x-2">
                          <li>
                            <a
                              href="https://www.facebook.com/achieve.nl/"
                              className="group hover:bg-achieve-purple cursor-pointer inline-flex justify-center items-center size-[32px] sm:size-[28px] leading-[32px] sm:leading-[28px] text-center rounded-full text-[14px] sm:text-[12px] bg-white duration-500 m-[2px]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                className="group-hover:text-white text-mainPurple text-[14px] sm:text-[12px] text-center leading-[32px] sm:leading-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/achieve.nl/"
                              className="group hover:bg-mainPurple cursor-pointer inline-flex justify-center items-center size-[32px] sm:size-[28px] leading-[32px] sm:leading-[28px] text-center rounded-full text-[14px] sm:text-[12px] bg-white duration-500 m-[2px]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                className="group-hover:text-white text-mainPurple text-[14px] sm:text-[12px] text-center leading-[32px] sm:leading-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/achieve-nl/"
                              className="group hover:bg-mainPurple cursor-pointer inline-flex justify-center items-center size-[32px] sm:size-[28px] leading-[32px] sm:leading-[28px] text-center rounded-full text-[14px] sm:text-[12px] bg-white duration-500 m-[2px]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                className="group-hover:text-white text-achieve-purple text-[14px] sm:text-[12px] text-center leading-[32px] sm:leading-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/@achievenl"
                              className="group hover:bg-achieve-purple cursor-pointer inline-flex justify-center items-center size-[32px] sm:size-[28px] leading-[32px] sm:leading-[28px] text-center rounded-full text-[14px] sm:text-[12px] bg-white duration-500 m-[2px]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 576 512"
                                className="group-hover:text-white text-achieve-purple text-[14px] sm:text-[12px] text-center leading-[32px] sm:leading-[28px]"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer Links */}
                  <div className="flex justify-between lg:basis-[80%] md:flex-row flex-col gap-y-8 md:gap-y-0">
                    {/* Menu */}
                    <div className="lg:basis-1/3 md:basis-1/3 flex justify-center">
                      <div className="mb-[30px] ">
                        <div className="flex  flex-col gap-y-1 mb-[30px]">
                          <h5 className="text-[24px] sm:text-[20px] font-bold pb-[10px] text-white leading-[1.2]">
                            Menu
                          </h5>
                          <div className="flex items-center gap-x-1 justify-start">
                            <span className="h-[5px] w-[20px] rounded-md bg-white"></span>
                            <span className="bg-white h-[5px] w-[55px] rounded-md"></span>
                          </div>
                        </div>
                        <div>
                          <ul className="space-y-1">
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/"
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/over-ons"
                              >
                                Over ons
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten"
                              >
                                Diensten
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/projecten"
                              >
                                Projecten
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/tarieven"
                              >
                                Tarieven
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/werken-bij"
                              >
                                Werken bij
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/contact"
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="lg:basis-1/3 md:basis-1/3 flex justify-center">
                      <div className="mb-[30px] ">
                        <div className="flex flex-col gap-y-1 mb-[30px]">
                          <h5 className="text-[24px] sm:text-[20px] font-bold pb-[10px] text-white leading-[1.2]">
                            Onze diensten
                          </h5>
                          <div className="flex items-center gap-x-1 justify-start">
                            <span className="h-[5px] w-[20px] rounded-md bg-white"></span>
                            <span className="bg-white h-[5px] w-[55px] rounded-md"></span>
                          </div>
                        </div>
                        <div>
                          <ul className="space-y-1">
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/brand-book"
                              >
                                Brand Book
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/web-development"
                              >
                                Web Development
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/email-marketing"
                              >
                                Email Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/video-marketing"
                              >
                                Video Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/search-engine-advertising"
                              >
                                Search Engine Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/social-media-advertising"
                              >
                                Social Media Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/social-media-management"
                              >
                                Social Media Management
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/diensten/dashboard"
                              >
                                Dashboard
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <div className="lg:basis-1/3 md:basis-1/3 flex justify-center">
                      <div className="mb-[30px]">
                        <div className="flex flex-col gap-y-1 mb-[30px]">
                          <h5 className="text-[24px] sm:text-[20px] font-bold pb-[10px] text-white leading-[1.2]">
                            Over Achieve
                          </h5>
                          <div className="flex items-center gap-x-1 justify-start">
                            <span className="h-[5px] w-[20px] rounded-md bg-white"></span>
                            <span className="bg-white h-[5px] w-[55px] rounded-md"></span>
                          </div>
                        </div>
                        <div>
                          <ul className="space-y-1">
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/veelgestelde-vragen"
                              >
                                FAQ
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/privacy-policy"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/algemene-voorwaarden"
                              >
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-white duration-500 py-[5px] inline-block hover:translate-x-[15px] text-[16px] sm:text-[14px]"
                                href="/contact"
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="bg-[#b3a1ff] flex justify-center items-center text-[15px] sm:text-[14px] py-[15px] px-4">
            <span className="text-white text-center">
              Copyright © 2024 Achieve. All rights reserved.
            </span>
          </div>
        </footer>
      </AuroraBackground>
    </div>
  );
};

export default Footer;
