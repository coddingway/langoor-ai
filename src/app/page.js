"use client"; // This is a client component 👈🏽
import Image from "next/image";
import Script from 'next/script';
import React from 'react';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useState } from "react";


export default function Home() {
  useState(() => {
    $(document).ready(function () {
      $(".accordion-inner").on('click', function(){
        $(".accordion-inner").removeClass('active');
        $(this).addClass('active');
        // Hide other heading & desciption
        // $(".accordion-inner .accordion-container .accordion-body").hide(); 
        // $(".accordion-inner .accordion-container .accordion-heading").show(); 
        // // Show only respective heading & desciption
        // $(this).hide(); 
        // $(this).siblings(".accordion-body").show(); 
      });
      $("body").on('click', '.close-accordion', function(){
        $(this).parents().eq(2).removeClass("active");
        //$(".accordion-inner").removeClass('active');
      });
      $(window).scroll(function() {
        var productwidth = $('.product-image-slider').width();
        if ($(document).scrollTop() > 200 ) {
          $('.header').addClass('sticky');
        }
        else{
          $('.header').removeClass('sticky');
        }
      });
    });
  }, [])
  return (
    <main className="">
      <section className="header border-b-[#707070] border-b-[1px] bg-[#000]">
        <div className="flex justify-between items-center container mx-auto">
        <div className="logo h-full sm:py-[40px]">
          <Image className="relative" src="/images/LOgo@2x.png" alt="Langoor Logo" width={280} height={28} priority/>
        </div>
        <div className="navigation">
          <div className="desktop-menu">
            <ul className="flex">
              <li><a href="#home">HOME</a></li>
              <li><a href="#QUINTESSENTIAL">QUINTESSENTIAL 3</a></li>
              <li><a href="#contact">TALK TO US</a></li>
            </ul>
          </div>
        </div>
        </div>
      </section>
      <div className="body py-[80px]">
        <section className="before-video">
          <div className="container mx-auto">
            <div className="flex gap-[10px] relative items-center">
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar pr-[35px]">Raise the bar</p>
              <div className="empty-bar"></div>
            </div>
            <div className="flex gap-[10px] relative items-center justify-between">
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar pr-[35px]">for</p>
              <div className="empty-bar"></div>
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar pl-[35px]">your</p>
            </div>
            <div className="flex relative items-center justify-center">
              <div className="left-before"></div>
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar px-[35px]">marketing</p>
              <p className="text-[35px] font-myriad-bold-condensed tracking-[5.25px] uppercase bg-[#000] z-[1] max-w-[476px] leading-[42px]">GAIN THE COMPETITIVE EDGE WITH CUTTING-EDGE AI</p>
            </div>
          </div>
        </section>
        <section className="video">
          <div className="container mx-auto">
          <video width="100%" height="962px" controls="controls" poster="/images/Screen@2x.png">
            <source src="/video/Langoor_Final_AI_video_4K.mp4" type="video/mp4" />
          </video>
          </div>
        </section>
        <section className="after-video pt-[230px]">
          <div className="container mx-auto">
            <div className="flex gap-[10px] relative items-center">
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar pr-[35px]">Break boundaries.</p>
            </div>
            <div className="flex relative items-center justify-end">
              <div className="left-before"></div>
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar px-[35px]">Breakthrough.</p>
            </div>
          </div>
        </section>

        <section className="we-are-masters py-[500px]">
          <div className="container mx-auto">
            <div className="flex gap-[10px] relative items-center justify-between">
            <p className="text-[140px] font-inputmono-bold raise-the-bar pr-[35px]">We are</p>
              <div className="empty-bar"></div>
              <p className="text-[140px] font-inputmono-bold raise-the-bar pl-[35px]">masters</p>
            </div>
            <div className="flex relative items-center justify-between">
            <p className="text-[140px] font-inputmono-bold raise-the-bar pr-[35px]">in</p>
              <div className="empty-bar"></div>
              <p className="text-[140px] font-inputmono-bold raise-the-bar pl-[35px]">creating</p>
            </div>
            <div className="flex relative items-center justify-start">
              <p className="text-[140px] font-inputmono-bold raise-the-bar pr-[35px]">the ‘WOW’ factor</p>
              <div className="right-after"></div>
            </div>
            <div className="flex relative items-center justify-end">
              <div className="left-before min-w-[]"></div>
              <p className="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar px-[35px]">for brands</p>
            </div>
            <div>
              <p className="text-[26px] font-myriad-bold-condensed tracking-[3.9px] uppercase leading-[42px] max-w-[80%] ">AND WE’VE BEEN DOING IT FOR MORE THAN 200 BRANDS IN COMMERCIALS, CAUSE AND HEALTHCARE. FIND OUT HOW WE DID IT BY EXPLORING THE QUINTESSENTIAL 3 OF AI FOR MARKETING, AND SEE HOW YOU TOO CAN MAKE YOUR AUDIENCE GO, “WOW, THIS BRAND GETS ME!”</p>
            </div>
          </div>
        </section>

        <section className="diagnostic-heading accordion-header-section pt-[140px]">
          <div className="container mx-auto">
            <div className="flex relative items-center justify-start max-w-[92%]">
            <p className="text-[110px] text-[#30FF00] tracking-[17.49px] leading-[130px] font-inputmono-bold uppercase z-[1]">DIAGNOSTIC</p>
            <Image className="absolute left-[50%]" src="/images/diagnostic_1.png" alt="Langoor AI" width={774} height={474} priority/>
            </div>
            <div>
              <p className="text-[36px] font-myriad-bold-condensed tracking-[6.5px] uppercase leading-[42px] max-w-[45%] ">DRIVE CONSUMER-CENTRIC CREATIVITY THAT TRANSLATES INTO REAL BUSINESS RESULTS.  </p>
            </div>
          </div>
        </section>

        <section className="diagnostic accordion-section pt-[150px]">

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Monthly Preference Research</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-1.png" alt="Dignostic" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Monthly Preference Research</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Monthly Trends Tracking</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-2.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Monthly Trends Tracking</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Monthly Living Segmentations, and Personas</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-3.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Monthly Living Segmentations, and Personas</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Monthly Custom Topics and Conversation (NPS) Tracking</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-4.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Monthly Custom Topics and Conversation (NPS) Tracking</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Monthly Influencer Tracking</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-5.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Monthly Influencer Tracking</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Monthly Adjacency Tracking</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-6.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Monthly Adjacency Tracking</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Quarterly Brand Health Tracking</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-7.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Quarterly Brand Health Tracking</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Quarterly Attitude and Usage</h2>
                <div className="accordion-body">
                  <Image className="absolute right-[0] top-[25%] cursor-pointer close-accordion" src="/images/arrow-close.svg" alt="Close" width={40} height={40} priority/>
                  <div className="py-[40px] flex flex-row gap-[20px]">
                    <Image className="relative" src="/images/dg-ac-8.png" alt="Langoor AI" width={500} height={500} priority/>
                    <div className="flex flex-col gap-[40px] justify-center align-start">
                      <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Quarterly Attitude and Usage</h3>
                      <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </section>

        <section className="generative-heading accordion-header-section pt-[400px]">
          <div className="container mx-auto">
            <div className="flex relative items-center justify-start max-w-[92%]">
            <p className="text-[110px] text-[#30FF00] text-golden tracking-[17.49px] leading-[130px] font-inputmono-bold uppercase z-[1]">GENERATIVE</p>
            <Image className="absolute left-[50%]" src="/images/generative_1.png" alt="Langoor AI" width={774} height={474} priority/>
            </div>
            <div>
              <p className="text-[36px] font-myriad-bold-condensed tracking-[6.5px] uppercase leading-[42px] max-w-[45%] ">CHANGING THE MARKETING GAME STARTS WITH UNDERSTANDING THE MARKET AND YOUR CUSTOMERS.</p>
            </div>
          </div>
        </section>

        <section className="generative accordion-section pt-[150px]">

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Marketing Copy</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Marketing Copy</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Brand Positioning</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Brand Positioning</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Get a comprehensive breakdown of distinct category consumers from sharp consumer analytics, including their hobbies, preferences, demographics. Leverage the data to tailor consumer segment specific marketing strategies that can enhance customer engagement (&amp; drive business growth in the process).</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Product Ideation</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Product Ideation</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Track specific topics of interest in the market (from diverse data sources and with intelligent tracking) to gain deep insights into the consumer market buzz and identify market opportunties. Analyse digital conversations of all brands to calculate the Net Promoter Score (NPS) measuring customer satisfaction and advocacy that will enable you to identify areas for improvement and thus enhance customer experiences.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Concept Development</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Concept Development</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Track specific topics of interest in the market (from diverse data sources and with intelligent tracking) to gain deep insights into the consumer market buzz and identify market opportunties. Analyse digital conversations of all brands to calculate the Net Promoter Score (NPS) measuring customer satisfaction and advocacy that will enable you to identify areas for improvement and thus enhance customer experiences.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Social Post Creation</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Social Post Creation</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Identify key influencers for your brand by analyzing their engagements, likes and momentum within any category using data analytics capabilities. Arrive at key features and strengths of the influencers that can help you draw the right collaboration strategies, and maximize brand exposure + audience engagements.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Conversational Ai</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Conversational Ai</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Monitor internet conversations surrounding culture, food, and music, highlighting the impact of popular culture. Leverage the data to create targeted marketing campaigns, tap into emerging opportunities, and stay ahead in a dynamic market landscape.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Agency Co-creation</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Agency Co-creation</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Monitor brand sentiment over time, evaluating, taste, healthy attributes, and price. Get a clear picture of your brand's health with sharp data allowing you to identify its strengths and weaknesses, and make data-driven decisions to enhance brand positioning.</p>
                  </div>
                </div>
              </div>
          </div>

        </section>

        <section className="predictive-heading accordion-header-section pt-[400px]">
          <div className="container mx-auto">
            <div className="flex relative items-center justify-start max-w-[92%]">
            <p className="text-[110px] text-[#8110F5] tracking-[17.49px] leading-[130px] font-inputmono-bold uppercase z-[1]">PREDICTIVE</p>
            <Image className="absolute left-[50%]" src="/images/predictive.png" alt="Langoor AI" width={774} height={474} priority/>
            </div>
            <div>
              <p className="text-[36px] font-myriad-bold-condensed tracking-[6.5px] uppercase leading-[42px] max-w-[45%] ">FIGURE OUT THE NEW AND OPTIMIZE EXISTING CREATIVE WORK.</p>
            </div>
          </div>
        </section>

        <section className="predictive accordion-section pt-[150px]">

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Stim Evaluation</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Stim Evaluation</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Leverage data-driven insights from comprehensive social analyses and identify consumer-led brand and product preferences across categories, owned brands, and named competitors. Take informed decisions and optimize your marketing strategies.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Concept Evaluation</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Concept Evaluation</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Get a comprehensive breakdown of distinct category consumers from sharp consumer analytics, including their hobbies, preferences, demographics. Leverage the data to tailor consumer segment specific marketing strategies that can enhance customer engagement (&amp; drive business growth in the process).</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Ad Evaluation</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Ad Evaluation</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Track specific topics of interest in the market (from diverse data sources and with intelligent tracking) to gain deep insights into the consumer market buzz and identify market opportunties. Analyse digital conversations of all brands to calculate the Net Promoter Score (NPS) measuring customer satisfaction and advocacy that will enable you to identify areas for improvement and thus enhance customer experiences.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Packaging Testing</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Packaging Testing</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Track specific topics of interest in the market (from diverse data sources and with intelligent tracking) to gain deep insights into the consumer market buzz and identify market opportunties. Analyse digital conversations of all brands to calculate the Net Promoter Score (NPS) measuring customer satisfaction and advocacy that will enable you to identify areas for improvement and thus enhance customer experiences.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Competitor Benchmark</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Competitor Benchmark</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Identify key influencers for your brand by analyzing their engagements, likes and momentum within any category using data analytics capabilities. Arrive at key features and strengths of the influencers that can help you draw the right collaboration strategies, and maximize brand exposure + audience engagements.</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="border-[#707070] border-t-[1px] py-[20px] accordion-inner">
              <div className="container mx-auto accordion-container flex flex-col">
                <h2 className="accordion-heading cursor-pointer text-[#ffffff] text-[40px] tracking-[7.81px] font-inputmono-black">Internal Knowledge Model</h2>
                <div className="accordion-body py-[40px] flex flex-row gap-[20px]">
                  <Image className="relative" src="/images/dg-ac-1.png" alt="Langoor AI" width={500} height={500} priority/>
                  <div className="flex flex-col gap-[40px] justify-center align-start">
                    <h3 className="text-[#ffffff] text-[42px] tracking-[7.81px] font-inputmono-black">Internal Knowledge Model</h3>
                    <p className="text-[#ffffff] text-[20px] tracking-[1.6px] font-inputmono-black">Monitor internet conversations surrounding culture, food, and music, highlighting the impact of popular culture. Leverage the data to create targeted marketing campaigns, tap into emerging opportunities, and stay ahead in a dynamic market landscape.</p>
                  </div>
                </div>
              </div>
          </div>

        </section>

        <section className="learn-more accordion-header-section pt-[150px]">
          <div className="container mx-auto">
            <div className="flex flex-col relative items-start justify-start gap-[20px]">
            <p className="text-[26px] text-[#FFFFFF] tracking-[3.9px] leading-[42px] font-myriad-bold-condensed">Find out how AI-as-a-Service can help your brand gain the crystal ball for marketing. Know the past, present, and future with engagement models tailored for your brand.</p>
            <a href="#contact" className="py-[20px] px-[30px] font-inputmono-medium font-[24px] tracking-[7.2px] uppercase border-[#ffffff] border-[1px] hover:bg-[#fff] hover:text-[#000] transition delay-50">Learn More</a>
            </div>
          </div>
        </section>
        
        <section className="discover-perspective pt-[150px]">
          <div className="container mx-auto">
            <div class="flex relative items-center">
            <p class="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar pr-[35px]">Discover</p>
            </div>
            <div class="flex relative items-center justify-end">
              <div class="left-before"></div>
              <p class="text-[140px] font-inputmono-bold tracking-[-2.82px] raise-the-bar px-[35px]">Perspectives.</p>
            </div>
            <p className="text-[26px] text-[#FFFFFF] tracking-[3.9px] leading-[42px] font-myriad-bold-condensed">Gain new insights and inspirations from our thought provoking blogs and articles.</p>
          </div>
        </section>

        <section className="blog-section pt-[150px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-[130px]">
                <div className="flex flex-col gap-[18px]">
                  <div className="border-[1px] border-[#fff] p-[30px] relative text-[24px]">
                    <div className="flex flex-col gap-[200px]">
                      <div className="blog-dates-read flex justify-between font-myriad-bold-condensed tracking-[2.08px] text-[24px]">
                          <span>Apr 10, 2024</span>
                          <span>3 Min Read</span>
                      </div>
                      <div className="blog-text">
                        <a href="#"><span className="right-absolute">Employing</span> Generative AI in marketing: going beyond operational <span className="right-absolute">benefits</span></a>
                      </div>
                    </div>
                  </div>
                  <a href="#contact" className="py-[20px] px-[30px] text-center font-inputmono-medium font-[24px] tracking-[7.2px] uppercase border-[#ffffff] border-[1px] hover:bg-[#fff] hover:text-[#000] transition delay-50">Read More</a>
                </div>
                <div className="flex flex-col gap-[18px]">
                  <div className="border-[1px] border-[#fff] p-[30px] relative text-[24px]">
                    <div className="flex flex-col gap-[200px]">
                      <div className="blog-dates-read flex justify-between font-myriad-bold-condensed tracking-[2.08px] text-[24px]">
                          <span>Apr 10, 2024</span>
                          <span>3 Min Read</span>
                      </div>
                      <div className="blog-text">
                        <a href="#">Langoor Digital partners with <span className="left-absolute">Quilt AI</span> to revolutionize marketing with AI <span className="right-absolute">Solutions</span></a>
                      </div>
                    </div>
                  </div>
                  <a href="#contact" className="py-[20px] px-[30px] text-center font-inputmono-medium font-[24px] tracking-[7.2px] uppercase border-[#ffffff] border-[1px] hover:bg-[#fff] hover:text-[#000] transition delay-50">Read More</a>
                </div>
                <div className="flex flex-col gap-[18px]">
                  <div className="border-[1px] border-[#fff] p-[30px] relative text-[24px]">
                    <div className="flex flex-col gap-[200px]">
                      <div className="blog-dates-read flex justify-between font-myriad-bold-condensed tracking-[2.08px] text-[24px]">
                          <span>Apr 10, 2024</span>
                          <span>3 Min Read</span>
                      </div>
                      <div className="blog-text">
                        <a href="#">Beyond the notes: <span className="left-absolute">Navigating the</span> crossroads of AI and artistry in <span className="right-absolute">music: Part 2</span></a>
                      </div>
                    </div>
                  </div>
                  <a href="#contact" className="py-[20px] px-[30px] text-center font-inputmono-medium font-[24px] tracking-[7.2px] uppercase border-[#ffffff] border-[1px] hover:bg-[#fff] hover:text-[#000] transition delay-50">Read More</a>
                </div>
            </div>
          </div>
        </section>



        <section className="blog-section pt-[150px]">
          <div className="container mx-auto">
            <div className="flex flex-row gap-[20px]">
                <div className="flex flex-col gap-[40px] justify-center align-start">
                  <p className="text-[26px] text-[#FFFFFF] tracking-[3px] font-myriad-bold-condensed">At Langoor, we are harnessing the power of AI to revolutionize marketing, sales and market research. Find out how you can get Ai right for your brand and supercharge your brand’s connections with your audiences.</p>
                  <div>
                    <div className="flex items-center relative">
                      <p className="text-[110px] text-[#FFF] tracking-[26.37px] leading-[120px] font-inputmono-bold z-[1] raise-the-bar pr-[35px]">talk</p>
                      <div className="empty-bar"></div>
                    </div>
                    <div className="flex items-center justify-end relative">
                      <div className="empty-bar"></div>
                      <p className="text-[110px] text-[#FFF] tracking-[26.37px] leading-[120px] font-inputmono-bold z-[1] raise-the-bar pl-[35px]">to us</p>
                    </div>
                  </div>
                  <p className="text-[26px] text-[#FFFFFF] tracking-[3px] font-myriad-bold-condensed">to learn more about our Ai-powered offerings that can help you pursue new opportunities for your brand. Just submit the form below with your details, and we will get back to you to discuss the next steps of your brand’s Ai-powered journey.</p>
                </div>
                <Image className="relative" src="/images/Talk-to-us-scroll@2x.png" alt="Langoor Talk to Us" width={750} height={665} priority/>
            </div>
          </div>
        </section>
        
        <section className="blog-section pt-[150px]">
          <div className="container mx-auto">
            <form method="get" action="#">
            <div className="contact-form-container grid grid-cols-2 grid-rows-2">
              <div className="border-[1px] border-[#fff]">
                <input type="text" className="cell font-inputmono-medium font-[24px] tracking-[3px] uppercase" placeholder="enter your name"></input>
              </div>
              <div className="border-[1px] border-[#fff]">
                <input type="email" className="cell font-inputmono-medium font-[24px] tracking-[3px] uppercase" placeholder="enter your company/brand"/>
              </div>
              <div className="border-[1px] border-[#fff]">
                <input type="text" className="cell font-inputmono-medium font-[24px] tracking-[3px] uppercase" placeholder="enter your email"/>
              </div>
              <div className="border-[1px] border-[#fff]">
                <input type="text" className="cell font-inputmono-medium font-[24px] tracking-[3px] uppercase" placeholder="enter your mobile no."/>
              </div>
            </div>
            <div className="flex justify-between items-center relative">
                <div className="font-inputmono-bold text-[74px] uppercase pr-[35px] raise-the-bar z-[1]">MAIL US AT</div>
                <div class="empty-bar"></div>
                <div className="raise-the-bar z-[1] pl-[35px]">
                <input type="submit" value="Submit" class="py-[20px] px-[30px] font-inputmono-medium font-[24px] tracking-[7.2px] uppercase border-[#ffffff] border-[1px] cursor-pointer hover:bg-[#fff] hover:text-[#000] transition delay-50"/>
                </div>
            </div>
            </form>
          </div>
        </section>
        
        <section className="blog-section pt-[10px]">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <span class="text-[140px] font-inputmono-bold"><a href="mailto:info@langoor.com">info@langoor.com</a></span>
              <div className="flex justify-end items-center relative">
                <div class="empty-bar"></div>
                <div className="flex gap-[30px] raise-the-bar z-[1] pl-[35px]">
                  <a href="#"><Image className="relative" src="/images/instagram.png" alt="Instagram" width={77} height={77} /></a>
                  <a href="#"><Image className="relative" src="/images/discord.png" alt="Discord" width={77} height={77} /></a>
                  <a href="#"><Image className="relative" src="/images/threads.png" alt="Threads" width={77} height={77} /></a>
                  <a href="https://twitter.com/langoormt" target="_blank"><Image className="relative" src="/images/x.png" alt="X" width={77} height={77} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>




      </div>


      <Script src="../script/custom.js" defer/>

    </main>
  );
}
