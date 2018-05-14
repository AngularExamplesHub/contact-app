# Contact Application
Contact Application using ASP.NET Core Web API, Angular 6.0, and Visual Studio Code. 

### Prerequisite 
.Net Core 2.0.3
NodeJS 8.11.0
npm 5.6.0
Angular CLI 6.0

### Setup Project
git clone https://github.com/JayeshAgrawal/contact-app.git

### install npm packages and restore dotnet nuget pakages in command promt:
npm install
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

