# Description

This is a small full-stack application which enables the user to view and manage security movements utilising the Django and React frameworks.

## Screenshots

[home page](./screenshots/s1.png) \
[edit page](./screenshots/s2.png) \
[delete prompt](./screenshots/s3.png)

# Business requirements

The main goal is for the user to be able to create, view, edit and delete security movements.

A security movement is just a way of describing the buying or selling of shares in a company, for example, if John sells 200 shares in Company XYZ to Mary, they are participating in a "security movement" for 200 Company XYZ shares.

There are 3 different types of security movements:
- Allotment (eg,  Company XYZ sells John some shares)
- Redemption (John sells his shares back to Company XYZ)
- Transfer (eg, John sells his Company XYZ shares to Mary) 

A security movement always has a quantity (aka numer of units) and a price.


# Developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the frontend 
and [django-admin startproject](https://docs.djangoproject.com/en/3.2/ref/django-admin/#startproject) for the backend.

## Frontend
In the `frontend` directory, you can run:

1. `npm install` to install required packages
2. `npm run start` to run the app in the development mode.
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

Proxying API requests to the django app http://localhost:8000 has been set up in the `package.json` to avoid CORS issues as per [https://create-react-app.dev/docs/proxying-api-requests-in-development/](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

## Backend

In the backend directory, using a python 3.8+ environment run the following commands to set up the project.

1. `pip install -r requirements.txt` to install the python requirements
2. `python manage.py migrate` to run the initial database migrations
3. `python manage.py runserver` to run the development server on [http://127.0.0.1:8000/api/v1/movements/](http://127.0.0.1:8000/api/v1/movements/)


# Criteria

1. As the user I should be able to view all the security movements in a table list view
   1. The table should have a column for each field listed below and a column that contains the edit and delete buttons
      1. ID - `id`
      2. Security movement type - `security_movement_type`
      3. Buyer - `buyer`
      4. Seller - `seller`
      5. No. of units - `no_of_units`
      6. Price per unit - `price_per_unit`
      7. Actions - Buttons for editing and deleting
2. As the user I should be able to create a new security movement
   1. The create form should be shown by clicking a button labelled `Create` from the list view
   2. `security_movement_type`, `no_of_units` and `price_per_unit` are all mandatory fields
   3. `security_movement_type` can only be one of the following values
      1. `Transfer`
      2. `Redemption`
      3. `Allotment`
   4. If the `security_movement_type` is `Transfer` then both `buyer` and `seller` fields are mandatory
   5. If the `security_movement_type` is `Redemption` then the `seller` field is mandatory and the `buyer` field should be hidden and its value empty
   6. If the `security_movement_type` is `Allotment` then the `buyer` field is mandatory and the `seller` field should be hidden and its value empty
   7. `no_of_units` must be an integer greater than zero
   8. `price_per_unit` must be an integer greater than zero
3. As the user I should be able to edit a security movement
   1. The edit form should be shown by clicking an edit button from each row of the table in the list view
   2. The edit form validation logic is the same as the create form validation logic listed above
4. As the user I should be able to delete a security movement
   1. When the user clicks the delete button on a particular security movement they should be prompted if they are sure they want to delete the security movement and be able to confirm or cancel the action


