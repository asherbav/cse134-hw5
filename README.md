# cse134-hw5
- Name: Asher Av
- PID: A16047586
- Netlify: https://clever-duckanoo-d5453b.netlify.app/
- Notes:
  - Part 1 methodtest.html:
    - JavaScript for methodtest.html is found in the Tests.js and Methods.js
    - Tests.js is the src javascript file for methodtest.html:
      -  Contains eventListeners and references to ids
      -  imports functions from Methods.js and exports id references to Methods.js
    - Methods.js contains function implementation:
      -  imports id references from Tests.js and exports functions to Tests.js
    - Console logs when a request is sent and/or received, timeout occurs after 15s 
    - Output appears at the bottom before the footer after clicking button 
      - Displays the response URL
      - Displays the responseText inside a pre tag
    - GET/DELETE just use the record_id field for the query URL
    - POST/PUT use all four fields
    - Post
      - Sends an encoded id, name, body, and date to https://httpbin.org/post 
      - Associated with postRequest() and handlePost() functions
    - Get
      - Empty body, but sets the query URL to https://httpbin.org/get?record_id=${val}&
      - Associated with getRequest() and handleGet() functions
    - Put
      - Sends an encoded id, name, body, and date to https://httpbin.org/put
      - Associated with putRequest() and handlePut() functions
    - Delete
      - Empty body, but sets the query URL to https://httpbin.org/delete?record_id=${val}&
      - Associated with deleteRequest() and handleDelete() functions
  - Part 2 webcomponent.html: 
    - JavaScript found in ButtonCount.js file