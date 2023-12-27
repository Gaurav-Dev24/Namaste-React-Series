<details>
  <summary>Html Interview Questions</summary>

  <details>
    <summary>1. What is Html? </summary>

- HTML stands for **HyperText Markup Language**. It defines the structure of the data that will be rendered on the browser in a webpage.

- It is a standard text formatting language used for developing web pages **released in 1993**.

- The latest version of HTML is HTML5. There are two main components in HTML language, **Tags** and **Attributes**.
</details>

---

  <details>
    <summary>2. State the difference between HTML and XHTML. </summary>

| **HTML**                                                                                                                                      | **XHTML**                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HTML stands for **HyperText Markup Language**. It was developed by Tim Berners-Lee.                                                           | XHTML stands for **Extensible Hypertext Markup Language**. It was developed by W3C i.e.lowercase World Wide Web Consortium.                                  |
| **It was developed in 1991**. It is **extended from SGML**. All **tags and attributes are not necessarily to be in lower or upper case**.     | **It was released in 2000**. It is **extended from XML and HTML**. In this, **every tag and attribute should be in lower case**.                             |
| The **format is a document file format**. **Doctype is not necessary to write at the top**. The used filename **extensions are .html, .htm**. | The **format is a markup language**. **Doctype is very necessary to write at the top of the file**. The used Filename **extensions are .xhtml, .xht, .xml**. |
| It is **not necessary to close the tags in the order they are opened**.                                                                       | It is **necessary to close the tags in the order they are opened**.                                                                                          |

</details>

---

  <details>
    <summary>3. State the difference between Elements and Tags?</summary>

| Elements                                                                                                                                                                                | Tags                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| An element **consists of an opening tag, content, and a closing tag**. It represents a complete, structured unit within an HTML document.                                               | A tag is a **fundamental building block of HTML**.Tags are used to define HTML elements.                         |
| Elements can be as **simple as a pair of tags or it can include content between the opening and closing tags.** Ex- &lt;p&gt; &lt;/p&gt;, &lt;p&gt;This is a paragraph&lt;/p&gt;        | Tags are represented by angle brackets `("<" and ">")`.**Tags come in pairs: an opening tag and a closing tag**. |
| Elements can also have attributes that provide additional information about the element.                                                                                                | **Opening tag:** &lt;tagname&gt; . **Closing tag:** &lt;/tagname&gt;                                             |
| **Example of an element with content:** &lt;p&gt;This is a paragraph&lt;/p&gt;. **Example of an element without content (empty element):** &lt;img src="image.jpg" alt="An image" /&gt; | **Example**: &lt;p&gt; (opening tag), &lt;/p&gt; (closing tag)                                                   |

</details>

---

  <details>
    <summary>4. What are Attributes in tags? </summary>

- Attributes provide additional information about HTML elements and are used within the opening tag of an element.

- Attributes are always included in the opening tag and are written as name/value pairs.

  ```html
  <tagname attribute="value">Content</tagname>
  ```

- Attributes can be used to modify the behavior or appearance of an element. Different elements support different attributes.
  ```html
  <a href="https://www.example.com">Visit Example.com</a>
  ```
- Some of the **common attributes are id, class, src, href, alt** etc.
</details>

---

  <details>
    <summary>5. What are void elements in HTML?</summary>

- HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example
  ```html
  <br />, <img />,
  <hr />
  <input /> <meta />, <link />, etc
  ```
- Void elements, also known as self-closing or empty elements, are HTML elements that do not have any content between an opening tag and a closing tag.

  </details>

---

  <details>
    <summary>6. What are Meta tags? </summary>

- Meta tags in HTML provide metadata about the HTML document. Metadata is information about data, and in the context of HTML.

- Meta tags convey information about the document itself, such as character encoding, page description, keywords, viewport settings, and more.

- Meta tags are placed within the &lt;head&gt; section of an HTML document.
- Here are some common meta tags and their purposes: - `<meta charset="UTF-8">` --> **Specifies the character encoding for the document**. In this example, it's set to UTF-8, which is a widely used character encoding for displaying various characters and symbols.

      - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` --> **Defines the viewport properties, especially important for responsive web design**. It ensures that the page is displayed properly on different devices and screen sizes.

      - `<meta name="description" content="A brief description of the page">` --> **Provides a concise description of the HTML document**. This description may be used by search engines when displaying search results.

      - `<meta name="keywords" content="keyword1, keyword2, keyword3">` --> **Specifies a comma-separated list of keywords relevant to the content of the page**. This information was historically used by search engines for indexing.

      - `<meta name="author" content="Author Name">` --> **Identifies the author of the document.**
      - `<meta http-equiv="refresh" content="5;url=https://example.com/">` --> **Redirects the browser to another URL after a specified number of seconds (in this example, 5 seconds).**

  </details>

---

  <details>
    <summary>7. State the difference between HTML and HTML5. </summary>

| HTML                                                                                                                  | HTML5                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| It **didn’t support &lt;audio&gt; and &lt;video&gt; without the use of Flash player support.**                        | It **supports audio and video controls with the use of &lt;audio&gt; and &lt;video&gt; tags.**                                  |
| It **uses cookies to store temporary data**. **Does not allow JavaScript** to run in the browser.                     | It uses **SQL databases and application cache to store offline data**.                                                          |
| **Not possible to draw shapes** like circles, rectangles, triangles, etc.                                             | **Allows JavaScript to run in the background**. This is possible due to JS Web worker API in HTML5.                             |
| Elements like **nav** and **header** were not present. The **doctype declaration is too long and complicated**.       | **HTML5 allows drawing shapes** like circles, rectangles, triangles, etc.                                                       |
| **Vector graphics are possible in HTML with the help of various technologies** such as VML, Silver-light, Flash, etc. | New elements for web structure like **nav**, **header**, **footer**, etc. The **doctype declaration is quite simple and easy**. |
| It **does not allow drag-and-drop effects**.                                                                          | **Vector graphics is additionally an integral part** of HTML5 like **SVG** and **canvas.**                                      |

</details>

---

  <details>
    <summary>8. What are HTML entities? </summary>

- HTML entities is essential when you want to display reserved characters or characters with special meanings in HTML without triggering their associated behaviors.

- HTML entities are used to ensure that the browser correctly interprets and displays characters, even if they are reserved characters in HTML markup.

- Some common HTML entities are `&lt`, `&gt`, `&amp;euro`, `&apos` and `&quot` etc.
</details>

---

  <details>
    <summary>9. Difference between Inline and Block Elements in Html? </summary>

| **Inline**                                                                                                                                     | **Block**                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inline elements do not start on a new line and only take up as much width as necessary. They do not force a new line to begin after them.**. | **Block-level elements typically start on a new line and take up the full width available, extending the entire width of their container**. |
| Inline elements flow within the content and appear next to each other horizontally..                                                           | Block-level elements create a "block" or a rectangular box in the document flow, stacking vertically on top of each other.                  |
| Examples :- `<span>`, `<a>`, `<img>`, `<br>`,`<input>`, `<strong>` and `<em>` etc.                                                             | Examples :- `<div>`, `<p>`, `<h1> to <h6>`, `<ul>`,`<ol>`, `<li>`, `<table>` and `<form>` etc.                                              |
| **Inline elements cannot contain block-level elements but can contain other inline elements**.                                                 | **Block-level elements can contain other block-level and inline elements**.                                                                 |

</details>

---

  <details>
    <summary>10. What is the difference between &lt; figure &gt; tag and &lt; img &gt; tag? </summary>

| **Figure**                                                                                                                                                                                               | **Img**                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The `<figure>` tag is used to **group together an image `(<img>)` and its caption** `(<figcaption>)`.                                                                                                    | The `<img>` (image) tag is **used to embed images in an HTML document**. It is a **void or self-closing tag, meaning it does not have a closing tag**.                                                                                                     |
| It **provides semantic meaning to the relationship between the image and its associated content**.                                                                                                       | The **src** attribute of the `<img>` tag specifies the **source (URL or file path) of the image**. Additional attributes, such as **alt** for **alternative text**, **width**, **height**, and others, can be used to provide information about the image. |
| It is a **block-level element**. **Example :-** &lt;figure&gt;&lt;img src="image.jpg" alt="An example image" /&gt;&lt;figcaption&gt;This is the caption for the image.&lt;/figcaption&gt;&lt;/figure&gt; | Example :- &lt;img src="image.jpg" alt="An example image" /&gt;                                                                                                                                                                                            |

  </details>

---

  <details>
    <summary>11. Difference between &lt; link &gt; and &lt; a &gt; tag.</summary>

| **"a" tag (Anchor Tag)**                                                                                                                                                                      | **link tag**                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The `<a>` tag is **primarily used to create hyperlinks**, allowing users to navigate to other pages or resources.                                                                             | **The `<link>` tag is used to include external resources and define relationships between the current document and external resources**. It is commonly used to link external stylesheets, icons, and other resources. |
| **It can be used to link to external resources (other websites) or internal resources (other pages within the same website)**. The **href** attribute is used to specify the destination URL. | **It is often placed within the `<head>` section of an HTML document**. Common attributes include rel (relationship), href (URL of the external resource), and type (the MIME type of the resource).                   |
| The `<a>` tag can also be used to **create links within the same page using the fragment identifier (#)** to target an element with a specific id attribute.                                  | Row 3, Col 2                                                                                                                                                                                                           |
| Example :- `<a href="https://www.example.com">Visit Example.com</a>`                                                                                                                          | Example :- `<link rel="stylesheet" href="styles.css" />`                                                                                                                                                               |

  </details>

---

  <details>
    <summary>12. What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element? </summary>

| **display: none**                                                                                                                                                   | **visibility: hidden**                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The display: none property removes the element from the normal document flow, and it effectively hides the element completely**.                                  | **The visibility: hidden property hides the element while still maintaining its position in the layout. The element is not visible, but it still occupies space in the document flow.** |
| The **hidden element takes up no space in the layout, meaning it doesn't affect the positioning of surrounding elements** as if it were not in the document at all. | The hidden **element is not rendered, but it still affects the layout as if it were visible.** Child elements within the hidden element are also hidden.                                |
| **Child elements within the hidden element are also hidden.** The element is not rendered, and it cannot be interacted with by the user.                            | **The element is not visible, but it is still part of the document structure and can potentially be interacted with by the user through scripting.**                                    |
| Example :- .hidden-element {display: none;}                                                                                                                         | Example :- .hidden-element {visibility: hidden;}                                                                                                                                        |

</details>

---

  <details>
    <summary>13. How do you create nested web pages in HTML? </summary>

- **Creating nested web pages using iframes in HTML involves embedding one HTML document within another using the `<iframe>`tag. Here's an example:-**

**parent.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Parent Page</title>
  </head>
  <body>
    <h1>Parent Page</h1>
    <p>This is the content of the parent page.</p>

    <!-- Use an iframe to embed the child page -->
    <iframe src="child.html" width="600" height="400"></iframe>
  </body>
</html>
```

