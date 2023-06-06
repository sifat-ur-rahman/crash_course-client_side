import React from 'react';

const Blog = () => {
    return (
        <div style={{marginTop: 90}} className=''>
            <div className='bg-opacity-25 bg-danger rounded'>
                <h2>what is cors?</h2>
                <p>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p>
            </div>
            <div className='bg-opacity-25 bg-danger rounded'>
                <h2>Why are you using firebase?</h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <h2> What other options do you have to implement authentication?</h2>
                <p>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
            </div>
            <div  className='bg-opacity-25 bg-danger rounded'>
                <h2>How does the private route work?</h2>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='bg-opacity-25 bg-danger rounded'>
                <h2> What is Node?</h2>
                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                <h2>How does Node work?</h2>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>

    );
};

export default Blog;