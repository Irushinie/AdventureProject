import React from "react";
import Header from "./Header"
import Note from "./Note"
import Entry from "./Entry"
import emojipedia from "../emojipedia"
import Videosec from "./Videosec";
import Journey from "./Journey";
import Footer from "./Footer";
import Tucan from "./Tucan";
import Tucan2 from "./Tucan2";
import Login from "./Login";
import LogApp from "./LogApp";




function createEntry(emojiTerm) {

    return <Entry

        key={emojiTerm.id}
        imgs={emojiTerm.imgURL}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
    />
}


function App() {
    return (
        
        <div>
        
            <Header />
            
            <Note />
            
            <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
            <Videosec />
            <Tucan />
            <Tucan2 />
            <Journey />
            <Footer />
        </div>







    );
}

export default App;
