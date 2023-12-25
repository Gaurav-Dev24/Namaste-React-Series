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

  - **The best CSS frameworks are**:

    * Bootstrap
    * Foundation
    * Bulma
    * UIKit
    * Semantic UI
    * Materialize
    * Pure
    * Tailwind CSS
  </details>

  ---

  <details>
    <summary>6. How many different ways are their to add CSS to HTML file?</summary>

  - **There are three types of CSS which are given below:**
    * **Inline CSS:** Inline CSS contains the **CSS property in the body section attached with the element known as inline CSS**. This kind of style is specified within an HTML tag using the style attribute.

    * **Internal or Embedded CSS:** This can be **used when a single HTML document must be styled uniquely.** The CSS ruleset should be within the HTML file in the head section i.e the **CSS is embedded within the HTML file**.

    * **External CSS:** External CSS **contains a separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc).** CSS property is written in a separate file with **.css** extension and should be linked to the HTML document using the **link tag**. **This means that for each element, style can be set only once and that will be applied across web pages**.
  </details>

  ---

  <details>
    <summary>7. What is a CSS preprocessor? What are SASS, LESS, and Stylus? Why do people use them?</summary>

  - **CSS preprocessor is a tool used to enhance the basic functionality and let us use the complex logical syntax** such as **variables**, **functions**, **mixins**, and **code nesting within vanilla CSS scripts themselves**.

  -  CSS preprocessor **allows us to generate CSS from the preprocessor’s own unique syntax**. It extends the basic functionality of default vanilla CSS through its own scripting language.

  - **There are 3 preprocessor of CSS :-**
    * **SaaS (Syntactically Awesome Style Sheets) :-** 
      + It **reduces the repetition of CSS, thus saving time. It uses .sass extension.**

      + SASS can be **written in two different syntaxes**. The original syntax, called the **indented syntax**, uses indentation to separate code blocks and newline characters to separate rules.

      + The **newer syntax**, Sassy CSS (SCSS), **uses block formatting, like CSS, and braces to denote code blocks and semicolons to separate rules within a block.** The *indented syntax and SCSS files have the extensions .sass and .scss respectively*. 
    
    * **Less (Leener Stylesheets) :-**
      +  **Easy to add to any JavaScript project with the help of npm or less.js file.** Here, **@ is used to define the variables.**

      + **It uses the extension .less. LESS syntax is similar to SCSS with some exceptions.** 
    
    * **Stylus :-**
      + **Stylus is quite flexible when it comes to writing syntax**. It **supports native CSS and allows omission of colons, semicolons, and brackets**. 

      + There is **no need to use @ or $ to define the variables**.
  </details>
  
  ---

  <details>
    <summary>8. What is the difference among inline, inline-block, and block elements?</summary>

