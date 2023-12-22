<details>
  <summary>1. What is Html? </summary>

- HTML stands for **HyperText Markup Language**. It defines the structure of the data that will be rendered on the browser in a webpage.

- It is a standard text formatting language used for developing web pages **released in 1993**.

- The latest version of HTML is HTML5. There are two main components in HTML language, **Tags** and **Attributes**.
</details>

---

<details>
  <summary>2. State the difference between Elements and Tags?</summary>

### Elements :-

- An element **consists of an opening tag, content, and a closing tag**. It represents a complete, structured unit within an HTML document.
- Elements can be as **simple as a pair of tags or it can include content between the opening and closing tags.**

```html
<p></p>
<p>This is a paragraph</p>
```

- Elements can also have attributes that provide additional information about the element.
- Example of an element with content:
  ```html
  <p>This is a paragraph</p>
  ```
- Example of an element without content (empty element):
  ```html
  <img src="image.jpg" alt="An image" />
  ```

### Tags :-

- A tag is a **fundamental building block of HTML**.
  Tags are used to define HTML elements.
- Tags are represented by angle brackets **("<" and ">")**.
  **Tags come in pairs: an opening tag and a closing tag**.
- Opening tag:
  ```html
  <tagname></tagname>
  ```
- Closing tag:
  ```html
      </tagname>
  ```
- Example:
`html
        <p> (opening tag), </p> (closing tag)
    `
</details>

---

<details>
  <summary>3. What are Attributes in tags? </summary>

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
  <summary>4. What are void elements in HTML?</summary>

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
  <summary>5. What are Meta tags? </summary>

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
  <summary>6. State the difference between HTML5 and its previous versions. </summary>

- HTML5 uses a simplified, **shorter doctype declaration compared to previous versions**. The HTML5 doctype is `<!DOCTYPE html>`, making it easier to remember and use.

- HTML5 introduces several **new semantic elements that provide more meaningful information about the structure of a document**. Examples include `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<figure>`, and `<figcaption>`.

- HTML5 includes native support for embedding audio and video content using the `<audio>` and `<video>` elements, **eliminating the need for third-party plugins like Flash**.

- HTML5 introduces the `<canvas>` element, which allows developers to draw graphics and create animations directly within the browser using JavaScript.

- HTML5 introduces new input types, such as `<input type="email">` and `<input type="url">`, making it easier to capture specific types of user input. **Additionally, it supports the "pattern" attribute for input validation**.

- HTML5 incorporates features like the `<meta name="viewport">` tag, which **facilitates the creation of responsive and mobile-friendly websites**.
</details>

---

<details>
  <summary>7. What are HTML entities? </summary>

- HTML entities is essential when you want to display reserved characters or characters with special meanings in HTML without triggering their associated behaviors.

- HTML entities are used to ensure that the browser correctly interprets and displays characters, even if they are reserved characters in HTML markup.

- Some common HTML entities are `&lt`, `&gt`, `&amp;euro`, `&apos` and `&quot` etc.
</details>

---

<details>
  <summary>8. Difference between Inline and Block Elements in Html? </summary>

## Block :-

- **Block-level elements typically start on a new line and take up the full width available, extending the entire width of their container**.

- Block-level elements create a "block" or a rectangular box in the document flow, stacking vertically on top of each other.

- Examples :- `<div>`, `<p>`, `<h1> to <h6>`, `<ul>`,`<ol>`, `<li>`, `<table>` and `<form>` etc.

- **Block-level elements can contain other block-level and inline elements**.

## Inline :-

- **Inline elements do not start on a new line and only take up as much width as necessary. They do not force a new line to begin after them.**.

- Inline elements flow within the content and appear next to each other horizontally..

- Examples :- `<span>`, `<a>`, `<img>`, `<br>`,`<input>`, `<strong>` and `<em>` etc.

- **Inline elements cannot contain block-level elements but can contain other inline elements**.
</details>

---

<details>
  <summary>9. What is the difference between &lt; figure &gt; tag and &lt; img &gt; tag? </summary>

## Figure :-

- The `<figure>` tag is used to **group together an image `(<img>)` and its caption** `(<figcaption>)`.

- It provides semantic meaning to the relationship between the image and its associated content.

- It is a block-level element.

- Example :-
  ```html
  <figure>
    <img src="image.jpg" alt="An example image" />
    <figcaption>This is the caption for the image.</figcaption>
  </figure>
  ```

## Img :-

- The `<img>` (image) tag is **used to embed images in an HTML document**. It is a **void or self-closing tag, meaning it does not have a closing tag**.

- The **src** attribute of the `<img>` tag specifies the **source (URL or file path) of the image**. Additional attributes, such as **alt** for **alternative text**, **width**, **height**, and others, can be used to provide information about the image.

- Example :-
  ```html
  <img src="image.jpg" alt="An example image" />
  ```
  </details>

---

<details>
  <summary>10. Difference between &lt; link &gt; and &lt; a &gt; tag.</summary>

## "a" tag (Anchor Tag):-

- The `<a>` tag is **primarily used to create hyperlinks**, allowing users to navigate to other pages or resources.

- **It can be used to link to external resources (other websites) or internal resources (other pages within the same website)**. The **href** attribute is used to specify the destination URL.

- The `<a>` tag can also be used to **create links within the same page using the fragment identifier (#)** to target an element with a specific id attribute.

- Example :-
  ```html
  <a href="https://www.example.com">Visit Example.com</a>
  ```

## link tag :-

- **The `<link>` tag is used to include external resources and define relationships between the current document and external resources**. It is commonly used to link external stylesheets, icons, and other resources.

- **It is often placed within the `<head>` section of an HTML document**. Common attributes include rel (relationship), href (URL of the external resource), and type (the MIME type of the resource).

- Example :-
```html
    <link rel="stylesheet" href="styles.css">
```
</details>

---

<details>
  <summary>11. What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element? </summary>

## `display: none` :-

- **The display: none property removes the element from the normal document flow, and it effectively hides the element completely**.

- The **hidden element takes up no space in the layout, meaning it doesn't affect the positioning of surrounding elements** as if it were not in the document at all.

- Child elements within the hidden element are also hidden. The element is not rendered, and it cannot be interacted with by the user.

- Example :-
  ```css
  .hidden-element {
    display: none;
  }
  ```

## `visibility: hidden` :-

- **The visibility: hidden property hides the element while still maintaining its position in the layout. The element is not visible, but it still occupies space in the document flow.**

- The hidden **element is not rendered, but it still affects the layout as if it were visible.** Child elements within the hidden element are also hidden.

- The element is not visible, but it is still part of the document structure and can potentially be interacted with by the user through scripting.

- Example :-
`css
    .hidden-element {
    visibility: hidden;
    }
    `
</details>

---

<details>
  <summary>12. How do you create nested web pages in HTML? </summary>

- **Creating nested web pages using iframes in HTML involves embedding one HTML document within another using the `<iframe>`tag. Here's an example:-**

**parent.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Child Page</title>
</head>
<body>
  <h1>Child Page</h1>
  <p>This is the content of the child page.</p>
</body>
</html>
```
</details>
--- 