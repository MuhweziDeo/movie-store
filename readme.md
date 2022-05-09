<div id="top"></div>






<h3 align="center">movie store</h3>
<br/>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A simple application that displays and allows users to do a movie search

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Elastic Search](https://www.elastic.co/)
* [Nodejs (v16)](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://cloud.elastic.co/home](https://cloud.elastic.co/home) and [omdbapi.com](omdbapi.com)
2. Clone the repo
   ```sh
   git clone https://github.com/MuhweziDeo/movie-store
   ```
3. Install NPM packages for server
   ```sh
   cd server/
   npm install
   ```
   
4. create a `.env` file in `server` root and copy content from env.example
 ```sh
  OMDD_API_KEY=xx
  PORT=5000
  API_VERSION=1
  ELASTIC_CLOUD_ID=xx
  ELASTIC_PASSWORD=xx
  ELASTIC_USERNAME=xx
   ```
5. Start the server by running the command

  ```sh
  npm run dev
  ```
6.  Install dependencies in the client by running 

    ```sh
    cd client/
    ```
    ```sh
     npm install
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
- if you have created your own elastic cloud account please run the script ```npm run populateDB``` to populate elastic cloud with new records

- Visit client on http://localhost:3000/

- Type into the check box to show movies

<p align="right">(<a href="#top">back to top</a>)</p>









<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name https://github.com/MuhweziDeo

Project Link: [https://github.com/MuhweziDeo/movie-store](https://github.com/MuhweziDeo/movie-store)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [https://usehooks.com/useDebounce/](https://usehooks.com/useDebounce/)


<p align="right">(<a href="#top">back to top</a>)</p>

