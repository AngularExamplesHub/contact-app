# Contact Application
Contact Application using ASP.NET Core Web API 2.1, Angular 6.0, Angular Material UI 6 and Visual Studio Code. 

### Prerequisite 
.Net Core 2.1.5<br />
NodeJS 8.11.0 <br />
npm 5.6.0 <br />
Angular CLI 6.0 <br />

### Setup Project
git clone https://github.com/AngularExamplesHub/contact-app.git

### install npm packages and restore dotnet nuget pakages in command promt:
npm install <br />
dotnet restore  

### Update Connectionstring in Appsettings.json file
 "ConnectionStrings": {
    "ContactDb": "Data Source=.\\SQLEXPRESS;Initial Catalog=ContactDb;Integrated Security=True"
	}

### Update Database
dotnet ef database update

### build angular component
ng build

### run project
dotnet run

### Step By Step Articles:

#### [Contact Application using ASP.NET Core Web API, Angular 6.0, and Visual Studio Code Part One](https://crack-codes.blogspot.com/2018/05/contact-app-using-aspnet-core-angular-part-one.html)
In the article, we will set up ASP.NET Core Web API project, and develop the Web API for contact CRUD operations.

#### [Contact Application using ASP.NET Core Web API, Angular 6.0, and Visual Studio Code Part Two](https://crack-codes.blogspot.com/2018/06/contact-app-using-aspnet-core-angular-part-two.html)
In the article, we will setup Angular 6 within ASP.NET Core Web API Project, and develop the contact form & list component using Angular Material UI that will consume Web API which we have created in Part One.

#### [Contact Application Azure Deployment ASP.NET Core Web API, Angular 6 Using Visual Studio Code](https://crack-codes.blogspot.com/2018/06/contact-application-azure-deployment.html)
In this article, we are going to deploy/host a contact application with Visual Studio code to Azure web apps.

#### [Contact application - Upgrade Asp.net Core 2.0 to 2.1](https://crack-codes.blogspot.com/2018/11/contact-application-upgrade-aspnet-core.html)
In this article, we will look into steps for contact application - upgrade Asp.net Core 2.0 to 2.1, please see my previous articles about how we developed contact application.

### ScreenShots
![Alt text](https://4.bp.blogspot.com/-eteH6ZphAVg/W0GzsIGdefI/AAAAAAAAAg8/URKnk8KI9-Aw7tV283rqEaYtVH3EHz8TwCEwYBhgL/s1600/1list.png "Contact List")

![Alt text](https://4.bp.blogspot.com/-tk-cmrzj3qI/W0Gzsao8A_I/AAAAAAAAAhE/CemriwiQd3gOezzzmSIqOMTN-gu1TVD_wCEwYBhgL/s1600/2editform.png "Contact EditForm")

