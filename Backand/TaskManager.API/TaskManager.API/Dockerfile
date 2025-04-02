# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish "./TaskManager.API.csproj" -c Release -o /app/publish

# Use the runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# 🔥 זה החלק החשוב: מעתיקים את Angular הבנוי
COPY Backand/TaskManager.API/TaskManager.API/ClientApp ./wwwroot

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "TaskManager.API.dll"]
