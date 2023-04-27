import { useState, useEffect } from "react";

export default function ShortenApi() {
    let id;
    const [shortLink, setShortLink] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [linkCopied, setLinkCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    
    const postText = async() => {
        if(inputValue.trim().length >= 8 ){
            setIsLoading(true); // Set isLoading to true when API call starts
            const longText = {
               longURL: inputValue
            };

            const url = 'https://url-shortener-9nu1.onrender.com/shorten';

            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(longText) ,
                redirect: 'follow'
            };

            try {
                const response = await fetch(url, requestOptions);
                const data = await response.json();
                const shortURL = data.data.shortURL;
                setShortLink(() => shortURL);
                const parts = shortURL.split("/");
                const lastPart = parts.pop();
                id = lastPart;
            } catch (error) {
                console.error(error);
            } 
        }
    }

    const handleShorten = () => {
        postText();
        getText();
        setInputValue('');
    }

    const getText = async() => {
        const baseUrl = process.env.REACT_APP_baseUrl;
        // const baseUrl = 'https://url-shortener-9nu1.onrender.com/';
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        try {
            const response = await fetch(`${baseUrl}${id}`, requestOptions);
            const data = await response.json();
            // do something with the response
        } catch (error) {
            console.error(error);
        }
    }
        
    useEffect(() => {
         
        setIsLoading(false); // Set isLoading to false when API call is completed
    },[id])
                    
    console.log("..... ", shortLink); 

    const handleCopy = () => {
        navigator.clipboard.writeText(shortLink);
        setLinkCopied(true);
    
        setTimeout(() => {
            setInputValue('');
            setShortLink('');
            setLinkCopied(false);
            setIsLoading(false); // Reset isLoading state to false
        }, 3000);
    }
    
    
    return (
        <div className="input">
            {shortLink ? (
            <>  
                <div className="newLink">

                <a href={shortLink} target="_blank">{shortLink}</a>
                </div>
                <button onClick={handleCopy}>{linkCopied ? "Copied!" : "Copy"}</button>
            </>
            ) : (
                <>
                    <input
                    type="text"
                    placeholder="Type or paste link"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading} // Disable input field while API call is in progress
                    />
                    <button onClick={handleShorten} disabled={isLoading}>
                    {isLoading ? "..." : "Shorten"} {/* Change button*/}
                    </button>
                </>
            )}
        </div>
    )
}
