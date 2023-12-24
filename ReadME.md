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

| **HTML** | **XHTML** | 
| -------- | -------- | 
| HTML stands for **HyperText Markup Language**. It was developed by Tim Berners-Lee. | XHTML stands for **Extensible Hypertext Markup Language**. It was developed by W3C i.e.lowercase World Wide Web Consortium. | 
| **It was developed in 1991**. It is **extended from SGML**. All **tags and attributes are not necessarily to be in lower or upper case**. | **It was released in 2000**. It is **extended from XML and HTML**. In this, **every tag and attribute should be in lower case**. | 
| The **format is a document file format**. **Doctype is not necessary to write at the top**. The used filename **extensions are .html, .htm**. | The **format is a markup language**. **Doctype is very necessary to write at the top of the file**. The used Filename **extensions are .xhtml, .xht, .xml**. | 
| It is **not necessary to close the tags in the order they are opened**. | It is **necessary to close the tags in the order they are opened**. | 

</details>

---

  <details>
    <summary>3. State the difference between Elements and Tags?</summary>

| Elements | Tags | 
| -------- | -------- | 
| An element **consists of an opening tag, content, and a closing tag**. It represents a complete, structured unit within an HTML document. | A tag is a **fundamental building block of HTML**.Tags are used to define HTML elements. | 
| Elements can be as **simple as a pair of tags or it can include content between the opening and closing tags.** Ex- &lt;p&gt; &lt;/p&gt;, &lt;p&gt;This is a paragraph&lt;/p&gt; | Tags are represented by angle brackets `("<" and ">")`.**Tags come in pairs: an opening tag and a closing tag**. | 
| Elements can also have attributes that provide additional information about the element. | **Opening tag:** &lt;tagname&gt; . **Closing tag:** &lt;/tagname&gt; | 
| **Example of an element with content:**  &lt;p&gt;This is a paragraph&lt;/p&gt;. **Example of an element without content (empty element):** &lt;img src="image.jpg" alt="An image" /&gt; |**Example**: &lt;p&gt; (opening tag), &lt;/p&gt; (closing tag) | 

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

| HTML | HTML5 | 
| -------- | -------- | 
| It **didn’t support &lt;audio&gt; and &lt;video&gt; without the use of Flash player support.** | It **supports audio and video controls with the use of &lt;audio&gt; and &lt;video&gt; tags.** | 
| It **uses cookies to store temporary data**. **Does not allow JavaScript** to run in the browser. | It uses **SQL databases and application cache to store offline data**. | 
| **Not possible to draw shapes** like circles, rectangles, triangles, etc. | **Allows JavaScript to run in the background**. This is possible due to JS Web worker API in HTML5. | 
| Elements like **nav** and **header** were not present. The **doctype declaration is too long and complicated**. | **HTML5 allows drawing shapes** like circles, rectangles, triangles, etc. | 
| **Vector graphics are possible in HTML with the help of various technologies** such as VML, Silver-light, Flash, etc. | New elements for web structure like **nav**, **header**, **footer**, etc. The **doctype declaration is quite simple and easy**. | 
| It **does not allow drag-and-drop effects**. | **Vector graphics is additionally an integral part** of HTML5 like **SVG** and **canvas.** | 

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

| **Inline** | **Block** | 
| -------- | -------- | 
| **Inline elements do not start on a new line and only take up as much width as necessary. They do not force a new line to begin after them.**. | **Block-level elements typically start on a new line and take up the full width available, extending the entire width of their container**. | 
| Inline elements flow within the content and appear next to each other horizontally.. | Block-level elements create a "block" or a rectangular box in the document flow, stacking vertically on top of each other. | 
| Examples :- `<span>`, `<a>`, `<img>`, `<br>`,`<input>`, `<strong>` and `<em>` etc. | Examples :- `<div>`, `<p>`, `<h1> to <h6>`, `<ul>`,`<ol>`, `<li>`, `<table>` and `<form>` etc. | 
| **Inline elements cannot contain block-level elements but can contain other inline elements**. | **Block-level elements can contain other block-level and inline elements**. | 

</details>

---

  <details>
    <summary>10. What is the difference between &lt; figure &gt; tag and &lt; img &gt; tag? </summary>

| **Figure** | **Img** | 
| -------- | -------- | 
| The `<figure>` tag is used to **group together an image `(<img>)` and its caption** `(<figcaption>)`. | The `<img>` (image) tag is **used to embed images in an HTML document**. It is a **void or self-closing tag, meaning it does not have a closing tag**. | 
| It **provides semantic meaning to the relationship between the image and its associated content**. | The **src** attribute of the `<img>` tag specifies the **source (URL or file path) of the image**. Additional attributes, such as **alt** for **alternative text**, **width**, **height**, and others, can be used to provide information about the image. | 
| It is a **block-level element**. **Example :-** &lt;figure&gt;&lt;img src="image.jpg" alt="An example image" /&gt;&lt;figcaption&gt;This is the caption for the image.&lt;/figcaption&gt;&lt;/figure&gt; | Example :- &lt;img src="image.jpg" alt="An example image" /&gt; |
  </details>

---

  <details>
    <summary>11. Difference between &lt; link &gt; and &lt; a &gt; tag.</summary>

