import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSection imageUrl = "media/images/kite.png" productTopic = "Kite" productDesr = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo = "https://kite-demo.zerodha.com/dashboard" leftText = "Try Demo" learnMore = "https://zerodha.com/products/kite" rightText='Learn More' googleStore = "https://play.google.com/store/games?hl=en" appStore = "https://www.apple.com/app-store/" hideIcon1={false} hideIcon2={false}/>

            <RightSection imageUrl = "media/images/console.png" productTopic = "Console" productDesr = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo = "https://zerodha.com/products/console" leftText = "Learn more" learnMore = "https://zerodha.com/products/kite"/>

            <LeftSection imageUrl = "media/images/coin.png" productTopic = "Coin" productDesr = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo = "https://coin.zerodha.com/" leftText = "Coin" learnMore = " " rightText=" " googleStore = "https://play.google.com/store/games?hl=en" appStore = "https://www.apple.com/app-store/" hideIcon1={false}hideIcon2={true}/>

            <RightSection imageUrl = "media/images/kiteconnect.png" productTopic = "Kite Connect API" productDesr = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo = "https://zerodha.com/products/console" leftText = "Kite Connect " learnMore = "https://kite.trade/"/>

            <LeftSection imageUrl = "media/images/varsity.png" productTopic = "Varsity mobile" productDesr = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo = " " leftText = " " learnMore = " " rightText=" " googleStore = "https://play.google.com/store/games?hl=en" appStore = "https://www.apple.com/app-store/" hideIcon1={true} hideIcon2={true}/>
            
            <Universe/>
        </>
     );
}

export default ProductPage;