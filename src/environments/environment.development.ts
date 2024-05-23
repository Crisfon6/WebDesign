export const environment = {
  production: true,
  editorBaseUrl: 'https://codi.link',
  principalCards: [
    {
      title: 'What is CSS?',
      description: `
      CSS stands for Cascading Style Sheets. It's a style sheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media types.`,
      color: '#3884ff',
    },
    {
      title: 'What is Html?',
      description: `
      HTML, known as Hypertext Markup Language, serves as the backbone of web development, providing a standardized structure for crafting web pages. This language employs elements, or tags, to organize and present content effectively.`,
      color: '#ff631ad0',
    },
  ],
  topics: [
    {
      name: 'css-grid',
      title: 'CSS Grid',
      description: 'CSS Grid is a layout system in CSS (Cascading Style Sheets) that allows web developers to create complex grid-based layouts with ease. It provides a two-dimensional grid-based layout system, with rows and columns, making it easier to design web pages without having to rely on floats and positioning.',
      icon: 'dashboard',
      path: 'css-grid',
      card: {
        title: 'What is CSS Grid?',
        description:
          'CSS Grid is a layout system in CSS (Cascading Style Sheets) that allows web developers to create complex grid-based layouts with ease. It provides a two-dimensional grid-based layout system, with rows and columns, making it easier to design web pages without having to rely on floats and positioning.',
        color: '#3884ff'
      },
      exercises: [
        {
          id: 1,
          name: 'Exercise 1',
          html: `<section class="container-result">
          <div>1dasdasdashgrunraoeide</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </section>`,
          css: `.container-result {
            background: lightsalmon;
            border: 3px solid #000;
            border-radius: 10px;
            display: grid;
            grid-template-columns: minmax(100px, 1fr) 1fr 1fr;
            grid-template-rows: repeat(3, 100px)
          }
          .container-result div {
            background: lightblue;
            border: 2px solid #08f;
            border-radius: 6px;
            margin-bottom: 5%
          }
          `,
          js: ``,
          icon: 'dashboard'
        },
        {
          name: 'Exercise 2',
          id: 2,
          html: `
      <div>
          <aside>Barra lateral
              <ul>
                  <li>Play</li>
                  <li>Search</li>
              </ul>
          </aside>
          <main>Main content</main>
      </div>
      `,
          css: `
        * {
            margin: 0;
            padding: 0;
        }
        div {
            display: grid;
            grid-template-columns: minmax(100px, 1fr) 5fr;
        }
        aside {
            border: 1px solid red;
            height: 100vh;
        }
        main {
            border: 1px solid blue;
        }`,
          js: ``,
          icon: 'dashboard'
        },
        {
          name: 'Exercise 3',
          id: 3,
          html: `
          <div>
          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">

          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">

          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">

          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">

          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">

          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">

          <img src="https://c8.alamy.com/compes/pm83gb/los-vengadores-de-marvel-2012-poster-pm83gb.jpg" alt="">
      </div>

      `,
          css: `
          div {
            display: grid;
            grid-template-columns: repeat( auto-fill, minmax(100px, 1fr));
            gap: 16px;
            // max-width: 500px;
            width: 100%;
            margin: 0 auto;
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }`,
          js: ``,
          icon: 'dashboard'
        },
        {
          name: 'Exercise 4',
          id: 4,
          html: `
          <!-- the section have display :block by default-->
          <section class="container">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
          </section>
      `,
          css: `
          .container {
            background: lightsalmon;
            border: 3px solid black;
            border-radius: 10px;
            display: grid;
            grid-template-columns: minmax(100px, 1fr) 1fr 1fr;
            grid-auto-rows: 100px;
            padding: 4px;
            gap: 16px;
        }

        .container div {
            background: lightblue;
            border: 2px solid #09f;
            border-radius: 6px;
        }

        .container div:first-child {
            background: lightgreen;
            border: 2px solid green;
            grid-column: 2 / 3;
            grid-row: 1 / 3;
        }

        .container div:nth-child(2) {
            background: lightcyan;
            border: 2px solid cyan;
            // grid-column-start: span 3;
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            opacity: .5;
        }`,
          js: ``,
          icon: 'dashboard'
        },
        {
          name: 'Exercise 5',
          id: 5,
          html: `
      <section class="container">
          <header>header</header>
          <aside>aside</aside>
          <main>content</main>
          <footer>footer</footer>
      </section>
      `,
          css: `
          .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 40px 1fr 100px;
            min-height: 100vh;
            grid-template-areas: "header header sidebar" "content content content" "footer footer footer";
        }

        @media (width > 400px) {
            .container {
                grid-template-areas: "header header ." "sidebar content content" "footer footer footer";
            }
        }

        .container header {
            background: #09f;
            // grid-column: 1/-1;
            grid-area: header;
        }

        .container aside {
            background: yellow;
            grid-area: sidebar;
        }

        .container main {
            background: red;
            // grid-column: 2/-1;
            grid-area: content;
        }

        .container footer {
            background: gray;
            // grid-column: 1/-1;
            grid-area: footer;
        }`,
          js: ``,
          icon: 'dashboard'
        },
        {
          name: 'Exercise 6',
          id: 6,
          html: `
          <!-- the section have display :block by default-->
          <section class="container">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
          </section>
      `,
          css: `
          //El content es todo lo que esta y se mueve como un bloque
          // y el item es cada uno de lo elementos que esta en el bloque
          .container {
              background: lightsalmon;
              border: 3px solid black;
              border-radius: 10px;
              display: grid;
              grid-auto-rows: 50px;
              // grid-template-columns: repeat(3, 1fr);
              grid-template-columns: repeat(3, 50px);
              gap: 4px;
              height: 300px;
              justify-items: start; //center in the grid justify in X
              align-items: center; //align items in Y
              width: 300px;
              // justify-content: center;      align-content: center;
              place-content: center;
          }

          .container div {
              background: lightblue;
              border: 2px solid #09f;
              border-radius: 6px;
          }

          .container div:first-child {
              background: lightgreen;
              border: 2px solid green;
              justify-self: center;
          }

          .container div:nth-child(2) {
              background: lightcyan;
              border: 2px solid cyan;
              align-self: end;
              justify-self: stretch;
          }`,
          js: ``,
          icon: 'dashboard'
        }
      ]
    },
    {
      name: 'flexbox',
      title: 'FlexBox',
      description: `Is a CSS layout model that allows for the alignment and distribution of space within a container element. It's a one-dimensional layout method that arranges items in rows or columns, with items expanding to fill extra space or shrinking to fit into smaller spaces.`,
      icon: 'aspect_ratio',
      path: 'flexbox',
      card: {
        title: 'What is FlexBox?',
        description:
          `Is a CSS layout model that allows for the alignment and distribution of space within a container element. It's a one-dimensional layout method that arranges items in rows or columns, with items expanding to fill extra space or shrinking to fit into smaller spaces.`,
        color: '#3884ff'
      },
      exercises: [
        {
          id: 1,
          name: 'Exercise 1',
          html: `<body>
          <nav>
            <ul>
              <li><a href="#">Menu 1</a></li>
              <li><a href="#">Menu 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae est doloribus, vero hic
                  quaerat quod eos id obcaecati. Soluta.</a></li>
              <li><a href="#">Menu 3</a></li>
            </ul>
          </nav>

        </body>
        `,
          css: `body {
            background-color: black;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: inherit
        }

        ul {
            background-color: white;
            list-style: none;
            margin: 0;
            padding: 0;
            height: 5rem;
        }

        li {
            background-color: chocolate;
            color: white;
            border: dashed black;
            padding: .3rem .7rem;
        }

        li:nth-child(2) {
            font-size: 2rem;
        }

        //justify-content : acomoda los elementos en el eje principal.
        //align-items : acomoda los elementos en el eje cruzado(el secundario)
        // align-content: acomoda el espacio residual entra la filas de elementos creados con el wrap
        //la palabra safe ayuda a no ocultar informacion de nuestro html cuando acomodemos elementos
        ul {
            display: flex;
            flex-wrap: wrap;
            align-content: safe center;
            row-gap: 0.3rem;
            column-gap: 0.3rem;
            // align-items: center;
            // justify-content: center;
            // align-items: baseline; //baseline acomoda los elementos a la linea base de la fuente
            // align-items: last baseline; //baseline acomoda los elementos a la linea base de la fuente de la ultima fila de la frase
            // align-items: flex-end;
            // align-items: flex-start;
            // flex-flow: row wrap; //row specify the principal axis  wrap use for use multiples lines
            // flex-wrap: wrap-reverse;
            // justify-content: space-evenly;
            // justify-content: start; //esto siempre pone a la izquierda del navegador
            // justify-content: flex-start; //esto lo pone al inicio del eje principal del flex
            // justify-content: space-between; //parte el espacio residual entre  los elementos
            // justify-content: space-around; //distribuye el espacio  en todo el contenedor, al inicio y al final pone la mitad del espacio que pondria entre cada elemento
            // justify-content: space-evenly; //pone el mismo espacio al inicio al final y entre elementos
        }

          `,
          js: ``,
          icon: 'dashboard'
        },
        {
          id: 2,
          name: 'Exercise 2',
          html: `<body>
          <nav>
              <ul>
                  <li><a href="">Menu 1</a></li>
                  <li><a href="">Menu 2</a></li>
                  <li><a href="">Menu 3</a></li>
              </ul>
          </nav>

      </body>

        `,
          css: `body {
            background-color: black;
            font-family: sans-serif;
        }

        a {
            text-decoration: none;
            color: inherit
        }

        ul {
            background-color: white;
            list-style: none;
            margin: 0;
            padding: 0;
            height: 5rem;
        }

        li {
            background-color: chocolate;
            color: white;
            border: dashed black;
            padding: .3rem .7rem;
        }

        //justify-content : acomoda los elementos en el eje principal.
        //align-items : acomoda los elementos en el eje cruzado(el secundario)
        // align-content: acomoda el espacio residual entra la filas de elementos creados con el wrap
        //la palabra safe ayuda a no ocultar informacion de nuestro html cuando acomodemos elementos
        ul {
            display: flex;
            align-items: flex-start;
        }

        li:nth-child(2) {
            align-self: flex-end;
        }

        //     //order: 0;
        //     //  flex-grow: 1;
        //     flex-shrink: 1;
        // }
        // li:nth-child(1) {
        //     //order: 1;
        //     //  flex-grow: 2;
        // }
          `,
          js: ``,
          icon: 'dashboard'
        },
        {
          id: 3,
          name: 'Exercise 3',
          html: `<body>
          <nav>
              <ul>
                  <li>
                      <img src="/assets/img/lambo.jpg" alt="" aspect-ratio="1280:853">
                      <!-- <a href="#">Menu 1</a> -->
                  </li>

                  <li>
                      <img src="/assets/img/lambo.jpg" alt="" aspect-ratio="1280:853">
                      <!-- <a href="#">Menu 2</a> -->
                  </li>
                  <li>
                      <img src="/assets/img/lambo.jpg" alt="" aspect-ratio="1280:853">
                      <!-- <a href="#">Menu 3</a> -->
                  </li>
              </ul>
          </nav>

      </body>

        `,
          css: `body {
            background-color: black;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: inherit
        }

        ul {
            background-color: white;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            background-color: chocolate;
            color: white;
            border: dashed black;
            padding: .3rem .7rem;
        }

        //justify-content : acomoda los elementos en el eje principal.
        //align-items : acomoda los elementos en el eje cruzado(el secundario)
        // align-content: acomoda el espacio residual entra la filas de elementos creados con el wrap
        //la palabra safe ayuda a no ocultar informacion de nuestro html cuando acomodemos elementos
        ul {
            display: flex;
        }

        li {
            //   flex-grow: 0; //Esto hace que los hijos tomen todo el espacio residual
            // flex-basis: 5rem; //espcifica el tamano del contenido antes de que el espacio residual se distribuya
            flex-grow: 1;
            flex-shrink: 1;
        }

        li:nth-child(2) {
            flex-shrink: 3;
        }

        img {
            width: 100%;
            aspect-ratio: "1280:853";
        }

        //order: ordena los elementos los negativos son los primeros
        // li:nth-child(3) {
        //     //  order: -1;
        //     // flex-grow: 2;
        // }
        // li:nth-child(2) {
        //     //order: 0;
        //     //  flex-grow: 1;
        //     flex-shrink: 1;
        // }
        // li:nth-child(1) {
        //     //order: 1;
        //     //  flex-grow: 2;
        // }
          `,
          js: ``,
          icon: 'dashboard'
        },
        {
          id: 4,
          name: 'Exercise 4',
          html: `<body>
          <nav>
              <ul>
                  <li>
                      <img src="/assets/img/lambo.jpg" alt="" aspect-ratio="1280:853">
                      <!-- <a href="#">Menu 1</a> -->
                  </li>

                  <li>
                      <img src="/assets/img/lambo.jpg" alt="" aspect-ratio="1280:853">
                      <!-- <a href="#">Menu 2</a> -->
                  </li>
                  <li>
                      <img src="/assets/img/lambo.jpg" alt="" aspect-ratio="1280:853">
                      <!-- <a href="#">Menu 3</a> -->
                  </li>
              </ul>
          </nav>

      </body>

        `,
          css: `body {
            background-color: black;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: inherit
        }

        ul {
            background-color: white;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            background-color: chocolate;
            color: white;
            border: dashed black;
            padding: .3rem .7rem;
        }

        //justify-content : acomoda los elementos en el eje principal.
        //align-items : acomoda los elementos en el eje cruzado(el secundario)
        // align-content: acomoda el espacio residual entra la filas de elementos creados con el wrap
        //la palabra safe ayuda a no ocultar informacion de nuestro html cuando acomodemos elementos
        ul {
            display: flex;
        }

        li {
            //   flex-grow: 0; //Esto hace que los hijos tomen todo el espacio residual
            // flex-basis: 5rem; //espcifica el tamano del contenido antes de que el espacio residual se distribuya
            flex-grow: 1;
            flex-shrink: 1;
        }

        li:nth-child(2) {
            flex-shrink: 3;
        }

        img {
            width: 100%;
            aspect-ratio: "1280:853";
        }

        //order: ordena los elementos los negativos son los primeros
        // li:nth-child(3) {
        //     //  order: -1;
        //     // flex-grow: 2;
        // }
        // li:nth-child(2) {
        //     //order: 0;
        //     //  flex-grow: 1;
        //     flex-shrink: 1;
        // }
        // li:nth-child(1) {
        //     //order: 1;
        //     //  flex-grow: 2;
        // }
          `,
          js: ``,
          icon: 'dashboard'
        },
        {
          id: 5,
          name: 'Exercise 5',
          html: `<body>
          <div class="contenedor-general">
              <nav>
                  <ul>
                      <li><a href="">Menu 1</a></li>
                      <li><a href="">Menu 2</a></li>
                      <li><a href="">Menu 3</a></li>
                  </ul>
              </nav>
              <div class="contenedor-central">
                  <aside>
                      <h2>Menu lateral</h2>
                  </aside>
                  <main>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at possimus! Hic quia earum ea unde expedita mollitia facilis, quidem quisquam quam nobis aliquam a quo! Voluptatum nobis totam quidem aliquam impedit harum dolorem delectus,
                          ducimus autem dolore maiores itaque veniam omnis ut, inventore corrupti quasi. Ut aperiam corporis nesciunt!</p>
                  </main>
              </div>
              <footer>
                  <h2>Pie de página</h2>
              </footer>
          </div>
      </body>

        `,
          css: `body {
            background-color: white;
        }

        a {
            text-decoration: none;
            color: inherit;
            font-family: sans-serif;
        }

        ul {
            background-color: lightgray;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            color: rgb(52, 52, 52);
            padding: 0.3rem .7rem;
        }

        li:hover {
            background-color: rgb(52, 52, 52);
            color: white;
        }

        ul {
            display: flex;
            justify-content: flex-end;
        }

        aside {
            background-color: aqua;
        }

        main {
            background-color: orange;
        }

        footer {
            background-color: greenyellow;
        }

        .contenedor-general {
            display: flex;
            flex-direction: column;
            height: 50vh;
        }

        .contenedor-central {
            flex: 1;
            display: flex;
        }

        .contenedor-central>aside {
            flex-basis: 30rem;
        }

        @media (width<1024px) {
            li {
                flex-grow: 1;
            }
        }

        @media (width<480px) {
            ul {
                flex-direction: column;
            }
            .contenedor-central {
                flex-direction: column-reverse;
            }
            .contenedor-central>aside {
                flex-basis: auto;
            }
            .contenedor-central>main {
                flex-grow: 1;
            }
        }
         `,
          js: ``,
          icon: 'dashboard'
        },
      ]
    },
    {
      name: 'flex-grid',
      title: 'Flexbox & Css Grid',
      path:'flex-grid',
      description: '',
      icon: 'description',
      card: {
        description: 'By combining CSS Grid and Flexbox, you achieve the best of both worlds. Use Grid for overarching structure, dividing your layout into sections, while Flexbox handles the intricate alignment and spacing within those sections.',
        title: 'Unlock the Power of CSS Grid and Flexbox 🦄',
        color: '#ff006e',
      },
      exercises: [
        {
          id: 1,
          name: 'Exercise 1',
          html: `<h1 class="title">Example:</h1>

          <body>
              <div class="contenedor-general">
                  <nav>
                      <ul>
                          <li><a href="">Menu 1</a></li>
                          <li><a href="">Menu 2</a></li>
                          <li><a href="">Menu 3</a></li>
                      </ul>
                  </nav>
                  <div class="contenedor-central">
                      <aside>
                          <h2>Menu lateral</h2>
                      </aside>
                      <main>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at possimus! Hic quia earum ea unde expedita mollitia facilis, quidem quisquam quam nobis aliquam a quo! Voluptatum nobis totam quidem aliquam impedit harum dolorem delectus,
                              ducimus autem dolore maiores itaque veniam omnis ut, inventore corrupti quasi. Ut aperiam corporis nesciunt!</p>

                          <section class="contenedor-columnas">
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                          </section>
                          <section class="contenedor-columnas-grid">
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                              <article>
                                  <h2>Titulo</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error quos aperiam incidunt eveniet veniam nobis. Perferendis doloribus harum eveniet!</p>
                              </article>
                          </section>

                      </main>
                  </div>
                  <footer>
                      <h2>Pie de página</h2>
                  </footer>
              </div>
          </body>
          `,
          css:`body {
            background-color: white;
        }

        a {
            text-decoration: none;
            color: inherit;
            font-family: sans-serif;
        }

        ul {
            background-color: lightgray;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            color: rgb(52, 52, 52);
            padding: 0.3rem .7rem;
        }

        li:hover {
            background-color: rgb(52, 52, 52);
            color: white;
        }

        ul {
            display: flex;
            justify-content: flex-end;
        }

        aside {
            background-color: aqua;
        }

        main {
            background-color: orange;
        }

        footer {
            background-color: greenyellow;
        }

        .contenedor-general {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }

        .contenedor-central {
            flex: 1;
            display: flex;
        }

        .contenedor-central>aside {
            flex-basis: 30rem;
        }

        .contenedor-columnas {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .contenedor-columnas>* {
            background-color: white;
            flex-basis: 30%;
            flex-grow: 1;
        }

        .contenedor-columnas-grid {
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .contenedor-columnas-grid>* {
            background-color: white;
        }

        @media (width<1024px) {
            li {
                flex-grow: 1;
            }
        }

        @media (width<480px) {
            ul {
                flex-direction: column;
            }
            .contenedor-central {
                flex-direction: column-reverse;
            }
            .contenedor-central>aside {
                flex-basis: auto;
            }
            .contenedor-central>main {
                flex-grow: 1;
            }
            .contenedor-columnas-grid {
                grid-template-columns: 1fr;
            }
        }
        `,
        js:``,
        icon: 'dashboard'
        }
      ],
    }
  ]
};