- **child.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Child Page</title>
  </head>
  <body>
    <h1>Child Page</h1>
    <p>This is the content of the child page.</p>
  </body>
</html>
```

- **Creating nested web pages using iframes in HTML involves embedding one HTML document within another using the `<iframe>`tag. Here's an example:-**

- The &lt;embed&gt; tag in HTML is used for embedding external applications which are generally multimedia content like audio or video into an HTML document.

- It is used as a container for embedding plug-ins such as flash animations. This tag is a new tag in HTML 5, and it requires only starting tag.

- **embed**

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>embed Tag</title>
      <style>
        q {
          color: #00cc00;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <q>GeeksforGeeks</q> is loading.
      <br />
      <embed src="loading2.swf" type="application/x-shockwave-flash" />
    </body>
  </html>
  ```

  </details>

---

  <details>
    <summary>14. What is the use of the target attribute in the &lt;link&gt; tag? </summary>

- The HTML &lt;link&gt; **target Attribute** is used to specify the **window or a frame where the linked document is loaded**. It is not supported by HTML 5.

  ```html
  <link target="_blank|_self|_parent|_top|framename" />
  ```

- Attribute Values :-
- **\_blank**: It opens the link in a new window.
- **\_self**: It opens the linked document in the same frame.
- **\_parent**: It opens the linked document in the parent frameset.
- **\_top**: It opens the linked document in the full body of the window.
- **framename**: It opens the linked document in the named frame.

  </details>

---

  <details>
    <summary>15. What are semantic elements? </summary>

- Semantic Elements have meaningful names which tell about the type of content. For instance header, footer, table, … etc.

- HTML5 introduces many semantic elements as mentioned below

- **article**: It contains independent content which doesn’t require any other context.
- **aside**: It is used to place content in a sidebar i.e. aside from the existing content.
- **details**: It defines additional details that the user can hide or view.
- **figure & figcaption**: It is used to add an image to a web page with a small description.
- **footer**: It is located at the bottom of any article or document, they can contain contact details, copyright information, etc.
- **header**: It is used for the header of a section introductory of a page.
- **main**: It defines the main content of the document.
- **mark**: It is used to highlight the text.
- **nav**: It is used to define a set of navigation links in the form of a navigation bar or nav menu.
- **section**: A page can be split into sections like Introduction, Contact Information, Details, etc and each of these sections can be in a different section tag.
</details>

---

  <details>
    <summary>16. What is HTML Canvas? </summary>

- The HTML **“canvas”** element is **used to draw graphics via JavaScript**.

- The **“canvas” element is only a container for graphics**. One must use JavaScript to actually draw the graphics.

- Canvas has **several methods for drawing paths, boxes, circles, text, and adding images**.

- The **canvas would be a rectangular area on an HTML page**. By default, a **canvas has no border and no content**.

- An **id attribute** has been specified to refer to it in a script, and a **width and height attribute** to define the size of the canvas. The **style attribute** is used to add a border.

- **CANVAS**

```html
<!DOCTYPE html>
<html>
  <body>
    <canvas
      id="myCanvas"
      width="400"
      height="200"
      style="border:2px solid #000000;"
    >
    </canvas>
  </body>
</html>
```

  </details>

---

  <details>
    <summary>17. What are web storage APIs? </summary>

- **SessionStorage** and **LocalStorage** are known as the **web storage API**. Data can be stored on the client side by using these APIs.

| SessionStorage                                                                                                                                                     | LocalStorage                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SessionStorage is **used for storing data on the client side**. **Maximum limit of data saving in SessionStorage is about 5 MB**.                                  | Like SessionStorage, LocalStorage also **. **Maximum limit of data saving is about 5 MB in LocalStorage also\*\*.                                                                |
| **Data in the SessionStorage exist till the current tab is open** if we close the current tab then our data will also erase automatically from the SessionStorage. | LocalStorage has **no expiration time, Data in the LocalStorage persist till the user manually delete it**. This is the only difference between LocalStorage and SessionStorage. |

</details>

---

---

  <details>
    <summary>18. What are the new input types in HTML5 for forms? </summary>

## The following are the new input types in HTML5 for forms:

- **date -** Allows the user to select a date.

  ```html
  <input type="”date”" />
  ```

- **datetime -** Allows the user to select date and time using UTC date and time format.

  ```html
  <input type="”datetime”" />
  ```

- **datetime-local -** To select the date and time as per the local time.

  ```html
  <input type="”datetime-local”" />
  ```

- **month -** Select month and year.

  ```html
  <input type="”month”" />
  ```

- **time -** The time of day.

  ```html
  <input type="”time”" />
  ```

- **week -** Enables you to select the week and year.

  ```html
  <input type="”week”" />
  ```

- **color -** Enables you to enter a simple color value.

  ```html
  <input type="”color””" />
  ```

- **email -** Validates the input using the standard email format.

  ```html
  <input type="”email”" />
  ```

- **search -** Searches a data set.

  ```html
  <input type="”search”" />
  ```

- **number -** Accepts only numbers.

  ```html
  <input type="”number”" />
  ```

- **url -** Accepts only URLs.

  ```html
  <input type="”url”" />
  ```

  </details>

---

  <details>
    <summary>19. Explain an image map in HTML. </summary>

- An image map is **defined by the &lt;map&gt; tag**. Using this the image map tag, **we can linking the different web pages using a single image**. We can add one or more clickable areas in a single image using &lt;area&gt; tags.
</details>

---

  <details>
    <summary>20. What is the use of the figure tag in HTML 5? </summary>

- The &lt;figure&gt; tag **identifies self-contained content related to the main content. It adds self-contained content like photos, diagrams, illustrations, etc**.

- The figure, its caption, and its contents are referenced as a single unit from the main flow of the document.

- The **&lt;figure&gt; tag has two elements img src and figcaption**. **Img src is used for adding image sources in a document**, while **figcaption sets the caption of an image**.

```html
<figure>
      <img src="pancakes.jpg" alt="Blueberry Pancakes" />     
  <figcaption>A Stack of Blueberry Pancakes</figcaption>
</figure>
```

  </details>

---

  <details>
    <summary>21. What is a datalist tag? </summary>

- The &lt;datalist&gt; tag provides autocomplete feature in the HTML files. **It enables users to add the autocomplete form based on the predefined options**.

- It can be **used with an input tag so users can easily fill the data in the forms using predefined options**.

```html
<label for="car">Choose your car from the list:</label>
<input list="cars" name="car" id="car" />
<datalist id="cars">
    
  <option value="Honda">  </option>
  <option value="Hyundai">  </option>
  <option value="Maruti">  </option>
  <option value="Audi">  </option>
  <option value="BMW"></option>
</datalist>
```

  </details>

---

  <details>
    <summary>22. Why is the required attribute used in HTML5? </summary>

- This **attribute is mainly used for form validation**. Before submitting the form, **it compels the user to enter text in the text area or text field**.
</details>

---

  <details>
    <summary>23. What is the use of Geolocation API in HTML5? </summary>

- One of the **best HTML5 APIs is Geolocation API** which is **used to determine the geographical location of the user for a web application**.

- With HTML5, you can **now browse to the visitor’s current website’s latitude and longitude coordinates**.

- These **coordinates can be recorded by JavaScript and sent to the server, allowing it to display your position on the page**.

- The geolocation API is used with **navigation.geolocation object**. A Geolocation object that **contains the user’s location information and can produce a customized result is returned via the read-only property of the object**.

- **Syntax -**

```javascript
var geoLocation = navigator.geolocation;
```

  </details>

---

  <details>
    <summary>24. What is the benefit of collapsing the white space in HTML? </summary>

