import React from "react";

import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import ContactGroup from "./component/ContactGroup";
import QNA from "./component/QNA";


// import "./style.css";

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <ContactGroup />
            <QNA />
            <Footer />
        </div>
    )
}

export default App;