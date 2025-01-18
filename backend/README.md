# Sequelize CLI Commands Guide

This document provides a reference for commonly used Sequelize CLI commands related to migrations, models, seeds, and database management.

---

## **Model and Migration Commands**

### **Generate a Model and Migration**
Create a model along with its corresponding migration file.
```bash
npx sequelize-cli model:generate --name ModelName --attributes columnName1:dataType,columnName2:dataType
```

**Example:**
```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

---

## **Migration Commands**

### **Run Migrations**
Apply all pending migrations.
```bash
npx sequelize-cli db:migrate
```

### **Undo Last Migration**
Revert the most recent migration.
```bash
npx sequelize-cli db:migrate:undo
```

### **Undo All Migrations**
Revert all applied migrations.
```bash
npx sequelize-cli db:migrate:undo:all
```

---

## **Seed Commands**

### **Generate a Seed**
Create a new seed file.
```bash
npx sequelize-cli seed:generate --name seed-name
```

**Example:**
```bash
npx sequelize-cli seed:generate --name demo-user
```

### **Run Seeds**
Apply all seed files.
```bash
npx sequelize-cli db:seed:all
```

### **Undo Seeds**
Remove all applied seed data.
```bash
npx sequelize-cli db:seed:undo:all
```

---

## **Database Management Commands**

### **Create a Database**
```bash
npx sequelize-cli db:create
```

### **Drop a Database**
```bash
npx sequelize-cli db:drop
```

---

## **Additional Notes**
- Ensure you have a properly configured `config.json` or `config.js` file in your `config` directory.
- Use the correct environment (`development`, `test`, `production`) when running commands.
  ```bash
  npx sequelize-cli db:migrate --env production
  ```

For more details, refer to the [Sequelize CLI Documentation](https://sequelize.org/docs/v6/other-topics/migrations/).