- **White space** is a term **used to describe empty or blank values in the code the browser reads and displays**. The collapsing of these white spaces is a unique characteristic of HTML.

- The **advantage of this feature is in its ability to reduce the time of transmitting data between server and client by removing unused bytes taken up by the white spaces**.

- If you **accidentally leave excess white space, the browser will disregard it and perfectly display the UI**.
</details>

---

  <details>
    <summary>25. What is an SVG tag in HTML? Give Example. </summary>

- **Scalable Vector Graphics** is the abbreviation for the HTML SVG. A **modularized language called HTML SVG is used to describe visuals in XML**.

- **Vector and hybrid vector/raster graphics in two dimensions are described in XML**. It comes from the W3C. **Text files containing XML define the actions of SVG images**.

- The **ability to produce and edit SVG images as XML files means that they can be done with a text editor**, but usually speaking, drawing applications like Inkspace are preferred for this purpose.

  ```html
  <!DOCTYPE html>
  <html>
    <body>
      <svg width="200" height="200">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="pink"
          stroke-width="4"
          fill="cyan"
        />
      </svg>
    </body>
  </html>
  ```

  </details>

---

</details>

---

<!-- ************** CSS Started *************** -->
<details>
  <summary>CSS Interview Questions</summary>

  <details>
    <summary>1. What is CSS? Name some CSS frameworks.</summary>

- CSS stands for **Cascading Style Sheet**. It is a **popular styling language** which is **used with HTML to design websites**.

- **CSS allows you to apply styles to web pages**. More importantly, CSS **enables you to do this independent of the HTML that makes up each web page**.

- _It can also be used with any XML documents including plain XML, SVG, and XUL_.

**Some of the frameworks of CSS are :-**

- CSS frameworks are libraries that make web page styling easier. Some of them are **Foundation**, **Bootstrap**, **Gumby**, **Ukit**, **Semantic UI**, etc.
  </details>

  ***

  <details>
    <summary>2. What are the elements of the CSS Box Model?</summary>

  - The CSS box model **defines the layout and design of CSS elements**. It is a container that **contains multiple properties** including **borders**, **margin**, **padding**, and the **content** itself.

  - The elements are:

    - **Margin** - It removes the area around the border. It is transparent.
    - **Border** - It represents the area around the padding.
    - **Padding** - It removes the area around the content. It is transparent.
    - **Content** - It represents the content like text, images, etc.

  - The **web browser renders every element as a rectangular box according to the CSS box model**.

  </details>

  ***

  <details>
    <summary>3. What is a CSS selector?</summary>

  - CSS Selectors are **used to selecting HTML elements based on their element name, id, attributes, etc**.
  - It is **also referred as a link between the HTML document and the style sheet**.
  - There are several different types of selectors in CSS.

    - **CSS Element Selector**
    - **CSS Id Selector**
    - **CSS Class Selector**
    - **CSS Universal Selector**
    - **CSS Group Selector**

  - For [more details](https://medium.com/@subhamkr1995dob/article-on-the-introduction-to-css-and-its-selectors-c4c254135387) about css selectors
  </details>

  ***

  <details>
    <summary>4. State the difference between CSS and CSS3.</summary>

  | **CSS**                                                                                            | **CSS3**                                                                                                                                                        |
  | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | **CSS is capable of positioning texts and objects**. CSS is somehow backward compatible with CSS3. | On the other hand, **CSS3 is capable of making the web page more attractive and takes less time to create**. If you write CSS3 code in CSS, it will be invalid. |
  | **Responsive designing is not supported in CSS**                                                   | **CSS3 is the latest version, hence it supports responsive design.**                                                                                            |
  | CSS cannot be split into modules.                                                                  | Whereas, whereas CSS3 can be breakdown into modules.                                                                                                            |
  | Using CSS, we **cannot build 3D animation and transformation**.                                    | But in CSS3 we can **perform all kinds of animation and transformations as it supports animation and 3D transformations**.                                      |
  | CSS is **very slow as compared to CSS3**                                                           | Whereas, **CSS3 is faster than CSS**.                                                                                                                           |

  </details>

  ***

  <details>
    <summary>5. Lists of CSS Frameworks</summary>

  - **The best CSS frameworks are**:

    - Bootstrap
    - Foundation
    - Bulma
    - UIKit
    - Semantic UI
    - Materialize
    - Pure
    - Tailwind CSS
    </details>

  ***

  <details>
    <summary>6. How many different ways are their to add CSS to HTML file?</summary>

  - **There are three types of CSS which are given below:**

    - **Inline CSS:** Inline CSS contains the **CSS property in the body section attached with the element known as inline CSS**. This kind of style is specified within an HTML tag using the style attribute.

    - **Internal or Embedded CSS:** This can be **used when a single HTML document must be styled uniquely.** The CSS ruleset should be within the HTML file in the head section i.e the **CSS is embedded within the HTML file**.

    - **External CSS:** External CSS **contains a separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc).** CSS property is written in a separate file with **.css** extension and should be linked to the HTML document using the **link tag**. **This means that for each element, style can be set only once and that will be applied across web pages**.
    </details>

  ***

  <details>
    <summary>7. What is a CSS preprocessor? What are SASS, LESS, and Stylus? Why do people use them?</summary>

  - **CSS preprocessor is a tool used to enhance the basic functionality and let us use the complex logical syntax** such as **variables**, **functions**, **mixins**, and **code nesting within vanilla CSS scripts themselves**.

  - CSS preprocessor **allows us to generate CSS from the preprocessor’s own unique syntax**. It extends the basic functionality of default vanilla CSS through its own scripting language.

  - **There are 3 preprocessor of CSS :-**

    - **SaaS (Syntactically Awesome Style Sheets) :-**

      - It **reduces the repetition of CSS, thus saving time. It uses .sass extension.**

      - SASS can be **written in two different syntaxes**. The original syntax, called the **indented syntax**, uses indentation to separate code blocks and newline characters to separate rules.

      - The **newer syntax**, Sassy CSS (SCSS), **uses block formatting, like CSS, and braces to denote code blocks and semicolons to separate rules within a block.** The _indented syntax and SCSS files have the extensions .sass and .scss respectively_.

    - **Less (Leener Stylesheets) :-**

      - **Easy to add to any JavaScript project with the help of npm or less.js file.** Here, **@ is used to define the variables.**

      - **It uses the extension .less. LESS syntax is similar to SCSS with some exceptions.**

    - **Stylus :-** + **Stylus is quite flexible when it comes to writing syntax**. It **supports native CSS and allows omission of colons, semicolons, and brackets**.

          + There is **no need to use @ or $ to define the variables**.

      </details>

  ***

  <details>
    <summary>8. What is the difference among inline, inline-block, and block elements?</summary>

| **Inline**                                                                                                        | **Inline-Block**                                                                                                                                                                | **Block**                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Inline elements **do not start on a new line**; they appear on the same line as the content and tags beside them. | Inline-block elements are **similar to inline elements, but they can have padding, margins, and set height and width values**.                                                  | Block elements **always start on a new line and occupy an entire row or width**.                                             |
| Inline elements **do not force a new line to begin after them, and they flow with the content**.                  | Like inline elements, inline-block elements **do not start on a new line, but they can have a width and height, and they respect top and bottom margins and paddings**.         | Block elements **create a "block" or "box" on the page, and subsequent elements start on a new line below them.**            |
| Some examples of inline elements are &lt;a&gt;, &lt;strong&gt;, &lt;span&gt;, and &lt;img&gt;.                    | This makes inline-block elements useful for **creating layouts where you want elements to sit next to each other horizontally**, but you also want to control their dimensions. | Examples of block elements include &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; to &lt;h6&gt;, &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt;. |

  </details>

---

  <details>
    <summary>9. What are pseudo elements and pseudo classes?</summary>

| **pseudo elements**                                                                                                   | **pseudo-class**                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Pseudo elements help to **create items that do not normally exist in the document tree**.                             | Pseudo classes **select regular elements under specific conditions** such as when a user is hovering over a link. |
| The examples of pseudo elements are: **::before**, **::after**, **::selection**, **::first-letter**, **::first-line** | The examples of pseudo classes are: **:hover**, **:active**, **:link**, **:visited**, **:focus**                  |

  </details>

---

  <details>
    <summary>10. What are the differences between adaptive design and responsive design?</summary>

| **Adaptive Design**                                                                                                                                                                                                           | **Responsive Design**                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It **focuses on multiple fixed layout sizes in website development**.                                                                                                                                                         | It **focuses on showing content based on available browser space.**                                                                                                   |
| In this kind of website design, **first the available space is detected and then the layout**, with most appropriate size, is picked and used to display the content. **Resized browser window has no effect on the design**. | In this kind of website design, **when the browser window is resized, the content of the website is dynamically and optimally rearranged to accommodate the window.** |
| It uses six standard screen widths, **320 px**, **480 px**, **760 px**, **960 px**, **1200 px**, and **1600 px**.                                                                                                             | Depending on the target device’s properties, **it uses CSS media queries to change styles for adapting to different screens.**                                        |
| It **takes a lot of time and effort** because the options and realities of the end users need to be examined first and then the best possible adaptive solutions are designed.                                                | Building and designing fluid websites that can accommodate content depending on the screen size **does not take much work**.                                          |
| It **gives a lot of control over the design for specific screens**.                                                                                                                                                           | It **does not allow much control over the design.**                                                                                                                   |

  </details>