| **Inline** | **Inline-Block** | **Block** |
| ---------- | ---------------- | --------- |
| Inline elements **do not start on a new line**; they appear on the same line as the content and tags beside them. | Inline-block elements are **similar to inline elements, but they can have padding, margins, and set height and width values**. | Block elements **always start on a new line and occupy an entire row or width**. |
| Inline elements **do not force a new line to begin after them, and they flow with the content**. | Like inline elements, inline-block elements **do not start on a new line, but they can have a width and height, and they respect top and bottom margins and paddings**. | Block elements **create a "block" or "box" on the page, and subsequent elements start on a new line below them.** |
| Some examples of inline elements are &lt;a&gt;, &lt;strong&gt;, &lt;span&gt;, and &lt;img&gt;. | This makes inline-block elements useful for **creating layouts where you want elements to sit next to each other horizontally**, but you also want to control their dimensions. | Examples of block elements include &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; to &lt;h6&gt;, &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt;. |

  </details>

  ---

  <details>
    <summary>9. What are pseudo elements and pseudo classes?</summary>

  | **pseudo elements** | **pseudo-class** | 
  | ---------- | ---------------- | 
  | Pseudo elements help to **create items that do not normally exist in the document tree**.  | Pseudo classes **select regular elements under specific conditions** such as when a user is hovering over a link.  | 
  | The examples of pseudo elements are: **::before**, **::after**, **::selection**, **::first-letter**, **::first-line** | The examples of pseudo classes are: **:hover**, **:active**, **:link**, **:visited**, **:focus** | 
  </details>

  ---

  <details>
    <summary>10. What are the differences between adaptive design and responsive design?</summary>

  | **Adaptive Design** | **Responsive Design** | 
  | ------------------- | --------------------- |
  | It **focuses on multiple fixed layout sizes in website development**. | It **focuses on showing content based on available browser space.** | 
  | In this kind of website design, **first the available space is detected and then the layout**, with most appropriate size, is picked and used to display the content. **Resized browser window has no effect on the design**. | In this kind of website design, **when the browser window is resized, the content of the website is dynamically and optimally rearranged to accommodate the window.** | 
  | It uses six standard screen widths, **320 px**, **480 px**, **760 px**, **960 px**, **1200 px**, and **1600 px**. | Depending on the target device’s properties, **it uses CSS media queries to change styles for adapting to different screens.** | 
  | It **takes a lot of time and effort** because  the options and realities of the end users  need to be examined first and then the best possible adaptive solutions are designed. | Building and designing fluid websites that can accommodate content depending on the screen size **does not take much work**. | 
  | It **gives a lot of control over the design for specific screens**. | It **does not allow much control over the design.** | 
  </details>

  ---

  <details>
    <summary>11. What is the use of ruleset?</summary>

  - In CSS, **a ruleset is a fundamental structure that defines the styling properties for a specific set of HTML elements**. 

  - A ruleset consists of two main parts: a selector and a declaration block.

    + **Selector**:

      - The selector is used to target one or more HTML elements to which the styling rules will be applied.

      - It can be an HTML tag (e.g., p for paragraphs), a class (e.g., .my-class), an ID (e.g., #my-id), or a combination of these.

    + **Declaration Block**:

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

      + Styles of numerous **documents can be organized from one single file.**

      + Classes can be made for use on numerous HTML element types in many forms of the site.
      
      + In complex contexts, methods such as **selector** and **grouping** can be implemented to apply styles.

  - Disadvantages :- The disadvantages of using external style sheets are as follows:

      + An **extra download is necessary to import style information for each file.**

      + The **execution of the file may be deferred till the external style sheet is loaded.**

      + While implementing style sheets, we need to test web pages with multiple browsers in order to check compatibility issues.
  </details>

  ---

  <details>
    <summary>13. What is the float property of CSS?</summary>

  * The CSS float property is used to move the image to the right or left along with the texts to be wrapped around it. 
  * It doesn't change the property of the elements used before it.
  * The float property defines the flow of content. Below are the types of floating properties:

    | **Float Type** | **Usage** | 
    | -------------- | ---------- | 
    | float: left | Element floats on the left side of the container | 
    | float: right | Element floats on the right side of the container | 
    | float: inherit | The element inherits the floating property of its parent (div, table, etc…) | 
    | float: none | Element is displayed as it is (Default). | 
  </details>

  ---

  <details>
    <summary>14. What are the properties of Flexbox?</summary>

  - **The different properties of flex-box are as followed :-**

    + **display :-** **It is used to describe a flex container.** The flex value is utilized to establish a flex container.

    + **flex-direction :-** **It is employed to determine the direction of the primary axis, which is the axis that flex items are arranged along.** This property can have the values **row**, **row-reverse**, **column**, and **column-reverse**.

    + **justify-content :-** **It aligns flex items parallel to the primary axis.** This property can take many different values, including **flex-start**, **flex-end**, **center**, **space-between**, **space-around**, and **space-evenly**.

    + **align-items :-** **It align flex items perpendicular to the primary axis.** **Flex-start**, **flex-end**, **center**, **baseline**, and **stretch** are all possible values for this attribute.

    + **flex-wrap :-** **It determines whether or not flex items should wrap when their width exceeds the width of the flex container.** This property’s possible values are **nowrap**, **wrap**, and **wrap-reverse**.

    + **align-content :-** When there is **extra space in the flex container, use align-content to align flex lines perpendicular to the major axis.** This property’s likely values are **flex-start**, **flex-end**, **center**, **space-between**, **space-around**, and **stretch**.

    + **flex :-** It is **used to establish** the **flex grow**, **flex shrink**, and **flex basis** of a **flex** item. The **shorthand property** flex creates all three values at the same time. **The individual properties are flex-grow, flex-shrink, and flex-basis**.
  </details>

  ---

  <details>
    <summary>15. Why is the imported function an easy way to insert a file?</summary>

  - An imported style sheet permits us to **import external files or combine one style sheet with another**.

  - The import function **gives the provision to combine many elements or functionalities into one**.

  - The **syntax to import** any file is **@import notation**, which is used inside the &lt;Style&gt; tag. There is a **one rule** that implies that the **last imported sheet will override the previous ones.**

    ```html
    <Link Rel=Stylesheet Href=”Main.Css” Type=”Text/Css>
        <STYLE type=”text=css”>
          <!–
            @import url(http://www.xyz.css); ..your code
          –>
        </STYLE>
    ```
  </details>

  ---

  <details>
    <summary>16. How is border-box different from content-box?</summary>

  | **Border Box** | **Content Box** |
  | -------------  | --------------- |
  | The **border-box property contains** the **content**, **border**, and **padding in height and width properties**.  | **Content-box**, on the other hand, is the **default value box-sizing property.**   |
  | **The border box includes both the content and the padding of an element.**  | **The content box represents the actual content of the element, such as text, images, or other media.**   |
  | **If you set the width and height of an element using the border-box model**, the specified dimensions include **both the content box and any padding or border around it.**  | When you **set the width and height of an element using CSS**, you are usually **setting the dimensions of the content box.**   |
  | This can be particularly **useful when you want to control the total space an element occupies, including its content, padding, and border.**  | If you set the width of an element to 100 pixels, for example, the content box will be 100 pixels wide.   |

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
      + This is the **default value.**
      + Elements with **position: static;** are **positioned in the normal flow of the document.**
      + The **top**, **right**, **bottom**, and **left properties have no effect on statically positioned elements.**

        ```css
          .static-example {
              position: static;
          }
        ```
      
    * **position: relative; :-**
      + **Positioned relative to its normal position in the document flow.**
      + The **top**, **right**, **bottom**, and **left** properties can be **used to adjust the element's position relative to where it would be in the normal flow.**

        ```css
          .relative-example {
              position: relative;
              top: 10px;
              left: 20px;
          }
        ```

    * **position: absolute; :-** 
      + **Positioned relative to the nearest positioned ancestor** (instead of positioned relative to the viewport, like fixed).
      + If there is **no positioned ancestor, it is positioned relative to the initial containing block (often the &lt;html&gt; element).**
      + The **top**, **right**, **bottom**, and **left properties are used to position the element.**

        ```css
          .absolute-example {
              position: absolute;
              top: 50px;
              left: 100px;
            }
        ```

    * **position: fixed; :-**
      + **Positioned relative to the viewport (browser window).**
      + **It remains fixed at its position even when the page is scrolled.**
      + The **top**, **right**, **bottom**, and **left properties are used to position the element.**

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
  </details>

  + The **box-sizing property** in CSS is **used to control how the total width and height of an element are calculated, including its content, padding, and border.**

  + It has **two possible values:** *content-box* **and** *border-box.*

  + Using **box-sizing: border-box;** can be particularly useful in layouts, as it simplifies calculations.

  + With border-box, you can **set the dimensions of an element without worrying about adding the padding and border sizes separately.**

  + You can also set **box-sizing: border-box; globally using the universal selector * to apply it to all elements on the page.**

  + **Keep in mind that changing the box-sizing property may affect existing layouts**, so it's essential to test and adjust accordingly.
  ---

  <details>
    <summary>21. How does Flexbox differ from Grid layout?</summary>
  </details>

  ---

  <details>
    <summary>22. Explain the concept of CSS Grid Layout and provide an example.</summary>
  </details>

  ---

  <details>
    <summary>23. Describe the use of CSS transitions and animations.</summary>
  </details>

  ---

  <details>
    <summary>24. How does the CSS transform property work, and what are some use cases for it?</summary>
  </details>
  <details>
    <summary>25. Explain the concept of Critical CSS.</summary>
  </details>
  <details>
    <summary>26. Explain the difference between em and rem units in CSS.</summary>
  </details>
  <details>
    <summary>27. What is the CSS will-change property used for?</summary>
  </details>
  <details>
    <summary>28. What are CSS Variables (Custom Properties), and how are they useful?</summary>
  </details>
  <details>
    <summary>29. Discuss the importance of performance considerations in CSS, especially in the context of large-scale applications.</summary>
  </details>
  <details>
    <summary>30. What is the purpose of media queries in responsive design?</summary>
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