| **"a" tag (Anchor Tag)** | **link tag** | 
| ------------------------ | ------------ | 
| The `<a>` tag is **primarily used to create hyperlinks**, allowing users to navigate to other pages or resources. | **The `<link>` tag is used to include external resources and define relationships between the current document and external resources**. It is commonly used to link external stylesheets, icons, and other resources. |
| **It can be used to link to external resources (other websites) or internal resources (other pages within the same website)**. The **href** attribute is used to specify the destination URL. | **It is often placed within the `<head>` section of an HTML document**. Common attributes include rel (relationship), href (URL of the external resource), and type (the MIME type of the resource). |
| The `<a>` tag can also be used to **create links within the same page using the fragment identifier (#)** to target an element with a specific id attribute. | Row 3, Col 2 |
| Example :- `<a href="https://www.example.com">Visit Example.com</a>` | Example :- `<link rel="stylesheet" href="styles.css" />` |
  </details>

---

  <details>
    <summary>12. What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element? </summary>

| **display: none** | **visibility: hidden** | 
| -------- | -------- | 
| **The display: none property removes the element from the normal document flow, and it effectively hides the element completely**. | **The visibility: hidden property hides the element while still maintaining its position in the layout. The element is not visible, but it still occupies space in the document flow.** |  
| The **hidden element takes up no space in the layout, meaning it doesn't affect the positioning of surrounding elements** as if it were not in the document at all. | The hidden **element is not rendered, but it still affects the layout as if it were visible.** Child elements within the hidden element are also hidden. |  
| **Child elements within the hidden element are also hidden.** The element is not rendered, and it cannot be interacted with by the user.   | **The element is not visible, but it is still part of the document structure and can potentially be interacted with by the user through scripting.** |  
| Example :- .hidden-element {display: none;} | Example :- .hidden-element {visibility: hidden;} |  

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

| SessionStorage | LocalStorage | 
| -------------- | ------------ | 
| SessionStorage is **used for storing data on the client side**. **Maximum limit of data saving in SessionStorage is about 5 MB**. | Like SessionStorage, LocalStorage also **. **Maximum limit of data saving is about 5 MB in LocalStorage also\*\*. |
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

- *It can also be used with any XML documents including plain XML, SVG, and XUL*.

**Some of the frameworks of CSS are :-**
- CSS frameworks are libraries that make web page styling easier. Some of them are **Foundation**, **Bootstrap**, **Gumby**, **Ukit**, **Semantic UI**, etc. 
  </details>

  ---

  <details>
    <summary>2. What are the elements of the CSS Box Model?</summary>

  - The CSS box model **defines the layout and design of CSS elements**. It is a container that **contains multiple properties** including **borders**, **margin**, **padding**, and the **content** itself. 

  - The elements are:
    * **Margin** - It removes the area around the border. It is transparent.
    * **Border** - It represents the area around the padding.
    * **Padding** - It removes the area around the content. It is transparent.
    * **Content** - It represents the content like text, images, etc.

  - The **web browser renders every element as a rectangular box according to the CSS box model**.

  </details>

  ---

  <details>
    <summary>3. What is a CSS selector?</summary>

  - CSS Selectors are **used to selecting HTML elements based on their element name, id, attributes, etc**.
  - It is **also referred as a link between the HTML document and the style sheet**.
  - There are several different types of selectors in CSS.

    * **CSS Element Selector**
    * **CSS Id Selector**
    * **CSS Class Selector**
    * **CSS Universal Selector**
    * **CSS Group Selector**
  - For [more details](https://medium.com/@subhamkr1995dob/article-on-the-introduction-to-css-and-its-selectors-c4c254135387) about css selectors
  </details>

  ---

  <details>
    <summary>4. State the difference between CSS and CSS3.</summary>

  | **CSS** | **CSS3** |
  | -------- | -------- | 
  | 	**CSS is capable of positioning texts and objects**. CSS is somehow backward compatible with CSS3. | On the other hand, **CSS3 is capable of making the web page more attractive and takes less time to create**. If you write CSS3 code in CSS, it will be invalid. | 
  | **Responsive designing is not supported in CSS** | **CSS3 is the latest version, hence it supports responsive design.** | 
  | CSS cannot be split into modules. | Whereas, whereas CSS3 can be breakdown into modules. | 
  | Using CSS, we **cannot build 3D animation and transformation**. | But in CSS3 we can **perform all kinds of animation and transformations as it supports animation and 3D transformations**. | 
  | CSS is **very slow as compared to CSS3** | Whereas, **CSS3 is faster than CSS**. | 
  </details>

  ---

  <details>
    <summary>5. Lists of CSS Frameworks</summary>
  </details>

  ---

  <details>
    <summary>6. How many different ways are their to add CSS to HTML file?</summary>
  </details>

  ---

  <details>
    <summary>7. What is a CSS preprocessor? What are SASS, LESS, and Stylus? Why do people use them?</summary>
  </details>
  
  ---

  <details>
    <summary>8. What is the difference among inline, inline-block, and block elements?</summary>
  </details>

  ---

  <details>
    <summary>9. What are pseudo elements and pseudo classes?</summary>
  </details>

  ---

  <details>
    <summary>10. What are the differences between adaptive design and responsive design?</summary>
  </details>

  ---

  <details>
    <summary>11. What is the use of ruleset?</summary>
  </details>

  ---

  <details>
    <summary>12. What are the advantages of External Style Sheets?</summary>
  </details>

  ---

  <details>
    <summary>13. What is the float property of CSS?</summary>
  </details>

  ---

  <details>
    <summary>14.</summary>
  </details>

  ---

  <details>
    <summary>15.</summary>
  </details>

  ---

  <details>
    <summary>16.</summary>
  </details>

  ---

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

<details>
  <summary>JavaScript Interview Questions</summary>

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