---

  <details>
    <summary>11. What is the use of ruleset?</summary>

- In CSS, **a ruleset is a fundamental structure that defines the styling properties for a specific set of HTML elements**.

- A ruleset consists of two main parts: a selector and a declaration block.

  - **Selector**:

    - The selector is used to target one or more HTML elements to which the styling rules will be applied.

    - It can be an HTML tag (e.g., p for paragraphs), a class (e.g., .my-class), an ID (e.g., #my-id), or a combination of these.

  - **Declaration Block**:

        - The declaration block is enclosed in curly braces {} and contains one or more declarations separated by semicolons.

        - Each declaration consists of a property and a value, specifying the style rule for the selected element(s).

          ```css
          /* Selector */
                p {
                  /* Declaration Block */
                  color: blue;
                  font-size: 16px;
                  margin: 10px;
                }
          ```

    </details>

---

  <details>
    <summary>12. What are the advantages and disadvantages of External Style Sheets?</summary>

- Advantages :- The advantages of using external style sheets are as follows:

  - Styles of numerous **documents can be organized from one single file.**

  - Classes can be made for use on numerous HTML element types in many forms of the site.

  - In complex contexts, methods such as **selector** and **grouping** can be implemented to apply styles.

- Disadvantages :- The disadvantages of using external style sheets are as follows:

      + An **extra download is necessary to import style information for each file.**

      + The **execution of the file may be deferred till the external style sheet is loaded.**

      + While implementing style sheets, we need to test web pages with multiple browsers in order to check compatibility issues.

  </details>

---

  <details>
    <summary>13. What is the float property of CSS?</summary>

- The CSS float property is used to move the image to the right or left along with the texts to be wrapped around it.
- It doesn't change the property of the elements used before it.
- The float property defines the flow of content. Below are the types of floating properties:

  | **Float Type** | **Usage**                                                                   |
  | -------------- | --------------------------------------------------------------------------- |
  | float: left    | Element floats on the left side of the container                            |
  | float: right   | Element floats on the right side of the container                           |
  | float: inherit | The element inherits the floating property of its parent (div, table, etc…) |
  | float: none    | Element is displayed as it is (Default).                                    |

  </details>

---

  <details>
    <summary>14. What are the properties of Flexbox?</summary>

- **The different properties of flex-box are as followed :-**

  - **display :-** **It is used to describe a flex container.** The flex value is utilized to establish a flex container.

  - **flex-direction :-** **It is employed to determine the direction of the primary axis, which is the axis that flex items are arranged along.** This property can have the values **row**, **row-reverse**, **column**, and **column-reverse**.

  - **justify-content :-** **It aligns flex items parallel to the primary axis.** This property can take many different values, including **flex-start**, **flex-end**, **center**, **space-between**, **space-around**, and **space-evenly**.

  - **align-items :-** **It align flex items perpendicular to the primary axis.** **Flex-start**, **flex-end**, **center**, **baseline**, and **stretch** are all possible values for this attribute.

  - **flex-wrap :-** **It determines whether or not flex items should wrap when their width exceeds the width of the flex container.** This property’s possible values are **nowrap**, **wrap**, and **wrap-reverse**.

  - **align-content :-** When there is **extra space in the flex container, use align-content to align flex lines perpendicular to the major axis.** This property’s likely values are **flex-start**, **flex-end**, **center**, **space-between**, **space-around**, and **stretch**.

  - **flex :-** It is **used to establish** the **flex grow**, **flex shrink**, and **flex basis** of a **flex** item. The **shorthand property** flex creates all three values at the same time. **The individual properties are flex-grow, flex-shrink, and flex-basis**.
  </details>

---

  <details>
    <summary>15. Why is the imported function an easy way to insert a file?</summary>

- An imported style sheet permits us to **import external files or combine one style sheet with another**.

- The import function **gives the provision to combine many elements or functionalities into one**.

- The **syntax to import** any file is **@import notation**, which is used inside the &lt;Style&gt; tag. There is a **one rule** that implies that the **last imported sheet will override the previous ones.**

  ```html
  <Link Rel=Stylesheet Href=”Main.Css” Type=”Text/Css>
  <style type="”text" ="css”">
    <!–
      @import url(http://www.xyz.css); ..your code
    –>
  </style>
  ```

  </details>

---

  <details>
    <summary>16. How is border-box different from content-box?</summary>

| **Border Box**                                                                                                                                                               | **Content Box**                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| The **border-box property contains** the **content**, **border**, and **padding in height and width properties**.                                                            | **Content-box**, on the other hand, is the **default value box-sizing property.**                                             |
| **The border box includes both the content and the padding of an element.**                                                                                                  | **The content box represents the actual content of the element, such as text, images, or other media.**                       |
| **If you set the width and height of an element using the border-box model**, the specified dimensions include **both the content box and any padding or border around it.** | When you **set the width and height of an element using CSS**, you are usually **setting the dimensions of the content box.** |
| This can be particularly **useful when you want to control the total space an element occupies, including its content, padding, and border.**                                | If you set the width of an element to 100 pixels, for example, the content box will be 100 pixels wide.                       |

#### Border Box

```css
  .border-box {
    box-sizing: border-box;
    width: 100px;
    height: 50px;
    border: 2px solid black;
  }

  <div class="border-box">This is the border box</div>

```

#### Content Box

```css
.content-box {
  width: 100px;
  height: 50px;
  border: 2px solid black;
}
<div class="content-box">This is the content box</div>

```

  </details>

---

  <details>
    <summary>17. Explain the concept of specificity in CSS.</summary>

- In CSS, **specificity is a set of rules that determines which styles are applied to an element when multiple conflicting styles are present.**

- Specificity is **important for understanding how the browser decides which CSS rules to apply when there are competing selectors targeting the same element.**

- The **more specific a selector** is, the **higher its specificity**.

- **Specificity is typically expressed as a four-part value**, represented as **a**, **b**, **c**, **d**, where each part corresponds to a different level of specificity:

      + **Inline Styles (a):**
        * This is the **highest level of specificity.**
        * It **involves styles applied directly to an element using the style attribute.**

          ```html
          <p style="color: red;">This is a paragraph.</p>
          ```

      + **ID Selectors (b):**
        * ID selectors **target elements with a specific id attribute.**
        * They are **more specific than class selectors or tag selectors.**

          ```css
            #uniqueElement {
              color: blue;
            }
          ```

      + **Class Selectors, Attribute Selectors, and Pseudo-Classes (c):**
        * These selectors **target elements based on their class, attribute, or state.**
        * They **are less specific than ID selectors but more specific than tag selectors.**

          ```css
            .someClass {
              font-size: 16px;
            }

            [type="text"] {
              background-color: #eee;
            }

            a:hover {
              text-decoration: underline;
            }
          ```

      + **Type Selectors and Pseudo-Elements (d):**
        * **These are the least specific selectors** and **target elements based on their type** (e.g., div, p, a) or pseudo-elements (e.g., ::before, ::after).

          ```css
            p {
              margin: 10px;
            }

            li::before {
              content: "•";
            }
          ```

  </details>

---

  <details>
    <summary>18. Describe the difference between position: relative;, absolute;, fixed;, and static;.</summary>

- In CSS, the **position property is used to control the positioning of elements on a web page.** The values you can use with the **position property include relative, absolute, fixed, and static.**

  - **position: static; :-**

    - This is the **default value.**
    - Elements with **position: static;** are **positioned in the normal flow of the document.**
    - The **top**, **right**, **bottom**, and **left properties have no effect on statically positioned elements.**

      ```css
      .static-example {
        position: static;
      }
      ```

  * **position: relative; :-**

    - **Positioned relative to its normal position in the document flow.**
    - The **top**, **right**, **bottom**, and **left** properties can be **used to adjust the element's position relative to where it would be in the normal flow.**

      ```css
      .relative-example {
        position: relative;
        top: 10px;
        left: 20px;
      }
      ```

  * **position: absolute; :-**

    - **Positioned relative to the nearest positioned ancestor** (instead of positioned relative to the viewport, like fixed).
    - If there is **no positioned ancestor, it is positioned relative to the initial containing block (often the &lt;html&gt; element).**
    - The **top**, **right**, **bottom**, and **left properties are used to position the element.**

      ```css
      .absolute-example {
        position: absolute;
        top: 50px;
        left: 100px;
      }
      ```

  * **position: fixed; :-**

    - **Positioned relative to the viewport (browser window).**
    - **It remains fixed at its position even when the page is scrolled.**
    - The **top**, **right**, **bottom**, and **left properties are used to position the element.**

      ```css
      .absolute-example {
        position: absolute;
        top: 50px;
        left: 100px;
      }
      ```

  ## Note :-

      - It's important to note that when using relative, absolute, or fixed, the positioned element is taken out of the normal flow of the document, and other elements may be positioned relative to it.

  </details>

---

  <details>
    <summary>19. What is the purpose of the z-index property?</summary>

- The z-index property in CSS is used to **control the stacking order of positioned elements on a web page along the z-axis (depth axis)**.

- **When elements overlap**, the z-index property determines **the order in which they are stacked**, with **higher values appearing in front of or on top of lower values.**

- **Elements are stacked in the order they appear in the HTML document.** **Elements that come later** in the document are **stacked on top of earlier elements by default.**

- The z-index property can be **applied to positioned elements (position: relative;, position: absolute;, or position: fixed;).**

- **Negative values are also allowed**, and they **place the element behind elements with positive or zero z-index values.**

- **The z-index property only works on positioned elements.** If an element is not positioned (position: static; is the default), the z-index has no effect.

- **Keep in mind** that the z-index property only **affects the stacking order within the same stacking context**, and **stacking contexts are created** by elements with a **specified position value other than static and a z-index value other than auto.**
</details>

---

  <details>
    <summary>20. Explain the CSS 'box-sizing' property.</summary>

- The **box-sizing property** in CSS is **used to control how the total width and height of an element are calculated, including its content, padding, and border.**

- It has **two possible values:** _content-box_ **and** _border-box._

- Using **box-sizing: border-box;** can be particularly useful in layouts, as it simplifies calculations.

- With border-box, you can **set the dimensions of an element without worrying about adding the padding and border sizes separately.**

- You can also set **box-sizing: border-box; globally using the universal selector \* to apply it to all elements on the page.**

- **Keep in mind that changing the box-sizing property may affect existing layouts**, so it's essential to test and adjust accordingly.
</details>

---

  <details>
    <summary>21. How does Flexbox differ from Grid layout?</summary>

| **FLEXBOX**                                                                                                                              | **GRID**                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| It is a **one-dimensional layout model**, primarily **designed for laying out items in a single direction—either as a row or a column.** | It is a **two-dimensional layout model** that allows you to **define both rows and columns in a grid, creating a more complex layout structure.** |
| **You can define whether items should flow in rows or columns**, and the **cross axis is perpendicular to the main axis.**               | **Involves both rows and columns, and you can control them independently.**                                                                       |
| Provides **properties like justify-content and align-items to align items along the main and cross axes.**                               | Offers similar alignment **properties (justify-items, align-items), but you can also align entire grid areas.**                                   |
| **Allows you to reorder items using the order property.**                                                                                | **Doesn't automatically reorder items; it focuses on the placement of items in the defined grid.**                                                |
| **Well-suited for building dynamic and responsive interfaces**, especially when dealing with **content of unknown size**.                | **Useful for larger, more structured layouts**where you have a defined grid structure.                                                            |
| **Deals with either rows or columns at a time.**                                                                                         | **Simultaneously handles rows and columns**, allowing for complex layout structures.                                                              |
| **Items are placed along a single axis**, either **horizontally** or **vertically**.                                                     | **Items are placed in both rows and columns**, and you have **precise control over their placement**.                                             |

  </details>

---

  <details>
    <summary>22. Explain the concept of CSS Grid Layout and provide an example.</summary>

- CSS Grid Layout is a powerful **two-dimensional layout system** that allows you to **design complex web layouts with rows and columns**.

- It provides a **grid-based structure** for both the **container** and its **children**, offering **precise control over the placement and alignment of elements**.

- We can **create responsive and flexible designs more efficiently than traditional layout methods**.

- Here's a brief explanation of the key concepts in CSS Grid Layout:

  - **Grid Container:-**

    - The element on which you apply **display: grid** becomes the grid container.
    - It **holds the grid items (children)** and **defines the grid context.**

  - **Grid Items:-**
    - The **direct children of the grid container** are the grid items.
    - They are **placed within the grid cells** created by the grid container.
  - **Grid Lines:-**

    - **Horizontal and vertical lines** that **divide the grid into rows and columns**.
    - **Numbered starting from 1**, and you can refer to them in positioning grid items.

  - **Grid Tracks:-**

    - The **space between two adjacent grid lines**, either a **row track** or a **column track**.
    - Can be sized explicitly or implicitly based on content.

  - **Grid Areas:-** + Named areas of the grid **created by combining multiple cells**. + Useful for **assigning content to specific regions** of the grid.

        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            .grid-container {
                display: grid;
                grid-template-columns: 1fr 2fr 1fr; /* Three columns, the middle one twice as wide as the others */
                grid-template-rows: 100px 200px; /* Two rows with specified heights */
                gap: 10px; /* Space between grid items */
            }

            .item {
                background-color: lightblue;
                padding: 20px;
                border: 1px solid #333;
              }

            /* Define a named area */
            .item2 {
              grid-area: 2 / 2 / 3 / 3; /* Row start / Column start / Row end / Column end */
           }
          </style>
        </head>
        <body>
          <div class="grid-container">
            <div class="item">1</div>
            <div class="item item2">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
          </div>
        </body>
        </html>
        ```
        ### Example - In this example
        + The **.grid-container is set as a grid** with three columns and two rows.
        + Each **.item** is a **grid item** placed within the grid cells.
        + **.item2** is assigned a **named area** using the grid-area property.

    </details>

---

  <details>
    <summary>23. Describe the use of CSS transitions and animations.</summary>

| **CSS Transition**                                                                                                                                               | **CSS Animation**                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Transitions **allow you to smoothly change property values over a specified duration.**                                                                          | Animations **allow you to create more complex and customized effects by defining keyframes**.                                                                                        |
| Commonly used **properties for transitions include** **transition-property**, **transition-duration**, **transition-timing-function**, and **transition-delay**. | **Keyframes are specific points in the animation sequence** where you can set different property values.                                                                             |
| Transitions are **often used for hover effects, state changes, or user interactions**.                                                                           | Animations are **defined using @keyframes where you specify styles at different points in time.**                                                                                    |
| They provide a **smooth transition between the original and new property values.**                                                                               | They **provide more control over the animation sequence** and are **suitable for more complex effects**. Animations **can be set to run infinitely or a specified number of times.** |

### Basic Syntax of CSS Transition and its example :-

- Syntax :-

```css
/* Apply a transition to the color property over 0.5 seconds */
.element {
  transition: color 0.5s ease;
}
```

- Example :-

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 0.5s ease;
}

.box:hover {
  width: 150px;
}
```

### Basic Syntax of CSS Animations and its example :-

- Syntax :-

```css
/* Define an animation with keyframes */
@keyframes slide {
  0% {
    left: 0;
  }
  100% {
    left: 100px;
  }
}

/* Apply the animation to an element */
.element {
  animation: slide 2s ease infinite;
}
```

- Example :-

```css
@keyframes colorChange {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: green;
  }
}

.box {
  width: 100px;
  height: 100px;
  animation: colorChange 3s ease infinite;
}
```

  </details>

---

  <details>
    <summary>24. How does the CSS transform property work, and what are some use cases for it?</summary>
  </details>

---

  <details>
    <summary>25. Explain the concept of Critical CSS.</summary>

- Critical CSS is a **technique used in web development to improve the initial loading performance of a web page**.

- The **idea is to identify and inline the minimal set of CSS required to render the above-the-fold content**, which is the **content that is initially visible to users without scrolling**.

- **By delivering this critical CSS inline within the HTML document or as a small linked stylesheet**, you can **ensure that the essential styles are applied quickly, reducing the perceived page load time.**

- Here's a simplified example of using critical CSS:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Critical CSS for above-the-fold content */
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
      }

      header {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }

      /* Link to the full stylesheet for non-critical styles */
      <link rel="stylesheet" href="styles.css">
    </style>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <!-- Navigation links -->
      </nav>
    </header>
    <!-- Rest of the page content -->
  </body>
