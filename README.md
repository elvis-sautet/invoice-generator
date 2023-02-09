# Invoice Generator

A system for generating professional-looking invoices.

## Table of Contents

- [Who am I?](#who-am-i)
- [What is this?](#what-is-this)
- [Why did I build this?](#why-did-i-build-this)
- [Will this project be maintained?](#will-this-project-be-maintained)
- [Technologies](#technologies)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [Deployment](#deployment)
  - [Other](#other)
- [Tables](#tables)
  - [Invoice Table](#invoice-table)
  - [invoice_line_items Table](#invoice_line_items-table)
  - [Customer Table](#customer-table)
  - [invoice_payments Table](#invoice_payments-table)
- [Relationships](#relationships)
  - [Relationships Between invoice_line_items and invoices](#relationships-between-invoice_line_items-and-invoices)
  - [Relationships Between invoice_payments and invoices](#relationships-between-invoice_payments-and-invoices)
  - [Relationships Between customers and invoices](#relationships-between-customers-and-invoices)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Conclusion](#conclusion)

## Who am I?

I am **Elvis-Sautet**, a software developer who is passionate about building software that makes a difference in the world. I am currently working on different projects but am largely focused on the following technologies: `JavaScript`, `React`, `Redux`, `Node.js`, `PostgreSQL`, `HTML`, `CSS`, and `Git`.

## What is this?

This is a system for generating professional-looking invoices for the company (XYZ). The system will allow the user to create a new invoice, add line items to the invoice, and add payments to the invoice. The system will also allow the user to view a list of all invoices, view a list of all customers, and view a list of all payments.

## Why did I build this?

I built this system to help any company/person that needs to generate invoices for their customers. The system will allow the user to create a new invoice, add line items to the invoice, and add payments to the invoice. The system will also allow the user to view a list of all invoices, view a list of all customers, and view a list of all payments.

## Will this project be maintained?

Yes, this project will be maintained. I will continue to add features to the system and fix bugs as they are reported.

## Technologies

### Frontend

- [React](https://reactjs.org/) (for the frontend)
- [Redux](https://redux.js.org/) (for state management)
- [React Router](https://reacttraining.com/react-router/) (for routing)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)

### Backend

- [Node.js](https://nodejs.org/en/) (for the server)
- [Express](https://expressjs.com/) (for the server)
- [Sequelize](https://sequelize.org/) (will be used to interact with the database)

### Database

- [PostgreSQL](https://www.postgresql.org/) (for the database)
- [Dbeaver](https://dbeaver.io/) (for database management)

### Deployment

- [Digital Ocean](https://www.digitalocean.com/) (for hosting the server)
- [Docker](https://www.docker.com/) (for containerization)
- [Nginx](https://www.nginx.com/) (for reverse proxy)
- [Let's Encrypt](https://letsencrypt.org/) (for SSL certificate)

### Other

- [Git](https://git-scm.com/) (for version control)
- [GitHub](htts://github.com/) (for hosting the repository)
- [Visual Studio Code](https://code.visualstudio.com/) (for code editing)
- [Postman](https://www.postman.com/) (for API testing)

## Tables

The system will have the following tables:

- `invoices`
- `invoice_line_items`
- `customers`
- `invoice_payments`

## Invoice Table

This table contains the basic information about the invoice, such as the invoice number, date, and issue.

example:

```sql
CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  invoice_number INTEGER NOT NULL,
  date_created DATE NOT NULL,
  due_date DATE NOT NULL,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  status ENUM('open', 'closed') NOT NULL DEFAULT 'open',
  subtotal NUMERIC(10,2) NOT NULL,
  tax NUMERIC(10,2) NOT NULL,
  total_amount NUMERIC(10,2) NOT NULL
);
```

| Field Name   | Data Type | Description                                   |
| ------------ | --------- | --------------------------------------------- |
| Invoice No.  | Integer   | The unique invoice number                     |
| Date_Created | Date      | The date the invoice was created              |
| Due Date     | Date      | The date the invoice is due                   |
| Customer ID  | Integer   | The ID of the customer                        |
| Status       | Enum      | The status of the invoice: `open` or `closed` |
| Subtotal     | Decimal   | The subtotal of the invoice                   |
| Tax          | Decimal   | The tax amount for the invoice                |
| Total        | Decimal   | The total amount for the invoice              |

## invoice_line_items Table

This table contains information about the items on the invoice, such as the description, quantity, unit price, and total.

example:

```sql
CREATE TABLE invoice_line_items (
  id SERIAL PRIMARY KEY,
  invoice_id INTEGER NOT NULL REFERENCES invoices(id),
  description VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  rate NUMERIC(10,2) NOT NULL,
  tax NUMERIC(10,2) NOT NULL,
  amount NUMERIC(10,2) NOT NULL
);
```

| Field Name  | Data Type | Description                            |
| ----------- | --------- | -------------------------------------- |
| Description | String    | Description of the item on the invoice |
| Quantity    | Integer   | The number of units of the item        |
| Unit Price  | Decimal   | The price per unit of the item         |
| Total       | Decimal   | The total price for the item           |

## Customer Table

This table contains information about the customer, such as the name, address, and phone number.

example:

```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);
```

| Field Name | Data Type | Description                       |
| ---------- | --------- | --------------------------------- |
| Name       | String    | The name of the customer          |
| Address    | String    | The address of the customer       |
| Phone      | String    | The phone number of the customer  |
| Email      | String    | The email address of the customer |

## invoice_payments Table

This table contains information about the payments made on the invoice, such as the date, amount, and payment method.

example:

```sql
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  invoice_id INTEGER NOT NULL REFERENCES invoices(id),
  date_paid DATE NOT NULL,
  amount NUMERIC(10,2) NOT NULL
);
```

| Field Name     | Data Type | Description                                                                 |
| -------------- | --------- | --------------------------------------------------------------------------- |
| Date Paid      | Date      | The date the payment was made                                               |
| Amount         | Decimal   | The amount of the payment                                                   |
| Payment Method | String    | The method of payment: `cash`, `M-PESA`, `check`, `credit card`, or `other` |
| Reference      | String    | The reference number for the payment                                        |
| invoice_id     | Integer   | The ID of the invoice                                                       |

## Relationships

The following lists the relationships between the tables:

- An invoice can have many line items.
- An invoice can have many payments.
- A customer can have many invoices.

### Relationships Between invoice_line_items and invoices

The invoice_line_items table has a foreign key to the invoices table. This relationship is one-to-many, meaning that an invoice can have many line items.

### Relationships Between invoice_payments and invoices

The invoice_payments table has a foreign key to the invoices table. This relationship is one-to-many, meaning that an invoice can have many payments.

### Relationships Between customers and invoices

The customers' table has a foreign key to the invoices table. This relationship is one-to-many, meaning that a customer can have many invoices.

## Usage

To use this invoice generator, follow these steps:

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the server.
4. Navigate to `http://localhost:3000` in your browser.

## Contributors

- [Elvis Sautet](https://github.com/elvis-sautet)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Conclusion

This project is a work in progress. If you have any suggestions or comments, please feel free to contact me at [Elvis Sautet](mailto:sautet.meritei@gmail.com).
