// "use strict";

const { render } = ReactDOM

render(
    <h1 id="title"
        class="header"
        style={{
            background: 'orange',
            color: 'white',
            fontFamily: 'verdana'
        }}>
        Hello World
    </h1>
    document.getElementById('react-container')
)