</html>
```

  </details>

---

  <details>
    <summary>26. Explain the difference between em and rem units in CSS.</summary>

| **em**                                                                                                                                                  | **rem**                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| The **em unit** is **relative to the font size of the closest parent element** with a specified font size.                                              | The **rem unit** is **relative to the font size of the root element(html)**.                                                        |
| If **used on a property like font-size**, it will be **relative to the font size of the parent element.**                                               | It is **not affected by the font size of any parent element.**                                                                      |
| Since **em** is based on the font size of the parent element, **changes in the parent's font size will affect the size of the child element using em**. | Changes in the **font size of parent elements do not affect the rem unit**. It **provides a more consistent and predictable size.** |
| If you **want a size to be relative to the font size of a specific parent, use em.**                                                                    | If you **want a size that remains consistent across the entire document, use rem.**                                                 |
| **em** may be **more suitable for text-related properties.**                                                                                            | rem is often **preferred for layout-related properties.**                                                                           |

Usage Example of **em :-**

```css
.parent {
  font-size: 16px; /* Base font size */
}

.child {
  font-size: 1.5em; /* 1.5 times the font size of the parent, i.e., 24px (16 * 1.5) */
}
```

Usage Example of **rem :-**

```css
html {
  font-size: 16px; /* Base font size for the entire document */
}

