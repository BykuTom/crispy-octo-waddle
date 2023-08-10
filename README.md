# HTML Forms and Tables

## Intro

HTML forms and tables are essential tools for creating interactive and well-structured web pages. Forms allow users to input data and interact with a web page, while tables help to organize and present data clearly and concisely. In this lesson, we'll cover the basics of HTML forms and tables, along with some code examples.

## Learning Objectives

By the end of this lesson, you should be able to:

- Understand the basic concepts of HTML forms and tables.
- Create a simple HTML form using form elements and form controls.
- Create a simple HTML table using table elements and table cells.

## Presentation

Use the Live Server Extension in Visual Studio Code to show them the page as you build it using half of your screen for Visual Studio Code and the other half for Google Chrome.

### HTML Forms

HTML forms allow users to input data and interact with a web page. Forms are typically used for collecting user information, such as names, addresses, and email addresses. Forms are created using a combination of form elements, form controls and labels.

#### Form Element Examples

The following HTML elements are used to create forms:

##### `<form>`

The form element is used to create a container for the form elements and form controls.

##### `<input>`

The input element is used to create various types of form controls, such as text boxes, radio buttons, checkboxes, and more.

##### `<select>`

The select element is used to create drop-down lists.

##### `<textarea>`

The textarea element is used to create text boxes for entering multi-line text.

#### Form HTML Example

Here's an example of an HTML form that uses some of these form elements:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <input type="submit" value="Submit">
</form>
```

#### Further reading for `<form>`

This is only a few of the elements that can make up a form and we will get more practice with forms when we use javascript on our websites but for now we will just get some practice with writing the HTML for forms.

- [W3 Schools](https://www.w3schools.com/html/html_forms.asp)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

### HTML Tables

HTML tables are used to organize and present data clearly and concisely. Tables are created using a combination of table elements and table cells.

#### Table Elements

The following HTML elements are used to create tables:

##### `<table>`

The table element is used to create a container for the table cells.

##### `<thead>`

The thead element is used to create a container for the table header cells.

##### `<tbody>`

The tbody element is used to create a container for the table body cells.

##### `<tfoot>`

The tfoot element is used to create a container for the table footer cells.

##### `<tr>`

The tr element is used to create a table row.

##### `<th>`

The th element is used to create a table header cell.

##### `<td>`

The td element is used to create a table data cell.

#### Table HTML Example

Here's an example of an HTML table that uses some of these table elements:

```html
<table> <!-- we start with a <table> tag-->
  <thead> <!-- The head of the table -->
    <tr> 
    <!-- A row in the head of the table -->
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody> <!-- The body of the table -->
    <tr>
    <!-- A row in the body of the table -->
      <td>John</td>                 <!-- A column within the row -->
      <td>Doe</td>                  <!-- A column within the row -->
      <td>john.doe@example.com</td> <!-- A column within the row -->
    </tr>
    <tr>
      <td>Jane</td>
      <td>Doe</td>
      <td>jane.doe@example.com</td>
    </tr>
  </tbody>
  <tfoot> <!-- The foot of the table -->
    <tr>
    <!-- A row in the foot of the table -->
      <td colspan="3">Total Users: 2</td> <!-- this spans 3 columns -->
    </tr>
  </tfoot>
</table> <!-- we end with a <table> tag-->
```

In this example, we've created a table with three columns: First Name, Last Name, and Email. We've also included two rows of data, along with a table footer that displays the total number of users.

## Resources

### Resources for `<form>`

- [W3 Schools](https://www.w3schools.com/html/html_forms.asp)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

### Resources for `<table>`

- [W3 Schools](https://www.w3schools.com/html/html_tables.asp)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
