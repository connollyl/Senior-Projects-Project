# Django Backend Readme

To run Django you must have python or a python environment installed on your computer (Anaconda on the University Computers). If you are on the school computers all python commands must be ran on the python terminal through the anaconda environment (env).

  

## Python install

(if you are using your own computer): [https://www.python.org/downloads/](https://www.python.org/downloads/)

Version 3.7.4 and up have been verified to work.

  

If you installed 3.7.4 or higher you should already have pip installed along with your python install, but if it is not installed for some reason: [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/)

  

Depending on the version of python you install, you may need to use `python3` in your commands.

  

Test your python install/env is installed/working properly by typing `python --version` in the terminal. This should return the version of python installed.

  

### Python Packages needed…

`pip install` these packages

-   Django
    
-   Djangorestframework
    
-   Requests
    
-   pyodbc
    
-   Msrest
    

  

Accessing the Database

For python to properly access the database you must install odbc driver 17 for sql server:

[https://www.microsoft.com/en-us/download/details.aspx?id=56567](https://www.microsoft.com/en-us/download/details.aspx?id=56567)

  

## Running the program

navigate to `SE4330-Mario/Mario-python-backend/MarioApi` in the terminal and run the command python manage.py runserver. django will compile the application then start listening on localhost:8000. Django will automatically refresh whenever you make small changes to the application. Bigger changes may require you to manually restart the service for the changes to apply.

  

### Getting an access token for development and testing:

Navigate to `SE4330-Mario/Mario-python-backend` in the terminal. Run the python file Mario_GetToken.py `python Mario_GetToken.py` and follow the instructions in the terminal and the webpage that it directs you to.
```