.element {
  font-size: 1.5rem; /* 1.5 times the root font size, i.e., 24px (16 * 1.5) */
}
```

</details>

---

<details>
  <summary>27. What is the CSS will-change property used for?</summary>

- The **will-change** CSS property is **used to inform the browser that an element is likely to be changed in the future.**
- **Allowing the browser** to **apply optimizations** for **smoother animations and transitions**.
- **By using will-change**, you can provide a **hint to the browser about what kind of changes to expect**, and it can make **performance optimizations accordingly.**
- **will-change** is particularly **useful when you know that certain properties of an element will be animated or transitioned.**
- The **browser can allocate resources more efficiently and avoid unnecessary computations** for elements that are unlikely to change.
- **Applying it to too many elements or using it unnecessarily can lead to increased memory usage.**
- **You can specify multiple properties** by **separating them with spaces**, or you can **use the auto value** to let the browser decide which properties to optimize. **Example:** will-change: transform opacity; or will-change: auto;
</details>

---

<details>
  <summary>28. What are CSS Variables (Custom Properties), and how are they useful?</summary>

- **CSS Variables allow you to define values in a single place** (typically **in the :root pseudo-class** or within a **specific element**) and **reuse them throughout your stylesheet**.

- Variables can be **updated dynamically using JavaScript**, making it **easier to implement dynamic theming** or **respond to user interactions**.

- Variables **improve the readability and maintenance of your stylesheets** by providing **meaningful names for values**, **reducing redundancy**, and making it **easier to update styles globally**.

- Variables can be **scoped to specific elements**, allowing you to **define local variables within a particular section** of your stylesheet **without affecting the global scope**.
- You can **provide fallback values** in case a variable is **not defined or supported by a browser**, **ensuring a graceful degradation of styles**.

### Example :-

```css
:root {
  --main-color: #3498db;
  --accent-color: #e74c3c;
}

.button {
  background-color: var(--main-color);
  color: #fff;
  padding: 10px 20px;
  border: 2px solid var(--accent-color);
}

.button:hover {
  background-color: var(--accent-color);
  border-color: var(--main-color);
}
```

- In this example, two variables (**--main-color** and **--accent-color**) are defined in the :root pseudo-class.

</details>

---

<details>
  <summary>29. Discuss the importance of performance considerations in CSS, especially in the context of large-scale applications.</summary>

- **Optimizing CSS for large-scale applications** is not just about aesthetics; it **directly impacts the overall performance and user satisfaction**.

- **Balancing design flexibility with performance considerations** is **essential for delivering a fast, responsive, and enjoyable user experience**.

- **Regular audits**, **testing**, and **staying informed about best practices** are **crucial for maintaining optimal performance in large-scale CSS applications.**

- **Efficient CSS practices can significantly impact the loading speed**, **rendering performance**, and **overall user experience** of a website or web application.
</details>

---

<details>
  <summary>30. What is the purpose of media queries in responsive design?</summary>

- **Allow you to apply styles based on various characteristics of the user's device or viewport**.

- **Enabling the creation of websites that adapt to different screen sizes, resolutions, and capabilities.**

- **The primary purpose of media queries is to implement responsive design strategies.**

- **Providing a seamless and optimized user experience across a range of devices.**

- By leveraging media queries, **web developers can create flexible and adaptive layouts** that **enhance the user experience across a diverse range of devices**.
</details>

</details>

---

<details>
<summary>JavaScript Interview Questions</summary>

<details>
  <summary>1. What is JavaScript?</summary>

- JavaScript is a **popular web scripting language** and is **used for client-side and server-side development**.

- The JavaScript code can be inserted into HTML pages that can be understood and executed by web browsers while also **supporting object-oriented programming abilities**.

- It is designed to make web pages interactive and dynamic.

- **Here are some key characteristics and aspects of JavaScript: -**

  - **Client-Side Scripting :-**

    - JavaScript is **mainly employed as a client-side scripting language**, executing code on the user's browser.
    - It **enables the creation of dynamic content, manipulation of the Document Object Model (DOM), and handling user interactions** without the need for constant communication with the server.

  - **Object-Oriented Programming: :-**

    - **JavaScript is an object-oriented language**, supporting the creation and manipulation of objects.
    - **Objects in JavaScript can be created from predefined classes or dynamically during runtime.**

  - **Interactivity and Event Handling :-**

    - It can **respond to various events** such as user **clicks**, **keyboard inputs**, and **form submissions**, allowing developers to **create responsive and engaging user interfaces.**

  - **Cross-Browser Compatibility :-**

    - JavaScript is **supported by all major web browsers**, ensuring that code written in **JavaScript works consistently across different platforms.**

  - **Asynchronous Programming :-**

    - JavaScript **supports asynchronous programming**, allowing certain tasks to be **executed independently without blocking the main execution thread**.

  - **ECMAScript :-**

    - JavaScript is **based on the ECMAScript standard**, which defines the language specifications.
    - **Modern browsers implement the latest ECMAScript standards** to ensure compatibility with newer JavaScript features.

  - **Server-Side Development :-** - **JavaScript has expanded its role to server-side development** with the **introduction of platforms like Node.js.** - This **allows developers** to **use JavaScript** for **both front-end and back-end development**, creating more cohesive and efficient development workflows.
  </details>

---

<details>
  <summary>2. What is the difference between let, const, and var in variable declaration?</summary>

| **var**                                                                                                                                                        | **let**                                                                                                                                                                              | **const**                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Variables declared with **var are function-scoped.**                                                                                                           | Variables declared with **let are block-scoped.**                                                                                                                                    | Variables declared with **const are also block-scoped.**                                           |
| This means that the **variable is only available within the function where it is declared.**                                                                   | This means that the **variable is only available within the block (enclosed by curly braces) where it is declared.**                                                                 | const **variables must be initialized at the time of declaration, and they cannot be reassigned.** |
| **var** variables are **hoisted to the top of their scope.** This means that you can **use the variable before it is declared**, but it will be **undefined.** | let variables are **hoisted to the top of their block**, but **they are not initialized.** If you try to **use the variable before its declaration, you will get a ReferenceError.** | const **does not allow for variable redeclaration within the same block.**                         |
| **var** allows for **variable redeclaration within the same scope.** var variables **can be reassigned.**                                                      | let **does not allow for variable redeclaration within the same block.** let **variables can be reassigned.**                                                                        | const is often **used for values that should not be changed, such as constants.**                  |

### Example of _var_:-

```javascript
function example() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}
```

### Example of _let_:-

```javascript
if (true) {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
  console.log(x); // 5
}
```

### Example of _const_:-

```javascript
const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable
```

</details>

---

<details>
  <summary>3. Explain the concept of hoisting in JavaScript.</summary>

- **Hoisting is a behavior in JavaScript** where **variable** and **function declarations are moved to the top of their containing scope during the compilation phase.**

- This means that you can **use variables or functions before they are declared in the code.**

- It's important to note that **only the declarations are hoisted, not the initializations or assignments.**

- When a variable is declared with **var**, the declaration is **hoisted to the top of its scope**, but the **initialization remains in place.**

- If you **try to access the variable before its declaration**, it will exist but be **undefined.**
  ```javascript
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
  ```
- Unlike **var**, **let** and **const** are hoisted to the **top of their block** but are **not initialized.**.Trying to **access them before their declaration results in a ReferenceError.**

- **Function declarations are also hoisted to the top of their containing scope.** This means that you can **call a function before its declaration in the code.**
  ```javascript
  sayHello(); // "Hello, World!"
  function sayHello() {
    console.log("Hello, World!");
  }
  ```
- It's important to note that **function expressions (where a function is assigned to a variable) are not hoisted in the same way as function declarations.**
</details>

---

<details>
  <summary>4. What are data types in JavaScript?</summary>

- **Primitive Datatypes :-**

  - **Number :-** *Represents numeric values*. It includes **integers** and **floating-point numbers.**
    ```javascript
    let num = 42;
    let pi = 3.14;
    ```

  - **String :-** *Represents sequences of characters (text).*

    ```javascript
    let greeting = "Hello, World!";
    ```

  - **Boolean :-** *Represents a logical entity* and can have **only two values: true or false.**

    ```javascript
    let isTrue = true;
    let isFalse = false;
    ```

  - **Null :-** *Represents the intentional absence of any object value.*

    ```javascript
    let nullValue = null;
    ```

  - **Undefined :-** *Represents an uninitialized variable* or the value of a **function argument that was not provided.**

    ```javascript
    let undefinedValue;
    ```

  - **BigInt :-**  *Represents integers of arbitrary precision.*

    ```javascript
    let bigIntValue = 9007199254740991n;
    ```

  - **Symbol :-** *Represents a unique identifier.* Symbols are often **used as property keys in objects** to **avoid naming conflicts.**

    ```javascript
    const sym = Symbol('uniqueSymbol');
    ```
- **Non-Primitive :-**
  - **Object :-** *Represents a collection of key-value pairs* and is a fundamental **data structure in JavaScript.**
  ```javascript
  let person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  ```
  - **Functions :-** *A subtype of object, representing a callable object.*
  ```javascript
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  ```
  - **Array :-** *A subtype of object, representing a list of values.*
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  ```
  - **Date :-** *Represents a date and time.*
  ```javascript
  let currentDate = new Date();
  ```
  - **RegExp :-** *Represents a regular expression for pattern matching.*
  ```javascript
  let pattern = /[a-z]+/;
  ```
    </details>

---

<details>
  <summary>5. What is the difference between == and === in JavaScript?</summary>

| **Equality Operator** | **Strict Equality Operator** |
| --------------------- | -------------------------- |
| This operator **performs type coercion**, which means it **converts the operands to the same type before making the comparison.** | This operator **does not perform type coercion**. It checks **both the value and the type of the operands.** |
| For example, if you **compare a string and a number using ==**, JavaScript will attempt to **convert one or both of the operands to a common type (usually a number) before making the comparison.** | It **returns true** only if **both the value and the type of the operands are the same.** |
| **Example:** "5" == 5 would **evaluate to true** because the **string "5" is coerced into the number 5.** | **Example:** "5" === 5 would **evaluate to false** because the **string and the number have different types.** |
</details>

---

<details>
  <summary>6. Explain the concept of arrays in JavaScript and how to access elements in an array.</summary>

+ In JavaScript, **an array is a special type of object that is used to store multiple values in a single variable.**

+ Arrays are **commonly used to organize and manipulate sets of related data.** 

+ Each element in an **array has an index**, starting from **0**, which allows you to access and manipulate individual elements.

+ To access elements in an array, **use the square bracket notation with the index of the element you want to access.** The **index starts at 0 for the first element, 1 for the second, and so on.**

+ **Creating Arrays :**
  ```javascript
  // Using square brackets
  let myArray = [1, 2, 3, 4, 5];

  // Using the Array constructor
  let anotherArray = new Array(1, 2, 3, 4, 5);
  ```
+ **Accessing Elements :** 
  ```javascript
  let firstElement = myArray[0]; // Access the first element
  let thirdElement = myArray[2]; // Access the third element
  ```
+ **Modifying Elements :**
  ```javascript
  myArray[1] = 10; // Change the value of the second element to 10
  ```
</details>

---

<details>
  <summary>7. What is the DOM, and how do you manipulate it using JavaScript?</summary>

+ The DOM, or **Document Object Model**, is a programming interface for web documents. 

+ It represents the **structure of a document as a tree of objects**, where each object corresponds to a part of the document, such as **elements**, **attributes**, and **text**.

+ The **DOM provides a way for programs (especially JavaScript) to manipulate the content**, structure, and style of a web page dynamically.

+ Here's a brief overview of how you can manipulate the DOM using JavaScript: 

+ **Accessing Elements :** Common methods include **getElementById**, **getElementsByClassName**, **getElementsByTagName**, and **querySelector**:

    ```javascript
      // Get an element by its ID
    let myElement = document.getElementById('myId');

    // Get elements by class name
    let elementsByClass = document.getElementsByClassName('myClass');

    // Get elements by tag name
    let elementsByTag = document.getElementsByTagName('div');

    // Query selector (returns the first matching element)
    let elementBySelector = document.querySelector('.myClass');
    ```

+ **Modifying Content and Attributes :** 
  ```javascript
  // Change the text content of an element
  myElement.textContent = 'New Text';

  // Change the HTML content of an element
  myElement.innerHTML = '<strong>New Content</strong>';

  // Change the value of an attribute
  myElement.setAttribute('src', 'new-image.jpg');

  // Modify CSS styles
  myElement.style.color = 'red';
  ```
+ **Creating and Appending Elements :**
  ```javascript
  // Create a new element
  let newElement = document.createElement('div');

  // Set attributes and content
  newElement.id = 'newId';
  newElement.textContent = 'New Element';

  // Append the new element to an existing one
  document.body.appendChild(newElement);
  ```
+ **Event Handling :**
  ```javascript
  // Add a click event listener to an element
  myElement.addEventListener('click', function() {
    alert('Element clicked!');
  });
  ```
+ **Removing Elements :**
  ```javascript
  // Remove an element
  myElement.remove();
  ```
</details>

---

<details>
  <summary>8. Explain the difference between null and undefined in JavaScript.</summary>

| **NULL** | **UNDEFINED** |
| -------- | ------------- |
| The **null** value is explicitly assigned to a variable by the programmer to indicate that the **variable intentionally does not have any object value** or **does not point to any memory location**. | The undefined value is a **primitive value automatically assigned to variables** that have been declared but **not initialized.** |
| It is often **used to represent the intentional absence of an object** value or as a placeholder for an object that does not exist. | It is also the **default return value of a function that doesn't explicitly return anything.** |
| **null is used to explicitly represent the absence of an object value** or to indicate that a **variable intentionally does not point to any object**. | It indicates the **absence of a value in a variable**. undefined typically **indicates a variable that has been declared but not assigned any value** or a **function that doesn't return anything.** |
</details>

---

<details>
  <summary>9. Why do we use the word “debugger” in javascript?</summary>

+ The debugger for the browser must be **activated in order to debug the code.**
+ **Built-in debuggers may be switched on and off**, requiring the user to report faults. 
+ The **remaining section of the code** should **stop execution before moving on to the next line while debugging**.
</details>

---

<details>
  <summary>10. Explain Implicit Type Coercion in javascript.</summary>

+ **Implicit type coercion** in javascript is the **automatic conversion of value from one data type to another.** 
+ It **takes place when the operands of an expression are of different data types**. 
  + **String coercion :** String coercion takes place while using the **‘ + ‘** operator. When a **number is added to a string, the number type is always converted to the string type.**

    ```javascript
    // Example 1.
    var x = 3;
    var y = "3";
    x + y // Returns "33" 

    //Example 2.
    var x = 24;
    var y = "Hello";
    x + y   // Returns "24Hello";  
    ```

  + **Boolean coercion :** 
    - Boolean coercion takes place when using **logical operators**, **ternary operators**, **if statements**, and **loop checks**. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.
    - *Truthy values are those which will be converted (coerced) to true.* 
    - *Falsy values are those which will be converted to false.* All values **except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.**
      ```javascript
      // If Statement:
      var x = 0;
      var y = 23;
          
      if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
          
      if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)
      ```

  + **Logical Operators :** 
    - Logical operators in javascript, **unlike operators in other programming languages, do not return true or false.** They always **return one of the operands.**
    - **OR ( | | ) operator -** If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.
    - **AND ( && ) operator -** If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.
      ```javascript
      // Example :
      var x = 220;
      var y = "Hello";
      var z = undefined;
          
      x | | y    // Returns 220 since the first value is truthy
          
      x | | z   // Returns 220 since the first value is truthy
          
      x && y    // Returns "Hello" since both the values are truthy
          
      y && z   // Returns undefined since the second value is falsy
          
      if( x && y ){ 
        console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
      }   
          
      if( x || z ){
        console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
      }
      ```
  + **Equality coercion :** 
    - **Equality coercion takes place when using ‘ == ‘** operator. As we have stated before. The ‘ == ‘ operator **compares values and not types**.
    - While the above statement is a simple way to explain == operator, it’s not completely true. The reality is that while using the ‘==’ operator, coercion takes place.
    - The ‘==’ operator, **converts both the operands to the same type and then compares them**.
      ```javascript
      // Example
      var a = 12;
      var b = "12";
      a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

      // Example 
      var a = 226;
      var b = "226";

      a === b // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal. 
      ```
</details>

---

<details>
  <summary>11. Is javascript a statically typed or a dynamically typed language?</summary>

| **Static Typing**  | **Dynamically Typing** |
| -----------------  | ---------------------- |
| Statically typed language, **where the type of a variable is checked during compile-time**.  | JavaScript is a dynamically typed language. In a dynamically typed language, **the type of a variable is checked during run-time.** |
| Variables have type.  | Variables do not have type. |
| Values have type.  | Values have no type. |
| Variables cannot change type.  | Variables changes type dynamically. |

## Note :-
+ Since **javascript is a loosely(dynamically) typed language**, variables in JS are **not associated with any type**. A variable can hold the value of any data type.
```javascript
// Example
var a = 23;
var a = "Hello World!";
```
</details>

---

<details>
  <summary>12. What is NaN property in JavaScript?</summary>

+ NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
+ typeof of NaN will return a Number.
+ To check if a value is NaN, we use the isNaN() function. isNaN() function converts the given value to a Number type, and then equates to NaN.
  ```javascript
  isNaN("Hello")  // Returns true
  isNaN(345)   // Returns false
  isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
  isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
  isNaN(false) // Returns false
  isNaN(undefined) // Returns true
  ```
</details>

---

<details>
  <summary>13. Explain passed by value and passed by reference.</summary>

+ In JavaScript, **primitive data types are passed by value** and **non-primitive data types are passed by reference.**

+ For understanding passed by value and passed by reference, **we need to understand what happens when we create a variable and assign a value to it**,
  ```javascript
  var x = 2;
  ```
+ In the above example, **we created a variable x and assigned it a value of “2”.** In the background, the **“=” (assign operator) allocates some space in the memory, stores the value “2” and returns the location of the allocated memory space.** Therefore, the variable **x in the above code points to the location of the memory space instead of pointing to the value 2 directly.**

### Assign operator dealing with primitive types :
![primitive types](https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/408/original/Assign_operator_dealing_with_primitive_types.png?1654852446)
```javascript
// Example
var y = 234;
var z = y;
```
* In the above example, the **assign operator knows that the value assigned to y is a primitive type (number type in this case)**, so when the **second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address**. Therefore, variable **z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.**
  ```javascript
  // Example
  var y = #8454; // y pointing to address of the value 234

  var z = y; 
      
  var z = #5411; // z pointing to a completely new address of the value 234
      
  // Changing the value of y
  y = 23;
  console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
  ```
+ From the above example, we can see that **primitive data types when passed to another variable, are passed by value**. Instead of just assigning the **same address to another variable, the value is passed and new space of memory is created.**

### Assign operator dealing with non-primitive types :
![non-primitive](https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/410/original/Assign_operator_dealing_with_non-primitive_types.png?1654852531)
```javascript
// Example
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
```
+ In the above example, the **assign operator directly passes the location of the variable obj to the variable obj2.** In other words, the **reference of the variable obj is passed to the variable obj2.**
  ```javascript
  var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
  var obj2 = obj;
      
  var obj2 = #8711; // obj2 pointing to the same address 

  // changing the value of obj1
          
  obj.name = "Akki";
  console.log(obj2);
          
  // Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
  ```
+ From the above example, we can see that **while passing non-primitive data types, the assigned operator directly passes the address (reference).** Therefore, non-primitive data types are always **passed by reference.**
</details>

---

<details>
  <summary>14. List some features of JavaScript.</summary>

+ **Some of the features of JavaScript are:**
+ Lightweight
+ Interpreted programming language
+ Good for the applications which are network-centric
+ Complementary to Java
+ Complementary to HTML
+ Open source
+ Cross-platform
</details>

---

<details>
  <summary>15. What are functions in JavaScript? What are the different types of functions available in JavaScript?</summary>

+ In JavaScript, **functions are blocks of reusable code designed** to **perform a specific task** or calculate a value.
+  Functions **allow you to structure your code, make it more modular, and avoid redundancy.** 
+ They are a **fundamental building block in JavaScript** and play a crucial role in the language.

+ **Function Declaration :** A function in JavaScript can be declared using the function keyword. 
  ```javascript
    function greet(name) {
      console.log("Hello, " + name + "!");
    }
  ```
+ **Function Expression :** You can also define a function using a function expression, where the function is assigned to a variable: 
  ```javascript
    let greet = function(name) {
    console.log("Hello, " + name + "!");
  };
  ```
+ Some of the different commonly used functions are :-
  + **Arrow Function :-** Arrow functions provide a **concise syntax for writing functions**, especially when the **function is simple and has a single statement**:
    ```javascript
    let greet = (name) => {
    console.log("Hello, " + name + "!");
    };
    ```
  + **Anonymous Functions :-** **Functions that are not assigned to a variable or declared with a name are called anonymous functions.** They are often **used as arguments to other functions** or within function expressions.
    ```javascript
    let add = function(x, y) {
    return x + y;
    };
    ```
  + **Immediately Invoked Function Expressions (IIFE) :-** An IIFE is a function that is defined and **executed immediately after creation.** It is often used to create a **private scope for variables to avoid polluting the global scope.**
    ```javascript
    (function() {
    console.log("This is an IIFE.");
    })();
    ```
  + **Callback Functions :-** Functions in JavaScript can be **passed as arguments to other functions.** **Functions that are passed as arguments to another function are called callback functions.**
    ```javascript
    function doSomething(callback) {
      console.log("Doing something...");
      callback();
    }

    doSomething(function() {
      console.log("Callback function called.");
    });

    ```
  + **Higher-Order Functions :-** Higher-order functions are **functions that can take other functions as arguments or return functions as their results.**
    ```javascript
    function multiplyBy(factor) {
      return function(x) {
      return x * factor;
      };
    }

    let double = multiplyBy(2);
    console.log(double(5)); // Outputs: 10
    ```
</details>

---

<details>
  <summary>16. What are Closures in JavaScript?</summary>

+ In JavaScript, a **closure is a function that retains access to variables from its lexical scope** even after the scope has finished executing.

+  In simpler terms, a **closure allows a function to access variables from an outer function, even after the outer function has completed execution.**

+ **Closures are created** whenever a **variable that is defined outside the current scope** is **accessed within the current scope**.

+ This **behavior is a result of JavaScript's lexical scoping.** Closures are **useful in various scenarios**, such as **creating private variables**, **implementing data encapsulation**, and **handling asynchronous operations.** 
  ```javascript
  function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
      console.log(outerVariable);
    }

    return innerFunction;
  }

  // Create a closure by assigning the inner function to a variable
  let closure = outerFunction();

  // Execute the closure
  closure(); // Outputs: I am from the outer function
  ```
</details>

---

<details>
  <summary>17. What is an Immediately Invoked Function in JavaScript?</summary>

+ An **Immediately Invoked Function** ( known as IIFE and pronounced as IIFY) is a function that **runs as soon as it is defined.**
+ Syntax of IIFE :
  ```javascript
    (function(){ 
  // Do something;
    })();
  ```
+ **To understand** IIFE, we need to **understand the two sets of parentheses** that are added **while creating an IIFE** :
  * The first set of parenthesis:
    ```javascript
    (function (){
      //Do something;
    })
    ```
+ While executing javascript code, whenever the **compiler sees the word “function”, it assumes that we are declaring a function in the code.**

+ Therefore, **if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function**, and by the **syntax of declaring a function, a function should always have a name.**
  ```javascript
  function() {
  //Do something;
  }
  // Compiler gives an error since the syntax of declaring a function is wrong in the code above.
  ```
+ **To remove this error**, we **add the first set of parenthesis that tells the compiler that the function is not a function declaration**, instead, it’s a **function expression.**

+ The second set of parenthesis:
  ```javascript
  (function (){
  //Do something;
  })();
  ```
+ From the definition of an IIFE, we know that our code should run as soon as it is defined. **A function runs only when it is invoked**. If we **do not invoke the function, the function declaration is returned:**
  ```javascript
  (function (){
  // Do something;
  })

  // Returns the function declaration
  ```
+ *Therefore to invoke the function, we use the second set of parenthesis.*
</details>

---

<details>
  <summary>18. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?</summary>

+  In ECMAScript 5, a **new feature called JavaScript Strict Mode** allows you to **write a code or a function in a "strict" operational environment**.
+   In most cases, this language is **'not particularly severe'** when it comes to throwing errors.
+  In 'Strict mode,' however, **all forms of errors**, including silent errors, **will be thrown.** As a result, **debugging becomes a lot simpler.**
+  Thus **programmer's chances of making an error are lowered.**

## Characteristics of strict mode in javascript :-
  * Duplicate arguments are not allowed by developers.
  * In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
  * The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers
  * Engineers will not be allowed to create global variables in 'Strict Mode.
</details>

---

<details>
  <summary>19. What is the ‘this’ keyword in JavaScript?</summary>

-  **Functions in JavaScript are essential objects**. Like objects, *they can be assigned to variables, passed to other functions, and returned from functions.*
-  And much **like objects, they have their own properties.** *‘this’ stores the current execution context of the JavaScript program.*
-  Thus, **when it is used inside a function, the value of ‘this’ will change depending on how the function is defined, how it is invoked, and the default execution context.***
-  **The value of the “this” keyword will always depend on the object that is invoking the function.** The *“this” keyword refers to the object that the function is a property of.*

</details>

---

<details>
  <summary>20. Explain call(), apply() and, bind() methods.</summary>

*In JavaScript, the call(), apply(), and bind() methods are used to manipulate the context (the value of this) of a function during its execution. They are often used in situations where you want to explicitly set the value of this or pass arguments to a function.* 

| **call** | **apply** | **bind** |
| -------- | --------- | -------- |
| The call() method allows you to invoke a function with a specified this value and arguments provided individually. | **apply** | **bind** |
| Syntax: function.call(thisArg, arg1, arg2, ...)| **apply** | **bind** |
| **call** | **apply** | **bind** |
| **call** | **apply** | **bind** |
| **call** | **apply** | **bind** |
</details>

---

<details>
  <summary>21.</summary>
</details>
<details>
  <summary>22.</summary>
</details>
<details>
  <summary>23.</summary>
</details>
<details>
  <summary>24.</summary>
</details>
<details>
  <summary>25.</summary>
</details>
<details>
  <summary>26.</summary>
</details>
<details>
  <summary>27.</summary>
</details>
<details>
  <summary>28.</summary>
</details>
<details>
  <summary>29.</summary>
</details>
<details>
  <summary>30.</summary>
</details>

</details>

---

<details>
<summary>React Interview Questions</summary>

<details>
  <summary>1.</summary>
</details>

<details>
  <summary>2.</summary>
</details>
<details>
  <summary>3.</summary>
</details>
<details>
  <summary>4.</summary>
</details>
<details>
  <summary>5.</summary>
</details>
<details>
  <summary>6.</summary>
</details>
<details>
  <summary>7.</summary>
</details>
<details>
  <summary>8.</summary>
</details>
<details>
  <summary>9.</summary>
</details>
<details>
  <summary>10.</summary>
</details>
<details>
  <summary>11.</summary>
</details>
<details>
  <summary>12.</summary>
</details>
<details>
  <summary>13.</summary>
</details>
<details>
  <summary>14.</summary>
</details>
<details>
  <summary>15.</summary>
</details>
<details>
  <summary>16.</summary>
</details>
<details>
  <summary>17.</summary>
</details>
<details>
  <summary>18.</summary>
</details>
<details>
  <summary>19.</summary>
</details>
<details>
  <summary>20.</summary>
</details>
<details>
  <summary>21.</summary>
</details>
<details>
  <summary>22.</summary>
</details>
<details>
  <summary>23.</summary>
</details>
<details>
  <summary>24.</summary>
</details>
<details>
  <summary>25.</summary>
</details>
<details>
  <summary>26.</summary>
</details>
<details>
  <summary>27.</summary>
</details>
<details>
  <summary>28.</summary>
</details>
<details>
  <summary>29.</summary>
</details>
<details>
  <summary>30.</summary>
</details>

</details>

---
